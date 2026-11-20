import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceImages = path.join(root, "assets", "images", "projects");

export const projectFolders = {
  "tourism-ai-chatbot": "tourism-ai-chatbot",
  "chatbot-hsu": "chatbot-hsu",
  "face-recognition-2": "face-recognition-2",
  "handwritten-digit-recognition": "handwritten-digit-recognition",
  "face-recognition": "face-recognition",
};

const imageExtension = /\.(png|jpe?g|webp|avif|gif)$/i;

export async function createImageManifest(imageRoot = sourceImages) {
  const manifest = {};
  for (const [id, folder] of Object.entries(projectFolders)) {
    const directory = path.join(imageRoot, folder);
    let entries;
    try {
      entries = await readdir(directory, { withFileTypes: true });
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      entries = [];
    }
    manifest[id] = entries
      .filter((entry) => entry.isFile() && imageExtension.test(entry.name))
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b, "en", { numeric: true, sensitivity: "base" }))
      .map((name) => `assets/images/projects/${folder}/${encodeURIComponent(name)}`);
  }
  return manifest;
}

export async function buildSite(siteRoot = root) {
  const projectRoot = path.resolve(siteRoot);
  const destination = path.join(projectRoot, "dist");
  // The build only replaces this fixed output folder inside the project.
  if (path.relative(projectRoot, destination) !== "dist") throw new Error("Unexpected build destination");
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  await Promise.all(
    ["index.html", "about.html", "projects.html", "contact.html"].map((file) =>
      cp(path.join(projectRoot, file), path.join(destination, file)),
    ),
  );
  await cp(path.join(projectRoot, "assets"), path.join(destination, "assets"), { recursive: true });
  const manifest = await createImageManifest(path.join(projectRoot, "assets", "images", "projects"));
  await mkdir(path.join(destination, "assets", "images", "projects"), { recursive: true });
  await writeFile(
    path.join(destination, "assets", "images", "projects", "manifest.json"),
    JSON.stringify(manifest, null, 2) + "\n",
    "utf8",
  );
  return manifest;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  buildSite()
    .then((manifest) => {
      const count = Object.values(manifest).reduce((sum, images) => sum + images.length, 0);
      console.log(`Built dist/ with ${count} project image(s).`);
    })
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
}
