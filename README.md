# hello-world-eth-smart-contract

## Setup

`npm install`

## Set Alchemy and your EOA wallet private key as environment variables

create a `.env` file and add the following
```
API_URL = "<api-url-from-alchemy>
PRIVATE_KEY = "<eoa-private-key>"
```

## Compile

`npx hardhat compile`

## Deploy

I used rinkeby, but you can set it to whatever ethereum test network you want to use. Remember to edit the `hardhat.config.js` file if you wanted to use another test network.

`npx hardhat run scripts/deploy.js --network rinkeby`


## Sending a transaction to smart contract

Set the `eoaWalletAddress` and `contractAddress` constants to your own wallet address and contract address respectively, in the `client/sendTransaction.js` file.

Run `node client/sendTransaction.js`, which will log the current message set on the contract (should be "Hello World!" when run for the first time), then sets the message to "Hello Mars!"
