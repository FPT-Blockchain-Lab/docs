# Đánh giá RPC và Centralized Wallet replacement

1. Đánh giá Qlight Node
- Xử lí public transactions trực tiếp sau đó proxy vào server
- Không có tác động đến consensus
- Phương án bảo mật
    + TLS
    + CIDR masks - https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing
    + File Base Permissioned (tương tự whitelist IP, nhưng dành cho p2p node - node hex)
    + Client security plugin https://github.com/ConsenSys/quorum-security-plugin-enterprise
        * Dùng Qlight Token Manager plugin dựa trên gRPC (https://github.com/ConsenSys/quorum-plugin-qlight-token-manager)

2. Đánh giá Manage Keys
- Sử dụng file-based keystore management, keystore https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition
- Sử dụng account plugin https://consensys.net/docs/goquorum/en/21.10.0/develop/manage-keys/account-plugins/
    + Account plugin với backend impl là hashicorp vault: https://github.com/ConsenSys/quorum-account-plugin-hashicorp-vault
- Sử dụng clef, là recommendation method for signing https://github.com/ConsenSys/quorum/tree/master/cmd/clef

3. Recommandation for architecture
- Centralized wallet can used key managements với account plugin, và vault backend. Lí do:
    + Vault manage access control tốt
    + Không cần audit lại vấn đề security của storage
    + Có thể dể dàng đưa ra deployments và security implementation

- Dùng Qlight như là RPC Node, với authorization dùng client security plugin
    + Write plugin to support LC protocols (thay đổi namespace trong RPC method)
    + Đã có sẵn OAuth2 và JWK supports

4. Pros and Cons
- Pros:
    + Support tốt vấn đề performance và DDOS protection
    + Support tốt seperations of concern consensus và rpc handling
    + Support tốt cho những vấn đề bảo mật trọng yếu
        + Hashicorp Vault là enterprised product 
        + JWK + OAuth2 cũng là những tiêu chuẩn hàng đầu ở trong ngành
- Cons:
    + Efforts bỏ ra là autogen abi từ smart contracts + viết hash lại functions
    + Viết bằng golang + gRPC (so với cũ typescript/javascript + jsonRPC)

5. References:

- https://consensys.net/docs/goquorum/en/latest/develop/manage-keys/
- https://consensys.net/docs/goquorum/en/latest/develop/manage-keys/account-plugins/
- https://www.vaultproject.io/docs/internals/security
- https://www.vaultproject.io/docs/internals/rotation
- https://datatracker.ietf.org/doc/html/rfc6749
- https://datatracker.ietf.org/doc/html/rfc7517
