//SPDX-License-Identifier: Unlicense
pragma solidity ^ 0.8.0;

contract WhiteList {
    uint8 public maxNumberOfWhiteListedAddress;

    mapping(address => bool) public whiteListedAddresses;

    uint8 public countWhiteListedAddress;

    constructor (uint8 _maxNumberOfWhiteListedAddress) {
        maxNumberOfWhiteListedAddress = _maxNumberOfWhiteListedAddress;
    }

    function addAddressToWhitelist() public {
        require(!whiteListedAddresses[msg.sender], "You are already whitelisted");
        require(maxNumberOfWhiteListedAddress < countWhiteListedAddress, "White listing limit is reached");
        whiteListedAddresses[msg.sender] = true;
        countWhiteListedAddress += 1;
    }
}