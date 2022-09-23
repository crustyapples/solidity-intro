import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy(){
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();
    return counter;
}

async function count(counter) {
    await counter.count(); // we need async functions to ensure that there is consensus first before we call the next line of code
    console.log("Counter: ", await counter.getCounter());

}

deploy().then(count);

// npx hardhat run scripts/deploy-contract.ts --network localhost to deploy the contract