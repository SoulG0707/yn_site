import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { buildSite, createImageManifest, projectFolders } from "../scripts/build.mjs";

test("manifest handles empty folders, supported formats, sorting, and rebuilds", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "project-images-"));
  try {
    const empty = await createImageManifest(root);
    assert.deepEqual(Object.keys(empty), Object.keys(projectFolders));
    assert.ok(Object.values(empty).every((images) => images.length === 0));

    const tourism = path.join(root, "tourism-ai-chatbot");
    const hsu = path.join(root, "chatbot-hsu");
    await mkdir(tourism);
    await mkdir(hsu);
    await writeFile(path.join(tourism, "01.png"), "");
    await writeFile(path.join(tourism, "notes.txt"), "");
    await mkdir(path.join(tourism, "nested"));
    let manifest = await createImageManifest(root);
    assert.deepEqual(manifest["tourism-ai-chatbot"], [
      "assets/images/projects/tourism-ai-chatbot/01.png",
    ]);

    for (const name of ["10.png", "2.jpg", "03.jpeg", "04.webp", "05.avif", "06.GIF", "07 screenshot.png"]) {
      await writeFile(path.join(tourism, name), "");
    }
    await writeFile(path.join(hsu, "01.png"), "");
    manifest = await createImageManifest(root);
    assert.deepEqual(manifest["tourism-ai-chatbot"].map((url) => url.split("/").at(-1)), [
      "01.png", "2.jpg", "03.jpeg", "04.webp", "05.avif", "06.GIF", "07%20screenshot.png", "10.png",
    ]);
    assert.deepEqual(manifest["chatbot-hsu"], ["assets/images/projects/chatbot-hsu/01.png"]);
    assert.deepEqual(manifest["face-recognition-2"], []);

    await writeFile(path.join(hsu, "02.webp"), "");
    manifest = await createImageManifest(root);
    assert.equal(manifest["chatbot-hsu"].length, 2);
  } finally {
    if (!path.resolve(root).startsWith(path.resolve(tmpdir()) + path.sep)) throw new Error("Unsafe test cleanup path");
    await rm(root, { recursive: true, force: true });
  }
});

test("build creates a deployable manifest and picks up new images", async () => {
  const site = await mkdtemp(path.join(tmpdir(), "portfolio-build-"));
  try {
    for (const file of ["index.html", "about.html", "projects.html", "contact.html"]) {
      await writeFile(path.join(site, file), "<!doctype html>");
    }
    const project = path.join(site, "assets", "images", "projects", "face-recognition-2");
    await mkdir(project, { recursive: true });
    await writeFile(path.join(project, "01.png"), "");
    await buildSite(site);
    let manifest = JSON.parse(await readFile(path.join(site, "dist", "assets", "images", "projects", "manifest.json"), "utf8"));
    assert.equal(manifest["face-recognition-2"].length, 1);
    await writeFile(path.join(project, "02.webp"), "");
    await buildSite(site);
    manifest = JSON.parse(await readFile(path.join(site, "dist", "assets", "images", "projects", "manifest.json"), "utf8"));
    assert.deepEqual(manifest["face-recognition-2"], [
      "assets/images/projects/face-recognition-2/01.png",
      "assets/images/projects/face-recognition-2/02.webp",
    ]);
  } finally {
    if (!path.resolve(site).startsWith(path.resolve(tmpdir()) + path.sep)) throw new Error("Unsafe test cleanup path");
    await rm(site, { recursive: true, force: true });
  }
});
