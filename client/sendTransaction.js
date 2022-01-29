
  require("dotenv").config();
  const { API_URL, PRIVATE_KEY } = process.env;
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
  const web3 = createAlchemyWeb3(API_URL);
  const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

  const eoaWalletAddress = "<your own EOA wallet address>"; //TODO: replace this address with your own public address
  const contractAddress = "<your contract address>";

  const helloWorldContract = new web3.eth.Contract(
    contract.abi,
    contractAddress
  );

  // Now to update the message, we'll need to create a transaction, sign it, and send it
  async function UpdateMessage(newMessage) {
    console.log("🚀🚀🚀 Sending transaction to HelloWorld contract to update message")
    // nonce is used to keep track of the number of transactions sent from your address
    const nonce = await web3.eth.getTransactionCount(eoaWalletAddress, "latest"); // nonce starts counting from 0

    // use an esitmated gas to avoid transaction from failing
    const gasEstimate = await helloWorldContract.methods
      .update(newMessage)
      .estimateGas();

    helloWorldContract;
    const transaction = {
      from: eoaWalletAddress,
      to: contractAddress,
      gas: gasEstimate,
      nonce: nonce,
      data: helloWorldContract.methods.update(newMessage).encodeABI(),
    };

    const signedTransaction = await web3.eth.accounts.signTransaction(
      transaction,
      PRIVATE_KEY
    );

    web3.eth.sendSignedTransaction(
      signedTransaction.rawTransaction,
      function (error, hash) {
        if (!error) {
          console.log(
            "🎉 The hash of your transaction is: ",
            hash,
            "\n Check Alchemy's Mempool to view the status of your transaction!"
          );
        } else {
          console.log(
            "❗Something went wrong while submitting your transaction:",
            error
          );
        }
      }
    );
  }
  
async function main() {
  const message = await helloWorldContract.methods.message().call();
  console.log("Message from helloWorld contract: " + message);

  await UpdateMessage('Hello Mars!')
}

main();
