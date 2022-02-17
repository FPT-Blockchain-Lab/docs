1. **Public Transaction**

- Public transactions have payloads that are visible to all participants of the same network. These are [created as standard Ethereum transactions](https://github.com/ChainSafe/web3.js/) using web3js.
- Examples:
  > const Web3 = require('web3');
  > const Tx = require('ethereumjs-tx').Transaction;
  > const web3 = new Web3('http://localhost:8545');
  > const privateKey =
  > Buffer.from('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex');
  > const rawTx = {
       nonce: '0x00',
       gasPrice: '0x09184e72a000',
       gasLimit: '0x2710',
       to: '0x0000000000000000000000000000000000000000',
       value: '0x00',
       data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
  }
  const tx = new Tx(rawTx, {'chain':'ropsten'});
  tx.sign(privateKey);
  const serializedTx = tx.serialize();
  web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
  .on('receipt', console.log);

2. **Private Transaction**

- Private transactions have payloads that are visible only to the network participants whose public keys are specified in the `privateFor` parameter of the transaction. `privateFor` can take multiple addresses in a comma-separated list.
- [GoQuorum private transaction high-level lifecycle.](https://consensys.net/docs/goquorum/en/latest/concepts/privacy/private-transaction-lifecycle/#normal-private-transactions)
- [Hyperledger Besu processing private transactions.](https://besu.hyperledger.org/en/stable/Concepts/Privacy/Private-Transaction-Processing/)
- [web3js-quorum docs.](https://consensys.github.io/web3js-quorum/latest/index.html)
- Examples:
  > const Web3 = require('web3');
  > const Web3Quorum = require('web3js-quorum');
  > // Besu doesn't support eth_sendTransaction so we use the
  > eea_sendRawTransaction `https://besu.hyperledger.org/en/latest/Reference/API- Methods/#eea_sendrawtransaction` for things like simple value transfers, contract creation or contract
  > invocation
  > async function createContract(fromPrivateKey, fromPublicKey, toPublicKey) {
       const web3 = new Web3('http://localhost:8545')
       const web3quorum = new Web3Quorum(web3, chainId);
       const txOptions = {
       data: '0x'+contractBytecode+contractConstructorInit,
       privateKey: fromPrivateKey,
       privateFrom: fromPublicKey,
       privateFor: [toPublicKey]
  };
  console.log("Creating contract...");
  // Generate and send the Raw transaction to the Besu node using the
  eea_sendRawTransaction `https://besu.hyperledger.org/en/latest/Reference/API-Methods/#eea_sendrawtransaction`JSON-RPC call
  const txHash = await web3quorum.priv.generateAndSendRawTransaction(txOptions);
  console.log("Getting contractAddress from txHash: ", txHash);
  const privateTxReceipt = await web3quorum.priv.waitForTransactionReceipt(txHash);
  console.log("Private Transaction Receipt: ", privateTxReceipt);
  return privateTxReceipt;
  };
