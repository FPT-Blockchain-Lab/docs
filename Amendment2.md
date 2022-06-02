# Phản hồi tu chỉnh L/C

#### Tu chỉnh sẽ deploy một contract mới trong trường hợp thay đổi nội dung một bước đã hoàn thành trong luồng
- Subtages mới nhất 
<p align="center">
  <img width="500" height="500" src="./images/Allowable1.png">
</p>

- Subtages bất kì không phải mới nhất => subtage bị tu chỉnh sẽ trở thành substage mới nhất của luồng

<p align="center">
  <img width="500" height="500" src="./images/Allowable2.png">
</p>

Trường hợp tu chỉnh này sẽ **bắt buộc** phải có sự đồng ý của tất cả các bên tham gia (2 ngân hàng hoặc 3 ngân hàng, ko có beneficiary và applicant)

#### Tu chỉnh sẽ *KHÔNG* deploy một contract mới trong trường hợp thực hiện thay đổi bước 1.1 
 - Luồng sẽ "chụm lại" ở bước 1.2 và chạy tiếp những phần còn thiếu theo stage 1.2 đó
 
 <p align="center">
  <img width="100%" height="auto" src="./images/TC1.png">
</p>

Trường hợp tu chỉnh này sẽ **không cần** có sự đồng ý của tất cả các bên tham gia (2 ngân hàng hoặc 3 ngân hàng)

#### Sau khi tu chỉnh, sẽ có một khoảng thời gian để xem xét hủy tu chỉnh, nếu hủy tu chỉnh xảy ra, các substages mới chạy về luồng cũ 
- Bước 1.2 vẫn được ghi nhận onchain nhưng root của luồng quay trở về 1.1

 <p align="center">
  <img width="100%" height="auto" src="./images/HTC1.drawio.png">
</p>

#### Việc generate state hash được thực hiện theo logic như hình 
