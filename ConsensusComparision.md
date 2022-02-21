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

| Consensus     | Type                | Maturity            | Node number limits (min, max, fault tolerance) |
| ------------- | ------------------- | ------------------- | ----------------------------- |
| IBFT1         | Proof of Authority  | Production-ready    | (4, 30, N/3)
| IBFT2         | Proof of Authority  | Production-ready    | (4, 30, N/3)
| QBFT          | Proof of Authority  | Early access        | ()
| Clique        | Proof of Authority  | Production-ready    | (3, , N/2 – 1)
| Raft          | Proof of Authority  | Production-ready    | (3, , N/2 - 1)

3. Permissioned node (Privacy with private transactions)

4. Benchmark

Refs:
- https://www.kaleido.io/blockchain-blog/consensus-algorithms-poa-ibft-or-raft
- https://arxiv.org/pdf/1809.03421.pdf
- https://consensys.net/docs/goquorum/en/latest/concepts/consensus/comparing-poa/
- https://besu.hyperledger.org/en/stable/HowTo/Configure/Consensus-Protocols/IBFT/