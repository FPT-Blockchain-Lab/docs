# Quorum protocol consensus comparision

1. Available clients supported Quorum protocol

- Hyperledge Besu (Java)
- GoQuorum (Golang)

2. Available consensus

BFT is short for Byzantine Fault Tolerant

- IBFT 1.0 (Only available to GoQuorum client)
- IBFT 2.0 (Only available to Besu client)
- QBFT
- CLIQUE
- RAFT

| Consensus     | Type                | Maturity            | Node number limits (min, max) | 
| ------------- | ------------------- | ------------------- | ----------------------------- |
| IBFT1         | Proof of Authority  | Production-ready    | (4, 30)
| IBFT2         | Proof of Authority  | Production-ready    | (4, 30)
| QBFT          | Proof of Authority  | Early access        | 
| Clique        | Proof of Authority  | Production-ready    |  ()
| Raft          | Proof of Authority  | Production-ready    |



3. Permissioned node