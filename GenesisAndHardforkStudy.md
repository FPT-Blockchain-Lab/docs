# Genesis configuration and Hard fork study
----------------------------

# 1. Concepts:

- Genesis
The genesis block is the first ever block recorded on its respective blockchain network, also occasionally referred to as Block 0 or Block 1. 
When a block is broadcasted to the blockchain, it references the previous block. However, in the case of the genesis block, there is no previous block to reference.
Because there is no previous block to reference, genesis blocks are generally hardcoded into the software.

- Hard forks are backward-incompatible software updates. Typically, these occur when nodes add new rules in a way that conflicts with the rules of old nodes. New nodes can only communicate with others that operate the new version. As a result, the blockchain splits, creating two separate networks: one with the old rules, and one with the new rules.

- Ethereum Improvement Proposals (EIPs) describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards. Network upgrades are discussed separately in the Ethereum Project Management repository.Refs to: https://eips.ethereum.org/

# 2. Goquorum

In goquorum, we can start the genesis and define the list of hard fork in `genesis.json` file. The official document can be found in https://consensys.net/docs/goquorum/en/latest/reference/genesis/. However, it lacks of explaination for the all the config, so we must locking into the source code of goquorum for better understanding.

For the milestone blocks (where/when the hardforks happen), we will have a deeper understanding of what the config for as explained in the source code below

```golang
// ChainConfig is the core config which determines the blockchain settings.
//
// ChainConfig is stored in the database on a per block basis. This means
// that any network, identified by its genesis block, can have its own
// set of configuration options.
type ChainConfig struct {
	ChainID *big.Int `json:"chainId"` // chainId identifies the current chain and is used for replay protection

	HomesteadBlock *big.Int `json:"homesteadBlock,omitempty"` // Homestead switch block (nil = no fork, 0 = already homestead)

	DAOForkBlock   *big.Int `json:"daoForkBlock,omitempty"`   // TheDAO hard-fork switch block (nil = no fork)
	DAOForkSupport bool     `json:"daoForkSupport,omitempty"` // Whether the nodes supports or opposes the DAO hard-fork

	// EIP150 implements the Gas price changes (https://github.com/ethereum/EIPs/issues/150)
	EIP150Block *big.Int    `json:"eip150Block,omitempty"` // EIP150 HF block (nil = no fork)
	EIP150Hash  common.Hash `json:"eip150Hash,omitempty"`  // EIP150 HF hash (needed for header only clients as only gas pricing changed)

	EIP155Block *big.Int `json:"eip155Block,omitempty"` // EIP155 HF block
	EIP158Block *big.Int `json:"eip158Block,omitempty"` // EIP158 HF block

	ByzantiumBlock      *big.Int `json:"byzantiumBlock,omitempty"`      // Byzantium switch block (nil = no fork, 0 = already on byzantium)
	ConstantinopleBlock *big.Int `json:"constantinopleBlock,omitempty"` // Constantinople switch block (nil = no fork, 0 = already activated)
	PetersburgBlock     *big.Int `json:"petersburgBlock,omitempty"`     // Petersburg switch block (nil = same as Constantinople)
	IstanbulBlock       *big.Int `json:"istanbulBlock,omitempty"`       // Istanbul switch block (nil = no fork, 0 = already on istanbul)
	MuirGlacierBlock    *big.Int `json:"muirGlacierBlock,omitempty"`    // Eip-2384 (bomb delay) switch block (nil = no fork, 0 = already activated)
	BerlinBlock         *big.Int `json:"berlinBlock,omitempty"`         // Berlin switch block (nil = no fork, 0 = already on berlin)

	YoloV3Block *big.Int `json:"yoloV3Block,omitempty"` // YOLO v3: Gas repricings TODO @holiman add EIP references
	EWASMBlock  *big.Int `json:"ewasmBlock,omitempty"`  // EWASM switch block (nil = no fork, 0 = already activated)

	// Various consensus engines
	Ethash   *EthashConfig   `json:"ethash,omitempty"`
	Clique   *CliqueConfig   `json:"clique,omitempty"`
	Istanbul *IstanbulConfig `json:"istanbul,omitempty"` // Quorum
	IBFT     *IBFTConfig     `json:"ibft,omitempty"`     // Quorum
	QBFT     *QBFTConfig     `json:"qbft,omitempty"`     // Quorum

	// Start of Quorum specific configs

	IsQuorum             bool   `json:"isQuorum"`     // Quorum flag
	TransactionSizeLimit uint64 `json:"txnSizeLimit"` // Quorum - transaction size limit
	MaxCodeSize          uint64 `json:"maxCodeSize"`  // Quorum -  maximum CodeSize of contract

	// QIP714Block implements the permissions related changes
	QIP714Block            *big.Int `json:"qip714Block,omitempty"`
	MaxCodeSizeChangeBlock *big.Int `json:"maxCodeSizeChangeBlock,omitempty"`
	// to track multiple changes to maxCodeSize
	MaxCodeSizeConfig        []MaxCodeConfigStruct `json:"maxCodeSizeConfig,omitempty"`
	PrivacyEnhancementsBlock *big.Int              `json:"privacyEnhancementsBlock,omitempty"`
	IsMPS                    bool                  `json:"isMPS"`                            // multiple private states flag
	PrivacyPrecompileBlock   *big.Int              `json:"privacyPrecompileBlock,omitempty"` // Switch block to enable privacy precompiled contract to process privacy marker transactions

	// End of Quorum specific configs
}
```

For the consensus engines, we only forcus on Clique field, because we will build our testnet with clique

```golang
// CliqueConfig is the consensus engine configs for proof-of-authority based sealing.
type CliqueConfig struct {
	Period                 uint64 `json:"period"`                 // Number of seconds between blocks to enforce
	Epoch                  uint64 `json:"epoch"`                  // Epoch length to reset votes and checkpoint
	AllowedFutureBlockTime uint64 `json:"allowedFutureBlockTime"` // Max time (in seconds) from current time allowed for blocks, before they're considered future blocks
}
```


Genesis block hash is created from list of attribute in ChainConfig. Refs to https://github.com/ConsenSys/quorum/blob/master/core/genesis.go#L293-L330

```golang
func (g *Genesis) ToBlock(db ethdb.Database) *types.Block {
	if db == nil {
		db = rawdb.NewMemoryDatabase()
	}
	statedb, _ := state.New(common.Hash{}, state.NewDatabase(db), nil)
	for addr, account := range g.Alloc {
		statedb.AddBalance(addr, account.Balance)
		statedb.SetCode(addr, account.Code)
		statedb.SetNonce(addr, account.Nonce)
		for key, value := range account.Storage {
			statedb.SetState(addr, key, value)
		}
	}
	root := statedb.IntermediateRoot(false)
	head := &types.Header{
		Number:     new(big.Int).SetUint64(g.Number),
		Nonce:      types.EncodeNonce(g.Nonce),
		Time:       g.Timestamp,
		ParentHash: g.ParentHash,
		Extra:      g.ExtraData,
		GasLimit:   g.GasLimit,
		GasUsed:    g.GasUsed,
		Difficulty: g.Difficulty,
		MixDigest:  g.Mixhash,
		Coinbase:   g.Coinbase,
		Root:       root,
	}
	if g.GasLimit == 0 {
		head.GasLimit = params.GenesisGasLimit
	}
	if g.Difficulty == nil {
		head.Difficulty = params.GenesisDifficulty
	}
	statedb.Commit(false)
	statedb.Database().TrieDB().Commit(root, true, nil)

	return types.NewBlock(head, nil, nil, nil, trie.NewStackTrie(nil))
}
```
# 3. Tested genesis file changes

Please refers to https://github.com/FPT-Blockchain-Lab/quorum-examples/blob/hardfork-example/examples/hardfork/guide.md

|Testcase                               |Result      |Alternative plan                                              |
|---------------------------------------|------------|--------------------------------------------------------------|
|Enable perm                            |Passed      |                                                              |
|Codesize change                        |Passed      |                                                              |
|Blocktime                              |Failed      |Remove the magnitude of change in blocktime (currently 3->1)  |
|Blocksize (gas limit) change           |Pending     |Not predefined hardfork contains this                         |
   
# 4. Management Clique sealers (blockproducer/validator)

All clique sealer management is using clique RPC namespace: `clique_`. Refs to https://geth.ethereum.org/docs/rpc/ns-clique#clique_propose

1. First propose an address is becoming a sealer or remove from a sealer we'll use `clique_propose`. With auth is true as propose a new sealer and false as propose kickout existing sealer

	```
	Client	Method invocation
	Console	clique.propose(address, auth)
	RPC	{"method": "clique_propose", "params": [address, auth]}
	```
2. Then, all existing sealer will list the pending proposals (not reach 50% + 1 existing sealers) and decide which keep voting for/or against the new sealer with `clique_propose`

	```
	Client	Method invocation
	Console	clique.proposals()
	RPC	{"method": "clique_proposals", "params": []}
	```

In quorum-kubernetes on devnet, we use:

```bash
kubectl exec -it quorum-validator-1-0 -n quorum -- geth --exec 'clique.propose("0x2932b7a2355d6fecc4b5c0b6bd44cc31df247a2e", true)' attach
kubectl exec -it quorum-validator-2-0 -n quorum -- geth --exec 'clique.propose("0x2932b7a2355d6fecc4b5c0b6bd44cc31df247a2e", true)' attach
...
```