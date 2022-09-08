const hre = require("hardhat");

async function main() {
  const Consortium = await hre.ethers.getContractFactory("Consortium");
  const consortium = await Consortium.deploy();

  await consortium.deployed();

  console.log("much success at:", consortium.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
