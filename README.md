# Phạm Thị Yến Ngọc — Portfolio

Website HTML/CSS/JavaScript tĩnh, không dùng framework hoặc dependency bên ngoài cho bước build.

## Chạy local

Yêu cầu Node.js 18 trở lên.

```sh
npm run dev
```

Lệnh này tạo bản build rồi mở website tại `http://localhost:4173/`. Sau khi thêm ảnh, chạy lại lệnh để cập nhật manifest. Có thể chạy `npm run build` riêng để tạo thư mục `dist/` và `npm test` để kiểm tra manifest.

## Thêm ảnh dự án

Chép ảnh vào thư mục đúng dự án:

| Dự án | Thư mục |
| --- | --- |
| Tourism AI Chatbot | `assets/images/projects/tourism-ai-chatbot/` |
| Chatbot HSU | `assets/images/projects/chatbot-hsu/` |
| Face Recognition 2.0 | `assets/images/projects/face-recognition-2/` |
| Handwritten Digit Recognition | `assets/images/projects/handwritten-digit-recognition/` |
| Face Recognition | `assets/images/projects/face-recognition/` |

Hỗ trợ PNG, JPG, JPEG, WebP, AVIF, GIF. Đặt tên `01.png`, `02.png`, `03.jpg` để ảnh xuất hiện đúng thứ tự. Không cần sửa HTML hoặc JavaScript.

`scripts/build.mjs` quét các thư mục, sao chép website vào `dist/`, rồi tạo `dist/assets/images/projects/manifest.json`. Gallery chỉ xuất hiện khi dự án có ảnh. Ảnh được nạp khi mở gallery, không tải toàn bộ ngay khi vào trang.

## Triển khai Vercel

`vercel.json` chạy `npm run build` và xuất bản `dist/`. Khi thêm ảnh, commit/push ảnh và triển khai lại; manifest sẽ được tạo lại tự động. Không cần cấu hình API hoặc database.

## Chỉnh nội dung

Nội dung EN/VI, liên kết và danh sách dự án nằm trong `assets/js/main.js`. CSS ở `assets/css/style.css` và `assets/css/responsive.css`. CV nằm trong `assets/files/`.
