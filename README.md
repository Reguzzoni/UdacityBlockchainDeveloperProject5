### version used

Truffle v5.1.10 (core: 5.1.10)

Solidity - 0.5.5 (solc-js)

Node v10.18.0

Web3.js v1.2.1



### How to mint openSea collection?

With myEthereumWallet or just use local scripts/mint.js (configuring infura and mnemonic) into file
as truffle-config for deploy



### Rinkeby information

contractAddress SolnSquareVerifier:         0xe20Fe323F77553Daf2Cb9FB18B60586FEb231125

contractAddress SquareVerifier:             0x820959eBF420efeD5f500E5588d4f62Cd1d7a489

METAMASK address :                          0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c



### Etherscan
Address transactions
https://rinkeby.etherscan.io/address/0x030e42a9a18a0de7207a17c1fb68e84b9074878c



### TEST WITH FIX PROBLEM NAME CORRECT
## Minted transaction List

Minted item. Transaction: 0x9a41bff8882bcc409ba6c2dc8d5c267c532f274aaa0f4c29ed676c670695a71e

Minted item. Transaction: 0x3cb4aea3618f9ce18b2162cf299c42c1c72fda17023e338de3401e809042c76c

Minted item. Transaction: 0xcdf81db14082902edd7bf8c4c235581bbb82c57935f329e0ac90ef606cc91866

Minted item. Transaction: 0x36ea7163f9ce3eed82896f0c363c368e9d1bcb7a4df815ace0081772a20e40d2

Minted item. Transaction: 0x90d1c031c002009a1a66fe9ec3739530ef62fe4d8f1dc8c23104f2e02548ed84S



## openSea profile and collections

https://testnets.opensea.io/0x030e42a9a18a0de7207a17c1fb68e84b9074878c?tab=created
(ERCMintableToken are my final contracts created)



## minted 5 Items

https://testnets.opensea.io/assets/0xc405d76442de300566b15432c8f7ce808b753725/1

https://testnets.opensea.io/assets/0xc405d76442de300566b15432c8f7ce808b753725/2

https://testnets.opensea.io/assets/0xc405d76442de300566b15432c8f7ce808b753725/3

https://testnets.opensea.io/assets/0xc405d76442de300566b15432c8f7ce808b753725/4

https://testnets.opensea.io/assets/0xc405d76442de300566b15432c8f7ce808b753725/5



## Sold and Bought with different account on openSea, look at transaction history

https://testnets.opensea.io/assets/0xc405d76442de300566b15432c8f7ce808b753725/1# TESTS

![Alt text](resource/trade_history_opensea.png?raw=true "trade_history_opensea")


## zokrates docker
docker run -v D:/blockchain/UdacityBlockchainDeveloper/Project5/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash

## Udacity Blockchain Capstone
The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Project Resources
* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
* 
### OLD TEST WITH CONTRACT NAME PROBLEMS EMPTY but still usefull to undestand how implementation worked
# Minted transaction List
Minted item. Transaction: 0xa59baab610448e8252a69eda553882ed655a87a18a929e136973736cc2302679
Minted item. Transaction: 0xaa4785e88a4ce1cd4e05503b27f1ff9a21a70c00174df9705893fe9c63ad157c
Minted item. Transaction: 0xc7e25fe20ae56e958bb534c758a02c3b0fc607f9f739ef1dd36e5a6b3dc2359b
Minted item. Transaction: 0x66b0a581ef73c65cde02118d514b57af0a51c296696b45d0910ce8245157b01c
Minted item. Transaction: 0x324470e20ed815a33c960214523ae9ec184836f125e926012ef8fbc30a24cd93
# openSea profile and collections
https://testnets.opensea.io/0x030e42a9a18a0de7207a17c1fb68e84b9074878c?tab=created
https://testnets.opensea.io/collection/unidentified-contract-kzhozja1tf
mint1
https://testnets.opensea.io/assets/0xe20fe323f77553daf2cb9fb18b60586feb231125/1
mint2
https://testnets.opensea.io/assets/0xe20fe323f77553daf2cb9fb18b60586feb231125/2
mint3
https://testnets.opensea.io/assets/0xe20fe323f77553daf2cb9fb18b60586feb231125/3
mint4
https://testnets.opensea.io/assets/0xe20fe323f77553daf2cb9fb18b60586feb231125/4
mint5
https://testnets.opensea.io/assets/0xe20fe323f77553daf2cb9fb18b60586feb231125/5
# Sold and Bought with different account on openSea, look at transaction history
https://testnets.opensea.io/assets/0xe20fe323f77553daf2cb9fb18b60586feb231125/1




-------------------- JSON -------------------

### JSON SolnSquareVerifier.json
{
  "contractName": "SolnSquareVerifier",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSymbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newPausedValue",
          "type": "bool"
        }
      ],
      "name": "setPaused",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "baseTokenURI",
          "type": "string"
        }
      ],
      "name": "setBaseTokenURI",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "name": "_result",
          "type": "string"
        },
        {
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "addressToString",
      "outputs": [
        {
          "name": "_uintAsString",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "x",
          "type": "uint256"
        }
      ],
      "name": "toBytes",
      "outputs": [
        {
          "name": "b",
          "type": "bytes"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "setSymbol",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBaseTokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "name": "setName",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "verifierContract",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_i",
          "type": "uint256"
        }
      ],
      "name": "uint2str",
      "outputs": [
        {
          "name": "_uintAsString",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "verifierAddress",
          "type": "address"
        },
        {
          "name": "tokenName",
          "type": "string"
        },
        {
          "name": "tokenSymbol",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "addressSolution",
          "type": "address"
        }
      ],
      "name": "AddedSolutionEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "addressTriggerer",
          "type": "address"
        }
      ],
      "name": "PausedEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "addressTriggerer",
          "type": "address"
        }
      ],
      "name": "UnpausedEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerShipIsTransferedEvent",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "name": "inputs",
          "type": "uint256[2]"
        }
      ],
      "name": "addSolution",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "countSolution",
          "type": "uint256"
        }
      ],
      "name": "getSolutionInfoByCount",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "countSolution",
          "type": "uint256"
        }
      ],
      "name": "getOwnerByCount",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "countSolution",
          "type": "uint256"
        }
      ],
      "name": "getIndexByCount",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "name": "inputs",
          "type": "uint256[2]"
        }
      ],
      "name": "mintNewNFT",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.5+commit.47a71e8f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getSymbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newPausedValue\",\"type\":\"bool\"}],\"name\":\"setPaused\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getName\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_myid\",\"type\":\"bytes32\"},{\"name\":\"_result\",\"type\":\"string\"}],\"name\":\"__callback\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"baseTokenURI\",\"type\":\"string\"}],\"name\":\"setBaseTokenURI\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_myid\",\"type\":\"bytes32\"},{\"name\":\"_result\",\"type\":\"string\"},{\"name\":\"_proof\",\"type\":\"bytes\"}],\"name\":\"__callback\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"countSolution\",\"type\":\"uint256\"}],\"name\":\"getOwnerByCount\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"addressToString\",\"outputs\":[{\"name\":\"_uintAsString\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"},{\"name\":\"a\",\"type\":\"uint256[2]\"},{\"name\":\"b\",\"type\":\"uint256[2][2]\"},{\"name\":\"c\",\"type\":\"uint256[2]\"},{\"name\":\"inputs\",\"type\":\"uint256[2]\"}],\"name\":\"mintNewNFT\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"toBytes\",\"outputs\":[{\"name\":\"b\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"countSolution\",\"type\":\"uint256\"}],\"name\":\"getSolutionInfoByCount\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"symbol\",\"type\":\"string\"}],\"name\":\"setSymbol\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"},{\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBaseTokenURI\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"name\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"verifierContract\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"},{\"name\":\"tokenURI\",\"type\":\"string\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"a\",\"type\":\"uint256[2]\"},{\"name\":\"b\",\"type\":\"uint256[2][2]\"},{\"name\":\"c\",\"type\":\"uint256[2]\"},{\"name\":\"inputs\",\"type\":\"uint256[2]\"}],\"name\":\"addSolution\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_i\",\"type\":\"uint256\"}],\"name\":\"uint2str\",\"outputs\":[{\"name\":\"_uintAsString\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"countSolution\",\"type\":\"uint256\"}],\"name\":\"getIndexByCount\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"verifierAddress\",\"type\":\"address\"},{\"name\":\"tokenName\",\"type\":\"string\"},{\"name\":\"tokenSymbol\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addressSolution\",\"type\":\"address\"}],\"name\":\"AddedSolutionEvent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addressTriggerer\",\"type\":\"address\"}],\"name\":\"PausedEvent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addressTriggerer\",\"type\":\"address\"}],\"name\":\"UnpausedEvent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnerShipIsTransferedEvent\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"isApprovedForAll(address,address)\":{\"details\":\"Tells whether an operator is approved by a given owner\",\"params\":{\"operator\":\"operator address which you want to query the approval of\",\"owner\":\"owner address which you want to query the approval of\"},\"return\":\"bool whether the given operator is approved by the given owner\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf\",\"params\":{\"approved\":\"representing the status of the approval to be set\",\"to\":\"operator address to set the approval\"}},\"supportsInterface(bytes4)\":{\"details\":\"implement supportsInterface(bytes4) using a lookup table\"},\"tokenByIndex(uint256)\":{\"details\":\"Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the tokens list\"},\"return\":\"uint256 token ID at the given index of the tokens list\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"Gets the token ID at a given index of the tokens list of the requested owner\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the requested tokens list\",\"owner\":\"address owning the tokens list to be accessed\"},\"return\":\"uint256 token ID at the given index of the tokens list owned by the requested address\"},\"totalSupply()\":{\"details\":\"Gets the total amount of tokens stored by the contract\",\"return\":\"uint256 representing the total amount of tokens\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SolnSquareVerifier.sol\":\"SolnSquareVerifier\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/ERC721Mintable.sol\":{\"keccak256\":\"0x25c27a3e153b8e0928ae8fde0136d0052d5564d934a45acb128ef39847bbeb57\",\"urls\":[\"bzzr://fee9771c389691786429b442ebf278879d0cbe2ada643c441f75335eacb79d0e\"]},\"/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/Oraclize.sol\":{\"keccak256\":\"0x6c198ddd429f9b3fc644ccfc2a6753cfa3b4f8f857e9c659bc2c9acc6527af24\",\"urls\":[\"bzzr://2b86250c64e033fb75ab5a9c584e9df3ddaa9718f356a9ff50e7a82ac30c0018\"]},\"/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SolnSquareVerifier.sol\":{\"keccak256\":\"0x066bd9144adfd0f1545cec1f4188338e6bac03c60232f2eb6781eaf5e3da6289\",\"urls\":[\"bzzr://53ef353e40f53e9155bc9d66cc5ffe8120c57f72b19c4afa7385168edfd072e8\"]},\"/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SquareVerifier.sol\":{\"keccak256\":\"0x6f2446a68a3792f540dc59a4eb296b6d2aa5aac91691ee85c91df9507c3b8a8e\",\"urls\":[\"bzzr://09b12073e1cdd1db1fcada6b3c450c4d369db21cb10da2ccd39bad3d26e0b4b7\"]},\"openzeppelin-solidity/contracts/drafts/Counters.sol\":{\"keccak256\":\"0x5be8533c5950173dc2b77b75108fae6e6c5449aedadde3385ba457394aad2384\",\"urls\":[\"bzzr://8ab3b1e3d023aafb8a2d127de323b74567084e821b955b5f543e67fe964b1a6b\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x640b6dee7a4b830bdfd52b5031a07fc2b12209f5b2e29e5d364a7d37f69d8076\",\"urls\":[\"bzzr://292843005e754e752644f767477ec5ad7a1ffc91ddb18c38b8079c62f3993cad\"]},\"openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x042048c375daca04b31e31c91bbae912b84b5eb818c4e31b2deb530fd2305342\",\"urls\":[\"bzzr://2f8b9c142d30b43eab7b77dbcc632a51987eeb62371777d765e9311c0b3c4c13\"]},\"openzeppelin-solidity/contracts/utils/Address.sol\":{\"keccak256\":\"0x1a8e5072509c5ea7365eb1d48030b9be865140c8fb779968da0a459a0e174a11\",\"urls\":[\"bzzr://4e1d23731da27602b8c552e54fb9976dadf8cf46a8f90a3c8c1b85fe044618b9\"]}},\"version\":1}",
  "bytecode": "0x608060405260006014553480156200001657600080fd5b5060405162004a1638038062004a16833981018060405260608110156200003c57600080fd5b810190808051906020019092919080516401000000008111156200005f57600080fd5b828101905060208101848111156200007657600080fd5b81518560018202830111640100000000821117156200009457600080fd5b50509291906020018051640100000000811115620000b157600080fd5b82810190506020810184811115620000c857600080fd5b8151856001820283011164010000000082111715620000e657600080fd5b5050929190505050818181816040518060600160405280603f8152602001620049d7603f9139336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc952bd5aeb53e3b17bbef0f26d9d0b2eaf947aca5452382c4aaba18433db472b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a160008060146101000a81548160ff021916908315150217905550620002026301ffc9a760e01b620002ce60201b60201c565b6200021a6380ac58cd60e01b620002ce60201b60201c565b6200023263780e9d6360e01b620002ce60201b60201c565b82600f90805190602001906200024a92919062000370565b5081601090805190602001906200026392919062000370565b508090506200027f635b5e139f60e01b620002ce60201b60201c565b505050505082601360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200041f565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141515156200030457600080fd5b6001806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003b357805160ff1916838001178555620003e4565b82800160010185558215620003e4579182015b82811115620003e3578251825591602001919060010190620003c6565b5b509050620003f39190620003f7565b5090565b6200041c91905b8082111562000418576000816000905550600101620003fe565b5090565b90565b6145a8806200042f6000396000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c80636aa69d4e11610125578063c47f0027116100ad578063e985e9c51161007c578063e985e9c514611371578063ea95deaf146113ed578063f2fde38b1461156e578063f76f950e146115b2578063fea369d0146116595761021c565b8063c47f00271461110a578063c87b56dd14611183578063cf6956881461122a578063d3fc9864146112745761021c565b806395d89b41116100f457806395d89b4114610e36578063a22cb46514610eb9578063b84c824614610f09578063b88d4fde14610f82578063bdc32be0146110875761021c565b80636aa69d4e14610b0557806370a0823114610c90578063775a8f5e14610ce857806383ae502e14610d8f5761021c565b806327dc297e116101a85780633d3d34be116101775780633d3d34be1461088357806342842e0e1461092a5780634f6ccce7146109985780635e57966d146109da5780636352211e14610a975761021c565b806327dc297e146105875780632f745c591461064c57806330176e13146106ae57806338bbfa50146107275761021c565b806315070401116101ef57806315070401146103c557806316c38b3c1461044857806317d7de7c1461047857806318160ddd146104fb57806323b872dd146105195761021c565b806301ffc9a71461022157806306fdde0314610286578063081812fc14610309578063095ea7b314610377575b600080fd5b61026c6004803603602081101561023757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050611700565b604051808215151515815260200191505060405180910390f35b61028e611768565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102ce5780820151818401526020810190506102b3565b50505050905090810190601f1680156102fb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103356004803603602081101561031f57600080fd5b810190808035906020019092919050505061180a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103c36004803603604081101561038d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506118c4565b005b6103cd611b05565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561040d5780820151818401526020810190506103f2565b50505050905090810190601f16801561043a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104766004803603602081101561045e57600080fd5b81019080803515159060200190929190505050611ba7565b005b610480611c6b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104c05780820151818401526020810190506104a5565b50505050905090810190601f1680156104ed5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610503611d0d565b6040518082815260200191505060405180910390f35b6105856004803603606081101561052f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611d1a565b005b61064a6004803603604081101561059d57600080fd5b8101908080359060200190929190803590602001906401000000008111156105c457600080fd5b8201836020820111156105d657600080fd5b803590602001918460018302840111640100000000831117156105f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611d3f565b005b6106986004803603604081101561066257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611d82565b6040518082815260200191505060405180910390f35b610725600480360360208110156106c457600080fd5b81019080803590602001906401000000008111156106e157600080fd5b8201836020820111156106f357600080fd5b8035906020019184600183028401116401000000008311171561071557600080fd5b9091929391929390505050611df9565b005b6108816004803603606081101561073d57600080fd5b81019080803590602001909291908035906020019064010000000081111561076457600080fd5b82018360208201111561077657600080fd5b8035906020019184600183028401116401000000008311171561079857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156107fb57600080fd5b82018360208201111561080d57600080fd5b8035906020019184600183028401116401000000008311171561082f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611e0f565b005b6108af6004803603602081101561089957600080fd5b8101908080359060200190929190505050611e14565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108ef5780820151818401526020810190506108d4565b50505050905090810190601f16801561091c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109966004803603606081101561094057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611e7b565b005b6109c4600480360360208110156109ae57600080fd5b8101908080359060200190929190505050611e9b565b6040518082815260200191505060405180910390f35b610a1c600480360360208110156109f057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ed3565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a5c578082015181840152602081019050610a41565b50505050905090810190601f168015610a895780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610ac360048036036020811015610aad57600080fd5b810190808035906020019092919050505061216a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610c8e6004803603610180811015610b1c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b82821015610bfb578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505081526020019060010190610ba7565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192905050506121a7565b005b610cd260048036036020811015610ca657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506124f4565b6040518082815260200191505060405180910390f35b610d1460048036036020811015610cfe57600080fd5b8101908080359060200190929190505050612544565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610d54578082015181840152602081019050610d39565b50505050905090810190601f168015610d815780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610dbb60048036036020811015610da557600080fd5b81019080803590602001909291905050506125f5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610dfb578082015181840152602081019050610de0565b50505050905090810190601f168015610e285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610e3e6126f5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e7e578082015181840152602081019050610e63565b50505050905090810190601f168015610eab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610f0760048036036040811015610ecf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050612797565b005b610f8060048036036020811015610f1f57600080fd5b8101908080359060200190640100000000811115610f3c57600080fd5b820183602082011115610f4e57600080fd5b80359060200191846001830284011164010000000083111715610f7057600080fd5b90919293919293905050506128d3565b005b61108560048036036080811015610f9857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610fff57600080fd5b82018360208201111561101157600080fd5b8035906020019184600183028401116401000000008311171561103357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506128e9565b005b61108f612911565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156110cf5780820151818401526020810190506110b4565b50505050905090810190601f1680156110fc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6111816004803603602081101561112057600080fd5b810190808035906020019064010000000081111561113d57600080fd5b82018360208201111561114f57600080fd5b8035906020019184600183028401116401000000008311171561117157600080fd5b90919293919293905050506129b3565b005b6111af6004803603602081101561119957600080fd5b81019080803590602001909291905050506129c9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156111ef5780820151818401526020810190506111d4565b50505050905090810190601f16801561121c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611232612a92565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6113576004803603606081101561128a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156112d157600080fd5b8201836020820111156112e357600080fd5b8035906020019184600183028401116401000000008311171561130557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612ab8565b604051808215151515815260200191505060405180910390f35b6113d36004803603604081101561138757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612b80565b604051808215151515815260200191505060405180910390f35b61156c600480360361016081101561140457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b828210156114d9578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505081526020019060010190611485565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050509192919290505050612c14565b005b6115b06004803603602081101561158457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612d37565b005b6115de600480360360208110156115c857600080fd5b8101908080359060200190929190505050612ec5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561161e578082015181840152602081019050611603565b50505050905090810190601f16801561164b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6116856004803603602081101561166f57600080fd5b8101908080359060200190929190505050612fff565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156116c55780820151818401526020810190506116aa565b50505050905090810190601f1680156116f25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6060600f8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118005780601f106117d557610100808354040283529160200191611800565b820191906000526020600020905b8154815290600101906020018083116117e357829003601f168201915b5050505050905090565b600061181582613046565b1515611889576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f546f6b656e20646f65736e27742065786973740000000000000000000000000081525060200191505060405180910390fd5b6008600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff166007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561199b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f416c7265616479206f776e6572206f6620746f6b656e4964000000000000000081525060200191505060405180910390fd5b6007600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a54576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806145316029913960400191505060405180910390fd5b816008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b606060108054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b9d5780601f10611b7257610100808354040283529160200191611b9d565b820191906000526020600020905b815481529060010190602001808311611b8057829003601f168201915b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611c4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061455a6023913960400191505060405180910390fd5b80600060146101000a81548160ff02191690831515021790555050565b6060600f8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d035780601f10611cd857610100808354040283529160200191611d03565b820191906000526020600020905b815481529060010190602001808311611ce657829003601f168201915b5050505050905090565b6000600d80549050905090565b611d2433826130b8565b1515611d2f57600080fd5b611d3a83838361315f565b505050565b611d7e828260006040519080825280601f01601f191660200182016040528015611d785781602001600182028038833980820191505090505b50611e0f565b5050565b6000611d8d836124f4565b82101515611d9a57600080fd5b600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515611de657fe5b9060005260206000200154905092915050565b818160119190611e0a9291906143b5565b505050565b505050565b60606000601660008481526020019081526020016000205490506060611e6f6015600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611ed3565b90508092505050919050565b611e96838383604051806020016040528060008152506128e9565b505050565b6000611ea5611d0d565b82101515611eb257600080fd5b600d82815481101515611ec157fe5b90600052602060002001549050919050565b606060008273ffffffffffffffffffffffffffffffffffffffff1660001b905060606040518060400160405280601081526020017f30313233343536373839616263646566000000000000000000000000000000008152509050606060336040519080825280601f01601f191660200182016040528015611f635781602001600182028038833980820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181101515611f9657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181101515611ff657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060008090505b601481101561215e5782600485600c840160208110151561204957fe5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c60f81c60ff1681518110151561208357fe5b90602001015160f81c60f81b82600283026002018151811015156120a357fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535082600f60f81b85600c84016020811015156120ea57fe5b1a60f81b1660f81c60ff1681518110151561210157fe5b90602001015160f81c60f81b826002830260030181518110151561212157fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350808060010191505061202c565b50809350505050919050565b60006007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006121b585858585613183565b9050600060156000838152602001908152602001600020600001541461222e6040518060400160405280601781526020017f416c726561647920657869737420736f6c7574696f6e210000000000000000008152506122296015600086815260200190815260200160002060000154612ec5565b613291565b9015156122d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561229b578082015181840152602081019050612280565b50505050905090810190601f1680156122c85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50601360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663621e9ec0868686866040518563ffffffff1660e01b81526004018085600260200280838360005b83811015612353578082015181840152602081019050612338565b505050509050018460026000925b818410156123a75782846020020151600260200280838360005b8381101561239657808201518184015260208101905061237b565b505050509050019260010192612361565b9250505083600260200280838360005b838110156123d25780820151818401526020810190506123b7565b5050505090500182600260200280838360005b838110156124005780820151818401526020810190506123e5565b5050505090500194505050505060206040518083038186803b15801561242557600080fd5b505afa158015612439573d6000803e3d6000fd5b505050506040513d602081101561244f57600080fd5b810190808051906020019092919050505015156124d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f536f6c7574696f6e2069736e277420636f72726563742e00000000000000000081525060200191505060405180910390fd5b6124e18786868686612c14565b6124eb87876132d5565b50505050505050565b600061253d600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206132f6565b9050919050565b606060206040519080825280601f01601f19166020018201604052801561257a5781602001600182028038833980820191505090505b50905060008090505b60208110156125ef5780601f0360080260020a838115156125a057fe5b0460f81b82828151811015156125b257fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050612583565b50919050565b606060006016600084815260200190815260200160002054905060606126306015600084815260200190815260200160002060000154612ec5565b905060606126736015600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611ed3565b90506126eb6040518060400160405280600981526020017f20696e646578203a200000000000000000000000000000000000000000000000815250836040518060400160405280600981526020017f206f776e6572203a20000000000000000000000000000000000000000000000081525084613304565b9350505050919050565b606060108054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561278d5780601f106127625761010080835404028352916020019161278d565b820191906000526020600020905b81548152906001019060200180831161277057829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156127d257600080fd5b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b8181601091906128e49291906143b5565b505050565b6128f4848484611d1a565b6129008484848461332c565b151561290b57600080fd5b50505050565b606060118054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156129a95780601f1061297e576101008083540402835291602001916129a9565b820191906000526020600020905b81548152906001019060200180831161298c57829003601f168201915b5050505050905090565b8181600f91906129c49291906143b5565b505050565b60606129d482613046565b15156129df57600080fd5b601260008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015612a865780601f10612a5b57610100808354040283529160200191612a86565b820191906000526020600020905b815481529060010190602001808311612a6957829003601f168201915b50505050509050919050565b601360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612b61576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061455a6023913960400191505060405180910390fd5b612b6b84846132d5565b612b758284613517565b600190509392505050565b6000600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000612c2285858585613183565b9050612c3a600160145461357490919063ffffffff16565b601481905550856015600083815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601454601560008381526020019081526020016000206000018190555080601660006014548152602001908152602001600020819055507fcd096f17a41ca2f28be4f38411924d525e3be72c0a5047cae9fec2aff3fe0c5586604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612dde576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061455a6023913960400191505060405180910390fd5b60008090508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515612e1e57600080fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc952bd5aeb53e3b17bbef0f26d9d0b2eaf947aca5452382c4aaba18433db472b82604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15050565b60606000821415612f0d576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612ffa565b600082905060005b600082141515612f3b578080600101915050600a82811515612f3357fe5b049150612f15565b6060816040519080825280601f01601f191660200182016040528015612f705781602001600182028038833980820191505090505b50905060006001830390505b600086141515612ff257600a86811515612f9257fe5b0660300160f81b828280600190039350815181101515612fae57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a86811515612fea57fe5b049550612f7c565b819450505050505b919050565b6060600060166000848152602001908152602001600020549050606061303a6015600084815260200190815260200160002060000154612ec5565b90508092505050919050565b6000806007600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000806130c48361216a565b905060008173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614905060008573ffffffffffffffffffffffffffffffffffffffff1661311b8661180a565b73ffffffffffffffffffffffffffffffffffffffff1614905060006131408488612b80565b9050828061314b5750815b806131535750805b94505050505092915050565b61316a8383836135fe565b61317483826139c8565b61317e8282613b6c565b505050565b6000848484846040516020018085600260200280838360005b838110156131b757808201518184015260208101905061319c565b505050509050018460026000925b8184101561320b5782846020020151600260200280838360005b838110156131fa5780820151818401526020810190506131df565b5050505090500192600101926131c5565b9250505083600260200280838360005b8381101561323657808201518184015260208101905061321b565b5050505090500182600260200280838360005b83811015613264578082015181840152602081019050613249565b50505050905001945050505050604051602081830303815290604052805190602001209050949350505050565b60606132cd8383604051806020016040528060008152506040518060200160405280600081525060405180602001604052806000815250613c33565b905092915050565b6132df8282613f13565b6132e98282613b6c565b6132f2816140e3565b5050565b600081600001549050919050565b60606133228585858560405180602001604052806000815250613c33565b9050949350505050565b600061334d8473ffffffffffffffffffffffffffffffffffffffff1661412f565b151561335c576001905061350f565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561343757808201518184015260208101905061341c565b50505050905090810190601f1680156134645780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561348657600080fd5b505af115801561349a573d6000803e3d6000fd5b505050506040513d60208110156134b057600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b61352081613046565b151561352b57600080fd5b606061353682612ec5565b905060606135448483613291565b90508060126000858152602001908152602001600020908051906020019061356d929190614435565b5050505050565b60008082840190508381101515156135f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146136b06040518060400160405280601b81526020017f546f6b656e206f776e65722069736e277420746865206f776e657200000000008152506136a286611ed3565b6136ab86611ed3565b61417a565b901515613758576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561371d578082015181840152602081019050613702565b50505050905090810190601f16801561374a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008090508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156137d56040518060400160405280601681526020017f546f2069736e27742076616c69642061646472657373000000000000000000008152506137d086611ed3565b613291565b90151561387d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613842578082015181840152602081019050613827565b50505050905090810190601f16801561386f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50613887826141b0565b6138ce600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020614270565b613915600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020614293565b826007600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b6000613a206001600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506142a990919063ffffffff16565b90506000600c60008481526020019081526020016000205490508181141515613b13576000600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515613a9157fe5b9060005260206000200154905080600b60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515613aeb57fe5b906000526020600020018190555081600c600083815260200190815260200160002081905550505b600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003613b6591906144b5565b5050505050565b600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050600c600083815260200190815260200160002081905550600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b6060808690506060869050606086905060608690506060869050606081518351855187518951010101016040519080825280601f01601f191660200182016040528015613c8f5781602001600182028038833980820191505090505b509050606081905060008090506000809050600090505b8851811015613d1a578881815181101515613cbd57fe5b90602001015160f81c60f81b8383806001019450815181101515613cdd57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613ca6565b600090505b8751811015613d93578781815181101515613d3657fe5b90602001015160f81c60f81b8383806001019450815181101515613d5657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613d1f565b600090505b8651811015613e0c578681815181101515613daf57fe5b90602001015160f81c60f81b8383806001019450815181101515613dcf57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613d98565b600090505b8551811015613e85578581815181101515613e2857fe5b90602001015160f81c60f81b8383806001019450815181101515613e4857fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613e11565b600090505b8451811015613efe578481815181101515613ea157fe5b90602001015160f81c60f81b8383806001019450815181101515613ec157fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613e8a565b82995050505050505050505095945050505050565b60008090508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015613f5a5750613f5882613046565b155b1515613fb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180614507602a913960400191505060405180910390fd5b60006007600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050836007600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550614082600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020614293565b828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b600d80549050600e600083815260200190815260200160002081905550600d81908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561417157506000801b8214155b92505050919050565b60606141a78484846040518060200160405280600081525060405180602001604052806000815250613c33565b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561426d5760006008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b614288600182600001546142a990919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b60006142eb83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506142f3565b905092915050565b600083831115829015156143a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561436757808201518184015260208101905061434c565b50505050905090810190601f1680156143945780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106143f657803560ff1916838001178555614424565b82800160010185558215614424579182015b82811115614423578235825591602001919060010190614408565b5b50905061443191906144e1565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061447657805160ff19168380011785556144a4565b828001600101855582156144a4579182015b828111156144a3578251825591602001919060010190614488565b5b5090506144b191906144e1565b5090565b8154818355818111156144dc578183600052602060002091820191016144db91906144e1565b5b505050565b61450391905b808211156144ff5760008160009055506001016144e7565b5090565b9056fe546f6b656e20416c726561647920657869737473206f72206164647265737320697320696e76616c69644d736753656e6465722069736e277420746865206f776e6572206f662074686520636f6e74726163744e6f7420656e61626c652063617573652049742773206e6f7420746865206f776e6572a165627a7a72305820595d9939bb38910e297b7bba5a7fb65c7b265fd11b4fa8a1b30a2d4ba5b1a794002968747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f756461636974792d626c6f636b636861696e2f63617073746f6e652f",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061021c5760003560e01c80636aa69d4e11610125578063c47f0027116100ad578063e985e9c51161007c578063e985e9c514611371578063ea95deaf146113ed578063f2fde38b1461156e578063f76f950e146115b2578063fea369d0146116595761021c565b8063c47f00271461110a578063c87b56dd14611183578063cf6956881461122a578063d3fc9864146112745761021c565b806395d89b41116100f457806395d89b4114610e36578063a22cb46514610eb9578063b84c824614610f09578063b88d4fde14610f82578063bdc32be0146110875761021c565b80636aa69d4e14610b0557806370a0823114610c90578063775a8f5e14610ce857806383ae502e14610d8f5761021c565b806327dc297e116101a85780633d3d34be116101775780633d3d34be1461088357806342842e0e1461092a5780634f6ccce7146109985780635e57966d146109da5780636352211e14610a975761021c565b806327dc297e146105875780632f745c591461064c57806330176e13146106ae57806338bbfa50146107275761021c565b806315070401116101ef57806315070401146103c557806316c38b3c1461044857806317d7de7c1461047857806318160ddd146104fb57806323b872dd146105195761021c565b806301ffc9a71461022157806306fdde0314610286578063081812fc14610309578063095ea7b314610377575b600080fd5b61026c6004803603602081101561023757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050611700565b604051808215151515815260200191505060405180910390f35b61028e611768565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102ce5780820151818401526020810190506102b3565b50505050905090810190601f1680156102fb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103356004803603602081101561031f57600080fd5b810190808035906020019092919050505061180a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103c36004803603604081101561038d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506118c4565b005b6103cd611b05565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561040d5780820151818401526020810190506103f2565b50505050905090810190601f16801561043a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104766004803603602081101561045e57600080fd5b81019080803515159060200190929190505050611ba7565b005b610480611c6b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104c05780820151818401526020810190506104a5565b50505050905090810190601f1680156104ed5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610503611d0d565b6040518082815260200191505060405180910390f35b6105856004803603606081101561052f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611d1a565b005b61064a6004803603604081101561059d57600080fd5b8101908080359060200190929190803590602001906401000000008111156105c457600080fd5b8201836020820111156105d657600080fd5b803590602001918460018302840111640100000000831117156105f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611d3f565b005b6106986004803603604081101561066257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611d82565b6040518082815260200191505060405180910390f35b610725600480360360208110156106c457600080fd5b81019080803590602001906401000000008111156106e157600080fd5b8201836020820111156106f357600080fd5b8035906020019184600183028401116401000000008311171561071557600080fd5b9091929391929390505050611df9565b005b6108816004803603606081101561073d57600080fd5b81019080803590602001909291908035906020019064010000000081111561076457600080fd5b82018360208201111561077657600080fd5b8035906020019184600183028401116401000000008311171561079857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156107fb57600080fd5b82018360208201111561080d57600080fd5b8035906020019184600183028401116401000000008311171561082f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611e0f565b005b6108af6004803603602081101561089957600080fd5b8101908080359060200190929190505050611e14565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108ef5780820151818401526020810190506108d4565b50505050905090810190601f16801561091c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109966004803603606081101561094057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611e7b565b005b6109c4600480360360208110156109ae57600080fd5b8101908080359060200190929190505050611e9b565b6040518082815260200191505060405180910390f35b610a1c600480360360208110156109f057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ed3565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a5c578082015181840152602081019050610a41565b50505050905090810190601f168015610a895780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610ac360048036036020811015610aad57600080fd5b810190808035906020019092919050505061216a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610c8e6004803603610180811015610b1c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b82821015610bfb578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505081526020019060010190610ba7565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192905050506121a7565b005b610cd260048036036020811015610ca657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506124f4565b6040518082815260200191505060405180910390f35b610d1460048036036020811015610cfe57600080fd5b8101908080359060200190929190505050612544565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610d54578082015181840152602081019050610d39565b50505050905090810190601f168015610d815780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610dbb60048036036020811015610da557600080fd5b81019080803590602001909291905050506125f5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610dfb578082015181840152602081019050610de0565b50505050905090810190601f168015610e285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610e3e6126f5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e7e578082015181840152602081019050610e63565b50505050905090810190601f168015610eab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610f0760048036036040811015610ecf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050612797565b005b610f8060048036036020811015610f1f57600080fd5b8101908080359060200190640100000000811115610f3c57600080fd5b820183602082011115610f4e57600080fd5b80359060200191846001830284011164010000000083111715610f7057600080fd5b90919293919293905050506128d3565b005b61108560048036036080811015610f9857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610fff57600080fd5b82018360208201111561101157600080fd5b8035906020019184600183028401116401000000008311171561103357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506128e9565b005b61108f612911565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156110cf5780820151818401526020810190506110b4565b50505050905090810190601f1680156110fc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6111816004803603602081101561112057600080fd5b810190808035906020019064010000000081111561113d57600080fd5b82018360208201111561114f57600080fd5b8035906020019184600183028401116401000000008311171561117157600080fd5b90919293919293905050506129b3565b005b6111af6004803603602081101561119957600080fd5b81019080803590602001909291905050506129c9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156111ef5780820151818401526020810190506111d4565b50505050905090810190601f16801561121c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611232612a92565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6113576004803603606081101561128a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156112d157600080fd5b8201836020820111156112e357600080fd5b8035906020019184600183028401116401000000008311171561130557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612ab8565b604051808215151515815260200191505060405180910390f35b6113d36004803603604081101561138757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612b80565b604051808215151515815260200191505060405180910390f35b61156c600480360361016081101561140457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b828210156114d9578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505081526020019060010190611485565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050509192919290505050612c14565b005b6115b06004803603602081101561158457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612d37565b005b6115de600480360360208110156115c857600080fd5b8101908080359060200190929190505050612ec5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561161e578082015181840152602081019050611603565b50505050905090810190601f16801561164b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6116856004803603602081101561166f57600080fd5b8101908080359060200190929190505050612fff565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156116c55780820151818401526020810190506116aa565b50505050905090810190601f1680156116f25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6060600f8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118005780601f106117d557610100808354040283529160200191611800565b820191906000526020600020905b8154815290600101906020018083116117e357829003601f168201915b5050505050905090565b600061181582613046565b1515611889576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f546f6b656e20646f65736e27742065786973740000000000000000000000000081525060200191505060405180910390fd5b6008600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff166007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561199b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f416c7265616479206f776e6572206f6620746f6b656e4964000000000000000081525060200191505060405180910390fd5b6007600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a54576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806145316029913960400191505060405180910390fd5b816008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b606060108054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b9d5780601f10611b7257610100808354040283529160200191611b9d565b820191906000526020600020905b815481529060010190602001808311611b8057829003601f168201915b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611c4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061455a6023913960400191505060405180910390fd5b80600060146101000a81548160ff02191690831515021790555050565b6060600f8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d035780601f10611cd857610100808354040283529160200191611d03565b820191906000526020600020905b815481529060010190602001808311611ce657829003601f168201915b5050505050905090565b6000600d80549050905090565b611d2433826130b8565b1515611d2f57600080fd5b611d3a83838361315f565b505050565b611d7e828260006040519080825280601f01601f191660200182016040528015611d785781602001600182028038833980820191505090505b50611e0f565b5050565b6000611d8d836124f4565b82101515611d9a57600080fd5b600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515611de657fe5b9060005260206000200154905092915050565b818160119190611e0a9291906143b5565b505050565b505050565b60606000601660008481526020019081526020016000205490506060611e6f6015600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611ed3565b90508092505050919050565b611e96838383604051806020016040528060008152506128e9565b505050565b6000611ea5611d0d565b82101515611eb257600080fd5b600d82815481101515611ec157fe5b90600052602060002001549050919050565b606060008273ffffffffffffffffffffffffffffffffffffffff1660001b905060606040518060400160405280601081526020017f30313233343536373839616263646566000000000000000000000000000000008152509050606060336040519080825280601f01601f191660200182016040528015611f635781602001600182028038833980820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181101515611f9657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181101515611ff657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060008090505b601481101561215e5782600485600c840160208110151561204957fe5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c60f81c60ff1681518110151561208357fe5b90602001015160f81c60f81b82600283026002018151811015156120a357fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535082600f60f81b85600c84016020811015156120ea57fe5b1a60f81b1660f81c60ff1681518110151561210157fe5b90602001015160f81c60f81b826002830260030181518110151561212157fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350808060010191505061202c565b50809350505050919050565b60006007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006121b585858585613183565b9050600060156000838152602001908152602001600020600001541461222e6040518060400160405280601781526020017f416c726561647920657869737420736f6c7574696f6e210000000000000000008152506122296015600086815260200190815260200160002060000154612ec5565b613291565b9015156122d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561229b578082015181840152602081019050612280565b50505050905090810190601f1680156122c85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50601360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663621e9ec0868686866040518563ffffffff1660e01b81526004018085600260200280838360005b83811015612353578082015181840152602081019050612338565b505050509050018460026000925b818410156123a75782846020020151600260200280838360005b8381101561239657808201518184015260208101905061237b565b505050509050019260010192612361565b9250505083600260200280838360005b838110156123d25780820151818401526020810190506123b7565b5050505090500182600260200280838360005b838110156124005780820151818401526020810190506123e5565b5050505090500194505050505060206040518083038186803b15801561242557600080fd5b505afa158015612439573d6000803e3d6000fd5b505050506040513d602081101561244f57600080fd5b810190808051906020019092919050505015156124d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f536f6c7574696f6e2069736e277420636f72726563742e00000000000000000081525060200191505060405180910390fd5b6124e18786868686612c14565b6124eb87876132d5565b50505050505050565b600061253d600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206132f6565b9050919050565b606060206040519080825280601f01601f19166020018201604052801561257a5781602001600182028038833980820191505090505b50905060008090505b60208110156125ef5780601f0360080260020a838115156125a057fe5b0460f81b82828151811015156125b257fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050612583565b50919050565b606060006016600084815260200190815260200160002054905060606126306015600084815260200190815260200160002060000154612ec5565b905060606126736015600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611ed3565b90506126eb6040518060400160405280600981526020017f20696e646578203a200000000000000000000000000000000000000000000000815250836040518060400160405280600981526020017f206f776e6572203a20000000000000000000000000000000000000000000000081525084613304565b9350505050919050565b606060108054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561278d5780601f106127625761010080835404028352916020019161278d565b820191906000526020600020905b81548152906001019060200180831161277057829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156127d257600080fd5b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b8181601091906128e49291906143b5565b505050565b6128f4848484611d1a565b6129008484848461332c565b151561290b57600080fd5b50505050565b606060118054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156129a95780601f1061297e576101008083540402835291602001916129a9565b820191906000526020600020905b81548152906001019060200180831161298c57829003601f168201915b5050505050905090565b8181600f91906129c49291906143b5565b505050565b60606129d482613046565b15156129df57600080fd5b601260008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015612a865780601f10612a5b57610100808354040283529160200191612a86565b820191906000526020600020905b815481529060010190602001808311612a6957829003601f168201915b50505050509050919050565b601360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612b61576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061455a6023913960400191505060405180910390fd5b612b6b84846132d5565b612b758284613517565b600190509392505050565b6000600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000612c2285858585613183565b9050612c3a600160145461357490919063ffffffff16565b601481905550856015600083815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601454601560008381526020019081526020016000206000018190555080601660006014548152602001908152602001600020819055507fcd096f17a41ca2f28be4f38411924d525e3be72c0a5047cae9fec2aff3fe0c5586604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612dde576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061455a6023913960400191505060405180910390fd5b60008090508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515612e1e57600080fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc952bd5aeb53e3b17bbef0f26d9d0b2eaf947aca5452382c4aaba18433db472b82604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15050565b60606000821415612f0d576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612ffa565b600082905060005b600082141515612f3b578080600101915050600a82811515612f3357fe5b049150612f15565b6060816040519080825280601f01601f191660200182016040528015612f705781602001600182028038833980820191505090505b50905060006001830390505b600086141515612ff257600a86811515612f9257fe5b0660300160f81b828280600190039350815181101515612fae57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a86811515612fea57fe5b049550612f7c565b819450505050505b919050565b6060600060166000848152602001908152602001600020549050606061303a6015600084815260200190815260200160002060000154612ec5565b90508092505050919050565b6000806007600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000806130c48361216a565b905060008173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614905060008573ffffffffffffffffffffffffffffffffffffffff1661311b8661180a565b73ffffffffffffffffffffffffffffffffffffffff1614905060006131408488612b80565b9050828061314b5750815b806131535750805b94505050505092915050565b61316a8383836135fe565b61317483826139c8565b61317e8282613b6c565b505050565b6000848484846040516020018085600260200280838360005b838110156131b757808201518184015260208101905061319c565b505050509050018460026000925b8184101561320b5782846020020151600260200280838360005b838110156131fa5780820151818401526020810190506131df565b5050505090500192600101926131c5565b9250505083600260200280838360005b8381101561323657808201518184015260208101905061321b565b5050505090500182600260200280838360005b83811015613264578082015181840152602081019050613249565b50505050905001945050505050604051602081830303815290604052805190602001209050949350505050565b60606132cd8383604051806020016040528060008152506040518060200160405280600081525060405180602001604052806000815250613c33565b905092915050565b6132df8282613f13565b6132e98282613b6c565b6132f2816140e3565b5050565b600081600001549050919050565b60606133228585858560405180602001604052806000815250613c33565b9050949350505050565b600061334d8473ffffffffffffffffffffffffffffffffffffffff1661412f565b151561335c576001905061350f565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561343757808201518184015260208101905061341c565b50505050905090810190601f1680156134645780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561348657600080fd5b505af115801561349a573d6000803e3d6000fd5b505050506040513d60208110156134b057600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b61352081613046565b151561352b57600080fd5b606061353682612ec5565b905060606135448483613291565b90508060126000858152602001908152602001600020908051906020019061356d929190614435565b5050505050565b60008082840190508381101515156135f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146136b06040518060400160405280601b81526020017f546f6b656e206f776e65722069736e277420746865206f776e657200000000008152506136a286611ed3565b6136ab86611ed3565b61417a565b901515613758576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561371d578082015181840152602081019050613702565b50505050905090810190601f16801561374a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008090508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156137d56040518060400160405280601681526020017f546f2069736e27742076616c69642061646472657373000000000000000000008152506137d086611ed3565b613291565b90151561387d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613842578082015181840152602081019050613827565b50505050905090810190601f16801561386f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50613887826141b0565b6138ce600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020614270565b613915600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020614293565b826007600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b6000613a206001600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506142a990919063ffffffff16565b90506000600c60008481526020019081526020016000205490508181141515613b13576000600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515613a9157fe5b9060005260206000200154905080600b60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515613aeb57fe5b906000526020600020018190555081600c600083815260200190815260200160002081905550505b600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003613b6591906144b5565b5050505050565b600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050600c600083815260200190815260200160002081905550600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b6060808690506060869050606086905060608690506060869050606081518351855187518951010101016040519080825280601f01601f191660200182016040528015613c8f5781602001600182028038833980820191505090505b509050606081905060008090506000809050600090505b8851811015613d1a578881815181101515613cbd57fe5b90602001015160f81c60f81b8383806001019450815181101515613cdd57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613ca6565b600090505b8751811015613d93578781815181101515613d3657fe5b90602001015160f81c60f81b8383806001019450815181101515613d5657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613d1f565b600090505b8651811015613e0c578681815181101515613daf57fe5b90602001015160f81c60f81b8383806001019450815181101515613dcf57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613d98565b600090505b8551811015613e85578581815181101515613e2857fe5b90602001015160f81c60f81b8383806001019450815181101515613e4857fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613e11565b600090505b8451811015613efe578481815181101515613ea157fe5b90602001015160f81c60f81b8383806001019450815181101515613ec157fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613e8a565b82995050505050505050505095945050505050565b60008090508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015613f5a5750613f5882613046565b155b1515613fb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180614507602a913960400191505060405180910390fd5b60006007600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050836007600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550614082600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020614293565b828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b600d80549050600e600083815260200190815260200160002081905550600d81908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561417157506000801b8214155b92505050919050565b60606141a78484846040518060200160405280600081525060405180602001604052806000815250613c33565b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561426d5760006008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b614288600182600001546142a990919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b60006142eb83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506142f3565b905092915050565b600083831115829015156143a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561436757808201518184015260208101905061434c565b50505050905090810190601f1680156143945780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106143f657803560ff1916838001178555614424565b82800160010185558215614424579182015b82811115614423578235825591602001919060010190614408565b5b50905061443191906144e1565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061447657805160ff19168380011785556144a4565b828001600101855582156144a4579182015b828111156144a3578251825591602001919060010190614488565b5b5090506144b191906144e1565b5090565b8154818355818111156144dc578183600052602060002091820191016144db91906144e1565b5b505050565b61450391905b808211156144ff5760008160009055506001016144e7565b5090565b9056fe546f6b656e20416c726561647920657869737473206f72206164647265737320697320696e76616c69644d736753656e6465722069736e277420746865206f776e6572206f662074686520636f6e74726163744e6f7420656e61626c652063617573652049742773206e6f7420746865206f776e6572a165627a7a72305820595d9939bb38910e297b7bba5a7fb65c7b265fd11b4fa8a1b30a2d4ba5b1a7940029",
  "sourceMap": "783:3790:3:-;;;1084:1;1062:23;;1545:245;8:9:-1;5:2;;;30:1;27;20:12;5:2;1545:245:3;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1545:245:3;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;1545:245:3;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;1545:245:3;;;;;;1692:9;1703:11;23538:4:0;23544:6;20865:282;;;;;;;;;;;;;;;;;616:10;607:6;;:19;;;;;;;;;;;;;;;;;;682:34;709:6;;;;;;;;;;;682:34;;;;;;;;;;;;;;;;;;;;;;2112:5;2102:7;;:15;;;;;;;;;;;;;;;;;;3108:40;2705:10;3127:20;;3108:18;;;:40;;:::i;:::-;5269;5143:10;5288:20;;5269:18;;;:40;;:::i;:::-;13594:51;13200:10;13613:31;;13594:18;;;:51;;:::i;:::-;21014:4;21006:5;:12;;;;;;;;;;;;:::i;:::-;;21038:6;21028:7;:16;;;;;;;;;;;;:::i;:::-;;21069:12;21054:27;;21091:49;20677:10;21110:29;;21091:18;;;:49;;:::i;:::-;20865:282;;;23463:187;;1767:15:3;1737:16;;:46;;;;;;;;;;;;;;;;;;1545:245;;;783:3790;;3458:158:0;3548:10;3533:25;;:11;:25;;;;;3525:34;;;;;;;;3605:4;3569:20;:33;3590:11;3569:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;3458:158;:::o;783:3790:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "783:3790:3:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;783:3790:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3246:133:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3246:133:0;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;21338:95;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;21338:95:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6507:225;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6507:225:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5904:597;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5904:597:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;21527:102;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;21527:102:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1843:123;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1843:123:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;21234:98;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;21234:98:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14359:94;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7709:195;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7709:195:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;14809:136:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14809:136:2;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14809:136:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14809:136:2;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14809:136:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14809:136:2;;;;;;;;;;;;;;;:::i;:::-;;14025:182:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14025:182:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;21956:114;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;21956:114:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;21956:114:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;21956:114:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;21956:114:0;;;;;;;;;;;;:::i;:::-;;14951:180:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14951:180:2;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14951:180:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14951:180:2;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14951:180:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14951:180:2;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14951:180:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14951:180:2;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14951:180:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14951:180:2;;;;;;;;;;;;;;;:::i;:::-;;3059:269:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3059:269:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3059:269:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7910:132:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7910:132:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;14790:148;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14790:148:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;57608:522:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;57608:522:2;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;57608:522:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5669:162:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5669:162:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3691:880:3;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;3691:880:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3691:880:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3691:880:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3691:880:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3691:880:3;;;;;;;;;;;;;;:::i;:::-;;5322:341:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5322:341:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;58136:219:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;58136:219:2;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;58136:219:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2642:411:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2642:411:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2642:411:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21635:99:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;21635:99:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7024:213;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7024:213:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;21740:90;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;21740:90:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;21740:90:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;21740:90:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;21740:90:0;;;;;;;;;;;;:::i;:::-;;8048:211;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8048:211:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8048:211:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8048:211:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8048:211:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8048:211:0;;;;;;;;;;;;;;;:::i;:::-;;21836:114;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;21836:114:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21439:82;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;21439:82:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;21439:82:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;21439:82:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;21439:82:0;;;;;;;;;;;;:::i;:::-;;22076:151;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;22076:151:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;22076:151:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;876:34:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;23977:227:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;23977:227:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;23977:227:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;23977:227:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;23977:227:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;23977:227:0;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;7558:145;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7558:145:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2137:499:3;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;2137:499:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2137:499:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2137:499:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2137:499:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2137:499:3;;;;;;;;;;;;;;:::i;:::-;;1004:402:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1004:402:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;43307:463:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;43307:463:2;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;43307:463:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3334:262:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3334:262:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3334:262:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3246:133:0;3316:4;3339:20;:33;3360:11;3339:33;;;;;;;;;;;;;;;;;;;;;;;;;;;3332:40;;3246:133;;;:::o;21338:95::-;21389:13;21421:5;21414:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21338:95;:::o;6507:225::-;6566:7;6644:16;6652:7;6644;:16::i;:::-;6636:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6701:15;:24;6717:7;6701:24;;;;;;;;;;;;;;;;;;;;;6694:31;;6507:225;;;:::o;5904:597::-;6085:2;6061:26;;:11;:20;6073:7;6061:20;;;;;;;;;;;;;;;;;;;;;:26;;;;6053:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6252:11;:20;6264:7;6252:20;;;;;;;;;;;;;;;;;;;;;6238:34;;:10;:34;;;6230:87;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6407:2;6380:15;:24;6396:7;6380:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;6486:7;6482:2;6461:33;;6470:10;6461:33;;;;;;;;;;;;5904:597;;:::o;21527:102::-;21583:13;21615:7;21608:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21527:102;:::o;1843:123::-;883:6;;;;;;;;;;;869:20;;:10;:20;;;861:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1945:14;1935:7;;:24;;;;;;;;;;;;;;;;;;1843:123;:::o;21234:98::-;21288:13;21320:5;21313:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21234:98;:::o;14359:94::-;14403:7;14429:10;:17;;;;14422:24;;14359:94;:::o;7709:195::-;7815:39;7834:10;7846:7;7815:18;:39::i;:::-;7807:48;;;;;;;;7865:32;7879:4;7885:2;7889:7;7865:13;:32::i;:::-;7709:195;;;:::o;14809:136:2:-;14898:40;14909:5;14916:7;14935:1;14925:12;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;14925:12:2;;;;14898:10;:40::i;:::-;14809:136;;:::o;14025:182:0:-;14105:7;14140:16;14150:5;14140:9;:16::i;:::-;14132:5;:24;14124:33;;;;;;;;14174:12;:19;14187:5;14174:19;;;;;;;;;;;;;;;14194:5;14174:26;;;;;;;;;;;;;;;;;;14167:33;;14025:182;;;;:::o;21956:114::-;22051:12;;22035:13;:28;;;;;;;:::i;:::-;;21956:114;;:::o;14951:180:2:-;;;;:::o;3059:269:3:-;3156:13;3180:11;3194:18;:33;3213:13;3194:33;;;;;;;;;;;;3180:47;;3237:19;3259:40;3275:12;:17;3288:3;3275:17;;;;;;;;;;;:23;;;;;;;;;;;;3259:15;:40::i;:::-;3237:62;;3316:5;3309:12;;;;3059:269;;;:::o;7910:132:0:-;7996:39;8013:4;8019:2;8023:7;7996:39;;;;;;;;;;;;:16;:39::i;:::-;7910:132;;;:::o;14790:148::-;14848:7;14883:13;:11;:13::i;:::-;14875:5;:21;14867:30;;;;;;;;14914:10;14925:5;14914:17;;;;;;;;;;;;;;;;;;14907:24;;14790:148;;;:::o;57608:522:2:-;57687:27;57726:13;57758:8;57750:17;;57742:26;;57726:42;;57778:21;:42;;;;;;;;;;;;;;;;;;;57831:16;57860:2;57850:13;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;57850:13:2;;;;57831:32;;57873:12;:3;57877:1;57873:6;;;;;;;;;;;;;;:12;;;;;;;;;;;57895;:3;57899:1;57895:6;;;;;;;;;;;;;;:12;;;;;;;;;;;57922:6;57931:1;57922:10;;57917:179;57938:2;57934:1;:6;57917:179;;;57974:8;58011:1;57994:5;58004:2;58000:1;:6;57994:13;;;;;;;;;;;;:18;;;;;57988:25;;57983:31;;57974:41;;;;;;;;;;;;;;;;;;;57961:3;57969:1;57967;:3;57965:1;:5;57961:10;;;;;;;;;;;;;;:54;;;;;;;;;;;58042:8;58078:4;58062:20;;:5;58072:2;58068:1;:6;58062:13;;;;;;;;;;;;:20;58056:27;;58051:33;;58042:43;;;;;;;;;;;;;;;;;;;58029:3;58037:1;58035;:3;58033:1;:5;58029:10;;;;;;;;;;;;;;:56;;;;;;;;;;;57942:3;;;;;;;57917:179;;;;58119:3;58105:18;;;;;57608:522;;;:::o;5669:162:0:-;5724:7;5804:11;:20;5816:7;5804:20;;;;;;;;;;;;;;;;;;;;;5797:27;;5669:162;;;:::o;3691:880:3:-;3894:19;3916:29;3932:1;3934;3936;3938:6;3916:15;:29::i;:::-;3894:51;;4073:1;4038:12;:25;4051:11;4038:25;;;;;;;;;;;:31;;;:36;4088:95;;;;;;;;;;;;;;;;;;4141:41;4150:12;:25;4163:11;4150:25;;;;;;;;;;;:31;;;4141:8;:41::i;:::-;4088:9;:95::i;:::-;4030:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4030:154:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4270:16;;;;;;;;;;;:25;;;4313:1;4332;4351;4370:6;4270:107;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4270:107:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4270:107:3;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4270:107:3;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4270:107:3;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4270:107:3;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4270:107:3;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4270:107:3;;;;;;;;;;;;;;;;4262:156;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4429:97;4454:5;4474:1;4489;4504;4519:6;4429:11;:97::i;:::-;4537:27;4549:5;4556:7;4537:11;:27::i;:::-;3691:880;;;;;;;:::o;5322:341:0:-;5377:7;5622:34;:17;:24;5640:5;5622:24;;;;;;;;;;;;;;;:32;:34::i;:::-;5615:41;;5322:341;;;:::o;58136:219:2:-;58199:14;58239:2;58229:13;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;58229:13:2;;;;58225:17;;58257:6;58266:1;58257:10;;58252:97;58273:2;58269:1;:6;58252:97;;;58331:1;58326:2;:6;58323:1;:10;58319:1;:15;58314:1;:21;;;;;;;;58303:34;;58296:1;58298;58296:4;;;;;;;;;;;;;;:41;;;;;;;;;;;58277:3;;;;;;;58252:97;;;;58136:219;;;:::o;2642:411:3:-;2746:13;2770:11;2784:18;:33;2803:13;2784:33;;;;;;;;;;;;2770:47;;2827:19;2849:33;2858:12;:17;2871:3;2858:17;;;;;;;;;;;:23;;;2849:8;:33::i;:::-;2827:55;;2892:19;2914:40;2930:12;:17;2943:3;2930:17;;;;;;;;;;;:23;;;;;;;;;;;;2914:15;:40::i;:::-;2892:62;;2971:75;;;;;;;;;;;;;;;;;;3007:5;2971:75;;;;;;;;;;;;;;;;;3040:5;2971:9;:75::i;:::-;2964:82;;;;;2642:411;;;:::o;21635:99:0:-;21688:13;21720:7;21713:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21635:99;:::o;7024:213::-;7109:10;7103:16;;:2;:16;;;;7095:25;;;;;;;;7167:8;7130:18;:30;7149:10;7130:30;;;;;;;;;;;;;;;:34;7161:2;7130:34;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;;;;;;;7217:2;7190:40;;7205:10;7190:40;;;7221:8;7190:40;;;;;;;;;;;;;;;;;;;;;;7024:213;;:::o;21740:90::-;21817:6;;21807:7;:16;;;;;;;:::i;:::-;;21740:90;;:::o;8048:211::-;8154:31;8167:4;8173:2;8177:7;8154:12;:31::i;:::-;8203:48;8226:4;8232:2;8236:7;8245:5;8203:22;:48::i;:::-;8195:57;;;;;;;;8048:211;;;;:::o;21836:114::-;21898:13;21930;21923:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21836:114;:::o;21439:82::-;21510:4;;21502:5;:12;;;;;;;:::i;:::-;;21439:82;;:::o;22076:151::-;22134:13;22167:16;22175:7;22167;:16::i;:::-;22159:25;;;;;;;;22201:10;:19;22212:7;22201:19;;;;;;;;;;;22194:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;22076:151;;;:::o;876:34:3:-;;;;;;;;;;;;;:::o;23977:227:0:-;24083:4;883:6;;;;;;;;;;;869:20;;:10;:20;;;861:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;24098:24;24110:2;24114:7;24098:11;:24::i;:::-;24132:44;24159:8;24168:7;24132:26;:44::i;:::-;24193:4;24186:11;;23977:227;;;;;:::o;7558:145::-;7638:4;7661:18;:25;7680:5;7661:25;;;;;;;;;;;;;;;:35;7687:8;7661:35;;;;;;;;;;;;;;;;;;;;;;;;;7654:42;;7558:145;;;;:::o;2137:499:3:-;2321:19;2343:29;2359:1;2361;2363;2365:6;2343:15;:29::i;:::-;2321:51;;2400:21;2419:1;2400:14;;:18;;:21;;;;:::i;:::-;2383:14;:38;;;;2466:5;2432:12;:25;2445:11;2432:25;;;;;;;;;;;:31;;;:39;;;;;;;;;;;;;;;;;;2515:14;;2481:12;:25;2494:11;2481:25;;;;;;;;;;;:31;;:48;;;;2577:11;2540:18;:34;2559:14;;2540:34;;;;;;;;;;;:48;;;;2604:25;2623:5;2604:25;;;;;;;;;;;;;;;;;;;;;;2137:499;;;;;;:::o;1004:402:0:-;883:6;;;;;;;;;;;869:20;;:10;:20;;;861:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1164:20;1195:1;1164:33;;1227:12;1215:24;;:8;:24;;;;1207:33;;;;;;;;1339:8;1330:6;;:17;;;;;;;;;;;;;;;;;;1363:36;1390:8;1363:36;;;;;;;;;;;;;;;;;;;;;;939:1;1004:402;:::o;43307:463:2:-;43355:27;43404:1;43398:2;:7;43394:48;;;43421:10;;;;;;;;;;;;;;;;;;;;;43394:48;43451:6;43460:2;43451:11;;43472:8;43490:66;43502:1;43497;:6;;43490:66;;;43519:5;;;;;;;43543:2;43538:7;;;;;;;;;;;43490:66;;;43565:17;43595:3;43585:14;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;43585:14:2;;;;43565:34;;43609:6;43624:1;43618:3;:7;43609:16;;43635:100;43648:1;43642:2;:7;;43635:100;;;43698:2;43693;:7;;;;;;;;43688:2;:12;43677:25;;43665:4;43670:3;;;;;;;43665:9;;;;;;;;;;;;;;:37;;;;;;;;;;;43722:2;43716:8;;;;;;;;;;;43635:100;;;43758:4;43744:19;;;;;;43307:463;;;;:::o;3334:262:3:-;3431:13;3455:11;3469:18;:33;3488:13;3469:33;;;;;;;;;;;;3455:47;;3512:19;3534:33;3543:12;:17;3556:3;3543:17;;;;;;;;;;;:23;;;3534:8;:33::i;:::-;3512:55;;3584:5;3577:12;;;;3334:262;;;:::o;8453:152:0:-;8510:4;8526:13;8542:11;:20;8554:7;8542:20;;;;;;;;;;;;;;;;;;;;;8526:36;;8596:1;8579:19;;:5;:19;;;;8572:26;;;8453:152;;;:::o;8965:727::-;9083:4;9099:13;9115:16;9123:7;9115;:16::i;:::-;9099:32;;9141:19;9174:5;9163:16;;:7;:16;;;9141:38;;9387:31;9445:7;9421:31;;:20;9433:7;9421:11;:20::i;:::-;:31;;;9387:65;;9462:20;9485:32;9502:5;9509:7;9485:16;:32::i;:::-;9462:55;;9557:14;:70;;;;9601:26;9557:70;:114;;;;9656:15;9557:114;9536:149;;;;;;8965:727;;;;:::o;15313:239::-;15398:38;15418:4;15424:2;15428:7;15398:19;:38::i;:::-;15447:47;15480:4;15486:7;15447:32;:47::i;:::-;15505:40;15533:2;15537:7;15505:27;:40::i;:::-;15313:239;;;:::o;1796:252:3:-;1976:7;2028:1;2030;2032;2034:5;2011:29;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2011:29:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2011:29:3;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2011:29:3;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2011:29:3;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2011:29:3;;;2001:40;;;;;;1994:47;;1796:252;;;;;;:::o;39748:166:2:-;39826:33;39878:29;39888:2;39892;39878:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:9;:29::i;:::-;39871:36;;39748:166;;;;:::o;15807:196:0:-;15870:24;15882:2;15886:7;15870:11;:24::i;:::-;15905:40;15933:2;15937:7;15905:27;:40::i;:::-;15956;15988:7;15956:31;:40::i;:::-;15807:196;;:::o;1065:112:5:-;1130:7;1156;:14;;;1149:21;;1065:112;;;:::o;40110:202:2:-;40224:33;40276:29;40286:2;40290;40294;40298;40276:29;;;;;;;;;;;;:9;:29::i;:::-;40269:36;;40110:202;;;;;;:::o;12045:347:0:-;12166:4;12191:15;:2;:13;;;:15::i;:::-;12190:16;12186:58;;;12229:4;12222:11;;;;12186:58;12254:13;12286:2;12270:36;;;12307:10;12319:4;12325:7;12334:5;12270:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;12270:70:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;12270:70:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;12270:70:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;12270:70:0;;;;;;;;;;;;;;;;12254:86;;4276:10;12368:16;;12358:26;;;:6;:26;;;;12350:35;;;12045:347;;;;;;;:::o;22486:595::-;22666:16;22674:7;22666;:16::i;:::-;22658:25;;;;;;;;22807:27;22837:17;22846:7;22837:8;:17::i;:::-;22807:47;;22963:26;22992:38;23002:12;23016:13;22992:9;:38::i;:::-;22963:67;;23062:12;23040:10;:19;23051:7;23040:19;;;;;;;;;;;:34;;;;;;;;;;;;:::i;:::-;;22486:595;;;;:::o;834:176:6:-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;10641:876:0:-;10828:4;10804:28;;:11;:20;10816:7;10804:20;;;;;;;;;;;;;;;;;;;;;:28;;;10847:82;;;;;;;;;;;;;;;;;;10887:21;10903:4;10887:15;:21::i;:::-;10909:19;10925:2;10909:15;:19::i;:::-;10847:9;:82::i;:::-;10796:134;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;10796:134:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10949:20;10980:1;10949:33;;11075:12;11069:18;;:2;:18;;;;11102:55;;;;;;;;;;;;;;;;;;11137:19;11153:2;11137:15;:19::i;:::-;11102:9;:55::i;:::-;11060:98;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;11060:98:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11200:23;11215:7;11200:14;:23::i;:::-;11318:35;:17;:23;11336:4;11318:23;;;;;;;;;;;;;;;:33;:35::i;:::-;11363:33;:17;:21;11381:2;11363:21;;;;;;;;;;;;;;;:31;:33::i;:::-;11429:2;11406:11;:20;11418:7;11406:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;11502:7;11498:2;11483:27;;11492:4;11483:27;;;;;;;;;;;;10641:876;;;;:::o;17779:1128::-;18041:22;18066:32;18096:1;18066:12;:18;18079:4;18066:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;18041:57;;18108:18;18129:17;:26;18147:7;18129:26;;;;;;;;;;;;18108:47;;18273:14;18259:10;:28;;18255:323;;;18303:19;18325:12;:18;18338:4;18325:18;;;;;;;;;;;;;;;18344:14;18325:34;;;;;;;;;;;;;;;;;;18303:56;;18407:11;18374:12;:18;18387:4;18374:18;;;;;;;;;;;;;;;18393:10;18374:30;;;;;;;;;;;;;;;;;:44;;;;18523:10;18490:17;:30;18508:11;18490:30;;;;;;;;;;;:43;;;;18255:323;;18664:12;:18;18677:4;18664:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;17779:1128;;;;:::o;16625:183::-;16738:12;:16;16751:2;16738:16;;;;;;;;;;;;;;;:23;;;;16709:17;:26;16727:7;16709:26;;;;;;;;;;;:52;;;;16771:12;:16;16784:2;16771:16;;;;;;;;;;;;;;;16793:7;16771:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;16771:30:0;;;;;;;;;;;;;;;;;;;;;;16625:183;;:::o;40318:1020:2:-;40450:33;40495:16;40520:2;40495:28;;40533:16;40558:2;40533:28;;40571:16;40596:2;40571:28;;40609:16;40634:2;40609:28;;40647:16;40672:2;40647:28;;40685:19;40770:3;:10;40757:3;:10;40744:3;:10;40731:3;:10;40718:3;:10;:23;:36;:49;:62;40707:74;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;40707:74:2;;;;40685:96;;40791:19;40819:5;40791:34;;40835:6;40844:1;40835:10;;40855:6;40864:1;40855:10;;40884:1;40880:5;;40875:78;40891:3;:10;40887:1;:14;40875:78;;;40936:3;40940:1;40936:6;;;;;;;;;;;;;;;;;;;40922;40929:3;;;;;;40922:11;;;;;;;;;;;;;;:20;;;;;;;;;;;40903:3;;;;;;;40875:78;;;40971:1;40967:5;;40962:78;40978:3;:10;40974:1;:14;40962:78;;;41023:3;41027:1;41023:6;;;;;;;;;;;;;;;;;;;41009;41016:3;;;;;;41009:11;;;;;;;;;;;;;;:20;;;;;;;;;;;40990:3;;;;;;;40962:78;;;41058:1;41054:5;;41049:78;41065:3;:10;41061:1;:14;41049:78;;;41110:3;41114:1;41110:6;;;;;;;;;;;;;;;;;;;41096;41103:3;;;;;;41096:11;;;;;;;;;;;;;;:20;;;;;;;;;;;41077:3;;;;;;;41049:78;;;41145:1;41141:5;;41136:78;41152:3;:10;41148:1;:14;41136:78;;;41197:3;41201:1;41197:6;;;;;;;;;;;;;;;;;;;41183;41190:3;;;;;;41183:11;;;;;;;;;;;;;;:20;;;;;;;;;;;41164:3;;;;;;;41136:78;;;41232:1;41228:5;;41223:78;41239:3;:10;41235:1;:14;41223:78;;;41284:3;41288:1;41284:6;;;;;;;;;;;;;;;;;;;41270;41277:3;;;;;;41270:11;;;;;;;;;;;;;;:20;;;;;;;;;;;41251:3;;;;;;;41223:78;;;41324:6;41310:21;;;;;;;;;;;40318:1020;;;;;;;:::o;9849:593:0:-;9996:20;10027:1;9996:33;;10053:12;10047:18;;:2;:18;;;;:52;;;;;10083:16;10091:7;10083;:16::i;:::-;10082:17;10047:52;10039:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10235:16;10254:11;:20;10266:7;10254:20;;;;;;;;;;;;;;;;;;;;;10235:39;;10307:2;10284:11;:20;10296:7;10284:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;10319:33;:17;:21;10337:2;10319:21;;;;;;;;;;;;;;;:31;:33::i;:::-;10427:7;10423:2;10404:31;;10413:8;10404:31;;;;;;;;;;;;9849:593;;;;:::o;17003:161::-;17106:10;:17;;;;17079:15;:24;17095:7;17079:24;;;;;;;;;;;:44;;;;17133:10;17149:7;17133:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;17133:24:0;;;;;;;;;;;;;;;;;;;;;;17003:161;:::o;686:610:8:-;746:4;1004:16;1030:19;1052:66;1030:88;;;;1219:7;1207:20;1195:32;;1258:11;1246:8;:23;;:42;;;;;1285:3;1273:15;;:8;:15;;1246:42;1238:51;;;;686:610;;;:::o;39920:184:2:-;40016:33;40068:29;40078:2;40082;40086;40068:29;;;;;;;;;;;;;;;;;;;;;;;;:9;:29::i;:::-;40061:36;;39920:184;;;;;:::o;12473:171:0:-;12572:1;12536:38;;:15;:24;12552:7;12536:24;;;;;;;;;;;;;;;;;;;;;:38;;;;12532:106;;;12625:1;12590:15;:24;12606:7;12590:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;12532:106;12473:171;:::o;1367:108:5:-;1447:21;1466:1;1447:7;:14;;;:18;;:21;;;;:::i;:::-;1430:7;:14;;:38;;;;1367:108;:::o;1183:178::-;1353:1;1335:7;:14;;;:19;;;;;;;;;;;1183:178;:::o;1274:134:6:-;1332:7;1358:43;1362:1;1365;1358:43;;;;;;;;;;;;;;;;;:3;:43::i;:::-;1351:50;;1274:134;;;;:::o;1732:187::-;1818:7;1850:1;1845;:6;;1853:12;1837:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1837:29:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1876:9;1892:1;1888;:5;1876:17;;1911:1;1904:8;;;1732:187;;;;;:::o;783:3790:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity >=0.4.21 <0.6.0;\n\nimport \"./ERC721Mintable.sol\";\n\n// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>\nimport \"./SquareVerifier.sol\";\n\ncontract VerifierZn is SquareVerifier {\n    \n    /*event VerifiedZnEvent (address owner);\n\n    function verifyZnTx(\n        address owner,\n        uint[2] memory a,\n        uint[2][2] memory b,\n        uint[2] memory c,\n        uint[2] memory input\n    ) public \n    returns(bool){\n\n        bool isVerified = this.verifyTx(\n            a,b,c,input\n        );\n\n        if(isVerified) {\n            emit VerifiedZnEvent(owner);\n        }\n\n        return isVerified;\n    }*/\n}\n\n\n// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class\ncontract SolnSquareVerifier is ERC721MintableComplete {\n    using SafeMath for uint256;\n\n    VerifierZn public verifierContract;\n\n    // TODO define a solutions struct that can hold an index & an address\n    struct Solution {\n        uint index;\n        address owner;\n    }\n    uint _countSolution = 0;\n\n    // as flight surety project address is not the key and link with uint -> key -> Solution with double map\n    // TODO define an array of the above struct\n    mapping(bytes32 => Solution) private _mapSolution;\n\n    // TODO define a mapping to store unique solutions submitted\n    mapping(uint => bytes32) private _mapLookupSolution;\n\n    // TODO Create an event to emit when a solution is added\n    event AddedSolutionEvent(address addressSolution);\n\n    constructor(\n        address verifierAddress,\n        string memory tokenName,\n        string memory tokenSymbol\n    ) \n    ERC721MintableComplete(tokenName, tokenSymbol)\n    public {\n        verifierContract = VerifierZn(verifierAddress);\n    }\n\n    function _getSolutionKey(\n        uint[2] memory a,\n        uint[2][2] memory b,\n        uint[2] memory c,\n        uint[2] memory input\n    )  \n    private \n    pure \n    returns (bytes32){\n        return keccak256(abi.encodePacked(a,b,c,input));\n    }\n\n    // TODO Create a function to add the solutions to the array and emit the event\n    function addSolution(\n        address owner,\n        uint[2] memory a,\n        uint[2][2] memory b,\n        uint[2] memory c,\n        uint[2] memory inputs\n    ) public \n    {\n        bytes32 solutionKey = _getSolutionKey(a,b,c,inputs);\n\n        _countSolution = _countSolution.add(1);\n\n        _mapSolution[solutionKey].owner = owner;\n        _mapSolution[solutionKey].index = _countSolution;\n\n        _mapLookupSolution[_countSolution] = solutionKey;\n\n        emit AddedSolutionEvent(owner);\n    }\n\n    function getSolutionInfoByCount(\n        uint256 countSolution\n    ) \n    public\n    view \n    returns (string memory){\n        bytes32 key = _mapLookupSolution[countSolution];\n        string memory index = uint2str(_mapSolution[key].index);\n        string memory owner = addressToString(_mapSolution[key].owner);\n        return strConcat(\n            \" index : \", index, \n            \" owner : \", owner);\n    }\n\n    function getOwnerByCount(\n        uint256 countSolution\n    ) \n    public\n    view \n    returns (string memory){\n        bytes32 key = _mapLookupSolution[countSolution];\n        string memory owner = addressToString(_mapSolution[key].owner);\n        return owner;\n    }\n\n    function getIndexByCount(\n        uint256 countSolution\n    ) \n    public\n    view \n    returns (string memory){\n        bytes32 key = _mapLookupSolution[countSolution];\n        string memory index = uint2str(_mapSolution[key].index);\n        return index;\n    }\n\n\n    // TODO Create a function to mint new NFT only after the solution has been verified\n    function mintNewNFT(\n        address owner,\n        uint256 tokenId,\n        uint[2] memory a,\n        uint[2][2] memory b,\n        uint[2] memory c,\n        uint[2] memory inputs\n    ) public {\n        bytes32 solutionKey = _getSolutionKey(a,b,c,inputs);\n\n        //  - make sure the solution is unique (has not been used before)\n        require(_mapSolution[solutionKey].index == 0,\n            strConcat(\"Already exist solution!\",\n                uint2str(_mapSolution[solutionKey].index)));\n\n        //  - make sure you handle metadata as well as tokenSuplly\n        require(verifierContract.verifyTx(\n                a,\n                b,\n                c,\n                inputs), \n            \"Solution isn't correct.\");\n\n        addSolution(\n            owner, \n            a,\n            b,\n            c,\n            inputs);\n\n        super._mint(owner, tokenId);\n    }\n}",
  "sourcePath": "D:/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SolnSquareVerifier.sol",
  "ast": {
    "absolutePath": "/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SolnSquareVerifier.sol",
    "exportedSymbols": {
      "SolnSquareVerifier": [
        7986
      ],
      "VerifierZn": [
        7672
      ]
    },
    "id": 7987,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7667,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".21",
          "<",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:32:3"
      },
      {
        "absolutePath": "/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/ERC721Mintable.sol",
        "file": "./ERC721Mintable.sol",
        "id": 7668,
        "nodeType": "ImportDirective",
        "scope": 7987,
        "sourceUnit": 1194,
        "src": "34:30:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SquareVerifier.sol",
        "file": "./SquareVerifier.sol",
        "id": 7669,
        "nodeType": "ImportDirective",
        "scope": 7987,
        "sourceUnit": 10536,
        "src": "173:30:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7670,
              "name": "SquareVerifier",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10535,
              "src": "228:14:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SquareVerifier_$10535",
                "typeString": "contract SquareVerifier"
              }
            },
            "id": 7671,
            "nodeType": "InheritanceSpecifier",
            "src": "228:14:3"
          }
        ],
        "contractDependencies": [
          10535
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7672,
        "linearizedBaseContracts": [
          7672,
          10535
        ],
        "name": "VerifierZn",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 7987,
        "src": "205:473:3"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7673,
              "name": "ERC721MintableComplete",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1193,
              "src": "814:22:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721MintableComplete_$1193",
                "typeString": "contract ERC721MintableComplete"
              }
            },
            "id": 7674,
            "nodeType": "InheritanceSpecifier",
            "src": "814:22:3"
          }
        ],
        "contractDependencies": [
          984,
          686,
          1193,
          66,
          118,
          164,
          1147,
          7665
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7986,
        "linearizedBaseContracts": [
          7986,
          1193,
          1147,
          984,
          686,
          7665,
          164,
          118,
          66
        ],
        "name": "SolnSquareVerifier",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 7677,
            "libraryName": {
              "contractScope": null,
              "id": 7675,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10771,
              "src": "849:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$10771",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "843:27:3",
            "typeName": {
              "id": 7676,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "862:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 7679,
            "name": "verifierContract",
            "nodeType": "VariableDeclaration",
            "scope": 7986,
            "src": "876:34:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VerifierZn_$7672",
              "typeString": "contract VerifierZn"
            },
            "typeName": {
              "contractScope": null,
              "id": 7678,
              "name": "VerifierZn",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7672,
              "src": "876:10:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VerifierZn_$7672",
                "typeString": "contract VerifierZn"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "SolnSquareVerifier.Solution",
            "id": 7684,
            "members": [
              {
                "constant": false,
                "id": 7681,
                "name": "index",
                "nodeType": "VariableDeclaration",
                "scope": 7684,
                "src": "1017:10:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7680,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1017:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7683,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 7684,
                "src": "1037:13:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 7682,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1037:7:3",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Solution",
            "nodeType": "StructDefinition",
            "scope": 7986,
            "src": "991:66:3",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7687,
            "name": "_countSolution",
            "nodeType": "VariableDeclaration",
            "scope": 7986,
            "src": "1062:23:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7685,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1062:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 7686,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1084:1:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 7691,
            "name": "_mapSolution",
            "nodeType": "VariableDeclaration",
            "scope": 7986,
            "src": "1249:49:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
            },
            "typeName": {
              "id": 7690,
              "keyType": {
                "id": 7688,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1257:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "1249:28:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
              },
              "valueType": {
                "contractScope": null,
                "id": 7689,
                "name": "Solution",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 7684,
                "src": "1268:8:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Solution_$7684_storage_ptr",
                  "typeString": "struct SolnSquareVerifier.Solution"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7695,
            "name": "_mapLookupSolution",
            "nodeType": "VariableDeclaration",
            "scope": 7986,
            "src": "1370:51:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
              "typeString": "mapping(uint256 => bytes32)"
            },
            "typeName": {
              "id": 7694,
              "keyType": {
                "id": 7692,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "1378:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1370:24:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                "typeString": "mapping(uint256 => bytes32)"
              },
              "valueType": {
                "id": 7693,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1386:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 7699,
            "name": "AddedSolutionEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 7698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7697,
                  "indexed": false,
                  "name": "addressSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7699,
                  "src": "1514:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7696,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1514:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1513:25:3"
            },
            "src": "1489:50:3"
          },
          {
            "body": {
              "id": 7718,
              "nodeType": "Block",
              "src": "1727:63:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7712,
                      "name": "verifierContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7679,
                      "src": "1737:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VerifierZn_$7672",
                        "typeString": "contract VerifierZn"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 7714,
                          "name": "verifierAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7701,
                          "src": "1767:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 7713,
                        "name": "VerifierZn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7672,
                        "src": "1756:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_VerifierZn_$7672_$",
                          "typeString": "type(contract VerifierZn)"
                        }
                      },
                      "id": 7715,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1756:27:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VerifierZn_$7672",
                        "typeString": "contract VerifierZn"
                      }
                    },
                    "src": "1737:46:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_VerifierZn_$7672",
                      "typeString": "contract VerifierZn"
                    }
                  },
                  "id": 7717,
                  "nodeType": "ExpressionStatement",
                  "src": "1737:46:3"
                }
              ]
            },
            "documentation": null,
            "id": 7719,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7708,
                    "name": "tokenName",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7703,
                    "src": "1692:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 7709,
                    "name": "tokenSymbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7705,
                    "src": "1703:11:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 7710,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7707,
                  "name": "ERC721MintableComplete",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1193,
                  "src": "1669:22:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721MintableComplete_$1193_$",
                    "typeString": "type(contract ERC721MintableComplete)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1669:46:3"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7701,
                  "name": "verifierAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 7719,
                  "src": "1566:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7700,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1566:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7703,
                  "name": "tokenName",
                  "nodeType": "VariableDeclaration",
                  "scope": 7719,
                  "src": "1599:23:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7702,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1599:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7705,
                  "name": "tokenSymbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 7719,
                  "src": "1632:25:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7704,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1632:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1556:107:3"
            },
            "returnParameters": {
              "id": 7711,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1727:0:3"
            },
            "scope": 7986,
            "src": "1545:245:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7752,
              "nodeType": "Block",
              "src": "1984:64:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7745,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7723,
                            "src": "2028:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7746,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7729,
                            "src": "2030:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7747,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7733,
                            "src": "2032:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7748,
                            "name": "input",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7737,
                            "src": "2034:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 7743,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10864,
                            "src": "2011:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 7744,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2011:16:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 7749,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2011:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 7742,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10871,
                      "src": "2001:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7750,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2001:40:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 7741,
                  "id": 7751,
                  "nodeType": "Return",
                  "src": "1994:47:3"
                }
              ]
            },
            "documentation": null,
            "id": 7753,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getSolutionKey",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7723,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7753,
                  "src": "1830:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7720,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1830:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7722,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7721,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1835:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1830:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7729,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7753,
                  "src": "1856:19:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 7724,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1856:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7726,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7725,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1861:1:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "1856:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 7728,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7727,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1864:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1856:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7733,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7753,
                  "src": "1885:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7730,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1885:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7732,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7731,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1890:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1885:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7737,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 7753,
                  "src": "1911:20:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7734,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1911:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7736,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7735,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1916:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1911:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1820:117:3"
            },
            "returnParameters": {
              "id": 7741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7740,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7753,
                  "src": "1976:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7739,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1976:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1975:9:3"
            },
            "scope": 7986,
            "src": "1796:252:3",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 7816,
              "nodeType": "Block",
              "src": "2311:325:3",
              "statements": [
                {
                  "assignments": [
                    7777
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7777,
                      "name": "solutionKey",
                      "nodeType": "VariableDeclaration",
                      "scope": 7816,
                      "src": "2321:19:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7776,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2321:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7784,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7779,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7759,
                        "src": "2359:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7780,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7765,
                        "src": "2361:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7781,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7769,
                        "src": "2363:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7782,
                        "name": "inputs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7773,
                        "src": "2365:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      ],
                      "id": 7778,
                      "name": "_getSolutionKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7753,
                      "src": "2343:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7783,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2343:29:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2321:51:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7785,
                      "name": "_countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7687,
                      "src": "2383:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 7788,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2419:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 7786,
                          "name": "_countSolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7687,
                          "src": "2400:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 7787,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10611,
                        "src": "2400:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 7789,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2400:21:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2383:38:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7791,
                  "nodeType": "ExpressionStatement",
                  "src": "2383:38:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7797,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 7792,
                          "name": "_mapSolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7691,
                          "src": "2432:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                            "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                          }
                        },
                        "id": 7794,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 7793,
                          "name": "solutionKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7777,
                          "src": "2445:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2432:25:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Solution_$7684_storage",
                          "typeString": "struct SolnSquareVerifier.Solution storage ref"
                        }
                      },
                      "id": 7795,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7683,
                      "src": "2432:31:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7796,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7755,
                      "src": "2466:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2432:39:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 7798,
                  "nodeType": "ExpressionStatement",
                  "src": "2432:39:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 7799,
                          "name": "_mapSolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7691,
                          "src": "2481:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                            "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                          }
                        },
                        "id": 7801,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 7800,
                          "name": "solutionKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7777,
                          "src": "2494:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2481:25:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Solution_$7684_storage",
                          "typeString": "struct SolnSquareVerifier.Solution storage ref"
                        }
                      },
                      "id": 7802,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "index",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7681,
                      "src": "2481:31:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7803,
                      "name": "_countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7687,
                      "src": "2515:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2481:48:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7805,
                  "nodeType": "ExpressionStatement",
                  "src": "2481:48:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7810,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 7806,
                        "name": "_mapLookupSolution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7695,
                        "src": "2540:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                          "typeString": "mapping(uint256 => bytes32)"
                        }
                      },
                      "id": 7808,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 7807,
                        "name": "_countSolution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7687,
                        "src": "2559:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2540:34:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7809,
                      "name": "solutionKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7777,
                      "src": "2577:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2540:48:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 7811,
                  "nodeType": "ExpressionStatement",
                  "src": "2540:48:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7813,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7755,
                        "src": "2623:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7812,
                      "name": "AddedSolutionEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7699,
                      "src": "2604:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 7814,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2604:25:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7815,
                  "nodeType": "EmitStatement",
                  "src": "2599:30:3"
                }
              ]
            },
            "documentation": null,
            "id": 7817,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addSolution",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7755,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7817,
                  "src": "2167:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7754,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2167:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7759,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7817,
                  "src": "2190:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7756,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2190:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7758,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7757,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2195:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2190:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7765,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7817,
                  "src": "2216:19:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 7760,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2216:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7762,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7761,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2221:1:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "2216:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 7764,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7763,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2224:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2216:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7769,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7817,
                  "src": "2245:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7766,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2245:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7768,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7767,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2250:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2245:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7773,
                  "name": "inputs",
                  "nodeType": "VariableDeclaration",
                  "scope": 7817,
                  "src": "2271:21:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7770,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2271:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7772,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7771,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2276:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2271:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2157:141:3"
            },
            "returnParameters": {
              "id": 7775,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2311:0:3"
            },
            "scope": 7986,
            "src": "2137:499:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7855,
              "nodeType": "Block",
              "src": "2760:293:3",
              "statements": [
                {
                  "assignments": [
                    7825
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7825,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7855,
                      "src": "2770:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7824,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2770:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7829,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7826,
                      "name": "_mapLookupSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7695,
                      "src": "2784:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                        "typeString": "mapping(uint256 => bytes32)"
                      }
                    },
                    "id": 7828,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7827,
                      "name": "countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7819,
                      "src": "2803:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2784:33:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2770:47:3"
                },
                {
                  "assignments": [
                    7831
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7831,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 7855,
                      "src": "2827:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7830,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2827:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7838,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7833,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7691,
                            "src": "2858:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7835,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7834,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7825,
                            "src": "2871:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2858:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Solution_$7684_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7836,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "index",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7681,
                        "src": "2858:23:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 7832,
                      "name": "uint2str",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6366,
                      "src": "2849:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 7837,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2849:33:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2827:55:3"
                },
                {
                  "assignments": [
                    7840
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7840,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 7855,
                      "src": "2892:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7839,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2892:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7847,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7842,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7691,
                            "src": "2930:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7844,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7843,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7825,
                            "src": "2943:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2930:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Solution_$7684_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7845,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "owner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7683,
                        "src": "2930:23:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7841,
                      "name": "addressToString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7616,
                      "src": "2914:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (address) pure returns (string memory)"
                      }
                    },
                    "id": 7846,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2914:40:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2892:62:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "20696e646578203a20",
                        "id": 7849,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2994:11:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c22c510b489b45f1d1fe724f0f45513b68a1857846d9f70b58a7ff2ee111df22",
                          "typeString": "literal_string \" index : \""
                        },
                        "value": " index : "
                      },
                      {
                        "argumentTypes": null,
                        "id": 7850,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7831,
                        "src": "3007:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "206f776e6572203a20",
                        "id": 7851,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3027:11:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_963c9f464b3963948ae9bdf6840e184e3d6c6cbb4553c7225f6a9b6b7138cedc",
                          "typeString": "literal_string \" owner : \""
                        },
                        "value": " owner : "
                      },
                      {
                        "argumentTypes": null,
                        "id": 7852,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7840,
                        "src": "3040:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c22c510b489b45f1d1fe724f0f45513b68a1857846d9f70b58a7ff2ee111df22",
                          "typeString": "literal_string \" index : \""
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_963c9f464b3963948ae9bdf6840e184e3d6c6cbb4553c7225f6a9b6b7138cedc",
                          "typeString": "literal_string \" owner : \""
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 7848,
                      "name": "strConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        5786,
                        5806,
                        5828,
                        6022
                      ],
                      "referencedDeclaration": 5828,
                      "src": "2971:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 7853,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2971:75:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7823,
                  "id": 7854,
                  "nodeType": "Return",
                  "src": "2964:82:3"
                }
              ]
            },
            "documentation": null,
            "id": 7856,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getSolutionInfoByCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7819,
                  "name": "countSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7856,
                  "src": "2683:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7818,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2683:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2673:37:3"
            },
            "returnParameters": {
              "id": 7823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7822,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7856,
                  "src": "2746:13:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7821,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2746:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2745:15:3"
            },
            "scope": 7986,
            "src": "2642:411:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7880,
              "nodeType": "Block",
              "src": "3170:158:3",
              "statements": [
                {
                  "assignments": [
                    7864
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7864,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7880,
                      "src": "3180:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7863,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3180:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7868,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7865,
                      "name": "_mapLookupSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7695,
                      "src": "3194:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                        "typeString": "mapping(uint256 => bytes32)"
                      }
                    },
                    "id": 7867,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7866,
                      "name": "countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7858,
                      "src": "3213:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3194:33:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3180:47:3"
                },
                {
                  "assignments": [
                    7870
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7870,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 7880,
                      "src": "3237:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7869,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "3237:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7877,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7872,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7691,
                            "src": "3275:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7874,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7873,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7864,
                            "src": "3288:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3275:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Solution_$7684_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7875,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "owner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7683,
                        "src": "3275:23:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7871,
                      "name": "addressToString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7616,
                      "src": "3259:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (address) pure returns (string memory)"
                      }
                    },
                    "id": 7876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3259:40:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3237:62:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7878,
                    "name": "owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7870,
                    "src": "3316:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7862,
                  "id": 7879,
                  "nodeType": "Return",
                  "src": "3309:12:3"
                }
              ]
            },
            "documentation": null,
            "id": 7881,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getOwnerByCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7858,
                  "name": "countSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7881,
                  "src": "3093:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3093:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3083:37:3"
            },
            "returnParameters": {
              "id": 7862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7861,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7881,
                  "src": "3156:13:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7860,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3156:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3155:15:3"
            },
            "scope": 7986,
            "src": "3059:269:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7905,
              "nodeType": "Block",
              "src": "3445:151:3",
              "statements": [
                {
                  "assignments": [
                    7889
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7889,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7905,
                      "src": "3455:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7888,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3455:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7893,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7890,
                      "name": "_mapLookupSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7695,
                      "src": "3469:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                        "typeString": "mapping(uint256 => bytes32)"
                      }
                    },
                    "id": 7892,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7891,
                      "name": "countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7883,
                      "src": "3488:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3469:33:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3455:47:3"
                },
                {
                  "assignments": [
                    7895
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7895,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 7905,
                      "src": "3512:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7894,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "3512:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7902,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7897,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7691,
                            "src": "3543:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7899,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7898,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7889,
                            "src": "3556:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3543:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Solution_$7684_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7900,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "index",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7681,
                        "src": "3543:23:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 7896,
                      "name": "uint2str",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6366,
                      "src": "3534:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 7901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3534:33:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3512:55:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7903,
                    "name": "index",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7895,
                    "src": "3584:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7887,
                  "id": 7904,
                  "nodeType": "Return",
                  "src": "3577:12:3"
                }
              ]
            },
            "documentation": null,
            "id": 7906,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getIndexByCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7883,
                  "name": "countSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7906,
                  "src": "3368:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7882,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3368:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3358:37:3"
            },
            "returnParameters": {
              "id": 7887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7886,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7906,
                  "src": "3431:13:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7885,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3431:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3430:15:3"
            },
            "scope": 7986,
            "src": "3334:262:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7984,
              "nodeType": "Block",
              "src": "3884:687:3",
              "statements": [
                {
                  "assignments": [
                    7932
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7932,
                      "name": "solutionKey",
                      "nodeType": "VariableDeclaration",
                      "scope": 7984,
                      "src": "3894:19:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7931,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3894:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7939,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7934,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7914,
                        "src": "3932:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7935,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7920,
                        "src": "3934:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7936,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7924,
                        "src": "3936:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7937,
                        "name": "inputs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7928,
                        "src": "3938:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      ],
                      "id": 7933,
                      "name": "_getSolutionKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7753,
                      "src": "3916:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7938,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3916:29:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3894:51:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 7946,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 7941,
                              "name": "_mapSolution",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7691,
                              "src": "4038:12:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                              }
                            },
                            "id": 7943,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 7942,
                              "name": "solutionKey",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7932,
                              "src": "4051:11:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4038:25:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Solution_$7684_storage",
                              "typeString": "struct SolnSquareVerifier.Solution storage ref"
                            }
                          },
                          "id": 7944,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "index",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7681,
                          "src": "4038:31:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 7945,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4073:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4038:36:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "416c726561647920657869737420736f6c7574696f6e21",
                            "id": 7948,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4098:25:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_1434d49e8ac9c274e08da45ebb8a6f1418ef235592278b4b39b37af2c5a82235",
                              "typeString": "literal_string \"Already exist solution!\""
                            },
                            "value": "Already exist solution!"
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 7950,
                                    "name": "_mapSolution",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7691,
                                    "src": "4150:12:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                                      "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                                    }
                                  },
                                  "id": 7952,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 7951,
                                    "name": "solutionKey",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7932,
                                    "src": "4163:11:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "4150:25:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Solution_$7684_storage",
                                    "typeString": "struct SolnSquareVerifier.Solution storage ref"
                                  }
                                },
                                "id": 7953,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "index",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7681,
                                "src": "4150:31:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 7949,
                              "name": "uint2str",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6366,
                              "src": "4141:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                "typeString": "function (uint256) pure returns (string memory)"
                              }
                            },
                            "id": 7954,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4141:41:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_1434d49e8ac9c274e08da45ebb8a6f1418ef235592278b4b39b37af2c5a82235",
                              "typeString": "literal_string \"Already exist solution!\""
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 7947,
                          "name": "strConcat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            5786,
                            5806,
                            5828,
                            6022
                          ],
                          "referencedDeclaration": 5786,
                          "src": "4088:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (string memory,string memory) pure returns (string memory)"
                          }
                        },
                        "id": 7955,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4088:95:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 7940,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10880,
                        10881
                      ],
                      "referencedDeclaration": 10881,
                      "src": "4030:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7956,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4030:154:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7957,
                  "nodeType": "ExpressionStatement",
                  "src": "4030:154:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7961,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7914,
                            "src": "4313:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7962,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7920,
                            "src": "4332:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7963,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7924,
                            "src": "4351:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7964,
                            "name": "inputs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7928,
                            "src": "4370:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 7959,
                            "name": "verifierContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7679,
                            "src": "4270:16:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VerifierZn_$7672",
                              "typeString": "contract VerifierZn"
                            }
                          },
                          "id": 7960,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "verifyTx",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10534,
                          "src": "4270:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) view external returns (bool)"
                          }
                        },
                        "id": 7965,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4270:107:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f6c7574696f6e2069736e277420636f72726563742e",
                        "id": 7966,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4392:25:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_cc61b0526b97d7039645ec1e888f33a0dbbd37e7118ad63a818028a9fc8c8e03",
                          "typeString": "literal_string \"Solution isn't correct.\""
                        },
                        "value": "Solution isn't correct."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_cc61b0526b97d7039645ec1e888f33a0dbbd37e7118ad63a818028a9fc8c8e03",
                          "typeString": "literal_string \"Solution isn't correct.\""
                        }
                      ],
                      "id": 7958,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10880,
                        10881
                      ],
                      "referencedDeclaration": 10881,
                      "src": "4262:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4262:156:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7968,
                  "nodeType": "ExpressionStatement",
                  "src": "4262:156:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7970,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7908,
                        "src": "4454:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7971,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7914,
                        "src": "4474:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7972,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7920,
                        "src": "4489:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7973,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7924,
                        "src": "4504:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7974,
                        "name": "inputs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7928,
                        "src": "4519:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      ],
                      "id": 7969,
                      "name": "addSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7817,
                      "src": "4429:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory)"
                      }
                    },
                    "id": 7975,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4429:97:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7976,
                  "nodeType": "ExpressionStatement",
                  "src": "4429:97:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7980,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7908,
                        "src": "4549:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7981,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7910,
                        "src": "4556:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7977,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10936,
                        "src": "4537:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_SolnSquareVerifier_$7986",
                          "typeString": "contract super SolnSquareVerifier"
                        }
                      },
                      "id": 7979,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 821,
                      "src": "4537:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 7982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4537:27:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7983,
                  "nodeType": "ExpressionStatement",
                  "src": "4537:27:3"
                }
              ]
            },
            "documentation": null,
            "id": 7985,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintNewNFT",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7908,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7985,
                  "src": "3720:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7907,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3720:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7910,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 7985,
                  "src": "3743:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7909,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3743:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7914,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7985,
                  "src": "3768:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7911,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3768:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7913,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7912,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3773:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3768:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7920,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7985,
                  "src": "3794:19:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 7915,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3794:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7917,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7916,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3799:1:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "3794:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 7919,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7918,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3802:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3794:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7924,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7985,
                  "src": "3823:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7921,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3823:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7923,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7922,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3828:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3823:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7928,
                  "name": "inputs",
                  "nodeType": "VariableDeclaration",
                  "scope": 7985,
                  "src": "3849:21:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7925,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3849:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7927,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7926,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3854:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3849:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3710:166:3"
            },
            "returnParameters": {
              "id": 7930,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3884:0:3"
            },
            "scope": 7986,
            "src": "3691:880:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7987,
        "src": "783:3790:3"
      }
    ],
    "src": "0:4573:3"
  },
  "legacyAST": {
    "absolutePath": "/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SolnSquareVerifier.sol",
    "exportedSymbols": {
      "SolnSquareVerifier": [
        7986
      ],
      "VerifierZn": [
        7672
      ]
    },
    "id": 7987,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7667,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".21",
          "<",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:32:3"
      },
      {
        "absolutePath": "/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/ERC721Mintable.sol",
        "file": "./ERC721Mintable.sol",
        "id": 7668,
        "nodeType": "ImportDirective",
        "scope": 7987,
        "sourceUnit": 1194,
        "src": "34:30:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SquareVerifier.sol",
        "file": "./SquareVerifier.sol",
        "id": 7669,
        "nodeType": "ImportDirective",
        "scope": 7987,
        "sourceUnit": 10536,
        "src": "173:30:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7670,
              "name": "SquareVerifier",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10535,
              "src": "228:14:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SquareVerifier_$10535",
                "typeString": "contract SquareVerifier"
              }
            },
            "id": 7671,
            "nodeType": "InheritanceSpecifier",
            "src": "228:14:3"
          }
        ],
        "contractDependencies": [
          10535
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7672,
        "linearizedBaseContracts": [
          7672,
          10535
        ],
        "name": "VerifierZn",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 7987,
        "src": "205:473:3"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7673,
              "name": "ERC721MintableComplete",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1193,
              "src": "814:22:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721MintableComplete_$1193",
                "typeString": "contract ERC721MintableComplete"
              }
            },
            "id": 7674,
            "nodeType": "InheritanceSpecifier",
            "src": "814:22:3"
          }
        ],
        "contractDependencies": [
          984,
          686,
          1193,
          66,
          118,
          164,
          1147,
          7665
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7986,
        "linearizedBaseContracts": [
          7986,
          1193,
          1147,
          984,
          686,
          7665,
          164,
          118,
          66
        ],
        "name": "SolnSquareVerifier",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 7677,
            "libraryName": {
              "contractScope": null,
              "id": 7675,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10771,
              "src": "849:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$10771",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "843:27:3",
            "typeName": {
              "id": 7676,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "862:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 7679,
            "name": "verifierContract",
            "nodeType": "VariableDeclaration",
            "scope": 7986,
            "src": "876:34:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VerifierZn_$7672",
              "typeString": "contract VerifierZn"
            },
            "typeName": {
              "contractScope": null,
              "id": 7678,
              "name": "VerifierZn",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7672,
              "src": "876:10:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VerifierZn_$7672",
                "typeString": "contract VerifierZn"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "SolnSquareVerifier.Solution",
            "id": 7684,
            "members": [
              {
                "constant": false,
                "id": 7681,
                "name": "index",
                "nodeType": "VariableDeclaration",
                "scope": 7684,
                "src": "1017:10:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7680,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1017:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7683,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 7684,
                "src": "1037:13:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 7682,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1037:7:3",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Solution",
            "nodeType": "StructDefinition",
            "scope": 7986,
            "src": "991:66:3",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7687,
            "name": "_countSolution",
            "nodeType": "VariableDeclaration",
            "scope": 7986,
            "src": "1062:23:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7685,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "1062:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 7686,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1084:1:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 7691,
            "name": "_mapSolution",
            "nodeType": "VariableDeclaration",
            "scope": 7986,
            "src": "1249:49:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
            },
            "typeName": {
              "id": 7690,
              "keyType": {
                "id": 7688,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1257:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "1249:28:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
              },
              "valueType": {
                "contractScope": null,
                "id": 7689,
                "name": "Solution",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 7684,
                "src": "1268:8:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Solution_$7684_storage_ptr",
                  "typeString": "struct SolnSquareVerifier.Solution"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7695,
            "name": "_mapLookupSolution",
            "nodeType": "VariableDeclaration",
            "scope": 7986,
            "src": "1370:51:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
              "typeString": "mapping(uint256 => bytes32)"
            },
            "typeName": {
              "id": 7694,
              "keyType": {
                "id": 7692,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "1378:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1370:24:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                "typeString": "mapping(uint256 => bytes32)"
              },
              "valueType": {
                "id": 7693,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1386:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 7699,
            "name": "AddedSolutionEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 7698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7697,
                  "indexed": false,
                  "name": "addressSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7699,
                  "src": "1514:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7696,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1514:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1513:25:3"
            },
            "src": "1489:50:3"
          },
          {
            "body": {
              "id": 7718,
              "nodeType": "Block",
              "src": "1727:63:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7712,
                      "name": "verifierContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7679,
                      "src": "1737:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VerifierZn_$7672",
                        "typeString": "contract VerifierZn"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 7714,
                          "name": "verifierAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7701,
                          "src": "1767:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 7713,
                        "name": "VerifierZn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7672,
                        "src": "1756:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_VerifierZn_$7672_$",
                          "typeString": "type(contract VerifierZn)"
                        }
                      },
                      "id": 7715,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1756:27:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VerifierZn_$7672",
                        "typeString": "contract VerifierZn"
                      }
                    },
                    "src": "1737:46:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_VerifierZn_$7672",
                      "typeString": "contract VerifierZn"
                    }
                  },
                  "id": 7717,
                  "nodeType": "ExpressionStatement",
                  "src": "1737:46:3"
                }
              ]
            },
            "documentation": null,
            "id": 7719,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7708,
                    "name": "tokenName",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7703,
                    "src": "1692:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 7709,
                    "name": "tokenSymbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7705,
                    "src": "1703:11:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 7710,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7707,
                  "name": "ERC721MintableComplete",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1193,
                  "src": "1669:22:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721MintableComplete_$1193_$",
                    "typeString": "type(contract ERC721MintableComplete)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1669:46:3"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7701,
                  "name": "verifierAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 7719,
                  "src": "1566:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7700,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1566:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7703,
                  "name": "tokenName",
                  "nodeType": "VariableDeclaration",
                  "scope": 7719,
                  "src": "1599:23:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7702,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1599:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7705,
                  "name": "tokenSymbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 7719,
                  "src": "1632:25:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7704,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1632:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1556:107:3"
            },
            "returnParameters": {
              "id": 7711,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1727:0:3"
            },
            "scope": 7986,
            "src": "1545:245:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7752,
              "nodeType": "Block",
              "src": "1984:64:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7745,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7723,
                            "src": "2028:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7746,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7729,
                            "src": "2030:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7747,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7733,
                            "src": "2032:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7748,
                            "name": "input",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7737,
                            "src": "2034:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 7743,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10864,
                            "src": "2011:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 7744,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2011:16:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 7749,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2011:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 7742,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10871,
                      "src": "2001:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7750,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2001:40:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 7741,
                  "id": 7751,
                  "nodeType": "Return",
                  "src": "1994:47:3"
                }
              ]
            },
            "documentation": null,
            "id": 7753,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getSolutionKey",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7723,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7753,
                  "src": "1830:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7720,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1830:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7722,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7721,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1835:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1830:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7729,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7753,
                  "src": "1856:19:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 7724,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1856:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7726,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7725,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1861:1:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "1856:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 7728,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7727,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1864:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1856:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7733,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7753,
                  "src": "1885:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7730,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1885:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7732,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7731,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1890:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1885:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7737,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 7753,
                  "src": "1911:20:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7734,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1911:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7736,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7735,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1916:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1911:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1820:117:3"
            },
            "returnParameters": {
              "id": 7741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7740,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7753,
                  "src": "1976:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7739,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1976:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1975:9:3"
            },
            "scope": 7986,
            "src": "1796:252:3",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 7816,
              "nodeType": "Block",
              "src": "2311:325:3",
              "statements": [
                {
                  "assignments": [
                    7777
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7777,
                      "name": "solutionKey",
                      "nodeType": "VariableDeclaration",
                      "scope": 7816,
                      "src": "2321:19:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7776,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2321:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7784,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7779,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7759,
                        "src": "2359:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7780,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7765,
                        "src": "2361:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7781,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7769,
                        "src": "2363:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7782,
                        "name": "inputs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7773,
                        "src": "2365:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      ],
                      "id": 7778,
                      "name": "_getSolutionKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7753,
                      "src": "2343:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7783,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2343:29:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2321:51:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7785,
                      "name": "_countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7687,
                      "src": "2383:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 7788,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2419:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 7786,
                          "name": "_countSolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7687,
                          "src": "2400:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 7787,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10611,
                        "src": "2400:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 7789,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2400:21:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2383:38:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7791,
                  "nodeType": "ExpressionStatement",
                  "src": "2383:38:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7797,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 7792,
                          "name": "_mapSolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7691,
                          "src": "2432:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                            "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                          }
                        },
                        "id": 7794,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 7793,
                          "name": "solutionKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7777,
                          "src": "2445:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2432:25:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Solution_$7684_storage",
                          "typeString": "struct SolnSquareVerifier.Solution storage ref"
                        }
                      },
                      "id": 7795,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7683,
                      "src": "2432:31:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7796,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7755,
                      "src": "2466:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2432:39:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 7798,
                  "nodeType": "ExpressionStatement",
                  "src": "2432:39:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 7799,
                          "name": "_mapSolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7691,
                          "src": "2481:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                            "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                          }
                        },
                        "id": 7801,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 7800,
                          "name": "solutionKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7777,
                          "src": "2494:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2481:25:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Solution_$7684_storage",
                          "typeString": "struct SolnSquareVerifier.Solution storage ref"
                        }
                      },
                      "id": 7802,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "index",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7681,
                      "src": "2481:31:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7803,
                      "name": "_countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7687,
                      "src": "2515:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2481:48:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7805,
                  "nodeType": "ExpressionStatement",
                  "src": "2481:48:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7810,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 7806,
                        "name": "_mapLookupSolution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7695,
                        "src": "2540:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                          "typeString": "mapping(uint256 => bytes32)"
                        }
                      },
                      "id": 7808,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 7807,
                        "name": "_countSolution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7687,
                        "src": "2559:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2540:34:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7809,
                      "name": "solutionKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7777,
                      "src": "2577:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2540:48:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 7811,
                  "nodeType": "ExpressionStatement",
                  "src": "2540:48:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7813,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7755,
                        "src": "2623:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7812,
                      "name": "AddedSolutionEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7699,
                      "src": "2604:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 7814,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2604:25:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7815,
                  "nodeType": "EmitStatement",
                  "src": "2599:30:3"
                }
              ]
            },
            "documentation": null,
            "id": 7817,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addSolution",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7755,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7817,
                  "src": "2167:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7754,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2167:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7759,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7817,
                  "src": "2190:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7756,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2190:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7758,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7757,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2195:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2190:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7765,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7817,
                  "src": "2216:19:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 7760,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2216:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7762,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7761,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2221:1:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "2216:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 7764,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7763,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2224:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2216:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7769,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7817,
                  "src": "2245:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7766,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2245:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7768,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7767,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2250:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2245:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7773,
                  "name": "inputs",
                  "nodeType": "VariableDeclaration",
                  "scope": 7817,
                  "src": "2271:21:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7770,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2271:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7772,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7771,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2276:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2271:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2157:141:3"
            },
            "returnParameters": {
              "id": 7775,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2311:0:3"
            },
            "scope": 7986,
            "src": "2137:499:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7855,
              "nodeType": "Block",
              "src": "2760:293:3",
              "statements": [
                {
                  "assignments": [
                    7825
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7825,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7855,
                      "src": "2770:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7824,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2770:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7829,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7826,
                      "name": "_mapLookupSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7695,
                      "src": "2784:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                        "typeString": "mapping(uint256 => bytes32)"
                      }
                    },
                    "id": 7828,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7827,
                      "name": "countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7819,
                      "src": "2803:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2784:33:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2770:47:3"
                },
                {
                  "assignments": [
                    7831
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7831,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 7855,
                      "src": "2827:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7830,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2827:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7838,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7833,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7691,
                            "src": "2858:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7835,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7834,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7825,
                            "src": "2871:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2858:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Solution_$7684_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7836,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "index",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7681,
                        "src": "2858:23:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 7832,
                      "name": "uint2str",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6366,
                      "src": "2849:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 7837,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2849:33:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2827:55:3"
                },
                {
                  "assignments": [
                    7840
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7840,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 7855,
                      "src": "2892:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7839,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2892:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7847,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7842,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7691,
                            "src": "2930:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7844,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7843,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7825,
                            "src": "2943:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2930:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Solution_$7684_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7845,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "owner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7683,
                        "src": "2930:23:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7841,
                      "name": "addressToString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7616,
                      "src": "2914:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (address) pure returns (string memory)"
                      }
                    },
                    "id": 7846,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2914:40:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2892:62:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "20696e646578203a20",
                        "id": 7849,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2994:11:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c22c510b489b45f1d1fe724f0f45513b68a1857846d9f70b58a7ff2ee111df22",
                          "typeString": "literal_string \" index : \""
                        },
                        "value": " index : "
                      },
                      {
                        "argumentTypes": null,
                        "id": 7850,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7831,
                        "src": "3007:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "206f776e6572203a20",
                        "id": 7851,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3027:11:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_963c9f464b3963948ae9bdf6840e184e3d6c6cbb4553c7225f6a9b6b7138cedc",
                          "typeString": "literal_string \" owner : \""
                        },
                        "value": " owner : "
                      },
                      {
                        "argumentTypes": null,
                        "id": 7852,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7840,
                        "src": "3040:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c22c510b489b45f1d1fe724f0f45513b68a1857846d9f70b58a7ff2ee111df22",
                          "typeString": "literal_string \" index : \""
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_963c9f464b3963948ae9bdf6840e184e3d6c6cbb4553c7225f6a9b6b7138cedc",
                          "typeString": "literal_string \" owner : \""
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 7848,
                      "name": "strConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        5786,
                        5806,
                        5828,
                        6022
                      ],
                      "referencedDeclaration": 5828,
                      "src": "2971:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 7853,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2971:75:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7823,
                  "id": 7854,
                  "nodeType": "Return",
                  "src": "2964:82:3"
                }
              ]
            },
            "documentation": null,
            "id": 7856,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getSolutionInfoByCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7819,
                  "name": "countSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7856,
                  "src": "2683:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7818,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2683:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2673:37:3"
            },
            "returnParameters": {
              "id": 7823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7822,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7856,
                  "src": "2746:13:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7821,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2746:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2745:15:3"
            },
            "scope": 7986,
            "src": "2642:411:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7880,
              "nodeType": "Block",
              "src": "3170:158:3",
              "statements": [
                {
                  "assignments": [
                    7864
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7864,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7880,
                      "src": "3180:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7863,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3180:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7868,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7865,
                      "name": "_mapLookupSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7695,
                      "src": "3194:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                        "typeString": "mapping(uint256 => bytes32)"
                      }
                    },
                    "id": 7867,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7866,
                      "name": "countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7858,
                      "src": "3213:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3194:33:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3180:47:3"
                },
                {
                  "assignments": [
                    7870
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7870,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 7880,
                      "src": "3237:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7869,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "3237:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7877,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7872,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7691,
                            "src": "3275:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7874,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7873,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7864,
                            "src": "3288:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3275:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Solution_$7684_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7875,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "owner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7683,
                        "src": "3275:23:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7871,
                      "name": "addressToString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7616,
                      "src": "3259:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (address) pure returns (string memory)"
                      }
                    },
                    "id": 7876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3259:40:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3237:62:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7878,
                    "name": "owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7870,
                    "src": "3316:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7862,
                  "id": 7879,
                  "nodeType": "Return",
                  "src": "3309:12:3"
                }
              ]
            },
            "documentation": null,
            "id": 7881,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getOwnerByCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7858,
                  "name": "countSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7881,
                  "src": "3093:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3093:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3083:37:3"
            },
            "returnParameters": {
              "id": 7862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7861,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7881,
                  "src": "3156:13:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7860,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3156:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3155:15:3"
            },
            "scope": 7986,
            "src": "3059:269:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7905,
              "nodeType": "Block",
              "src": "3445:151:3",
              "statements": [
                {
                  "assignments": [
                    7889
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7889,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7905,
                      "src": "3455:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7888,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3455:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7893,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7890,
                      "name": "_mapLookupSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7695,
                      "src": "3469:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                        "typeString": "mapping(uint256 => bytes32)"
                      }
                    },
                    "id": 7892,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7891,
                      "name": "countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7883,
                      "src": "3488:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3469:33:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3455:47:3"
                },
                {
                  "assignments": [
                    7895
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7895,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 7905,
                      "src": "3512:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7894,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "3512:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7902,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7897,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7691,
                            "src": "3543:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7899,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7898,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7889,
                            "src": "3556:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3543:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Solution_$7684_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7900,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "index",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7681,
                        "src": "3543:23:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 7896,
                      "name": "uint2str",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6366,
                      "src": "3534:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 7901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3534:33:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3512:55:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7903,
                    "name": "index",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7895,
                    "src": "3584:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7887,
                  "id": 7904,
                  "nodeType": "Return",
                  "src": "3577:12:3"
                }
              ]
            },
            "documentation": null,
            "id": 7906,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getIndexByCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7883,
                  "name": "countSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7906,
                  "src": "3368:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7882,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3368:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3358:37:3"
            },
            "returnParameters": {
              "id": 7887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7886,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7906,
                  "src": "3431:13:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7885,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3431:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3430:15:3"
            },
            "scope": 7986,
            "src": "3334:262:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7984,
              "nodeType": "Block",
              "src": "3884:687:3",
              "statements": [
                {
                  "assignments": [
                    7932
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7932,
                      "name": "solutionKey",
                      "nodeType": "VariableDeclaration",
                      "scope": 7984,
                      "src": "3894:19:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7931,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3894:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7939,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7934,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7914,
                        "src": "3932:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7935,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7920,
                        "src": "3934:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7936,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7924,
                        "src": "3936:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7937,
                        "name": "inputs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7928,
                        "src": "3938:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      ],
                      "id": 7933,
                      "name": "_getSolutionKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7753,
                      "src": "3916:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7938,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3916:29:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3894:51:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 7946,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 7941,
                              "name": "_mapSolution",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7691,
                              "src": "4038:12:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                              }
                            },
                            "id": 7943,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 7942,
                              "name": "solutionKey",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7932,
                              "src": "4051:11:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4038:25:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Solution_$7684_storage",
                              "typeString": "struct SolnSquareVerifier.Solution storage ref"
                            }
                          },
                          "id": 7944,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "index",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7681,
                          "src": "4038:31:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 7945,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4073:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4038:36:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "416c726561647920657869737420736f6c7574696f6e21",
                            "id": 7948,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4098:25:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_1434d49e8ac9c274e08da45ebb8a6f1418ef235592278b4b39b37af2c5a82235",
                              "typeString": "literal_string \"Already exist solution!\""
                            },
                            "value": "Already exist solution!"
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 7950,
                                    "name": "_mapSolution",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7691,
                                    "src": "4150:12:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7684_storage_$",
                                      "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                                    }
                                  },
                                  "id": 7952,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 7951,
                                    "name": "solutionKey",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7932,
                                    "src": "4163:11:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "4150:25:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Solution_$7684_storage",
                                    "typeString": "struct SolnSquareVerifier.Solution storage ref"
                                  }
                                },
                                "id": 7953,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "index",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7681,
                                "src": "4150:31:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 7949,
                              "name": "uint2str",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6366,
                              "src": "4141:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                "typeString": "function (uint256) pure returns (string memory)"
                              }
                            },
                            "id": 7954,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4141:41:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_1434d49e8ac9c274e08da45ebb8a6f1418ef235592278b4b39b37af2c5a82235",
                              "typeString": "literal_string \"Already exist solution!\""
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 7947,
                          "name": "strConcat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            5786,
                            5806,
                            5828,
                            6022
                          ],
                          "referencedDeclaration": 5786,
                          "src": "4088:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (string memory,string memory) pure returns (string memory)"
                          }
                        },
                        "id": 7955,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4088:95:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 7940,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10880,
                        10881
                      ],
                      "referencedDeclaration": 10881,
                      "src": "4030:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7956,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4030:154:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7957,
                  "nodeType": "ExpressionStatement",
                  "src": "4030:154:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7961,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7914,
                            "src": "4313:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7962,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7920,
                            "src": "4332:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7963,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7924,
                            "src": "4351:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7964,
                            "name": "inputs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7928,
                            "src": "4370:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 7959,
                            "name": "verifierContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7679,
                            "src": "4270:16:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VerifierZn_$7672",
                              "typeString": "contract VerifierZn"
                            }
                          },
                          "id": 7960,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "verifyTx",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10534,
                          "src": "4270:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) view external returns (bool)"
                          }
                        },
                        "id": 7965,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4270:107:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f6c7574696f6e2069736e277420636f72726563742e",
                        "id": 7966,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4392:25:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_cc61b0526b97d7039645ec1e888f33a0dbbd37e7118ad63a818028a9fc8c8e03",
                          "typeString": "literal_string \"Solution isn't correct.\""
                        },
                        "value": "Solution isn't correct."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_cc61b0526b97d7039645ec1e888f33a0dbbd37e7118ad63a818028a9fc8c8e03",
                          "typeString": "literal_string \"Solution isn't correct.\""
                        }
                      ],
                      "id": 7958,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10880,
                        10881
                      ],
                      "referencedDeclaration": 10881,
                      "src": "4262:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4262:156:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7968,
                  "nodeType": "ExpressionStatement",
                  "src": "4262:156:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7970,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7908,
                        "src": "4454:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7971,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7914,
                        "src": "4474:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7972,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7920,
                        "src": "4489:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7973,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7924,
                        "src": "4504:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7974,
                        "name": "inputs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7928,
                        "src": "4519:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      ],
                      "id": 7969,
                      "name": "addSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7817,
                      "src": "4429:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory)"
                      }
                    },
                    "id": 7975,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4429:97:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7976,
                  "nodeType": "ExpressionStatement",
                  "src": "4429:97:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7980,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7908,
                        "src": "4549:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7981,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7910,
                        "src": "4556:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7977,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10936,
                        "src": "4537:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_SolnSquareVerifier_$7986",
                          "typeString": "contract super SolnSquareVerifier"
                        }
                      },
                      "id": 7979,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 821,
                      "src": "4537:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 7982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4537:27:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7983,
                  "nodeType": "ExpressionStatement",
                  "src": "4537:27:3"
                }
              ]
            },
            "documentation": null,
            "id": 7985,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintNewNFT",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7908,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7985,
                  "src": "3720:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7907,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3720:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7910,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 7985,
                  "src": "3743:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7909,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3743:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7914,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7985,
                  "src": "3768:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7911,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3768:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7913,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7912,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3773:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3768:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7920,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7985,
                  "src": "3794:19:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 7915,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3794:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7917,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7916,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3799:1:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "3794:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 7919,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7918,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3802:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3794:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7924,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7985,
                  "src": "3823:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7921,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3823:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7923,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7922,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3828:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3823:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7928,
                  "name": "inputs",
                  "nodeType": "VariableDeclaration",
                  "scope": 7985,
                  "src": "3849:21:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7925,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3849:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7927,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7926,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3854:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3849:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3710:166:3"
            },
            "returnParameters": {
              "id": 7930,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3884:0:3"
            },
            "scope": 7986,
            "src": "3691:880:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7987,
        "src": "783:3790:3"
      }
    ],
    "src": "0:4573:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.5+commit.47a71e8f.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {
        "0xcd096f17a41ca2f28be4f38411924d525e3be72c0a5047cae9fec2aff3fe0c55": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "addressSolution",
              "type": "address"
            }
          ],
          "name": "AddedSolutionEvent",
          "type": "event",
          "signature": "0xcd096f17a41ca2f28be4f38411924d525e3be72c0a5047cae9fec2aff3fe0c55"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event",
          "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event",
          "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event",
          "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
        },
        "0x34ff8c673d3f4966cacd4025e5a45c45764d0e9f9ebc866091e4363685a6c16c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "addressTriggerer",
              "type": "address"
            }
          ],
          "name": "PausedEvent",
          "type": "event",
          "signature": "0x34ff8c673d3f4966cacd4025e5a45c45764d0e9f9ebc866091e4363685a6c16c"
        },
        "0x0fb94798166272486ac3f3b109fdc6b92c586c8d8d7c4c8288f1f21ea36edc98": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "addressTriggerer",
              "type": "address"
            }
          ],
          "name": "UnpausedEvent",
          "type": "event",
          "signature": "0x0fb94798166272486ac3f3b109fdc6b92c586c8d8d7c4c8288f1f21ea36edc98"
        },
        "0xc952bd5aeb53e3b17bbef0f26d9d0b2eaf947aca5452382c4aaba18433db472b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnerShipIsTransferedEvent",
          "type": "event",
          "signature": "0xc952bd5aeb53e3b17bbef0f26d9d0b2eaf947aca5452382c4aaba18433db472b"
        }
      },
      "links": {},
      "address": "0xC405d76442De300566B15432C8f7ce808b753725",
      "transactionHash": "0x317e48f5cf1879de583c990c111b9d492481b073eb71686a598118212bda84f7"
    },
    "5777": {
      "events": {
        "0xcd096f17a41ca2f28be4f38411924d525e3be72c0a5047cae9fec2aff3fe0c55": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "addressSolution",
              "type": "address"
            }
          ],
          "name": "AddedSolutionEvent",
          "type": "event",
          "signature": "0xcd096f17a41ca2f28be4f38411924d525e3be72c0a5047cae9fec2aff3fe0c55"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event",
          "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event",
          "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event",
          "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
        },
        "0x34ff8c673d3f4966cacd4025e5a45c45764d0e9f9ebc866091e4363685a6c16c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "addressTriggerer",
              "type": "address"
            }
          ],
          "name": "PausedEvent",
          "type": "event",
          "signature": "0x34ff8c673d3f4966cacd4025e5a45c45764d0e9f9ebc866091e4363685a6c16c"
        },
        "0x0fb94798166272486ac3f3b109fdc6b92c586c8d8d7c4c8288f1f21ea36edc98": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "addressTriggerer",
              "type": "address"
            }
          ],
          "name": "UnpausedEvent",
          "type": "event",
          "signature": "0x0fb94798166272486ac3f3b109fdc6b92c586c8d8d7c4c8288f1f21ea36edc98"
        },
        "0xc952bd5aeb53e3b17bbef0f26d9d0b2eaf947aca5452382c4aaba18433db472b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnerShipIsTransferedEvent",
          "type": "event",
          "signature": "0xc952bd5aeb53e3b17bbef0f26d9d0b2eaf947aca5452382c4aaba18433db472b"
        }
      },
      "links": {},
      "address": "0x64Dbebb5A82A83Db41d1Aae8e3EB097F1721C1B0",
      "transactionHash": "0x93d70985ffa04bec5c5455a43426e84e77b25d88f85af0dba25fcbe5a28225fe"
    }
  },
  "schemaVersion": "3.0.22",
  "updatedAt": "2021-08-19T10:16:35.882Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "isApprovedForAll(address,address)": {
        "details": "Tells whether an operator is approved by a given owner",
        "params": {
          "operator": "operator address which you want to query the approval of",
          "owner": "owner address which you want to query the approval of"
        },
        "return": "bool whether the given operator is approved by the given owner"
      },
      "setApprovalForAll(address,bool)": {
        "details": "Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf",
        "params": {
          "approved": "representing the status of the approval to be set",
          "to": "operator address to set the approval"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "implement supportsInterface(bytes4) using a lookup table"
      },
      "tokenByIndex(uint256)": {
        "details": "Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens",
        "params": {
          "index": "uint256 representing the index to be accessed of the tokens list"
        },
        "return": "uint256 token ID at the given index of the tokens list"
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "Gets the token ID at a given index of the tokens list of the requested owner",
        "params": {
          "index": "uint256 representing the index to be accessed of the requested tokens list",
          "owner": "address owning the tokens list to be accessed"
        },
        "return": "uint256 token ID at the given index of the tokens list owned by the requested address"
      },
      "totalSupply()": {
        "details": "Gets the total amount of tokens stored by the contract",
        "return": "uint256 representing the total amount of tokens"
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}