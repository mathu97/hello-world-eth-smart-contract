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
