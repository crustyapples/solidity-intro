import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", function() {
    it("should say hi", async function() {
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const hello = await HelloWorld.deploy();
        await hello.deployed();
        expect(await hello.hello()).to.equal("Hello, World!");
    })
});

// hard hat is going to create a local eth node in your computer using the command "npx hardhat node"