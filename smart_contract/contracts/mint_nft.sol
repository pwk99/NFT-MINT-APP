//SPDX-License-Identifier: Unlicense
pragma solidity ^ 0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IWhitelist.sol";

contract MintNft is ERC721Enumerable, Ownable {
    string _baseTokenURI;

    uint256 public _price = 2 ether;

    // Is your smart contract paused? 
    bool public _paused;

    // Total supply of our NFT
    uint256 public maxTokenIds = 10000;

    // No of minted NFT token till now
    uint256 public tokenIds;

    IWhitelist whitelist;

    bool public presaleStarted;

    uint256 public presaleEnded;

    modifier onlyWhenNotPaused {
        require(!_paused, "The contract is paused for now");
        _;
    }

    constructor (string memory baseURI, address _whitelistContract) ERC721("JKL NFT collection", "JKL") {
          _baseTokenURI = baseURI;
          whitelist = IWhitelist(_whitelistContract);
    }

    function startPresale() public onlyOwner {
        presaleStarted = true;
        presaleEnded = block.timestamp + 2 days;
    }

    function presaleMint() public payable onlyWhenNotPaused {
        require(presaleStarted && block.timestamp < presaleEnded, "Presale is not running");
        require(whitelist.whiteListedAddresses(msg.sender), "You are not whitelised");
        require(tokenIds < maxTokenIds, "Exceeded maximum supply");
        require(msg.value > _price, "You are poor. You can't afford our NFT collection");

        // Discount for you all for presale.
        _price = 1 ether;
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds);
    }


    function mint() public payable onlyWhenNotPaused {
        require(presaleStarted && block.timestamp >=  presaleEnded, "Presale has not ended yet");
        require(tokenIds < maxTokenIds, "Exceeded Max supply of our collection, We fucking rich now");
        require(msg.value > _price, "You poor to buy our NFT");
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds);
    }

    function _baseURI() internal view virtual override returns(string memory) {
        return _baseTokenURI;
    }

    function setPaused(bool value) public onlyOwner {
        _paused = value;
    }

    function withdraw() public onlyOwner {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call {
            value: amount
        }("");
        require(sent, "Failed to send Ether");
    }

    receive() external payable {}

    fallback() external payable {}
}