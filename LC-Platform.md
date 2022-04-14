# LC Platform - Smart Contracts

<p align="center">
  <img width="550" height="400" src="./images/GeneralArchitecture.png">
</p>

Về mặt tổng quan, thì hệ thống các smart contract sẽ được chia thành 2 groups phục vụ cho những layer riêng biệt:
- Permission layer sẽ có các smart contracts được define sẵn nhằm phục vụ cho việc Node Service Management
- LC Application layer sẽ có các smart contracts được define nhằm phục vụ cho LC Platform

Lý do:
- Node Service sẽ hoàn toàn độc lập với LC Account Service
    - Node Service: Fullnode/RPC client để sync-up data và gửi transaction request
        - Ví dụ: Ngân hàng A sẽ có Node Service A1, A2, A3; FPT Platform có Node Service F1, F2, F3, F4
    - Account Service: những account/address sẽ tương tác với LC Platform smart contracts
        - Ví dụ: Doanh Nghiệp D - Account Service D1 và Ngân hàng A - Account Service A1, A2, A3 (đồng thời là Node Service)
- Doanh nghiệp/Ngân hàng hoàn toàn có thể có những Account Service mà không cần phải đăng ký Node Service
- Smart contracts ở LC Application Layer hoàn toàn không bị phụ thuộc vào Genesis contracts ở Permission Layer

## LC Platform

<p align="center">
  <img width="800" height="600" src="./images/LCPlatform.png">
</p>

- LC Platform (smart contracts) được chia ra thành 3 modules chính:
    - Platform Core: cung cấp những chức năng như Quản lý (management) và Dịch vụ (Utils/Services)
    - Banking Core: cung cấp những chức năng cho các tổ chức ngân hàng tự quản lý/phân cấp các accounts thuộc tổ chức
    - Contracts: các hợp đồng giữa các bên liên quan Cá Nhân/Doanh Nghiệp - Cá Nhân/Doanh Nghiệp - Ngân hàng

### Platform Core

- Platform Core bao gồm 5 contract:
  - FPT Core: quản lý những special roles trong LC Platform
    - Hiện tại sẽ có 3 roles chính: ADMIN, BANKING và CORPORATION
      - ADMIN: 
        - Sẽ có quyền add thêm accounts và assign các role khác nhau cho những account này
        - Cho phép có nhiều account được assign ADMIN role
      - BANKING: 
        - Là contract address được deploy thông qua `Banking Factory`
        - Mỗi Ngân hàng sẽ có một `Bank Core` contract của riêng mình để quản lý các account thuộc hệ thống của ngân hàng đó
        - Các `LC Contract` hoặc `UPAS LC Contract` sẽ có những restriction với BANKING role ở các `stage` của hợp đồng
      - CORPORATION:
        - Mỗi doanh nghiệp sẽ cần đăng ký một account ở Platform
        - Sau đó, account này sẽ được register bởi ADMIN của FPT Core và assign cho special role
        - Mỗi doanh nghiệp có thể có nhiều hơn một account (TBA)
        - CORPORATION role được quyền khởi tạo `LC Contract` hoặc `UPAS LC Contract`
  - Banking Factory:
    - Là contract phục vụ cho việc khởi tạo các `Bank Core` contract
    - Việc deploy các contract `Bank Core` sẽ được thực hiện bởi ADMIN của FPT Core.
    - Mỗi tổ chức Ngân hàng khi tham dự vào LC Platform sẽ có một contract `Bank Core` của riêng tổ chức
    - Do chưa xác định việc sử dụng Factory pattern có khả thi trên phiên bản hiện tại. Nên hướng design này có thể thay đổi. Có thể viết deploy script và build deploy tool để hỗ trợ việc deploy các contract như Factory
  - LC Factory:
    - Là contract phục vụ cho việc khởi tạo các hợp đồng nội địa `LC Contract`
    - CORPORATION role sẽ có quyền gọi `LC Factory` để deploy `LC Contract` cho hợp đồng của cá nhân/doanh nghiệp
    - Cũng như `Banking Factory`, hướng design pattern này có thể sẽ được thay đổi
  - UPAS LC Factory:
    - Là contract phục vụ cho việc khởi tạo các hợp đồng `UPAS LC Contract`
    - CORPORATION role sẽ có quyền gọi `UPAS LC Factory` để deploy `UPAS LC Contract` cho hợp đồng của cá nhân/doanh nghiệp
    - Cũng như `Banking Factory`, hướng design pattern này có thể sẽ được thay đổi
  - Router Service:
    - Cung cấp các methods để Ngân hàng, Cá nhân/Doanh nghiệp (được cấp role) có thể tương tác với các hợp đồng `LC Contract` hoặc `UPAS LC Contract`
- Bank Core:
  - Mỗi Ngân hàng sẽ có một `Bank Core` contract của riêng mình để quản lý các account thuộc hệ thống của ngân hàng đó
  - `Bank Core` contract sẽ được deploy bởi ADMIN của `FPT Core`. Sau khi deploy, thì contract sẽ được register vào whitelist với định danh (role) là `BANKING`
  - `Bank Core` contract sẽ cung cấp các chức năng quản lý accounts cũng như cấp bậc định danh được quản lý bởi tổ chức Ngân hàng đó
  - Sẽ có ADMIN trong `Bank Core` và chức danh này là hoàn toàn độc lập với ADMIN ở `FPT Core`. Nói một cách khác là ADMIN ở `FPT Core` sẽ không có bất kỳ vai trò nào trong việc quản lý ở `Bank Core` contract. Và những `Bank Core` contract khác nhau là hoàn toàn độc lập với nhau trong việc quản lý những account của tổ chức đó
- LC Contract / UPAS LC Contract:
  - Là các hợp đồng giao dịch giữa các bên liên quan Cá nhân/Doanh Nghiệp - Cá nhân/Doanh Nghiệp - Ngân hàng
  - Được tạo ra bởi Cá nhân/Doanh nghiệp (CORPORATION role)
  - Mỗi hợp đồng sẽ có các `stage` quy định khác nhau. Một hợp đồng sẽ có các điểm sau:
    - Nội dung của hợp đồng và các chứng từ liên quan sẽ được cung cấp giao thức để truy xuất
    - Nội dung sẽ được lưu off-chain nhưng tính chất consistent và unalterable sẽ được bảo đảm
    - Các bên tham gia đồng ý với các điều khoản, thông tin trong hợp đồng
    - Khi có bất kỳ thay đổi -> `LC Contract`/`UPAS LC Contract` cần phải deploy lại và các bên cần phải verify lại
    - Hợp đồng thành công và hoàn thành khi tất cả các `stage` trong hợp đồng được `approved`
    - Hợp đồng cần được hoàn thành đúng thời hạn (TBA)