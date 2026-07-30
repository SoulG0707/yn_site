# Portfolio structure

```
YN_SITE/
├─ index.html
├─ about.html
├─ projects.html
├─ contact.html
├─ assets/
│  ├─ css/
│  │  ├─ style.css
│  │  └─ responsive.css
│  ├─ js/
│  │  ├─ main.js
│  │  ├─ aes.js
│  │  └─ components.js (tùy chọn)
│  ├─ images/
│  │  └─ avatar.png
│  └─ files/
│     └─ Pham_Thi_Yen_Ngoc_CV_AI.pdf
├─ components/ (tùy chọn)
│  ├─ navbar.html
│  └─ footer.html
└─ data/ (tùy chọn)
   └─ projects.json
```

## Cách chỉnh sửa nội dung
- **Text & dữ liệu**: cập nhật tại `assets/js/main.js` trong biến `content` (EN/VI). Ngôn ngữ mặc định là EN.
- **Điều hướng & anchor**: thay đổi danh sách `NAV_ITEMS` trong `assets/js/main.js` (dùng id của từng section).
- **Style**: nền, màu, layout tại `assets/css/style.css`; phần mobile tại `assets/css/responsive.css`.
- **Tệp tĩnh**: thêm ảnh vào `assets/images`, CV/tài liệu vào `assets/files`, chỉnh hằng `PATHS` trong `assets/js/main.js` nếu đổi tên.

## Chạy thử
Mở `index.html` (hoặc các file còn lại) trực tiếp trong trình duyệt; không cần build.
