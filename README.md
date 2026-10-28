# My Little Life — Tandsköterska Diaries

Một prototype life-simulation 2D chạy trên trình duyệt, làm bằng HTML, CSS và JavaScript thuần để có thể xuất bản miễn phí bằng GitHub Pages.

## Chạy thử trên máy
1. Tải hoặc giải nén thư mục.
2. Mở `index.html` bằng trình duyệt.
3. Nếu trình duyệt hạn chế một số tính năng khi mở file trực tiếp, hãy dùng VS Code + extension Live Server, hoặc chạy một local server đơn giản.

## Đăng lên GitHub Pages
1. Đăng nhập https://github.com/
2. Tạo repository mới tên `my-little-life`. Có thể chọn Public.
3. Upload `index.html`, `style.css`, `game.js`, thư mục `data/` và `README.md` lên repository.
4. Mở **Settings → Pages**.
5. Trong **Build and deployment**, chọn **Deploy from a branch**.
6. Chọn branch `main`, folder `/(root)`, rồi nhấn **Save**.
7. Chờ vài phút. Game sẽ có địa chỉ dạng `https://TEN-GITHUB-CUA-BAN.github.io/my-little-life/`.

## File trong dự án
- `index.html`: cấu trúc giao diện và các màn hình.
- `style.css`: giao diện minh họa 2D, responsive cho điện thoại.
- `game.js`: logic game, hành động, thời gian, tiền, nhu cầu, chương truyện, tủ đồ và lưu game.
- `data/locations.json`: mô tả địa điểm (bản dữ liệu tham khảo).
- `data/items.json`: danh sách vật phẩm tham khảo.
- `data/outfits.json`: danh sách trang phục tham khảo.
- `data/events.json`: ý tưởng sự kiện truyện cho bản nâng cấp.

## Điều đã có trong prototype
- Bản đồ có thể bấm: nhà, trường YH, cửa hàng secondhand, ICA Market và quán café.
- Hành động có chi phí tiền, thời gian, năng lượng, tâm trạng và kiến thức.
- Hai mèo Miso & Boba, có chỉ số chăm sóc.
- Tủ đồ, mua một số món secondhand và đồ trang trí.
- Chương truyện và mục tiêu.
- Nhật ký và lưu tự động bằng `localStorage` trên cùng trình duyệt/thiết bị.

## Ghi chú
- Đây là prototype đầu tiên: dữ liệu lưu cục bộ trong trình duyệt, chưa đồng bộ giữa các thiết bị.
- Các hình minh họa hiện dùng emoji và CSS để giữ dự án nhẹ, dễ sửa. Có thể thay bằng tranh 2D riêng sau này.
- File JSON trong `data/` hiện là dữ liệu tham khảo; logic prototype nằm trong `game.js` để game chạy ngay cả khi mở trực tiếp.
