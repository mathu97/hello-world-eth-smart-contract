async function main() {
  // Contract factory in ether.js is an abstraction used to deloy new smart contracts
  // HelloWorld below is a factory for instances of our hello world contract.
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  // Start deployment, returning a promise that resolves to a contract object
  // Calling deploy on a ContractFactory will start the deployment, and return a Promise that resolves to a Conract object.
  const hello_world = await HelloWorld.deploy("Hello World!");
  console.log("Contract deployed to address:", hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
