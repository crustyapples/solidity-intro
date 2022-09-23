// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // we want to use solidity version higher than 0.8.0
import "hardhat/console.sol";

contract Counter {
    uint256 counter;
    
    function count() public {
        counter++;
        console.log("counter",counter);
    }

    function getCounter() public view returns(uint256) { //view means that this function will not change the state of the contract and will just let us view it without calling the count function
        return counter;
    }
}