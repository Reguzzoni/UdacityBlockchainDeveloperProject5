# Rinkeby information
contractAddress SolnSquareVerifier:         0xe20Fe323F77553Daf2Cb9FB18B60586FEb231125
contractAddress SquareVerifier:             0x820959eBF420efeD5f500E5588d4f62Cd1d7a489
METAMASK address :                          0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c

# Minted transaction List
Minted item. Transaction: 0xa59baab610448e8252a69eda553882ed655a87a18a929e136973736cc2302679
Minted item. Transaction: 0xaa4785e88a4ce1cd4e05503b27f1ff9a21a70c00174df9705893fe9c63ad157c
Minted item. Transaction: 0xc7e25fe20ae56e958bb534c758a02c3b0fc607f9f739ef1dd36e5a6b3dc2359b
Minted item. Transaction: 0x66b0a581ef73c65cde02118d514b57af0a51c296696b45d0910ce8245157b01c
Minted item. Transaction: 0x324470e20ed815a33c960214523ae9ec184836f125e926012ef8fbc30a24cd93

# etherscan
Address transactions
https://rinkeby.etherscan.io/address/0x030e42a9a18a0de7207a17c1fb68e84b9074878c

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

# How to mint openSea collection?
With myEthereumWallet or just use local scripts/mint.js (configuring infura and mnemonic) into file
as deploy

# version used
Truffle v5.1.10 (core: 5.1.10)
Solidity - 0.5.5 (solc-js)
Node v10.18.0
Web3.js v1.2.1

# zokrates docker
docker run -v D:/blockchain/UdacityBlockchainDeveloper/Project5/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash

# Udacity Blockchain Capstone
The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources
* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)

# JSON SolnSquareVerifier.json
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
  "metadata": "{\"compiler\":{\"version\":\"0.5.5+commit.47a71e8f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getSymbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newPausedValue\",\"type\":\"bool\"}],\"name\":\"setPaused\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getName\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_myid\",\"type\":\"bytes32\"},{\"name\":\"_result\",\"type\":\"string\"}],\"name\":\"__callback\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"baseTokenURI\",\"type\":\"string\"}],\"name\":\"setBaseTokenURI\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_myid\",\"type\":\"bytes32\"},{\"name\":\"_result\",\"type\":\"string\"},{\"name\":\"_proof\",\"type\":\"bytes\"}],\"name\":\"__callback\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"countSolution\",\"type\":\"uint256\"}],\"name\":\"getOwnerByCount\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"addressToString\",\"outputs\":[{\"name\":\"_uintAsString\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"},{\"name\":\"a\",\"type\":\"uint256[2]\"},{\"name\":\"b\",\"type\":\"uint256[2][2]\"},{\"name\":\"c\",\"type\":\"uint256[2]\"},{\"name\":\"inputs\",\"type\":\"uint256[2]\"}],\"name\":\"mintNewNFT\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"toBytes\",\"outputs\":[{\"name\":\"b\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"countSolution\",\"type\":\"uint256\"}],\"name\":\"getSolutionInfoByCount\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"symbol\",\"type\":\"string\"}],\"name\":\"setSymbol\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"},{\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBaseTokenURI\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"name\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"verifierContract\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"},{\"name\":\"tokenURI\",\"type\":\"string\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"a\",\"type\":\"uint256[2]\"},{\"name\":\"b\",\"type\":\"uint256[2][2]\"},{\"name\":\"c\",\"type\":\"uint256[2]\"},{\"name\":\"inputs\",\"type\":\"uint256[2]\"}],\"name\":\"addSolution\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_i\",\"type\":\"uint256\"}],\"name\":\"uint2str\",\"outputs\":[{\"name\":\"_uintAsString\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"countSolution\",\"type\":\"uint256\"}],\"name\":\"getIndexByCount\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"verifierAddress\",\"type\":\"address\"},{\"name\":\"tokenName\",\"type\":\"string\"},{\"name\":\"tokenSymbol\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addressSolution\",\"type\":\"address\"}],\"name\":\"AddedSolutionEvent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addressTriggerer\",\"type\":\"address\"}],\"name\":\"PausedEvent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"addressTriggerer\",\"type\":\"address\"}],\"name\":\"UnpausedEvent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnerShipIsTransferedEvent\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"isApprovedForAll(address,address)\":{\"details\":\"Tells whether an operator is approved by a given owner\",\"params\":{\"operator\":\"operator address which you want to query the approval of\",\"owner\":\"owner address which you want to query the approval of\"},\"return\":\"bool whether the given operator is approved by the given owner\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf\",\"params\":{\"approved\":\"representing the status of the approval to be set\",\"to\":\"operator address to set the approval\"}},\"supportsInterface(bytes4)\":{\"details\":\"implement supportsInterface(bytes4) using a lookup table\"},\"tokenByIndex(uint256)\":{\"details\":\"Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the tokens list\"},\"return\":\"uint256 token ID at the given index of the tokens list\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"Gets the token ID at a given index of the tokens list of the requested owner\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the requested tokens list\",\"owner\":\"address owning the tokens list to be accessed\"},\"return\":\"uint256 token ID at the given index of the tokens list owned by the requested address\"},\"totalSupply()\":{\"details\":\"Gets the total amount of tokens stored by the contract\",\"return\":\"uint256 representing the total amount of tokens\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SolnSquareVerifier.sol\":\"SolnSquareVerifier\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/ERC721Mintable.sol\":{\"keccak256\":\"0xdcc07ec56146b1978f39f2c83b1ba7dc32b4b31f3a1a8021e3b8634551b39d39\",\"urls\":[\"bzzr://5bd09a8b8e42d059c9cd48fb781eb3c6deb80214e5be402a28b07948f9f70675\"]},\"/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/Oraclize.sol\":{\"keccak256\":\"0x6c198ddd429f9b3fc644ccfc2a6753cfa3b4f8f857e9c659bc2c9acc6527af24\",\"urls\":[\"bzzr://2b86250c64e033fb75ab5a9c584e9df3ddaa9718f356a9ff50e7a82ac30c0018\"]},\"/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SolnSquareVerifier.sol\":{\"keccak256\":\"0x066bd9144adfd0f1545cec1f4188338e6bac03c60232f2eb6781eaf5e3da6289\",\"urls\":[\"bzzr://53ef353e40f53e9155bc9d66cc5ffe8120c57f72b19c4afa7385168edfd072e8\"]},\"/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SquareVerifier.sol\":{\"keccak256\":\"0x6f2446a68a3792f540dc59a4eb296b6d2aa5aac91691ee85c91df9507c3b8a8e\",\"urls\":[\"bzzr://09b12073e1cdd1db1fcada6b3c450c4d369db21cb10da2ccd39bad3d26e0b4b7\"]},\"openzeppelin-solidity/contracts/drafts/Counters.sol\":{\"keccak256\":\"0x5be8533c5950173dc2b77b75108fae6e6c5449aedadde3385ba457394aad2384\",\"urls\":[\"bzzr://8ab3b1e3d023aafb8a2d127de323b74567084e821b955b5f543e67fe964b1a6b\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x640b6dee7a4b830bdfd52b5031a07fc2b12209f5b2e29e5d364a7d37f69d8076\",\"urls\":[\"bzzr://292843005e754e752644f767477ec5ad7a1ffc91ddb18c38b8079c62f3993cad\"]},\"openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x042048c375daca04b31e31c91bbae912b84b5eb818c4e31b2deb530fd2305342\",\"urls\":[\"bzzr://2f8b9c142d30b43eab7b77dbcc632a51987eeb62371777d765e9311c0b3c4c13\"]},\"openzeppelin-solidity/contracts/utils/Address.sol\":{\"keccak256\":\"0x1a8e5072509c5ea7365eb1d48030b9be865140c8fb779968da0a459a0e174a11\",\"urls\":[\"bzzr://4e1d23731da27602b8c552e54fb9976dadf8cf46a8f90a3c8c1b85fe044618b9\"]}},\"version\":1}",
  "bytecode": "0x608060405260006014553480156200001657600080fd5b50604051620047b6380380620047b6833981018060405260608110156200003c57600080fd5b810190808051906020019092919080516401000000008111156200005f57600080fd5b828101905060208101848111156200007657600080fd5b81518560018202830111640100000000821117156200009457600080fd5b50509291906020018051640100000000811115620000b157600080fd5b82810190506020810184811115620000c857600080fd5b8151856001820283011164010000000082111715620000e657600080fd5b5050929190505050818181816040518060600160405280603f815260200162004777603f9139336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc952bd5aeb53e3b17bbef0f26d9d0b2eaf947aca5452382c4aaba18433db472b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a160008060146101000a81548160ff021916908315150217905550620002026301ffc9a760e01b620002ce60201b60201c565b6200021a6380ac58cd60e01b620002ce60201b60201c565b6200023263780e9d6360e01b620002ce60201b60201c565b82600f90805190602001906200024a92919062000370565b5081601090805190602001906200026392919062000370565b508090506200027f635b5e139f60e01b620002ce60201b60201c565b505050505082601360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200041f565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141515156200030457600080fd5b6001806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003b357805160ff1916838001178555620003e4565b82800160010185558215620003e4579182015b82811115620003e3578251825591602001919060010190620003c6565b5b509050620003f39190620003f7565b5090565b6200041c91905b8082111562000418576000816000905550600101620003fe565b5090565b90565b614348806200042f6000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c80636aa69d4e1161011a578063c47f0027116100ad578063e985e9c51161007c578063e985e9c514611255578063ea95deaf146112d1578063f2fde38b14611452578063f76f950e14611496578063fea369d01461153d57610206565b8063c47f002714610fee578063c87b56dd14611067578063cf6956881461110e578063d3fc98641461115857610206565b8063a22cb465116100e9578063a22cb46514610d9d578063b84c824614610ded578063b88d4fde14610e66578063bdc32be014610f6b57610206565b80636aa69d4e14610a6c57806370a0823114610bf7578063775a8f5e14610c4f57806383ae502e14610cf657610206565b806327dc297e1161019d5780633d3d34be1161016c5780633d3d34be146107ea57806342842e0e146108915780634f6ccce7146108ff5780635e57966d146109415780636352211e146109fe57610206565b806327dc297e146104ee5780632f745c59146105b357806330176e131461061557806338bbfa501461068e57610206565b806316c38b3c116101d957806316c38b3c146103af57806317d7de7c146103df57806318160ddd1461046257806323b872dd1461048057610206565b806301ffc9a71461020b578063081812fc14610270578063095ea7b3146102de578063150704011461032c575b600080fd5b6102566004803603602081101561022157600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506115e4565b604051808215151515815260200191505060405180910390f35b61029c6004803603602081101561028657600080fd5b810190808035906020019092919050505061164c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61032a600480360360408110156102f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611706565b005b610334611947565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610374578082015181840152602081019050610359565b50505050905090810190601f1680156103a15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103dd600480360360208110156103c557600080fd5b810190808035151590602001909291905050506119e9565b005b6103e7611aad565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561042757808201518184015260208101905061040c565b50505050905090810190601f1680156104545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61046a611b4f565b6040518082815260200191505060405180910390f35b6104ec6004803603606081101561049657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611b5c565b005b6105b16004803603604081101561050457600080fd5b81019080803590602001909291908035906020019064010000000081111561052b57600080fd5b82018360208201111561053d57600080fd5b8035906020019184600183028401116401000000008311171561055f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611b81565b005b6105ff600480360360408110156105c957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611bc4565b6040518082815260200191505060405180910390f35b61068c6004803603602081101561062b57600080fd5b810190808035906020019064010000000081111561064857600080fd5b82018360208201111561065a57600080fd5b8035906020019184600183028401116401000000008311171561067c57600080fd5b9091929391929390505050611c3b565b005b6107e8600480360360608110156106a457600080fd5b8101908080359060200190929190803590602001906401000000008111156106cb57600080fd5b8201836020820111156106dd57600080fd5b803590602001918460018302840111640100000000831117156106ff57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561076257600080fd5b82018360208201111561077457600080fd5b8035906020019184600183028401116401000000008311171561079657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611c51565b005b6108166004803603602081101561080057600080fd5b8101908080359060200190929190505050611c56565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561085657808201518184015260208101905061083b565b50505050905090810190601f1680156108835780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108fd600480360360608110156108a757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611cbd565b005b61092b6004803603602081101561091557600080fd5b8101908080359060200190929190505050611cdd565b6040518082815260200191505060405180910390f35b6109836004803603602081101561095757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d15565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109c35780820151818401526020810190506109a8565b50505050905090810190601f1680156109f05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610a2a60048036036020811015610a1457600080fd5b8101908080359060200190929190505050611fac565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610bf56004803603610180811015610a8357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b82821015610b62578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505081526020019060010190610b0e565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050509192919290505050611fe9565b005b610c3960048036036020811015610c0d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612336565b6040518082815260200191505060405180910390f35b610c7b60048036036020811015610c6557600080fd5b8101908080359060200190929190505050612386565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cbb578082015181840152602081019050610ca0565b50505050905090810190601f168015610ce85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610d2260048036036020811015610d0c57600080fd5b8101908080359060200190929190505050612437565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610d62578082015181840152602081019050610d47565b50505050905090810190601f168015610d8f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610deb60048036036040811015610db357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050612537565b005b610e6460048036036020811015610e0357600080fd5b8101908080359060200190640100000000811115610e2057600080fd5b820183602082011115610e3257600080fd5b80359060200191846001830284011164010000000083111715610e5457600080fd5b9091929391929390505050612673565b005b610f6960048036036080811015610e7c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610ee357600080fd5b820183602082011115610ef557600080fd5b80359060200191846001830284011164010000000083111715610f1757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612689565b005b610f736126b1565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610fb3578082015181840152602081019050610f98565b50505050905090810190601f168015610fe05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6110656004803603602081101561100457600080fd5b810190808035906020019064010000000081111561102157600080fd5b82018360208201111561103357600080fd5b8035906020019184600183028401116401000000008311171561105557600080fd5b9091929391929390505050612753565b005b6110936004803603602081101561107d57600080fd5b8101908080359060200190929190505050612769565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156110d35780820151818401526020810190506110b8565b50505050905090810190601f1680156111005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611116612832565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61123b6004803603606081101561116e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156111b557600080fd5b8201836020820111156111c757600080fd5b803590602001918460018302840111640100000000831117156111e957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612858565b604051808215151515815260200191505060405180910390f35b6112b76004803603604081101561126b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612920565b604051808215151515815260200191505060405180910390f35b61145060048036036101608110156112e857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b828210156113bd578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505081526020019060010190611369565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192905050506129b4565b005b6114946004803603602081101561146857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612ad7565b005b6114c2600480360360208110156114ac57600080fd5b8101908080359060200190929190505050612c65565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156115025780820151818401526020810190506114e7565b50505050905090810190601f16801561152f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6115696004803603602081101561155357600080fd5b8101908080359060200190929190505050612d9f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156115a957808201518184015260208101905061158e565b50505050905090810190601f1680156115d65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b600061165782612de6565b15156116cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f546f6b656e20646f65736e27742065786973740000000000000000000000000081525060200191505060405180910390fd5b6008600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff166007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515156117dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f416c7265616479206f776e6572206f6620746f6b656e4964000000000000000081525060200191505060405180910390fd5b6007600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611896576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806142d16029913960400191505060405180910390fd5b816008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b606060108054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119df5780601f106119b4576101008083540402835291602001916119df565b820191906000526020600020905b8154815290600101906020018083116119c257829003601f168201915b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a90576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806142fa6023913960400191505060405180910390fd5b80600060146101000a81548160ff02191690831515021790555050565b6060600f8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b455780601f10611b1a57610100808354040283529160200191611b45565b820191906000526020600020905b815481529060010190602001808311611b2857829003601f168201915b5050505050905090565b6000600d80549050905090565b611b663382612e58565b1515611b7157600080fd5b611b7c838383612eff565b505050565b611bc0828260006040519080825280601f01601f191660200182016040528015611bba5781602001600182028038833980820191505090505b50611c51565b5050565b6000611bcf83612336565b82101515611bdc57600080fd5b600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515611c2857fe5b9060005260206000200154905092915050565b818160119190611c4c929190614155565b505050565b505050565b60606000601660008481526020019081526020016000205490506060611cb16015600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611d15565b90508092505050919050565b611cd883838360405180602001604052806000815250612689565b505050565b6000611ce7611b4f565b82101515611cf457600080fd5b600d82815481101515611d0357fe5b90600052602060002001549050919050565b606060008273ffffffffffffffffffffffffffffffffffffffff1660001b905060606040518060400160405280601081526020017f30313233343536373839616263646566000000000000000000000000000000008152509050606060336040519080825280601f01601f191660200182016040528015611da55781602001600182028038833980820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181101515611dd857fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181101515611e3857fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060008090505b6014811015611fa05782600485600c8401602081101515611e8b57fe5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c60f81c60ff16815181101515611ec557fe5b90602001015160f81c60f81b8260028302600201815181101515611ee557fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535082600f60f81b85600c8401602081101515611f2c57fe5b1a60f81b1660f81c60ff16815181101515611f4357fe5b90602001015160f81c60f81b8260028302600301815181101515611f6357fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050611e6e565b50809350505050919050565b60006007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000611ff785858585612f23565b905060006015600083815260200190815260200160002060000154146120706040518060400160405280601781526020017f416c726561647920657869737420736f6c7574696f6e2100000000000000000081525061206b6015600086815260200190815260200160002060000154612c65565b613031565b901515612118576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156120dd5780820151818401526020810190506120c2565b50505050905090810190601f16801561210a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50601360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663621e9ec0868686866040518563ffffffff1660e01b81526004018085600260200280838360005b8381101561219557808201518184015260208101905061217a565b505050509050018460026000925b818410156121e95782846020020151600260200280838360005b838110156121d85780820151818401526020810190506121bd565b5050505090500192600101926121a3565b9250505083600260200280838360005b838110156122145780820151818401526020810190506121f9565b5050505090500182600260200280838360005b83811015612242578082015181840152602081019050612227565b5050505090500194505050505060206040518083038186803b15801561226757600080fd5b505afa15801561227b573d6000803e3d6000fd5b505050506040513d602081101561229157600080fd5b81019080805190602001909291905050501515612316576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f536f6c7574696f6e2069736e277420636f72726563742e00000000000000000081525060200191505060405180910390fd5b61232387868686866129b4565b61232d8787613075565b50505050505050565b600061237f600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613096565b9050919050565b606060206040519080825280601f01601f1916602001820160405280156123bc5781602001600182028038833980820191505090505b50905060008090505b60208110156124315780601f0360080260020a838115156123e257fe5b0460f81b82828151811015156123f457fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506123c5565b50919050565b606060006016600084815260200190815260200160002054905060606124726015600084815260200190815260200160002060000154612c65565b905060606124b56015600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611d15565b905061252d6040518060400160405280600981526020017f20696e646578203a200000000000000000000000000000000000000000000000815250836040518060400160405280600981526020017f206f776e6572203a200000000000000000000000000000000000000000000000815250846130a4565b9350505050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561257257600080fd5b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b818160109190612684929190614155565b505050565b612694848484611b5c565b6126a0848484846130cc565b15156126ab57600080fd5b50505050565b606060118054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156127495780601f1061271e57610100808354040283529160200191612749565b820191906000526020600020905b81548152906001019060200180831161272c57829003601f168201915b5050505050905090565b8181600f9190612764929190614155565b505050565b606061277482612de6565b151561277f57600080fd5b601260008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156128265780601f106127fb57610100808354040283529160200191612826565b820191906000526020600020905b81548152906001019060200180831161280957829003601f168201915b50505050509050919050565b601360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612901576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806142fa6023913960400191505060405180910390fd5b61290b8484613075565b61291582846132b7565b600190509392505050565b6000600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006129c285858585612f23565b90506129da600160145461331490919063ffffffff16565b601481905550856015600083815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601454601560008381526020019081526020016000206000018190555080601660006014548152602001908152602001600020819055507fcd096f17a41ca2f28be4f38411924d525e3be72c0a5047cae9fec2aff3fe0c5586604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612b7e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806142fa6023913960400191505060405180910390fd5b60008090508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515612bbe57600080fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc952bd5aeb53e3b17bbef0f26d9d0b2eaf947aca5452382c4aaba18433db472b82604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15050565b60606000821415612cad576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612d9a565b600082905060005b600082141515612cdb578080600101915050600a82811515612cd357fe5b049150612cb5565b6060816040519080825280601f01601f191660200182016040528015612d105781602001600182028038833980820191505090505b50905060006001830390505b600086141515612d9257600a86811515612d3257fe5b0660300160f81b828280600190039350815181101515612d4e57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a86811515612d8a57fe5b049550612d1c565b819450505050505b919050565b60606000601660008481526020019081526020016000205490506060612dda6015600084815260200190815260200160002060000154612c65565b90508092505050919050565b6000806007600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600080612e6483611fac565b905060008173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614905060008573ffffffffffffffffffffffffffffffffffffffff16612ebb8661164c565b73ffffffffffffffffffffffffffffffffffffffff161490506000612ee08488612920565b90508280612eeb5750815b80612ef35750805b94505050505092915050565b612f0a83838361339e565b612f148382613768565b612f1e828261390c565b505050565b6000848484846040516020018085600260200280838360005b83811015612f57578082015181840152602081019050612f3c565b505050509050018460026000925b81841015612fab5782846020020151600260200280838360005b83811015612f9a578082015181840152602081019050612f7f565b505050509050019260010192612f65565b9250505083600260200280838360005b83811015612fd6578082015181840152602081019050612fbb565b5050505090500182600260200280838360005b83811015613004578082015181840152602081019050612fe9565b50505050905001945050505050604051602081830303815290604052805190602001209050949350505050565b606061306d83836040518060200160405280600081525060405180602001604052806000815250604051806020016040528060008152506139d3565b905092915050565b61307f8282613cb3565b613089828261390c565b61309281613e83565b5050565b600081600001549050919050565b60606130c285858585604051806020016040528060008152506139d3565b9050949350505050565b60006130ed8473ffffffffffffffffffffffffffffffffffffffff16613ecf565b15156130fc57600190506132af565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156131d75780820151818401526020810190506131bc565b50505050905090810190601f1680156132045780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561322657600080fd5b505af115801561323a573d6000803e3d6000fd5b505050506040513d602081101561325057600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b6132c081612de6565b15156132cb57600080fd5b60606132d682612c65565b905060606132e48483613031565b90508060126000858152602001908152602001600020908051906020019061330d9291906141d5565b5050505050565b6000808284019050838110151515613394576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146134506040518060400160405280601b81526020017f546f6b656e206f776e65722069736e277420746865206f776e6572000000000081525061344286611d15565b61344b86611d15565b613f1a565b9015156134f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156134bd5780820151818401526020810190506134a2565b50505050905090810190601f1680156134ea5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008090508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156135756040518060400160405280601681526020017f546f2069736e27742076616c696420616464726573730000000000000000000081525061357086611d15565b613031565b90151561361d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156135e25780820151818401526020810190506135c7565b50505050905090810190601f16801561360f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5061362782613f50565b61366e600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020614010565b6136b5600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020614033565b826007600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b60006137c06001600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061404990919063ffffffff16565b90506000600c600084815260200190815260200160002054905081811415156138b3576000600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561383157fe5b9060005260206000200154905080600b60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561388b57fe5b906000526020600020018190555081600c600083815260200190815260200160002081905550505b600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036139059190614255565b5050505050565b600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050600c600083815260200190815260200160002081905550600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b6060808690506060869050606086905060608690506060869050606081518351855187518951010101016040519080825280601f01601f191660200182016040528015613a2f5781602001600182028038833980820191505090505b509050606081905060008090506000809050600090505b8851811015613aba578881815181101515613a5d57fe5b90602001015160f81c60f81b8383806001019450815181101515613a7d57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613a46565b600090505b8751811015613b33578781815181101515613ad657fe5b90602001015160f81c60f81b8383806001019450815181101515613af657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613abf565b600090505b8651811015613bac578681815181101515613b4f57fe5b90602001015160f81c60f81b8383806001019450815181101515613b6f57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613b38565b600090505b8551811015613c25578581815181101515613bc857fe5b90602001015160f81c60f81b8383806001019450815181101515613be857fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613bb1565b600090505b8451811015613c9e578481815181101515613c4157fe5b90602001015160f81c60f81b8383806001019450815181101515613c6157fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613c2a565b82995050505050505050505095945050505050565b60008090508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015613cfa5750613cf882612de6565b155b1515613d51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806142a7602a913960400191505060405180910390fd5b60006007600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050836007600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613e22600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020614033565b828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b600d80549050600e600083815260200190815260200160002081905550600d81908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f9150808214158015613f1157506000801b8214155b92505050919050565b6060613f4784848460405180602001604052806000815250604051806020016040528060008152506139d3565b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561400d5760006008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6140286001826000015461404990919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b600061408b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250614093565b905092915050565b60008383111582901515614142576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156141075780820151818401526020810190506140ec565b50505050905090810190601f1680156141345780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061419657803560ff19168380011785556141c4565b828001600101855582156141c4579182015b828111156141c35782358255916020019190600101906141a8565b5b5090506141d19190614281565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061421657805160ff1916838001178555614244565b82800160010185558215614244579182015b82811115614243578251825591602001919060010190614228565b5b5090506142519190614281565b5090565b81548183558181111561427c5781836000526020600020918201910161427b9190614281565b5b505050565b6142a391905b8082111561429f576000816000905550600101614287565b5090565b9056fe546f6b656e20416c726561647920657869737473206f72206164647265737320697320696e76616c69644d736753656e6465722069736e277420746865206f776e6572206f662074686520636f6e74726163744e6f7420656e61626c652063617573652049742773206e6f7420746865206f776e6572a165627a7a723058202cbe2a563ffd70ec2500202a43575f2556070c015df92ea1a07be54b9bcdb39e002968747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f756461636974792d626c6f636b636861696e2f63617073746f6e652f",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106102065760003560e01c80636aa69d4e1161011a578063c47f0027116100ad578063e985e9c51161007c578063e985e9c514611255578063ea95deaf146112d1578063f2fde38b14611452578063f76f950e14611496578063fea369d01461153d57610206565b8063c47f002714610fee578063c87b56dd14611067578063cf6956881461110e578063d3fc98641461115857610206565b8063a22cb465116100e9578063a22cb46514610d9d578063b84c824614610ded578063b88d4fde14610e66578063bdc32be014610f6b57610206565b80636aa69d4e14610a6c57806370a0823114610bf7578063775a8f5e14610c4f57806383ae502e14610cf657610206565b806327dc297e1161019d5780633d3d34be1161016c5780633d3d34be146107ea57806342842e0e146108915780634f6ccce7146108ff5780635e57966d146109415780636352211e146109fe57610206565b806327dc297e146104ee5780632f745c59146105b357806330176e131461061557806338bbfa501461068e57610206565b806316c38b3c116101d957806316c38b3c146103af57806317d7de7c146103df57806318160ddd1461046257806323b872dd1461048057610206565b806301ffc9a71461020b578063081812fc14610270578063095ea7b3146102de578063150704011461032c575b600080fd5b6102566004803603602081101561022157600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506115e4565b604051808215151515815260200191505060405180910390f35b61029c6004803603602081101561028657600080fd5b810190808035906020019092919050505061164c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61032a600480360360408110156102f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611706565b005b610334611947565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610374578082015181840152602081019050610359565b50505050905090810190601f1680156103a15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103dd600480360360208110156103c557600080fd5b810190808035151590602001909291905050506119e9565b005b6103e7611aad565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561042757808201518184015260208101905061040c565b50505050905090810190601f1680156104545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61046a611b4f565b6040518082815260200191505060405180910390f35b6104ec6004803603606081101561049657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611b5c565b005b6105b16004803603604081101561050457600080fd5b81019080803590602001909291908035906020019064010000000081111561052b57600080fd5b82018360208201111561053d57600080fd5b8035906020019184600183028401116401000000008311171561055f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611b81565b005b6105ff600480360360408110156105c957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611bc4565b6040518082815260200191505060405180910390f35b61068c6004803603602081101561062b57600080fd5b810190808035906020019064010000000081111561064857600080fd5b82018360208201111561065a57600080fd5b8035906020019184600183028401116401000000008311171561067c57600080fd5b9091929391929390505050611c3b565b005b6107e8600480360360608110156106a457600080fd5b8101908080359060200190929190803590602001906401000000008111156106cb57600080fd5b8201836020820111156106dd57600080fd5b803590602001918460018302840111640100000000831117156106ff57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561076257600080fd5b82018360208201111561077457600080fd5b8035906020019184600183028401116401000000008311171561079657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611c51565b005b6108166004803603602081101561080057600080fd5b8101908080359060200190929190505050611c56565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561085657808201518184015260208101905061083b565b50505050905090810190601f1680156108835780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108fd600480360360608110156108a757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611cbd565b005b61092b6004803603602081101561091557600080fd5b8101908080359060200190929190505050611cdd565b6040518082815260200191505060405180910390f35b6109836004803603602081101561095757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d15565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109c35780820151818401526020810190506109a8565b50505050905090810190601f1680156109f05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610a2a60048036036020811015610a1457600080fd5b8101908080359060200190929190505050611fac565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610bf56004803603610180811015610a8357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b82821015610b62578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505081526020019060010190610b0e565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050509192919290505050611fe9565b005b610c3960048036036020811015610c0d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612336565b6040518082815260200191505060405180910390f35b610c7b60048036036020811015610c6557600080fd5b8101908080359060200190929190505050612386565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cbb578082015181840152602081019050610ca0565b50505050905090810190601f168015610ce85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610d2260048036036020811015610d0c57600080fd5b8101908080359060200190929190505050612437565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610d62578082015181840152602081019050610d47565b50505050905090810190601f168015610d8f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610deb60048036036040811015610db357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050612537565b005b610e6460048036036020811015610e0357600080fd5b8101908080359060200190640100000000811115610e2057600080fd5b820183602082011115610e3257600080fd5b80359060200191846001830284011164010000000083111715610e5457600080fd5b9091929391929390505050612673565b005b610f6960048036036080811015610e7c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610ee357600080fd5b820183602082011115610ef557600080fd5b80359060200191846001830284011164010000000083111715610f1757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612689565b005b610f736126b1565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610fb3578082015181840152602081019050610f98565b50505050905090810190601f168015610fe05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6110656004803603602081101561100457600080fd5b810190808035906020019064010000000081111561102157600080fd5b82018360208201111561103357600080fd5b8035906020019184600183028401116401000000008311171561105557600080fd5b9091929391929390505050612753565b005b6110936004803603602081101561107d57600080fd5b8101908080359060200190929190505050612769565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156110d35780820151818401526020810190506110b8565b50505050905090810190601f1680156111005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b611116612832565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61123b6004803603606081101561116e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156111b557600080fd5b8201836020820111156111c757600080fd5b803590602001918460018302840111640100000000831117156111e957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612858565b604051808215151515815260200191505060405180910390f35b6112b76004803603604081101561126b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612920565b604051808215151515815260200191505060405180910390f35b61145060048036036101608110156112e857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b828210156113bd578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505081526020019060010190611369565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192905050506129b4565b005b6114946004803603602081101561146857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612ad7565b005b6114c2600480360360208110156114ac57600080fd5b8101908080359060200190929190505050612c65565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156115025780820151818401526020810190506114e7565b50505050905090810190601f16801561152f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6115696004803603602081101561155357600080fd5b8101908080359060200190929190505050612d9f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156115a957808201518184015260208101905061158e565b50505050905090810190601f1680156115d65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b600061165782612de6565b15156116cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f546f6b656e20646f65736e27742065786973740000000000000000000000000081525060200191505060405180910390fd5b6008600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff166007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515156117dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f416c7265616479206f776e6572206f6620746f6b656e4964000000000000000081525060200191505060405180910390fd5b6007600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611896576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806142d16029913960400191505060405180910390fd5b816008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b606060108054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119df5780601f106119b4576101008083540402835291602001916119df565b820191906000526020600020905b8154815290600101906020018083116119c257829003601f168201915b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a90576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806142fa6023913960400191505060405180910390fd5b80600060146101000a81548160ff02191690831515021790555050565b6060600f8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b455780601f10611b1a57610100808354040283529160200191611b45565b820191906000526020600020905b815481529060010190602001808311611b2857829003601f168201915b5050505050905090565b6000600d80549050905090565b611b663382612e58565b1515611b7157600080fd5b611b7c838383612eff565b505050565b611bc0828260006040519080825280601f01601f191660200182016040528015611bba5781602001600182028038833980820191505090505b50611c51565b5050565b6000611bcf83612336565b82101515611bdc57600080fd5b600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515611c2857fe5b9060005260206000200154905092915050565b818160119190611c4c929190614155565b505050565b505050565b60606000601660008481526020019081526020016000205490506060611cb16015600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611d15565b90508092505050919050565b611cd883838360405180602001604052806000815250612689565b505050565b6000611ce7611b4f565b82101515611cf457600080fd5b600d82815481101515611d0357fe5b90600052602060002001549050919050565b606060008273ffffffffffffffffffffffffffffffffffffffff1660001b905060606040518060400160405280601081526020017f30313233343536373839616263646566000000000000000000000000000000008152509050606060336040519080825280601f01601f191660200182016040528015611da55781602001600182028038833980820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181101515611dd857fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181101515611e3857fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060008090505b6014811015611fa05782600485600c8401602081101515611e8b57fe5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c60f81c60ff16815181101515611ec557fe5b90602001015160f81c60f81b8260028302600201815181101515611ee557fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535082600f60f81b85600c8401602081101515611f2c57fe5b1a60f81b1660f81c60ff16815181101515611f4357fe5b90602001015160f81c60f81b8260028302600301815181101515611f6357fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050611e6e565b50809350505050919050565b60006007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000611ff785858585612f23565b905060006015600083815260200190815260200160002060000154146120706040518060400160405280601781526020017f416c726561647920657869737420736f6c7574696f6e2100000000000000000081525061206b6015600086815260200190815260200160002060000154612c65565b613031565b901515612118576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156120dd5780820151818401526020810190506120c2565b50505050905090810190601f16801561210a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50601360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663621e9ec0868686866040518563ffffffff1660e01b81526004018085600260200280838360005b8381101561219557808201518184015260208101905061217a565b505050509050018460026000925b818410156121e95782846020020151600260200280838360005b838110156121d85780820151818401526020810190506121bd565b5050505090500192600101926121a3565b9250505083600260200280838360005b838110156122145780820151818401526020810190506121f9565b5050505090500182600260200280838360005b83811015612242578082015181840152602081019050612227565b5050505090500194505050505060206040518083038186803b15801561226757600080fd5b505afa15801561227b573d6000803e3d6000fd5b505050506040513d602081101561229157600080fd5b81019080805190602001909291905050501515612316576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f536f6c7574696f6e2069736e277420636f72726563742e00000000000000000081525060200191505060405180910390fd5b61232387868686866129b4565b61232d8787613075565b50505050505050565b600061237f600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613096565b9050919050565b606060206040519080825280601f01601f1916602001820160405280156123bc5781602001600182028038833980820191505090505b50905060008090505b60208110156124315780601f0360080260020a838115156123e257fe5b0460f81b82828151811015156123f457fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506123c5565b50919050565b606060006016600084815260200190815260200160002054905060606124726015600084815260200190815260200160002060000154612c65565b905060606124b56015600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611d15565b905061252d6040518060400160405280600981526020017f20696e646578203a200000000000000000000000000000000000000000000000815250836040518060400160405280600981526020017f206f776e6572203a200000000000000000000000000000000000000000000000815250846130a4565b9350505050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561257257600080fd5b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b818160109190612684929190614155565b505050565b612694848484611b5c565b6126a0848484846130cc565b15156126ab57600080fd5b50505050565b606060118054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156127495780601f1061271e57610100808354040283529160200191612749565b820191906000526020600020905b81548152906001019060200180831161272c57829003601f168201915b5050505050905090565b8181600f9190612764929190614155565b505050565b606061277482612de6565b151561277f57600080fd5b601260008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156128265780601f106127fb57610100808354040283529160200191612826565b820191906000526020600020905b81548152906001019060200180831161280957829003601f168201915b50505050509050919050565b601360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612901576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806142fa6023913960400191505060405180910390fd5b61290b8484613075565b61291582846132b7565b600190509392505050565b6000600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006129c285858585612f23565b90506129da600160145461331490919063ffffffff16565b601481905550856015600083815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601454601560008381526020019081526020016000206000018190555080601660006014548152602001908152602001600020819055507fcd096f17a41ca2f28be4f38411924d525e3be72c0a5047cae9fec2aff3fe0c5586604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515612b7e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806142fa6023913960400191505060405180910390fd5b60008090508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515612bbe57600080fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc952bd5aeb53e3b17bbef0f26d9d0b2eaf947aca5452382c4aaba18433db472b82604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15050565b60606000821415612cad576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612d9a565b600082905060005b600082141515612cdb578080600101915050600a82811515612cd357fe5b049150612cb5565b6060816040519080825280601f01601f191660200182016040528015612d105781602001600182028038833980820191505090505b50905060006001830390505b600086141515612d9257600a86811515612d3257fe5b0660300160f81b828280600190039350815181101515612d4e57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a86811515612d8a57fe5b049550612d1c565b819450505050505b919050565b60606000601660008481526020019081526020016000205490506060612dda6015600084815260200190815260200160002060000154612c65565b90508092505050919050565b6000806007600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600080612e6483611fac565b905060008173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614905060008573ffffffffffffffffffffffffffffffffffffffff16612ebb8661164c565b73ffffffffffffffffffffffffffffffffffffffff161490506000612ee08488612920565b90508280612eeb5750815b80612ef35750805b94505050505092915050565b612f0a83838361339e565b612f148382613768565b612f1e828261390c565b505050565b6000848484846040516020018085600260200280838360005b83811015612f57578082015181840152602081019050612f3c565b505050509050018460026000925b81841015612fab5782846020020151600260200280838360005b83811015612f9a578082015181840152602081019050612f7f565b505050509050019260010192612f65565b9250505083600260200280838360005b83811015612fd6578082015181840152602081019050612fbb565b5050505090500182600260200280838360005b83811015613004578082015181840152602081019050612fe9565b50505050905001945050505050604051602081830303815290604052805190602001209050949350505050565b606061306d83836040518060200160405280600081525060405180602001604052806000815250604051806020016040528060008152506139d3565b905092915050565b61307f8282613cb3565b613089828261390c565b61309281613e83565b5050565b600081600001549050919050565b60606130c285858585604051806020016040528060008152506139d3565b9050949350505050565b60006130ed8473ffffffffffffffffffffffffffffffffffffffff16613ecf565b15156130fc57600190506132af565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156131d75780820151818401526020810190506131bc565b50505050905090810190601f1680156132045780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561322657600080fd5b505af115801561323a573d6000803e3d6000fd5b505050506040513d602081101561325057600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b6132c081612de6565b15156132cb57600080fd5b60606132d682612c65565b905060606132e48483613031565b90508060126000858152602001908152602001600020908051906020019061330d9291906141d5565b5050505050565b6000808284019050838110151515613394576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166007600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146134506040518060400160405280601b81526020017f546f6b656e206f776e65722069736e277420746865206f776e6572000000000081525061344286611d15565b61344b86611d15565b613f1a565b9015156134f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156134bd5780820151818401526020810190506134a2565b50505050905090810190601f1680156134ea5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008090508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156135756040518060400160405280601681526020017f546f2069736e27742076616c696420616464726573730000000000000000000081525061357086611d15565b613031565b90151561361d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156135e25780820151818401526020810190506135c7565b50505050905090810190601f16801561360f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5061362782613f50565b61366e600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020614010565b6136b5600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020614033565b826007600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b60006137c06001600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061404990919063ffffffff16565b90506000600c600084815260200190815260200160002054905081811415156138b3576000600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561383157fe5b9060005260206000200154905080600b60008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561388b57fe5b906000526020600020018190555081600c600083815260200190815260200160002081905550505b600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036139059190614255565b5050505050565b600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050600c600083815260200190815260200160002081905550600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b6060808690506060869050606086905060608690506060869050606081518351855187518951010101016040519080825280601f01601f191660200182016040528015613a2f5781602001600182028038833980820191505090505b509050606081905060008090506000809050600090505b8851811015613aba578881815181101515613a5d57fe5b90602001015160f81c60f81b8383806001019450815181101515613a7d57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613a46565b600090505b8751811015613b33578781815181101515613ad657fe5b90602001015160f81c60f81b8383806001019450815181101515613af657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613abf565b600090505b8651811015613bac578681815181101515613b4f57fe5b90602001015160f81c60f81b8383806001019450815181101515613b6f57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613b38565b600090505b8551811015613c25578581815181101515613bc857fe5b90602001015160f81c60f81b8383806001019450815181101515613be857fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613bb1565b600090505b8451811015613c9e578481815181101515613c4157fe5b90602001015160f81c60f81b8383806001019450815181101515613c6157fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613c2a565b82995050505050505050505095945050505050565b60008090508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015613cfa5750613cf882612de6565b155b1515613d51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806142a7602a913960400191505060405180910390fd5b60006007600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050836007600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613e22600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020614033565b828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b600d80549050600e600083815260200190815260200160002081905550600d81908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f9150808214158015613f1157506000801b8214155b92505050919050565b6060613f4784848460405180602001604052806000815250604051806020016040528060008152506139d3565b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561400d5760006008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6140286001826000015461404990919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b600061408b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250614093565b905092915050565b60008383111582901515614142576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156141075780820151818401526020810190506140ec565b50505050905090810190601f1680156141345780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061419657803560ff19168380011785556141c4565b828001600101855582156141c4579182015b828111156141c35782358255916020019190600101906141a8565b5b5090506141d19190614281565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061421657805160ff1916838001178555614244565b82800160010185558215614244579182015b82811115614243578251825591602001919060010190614228565b5b5090506142519190614281565b5090565b81548183558181111561427c5781836000526020600020918201910161427b9190614281565b5b505050565b6142a391905b8082111561429f576000816000905550600101614287565b5090565b9056fe546f6b656e20416c726561647920657869737473206f72206164647265737320697320696e76616c69644d736753656e6465722069736e277420746865206f776e6572206f662074686520636f6e74726163744e6f7420656e61626c652063617573652049742773206e6f7420746865206f776e6572a165627a7a723058202cbe2a563ffd70ec2500202a43575f2556070c015df92ea1a07be54b9bcdb39e0029",
  "sourceMap": "783:3790:3:-;;;1084:1;1062:23;;1545:245;8:9:-1;5:2;;;30:1;27;20:12;5:2;1545:245:3;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1545:245:3;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;1545:245:3;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;1545:245:3;;;;;;1692:9;1703:11;23338:4:0;23344:6;20865:282;;;;;;;;;;;;;;;;;616:10;607:6;;:19;;;;;;;;;;;;;;;;;;682:34;709:6;;;;;;;;;;;682:34;;;;;;;;;;;;;;;;;;;;;;2112:5;2102:7;;:15;;;;;;;;;;;;;;;;;;3108:40;2705:10;3127:20;;3108:18;;;:40;;:::i;:::-;5269;5143:10;5288:20;;5269:18;;;:40;;:::i;:::-;13594:51;13200:10;13613:31;;13594:18;;;:51;;:::i;:::-;21014:4;21006:5;:12;;;;;;;;;;;;:::i;:::-;;21038:6;21028:7;:16;;;;;;;;;;;;:::i;:::-;;21069:12;21054:27;;21091:49;20677:10;21110:29;;21091:18;;;:49;;:::i;:::-;20865:282;;;23257:193;;1767:15:3;1737:16;;:46;;;;;;;;;;;;;;;;;;1545:245;;;783:3790;;3458:158:0;3548:10;3533:25;;:11;:25;;;;;3525:34;;;;;;;;3605:4;3569:20;:33;3590:11;3569:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;3458:158;:::o;783:3790:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "783:3790:3:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;783:3790:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3246:133:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3246:133:0;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6507:225;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6507:225:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5904:597;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5904:597:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;21426:102;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;21426:102:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1843:123;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1843:123:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;21234:98;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;21234:98:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14359:94;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7709:195;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7709:195:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;14809:136:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14809:136:2;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14809:136:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14809:136:2;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14809:136:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14809:136:2;;;;;;;;;;;;;;;:::i;:::-;;14025:182:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14025:182:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;21750:114;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;21750:114:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;21750:114:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;21750:114:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;21750:114:0;;;;;;;;;;;;:::i;:::-;;14951:180:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14951:180:2;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14951:180:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14951:180:2;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14951:180:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14951:180:2;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14951:180:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14951:180:2;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14951:180:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14951:180:2;;;;;;;;;;;;;;;:::i;:::-;;3059:269:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3059:269:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3059:269:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7910:132:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7910:132:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;14790:148;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14790:148:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;57608:522:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;57608:522:2;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;57608:522:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5669:162:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5669:162:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3691:880:3;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;3691:880:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3691:880:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3691:880:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3691:880:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3691:880:3;;;;;;;;;;;;;;:::i;:::-;;5322:341:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5322:341:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;58136:219:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;58136:219:2;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;58136:219:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2642:411:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2642:411:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2642:411:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7024:213:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7024:213:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;21534:90;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;21534:90:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;21534:90:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;21534:90:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;21534:90:0;;;;;;;;;;;;:::i;:::-;;8048:211;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8048:211:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8048:211:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8048:211:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8048:211:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8048:211:0;;;;;;;;;;;;;;;:::i;:::-;;21630:114;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;21630:114:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21338:82;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;21338:82:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;21338:82:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;21338:82:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;21338:82:0;;;;;;;;;;;;:::i;:::-;;21870:151;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;21870:151:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;21870:151:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;876:34:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;23777:227:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;23777:227:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;23777:227:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;23777:227:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;23777:227:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;23777:227:0;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;7558:145;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7558:145:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2137:499:3;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;2137:499:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2137:499:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2137:499:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2137:499:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2137:499:3;;;;;;;;;;;;;;:::i;:::-;;1004:402:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1004:402:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;43307:463:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;43307:463:2;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;43307:463:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3334:262:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3334:262:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3334:262:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3246:133:0;3316:4;3339:20;:33;3360:11;3339:33;;;;;;;;;;;;;;;;;;;;;;;;;;;3332:40;;3246:133;;;:::o;6507:225::-;6566:7;6644:16;6652:7;6644;:16::i;:::-;6636:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6701:15;:24;6717:7;6701:24;;;;;;;;;;;;;;;;;;;;;6694:31;;6507:225;;;:::o;5904:597::-;6085:2;6061:26;;:11;:20;6073:7;6061:20;;;;;;;;;;;;;;;;;;;;;:26;;;;6053:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6252:11;:20;6264:7;6252:20;;;;;;;;;;;;;;;;;;;;;6238:34;;:10;:34;;;6230:87;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6407:2;6380:15;:24;6396:7;6380:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;6486:7;6482:2;6461:33;;6470:10;6461:33;;;;;;;;;;;;5904:597;;:::o;21426:102::-;21482:13;21514:7;21507:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21426:102;:::o;1843:123::-;883:6;;;;;;;;;;;869:20;;:10;:20;;;861:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1945:14;1935:7;;:24;;;;;;;;;;;;;;;;;;1843:123;:::o;21234:98::-;21288:13;21320:5;21313:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21234:98;:::o;14359:94::-;14403:7;14429:10;:17;;;;14422:24;;14359:94;:::o;7709:195::-;7815:39;7834:10;7846:7;7815:18;:39::i;:::-;7807:48;;;;;;;;7865:32;7879:4;7885:2;7889:7;7865:13;:32::i;:::-;7709:195;;;:::o;14809:136:2:-;14898:40;14909:5;14916:7;14935:1;14925:12;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;14925:12:2;;;;14898:10;:40::i;:::-;14809:136;;:::o;14025:182:0:-;14105:7;14140:16;14150:5;14140:9;:16::i;:::-;14132:5;:24;14124:33;;;;;;;;14174:12;:19;14187:5;14174:19;;;;;;;;;;;;;;;14194:5;14174:26;;;;;;;;;;;;;;;;;;14167:33;;14025:182;;;;:::o;21750:114::-;21845:12;;21829:13;:28;;;;;;;:::i;:::-;;21750:114;;:::o;14951:180:2:-;;;;:::o;3059:269:3:-;3156:13;3180:11;3194:18;:33;3213:13;3194:33;;;;;;;;;;;;3180:47;;3237:19;3259:40;3275:12;:17;3288:3;3275:17;;;;;;;;;;;:23;;;;;;;;;;;;3259:15;:40::i;:::-;3237:62;;3316:5;3309:12;;;;3059:269;;;:::o;7910:132:0:-;7996:39;8013:4;8019:2;8023:7;7996:39;;;;;;;;;;;;:16;:39::i;:::-;7910:132;;;:::o;14790:148::-;14848:7;14883:13;:11;:13::i;:::-;14875:5;:21;14867:30;;;;;;;;14914:10;14925:5;14914:17;;;;;;;;;;;;;;;;;;14907:24;;14790:148;;;:::o;57608:522:2:-;57687:27;57726:13;57758:8;57750:17;;57742:26;;57726:42;;57778:21;:42;;;;;;;;;;;;;;;;;;;57831:16;57860:2;57850:13;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;57850:13:2;;;;57831:32;;57873:12;:3;57877:1;57873:6;;;;;;;;;;;;;;:12;;;;;;;;;;;57895;:3;57899:1;57895:6;;;;;;;;;;;;;;:12;;;;;;;;;;;57922:6;57931:1;57922:10;;57917:179;57938:2;57934:1;:6;57917:179;;;57974:8;58011:1;57994:5;58004:2;58000:1;:6;57994:13;;;;;;;;;;;;:18;;;;;57988:25;;57983:31;;57974:41;;;;;;;;;;;;;;;;;;;57961:3;57969:1;57967;:3;57965:1;:5;57961:10;;;;;;;;;;;;;;:54;;;;;;;;;;;58042:8;58078:4;58062:20;;:5;58072:2;58068:1;:6;58062:13;;;;;;;;;;;;:20;58056:27;;58051:33;;58042:43;;;;;;;;;;;;;;;;;;;58029:3;58037:1;58035;:3;58033:1;:5;58029:10;;;;;;;;;;;;;;:56;;;;;;;;;;;57942:3;;;;;;;57917:179;;;;58119:3;58105:18;;;;;57608:522;;;:::o;5669:162:0:-;5724:7;5804:11;:20;5816:7;5804:20;;;;;;;;;;;;;;;;;;;;;5797:27;;5669:162;;;:::o;3691:880:3:-;3894:19;3916:29;3932:1;3934;3936;3938:6;3916:15;:29::i;:::-;3894:51;;4073:1;4038:12;:25;4051:11;4038:25;;;;;;;;;;;:31;;;:36;4088:95;;;;;;;;;;;;;;;;;;4141:41;4150:12;:25;4163:11;4150:25;;;;;;;;;;;:31;;;4141:8;:41::i;:::-;4088:9;:95::i;:::-;4030:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4030:154:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4270:16;;;;;;;;;;;:25;;;4313:1;4332;4351;4370:6;4270:107;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4270:107:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4270:107:3;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4270:107:3;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4270:107:3;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4270:107:3;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4270:107:3;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4270:107:3;;;;;;;;;;;;;;;;4262:156;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4429:97;4454:5;4474:1;4489;4504;4519:6;4429:11;:97::i;:::-;4537:27;4549:5;4556:7;4537:11;:27::i;:::-;3691:880;;;;;;;:::o;5322:341:0:-;5377:7;5622:34;:17;:24;5640:5;5622:24;;;;;;;;;;;;;;;:32;:34::i;:::-;5615:41;;5322:341;;;:::o;58136:219:2:-;58199:14;58239:2;58229:13;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;58229:13:2;;;;58225:17;;58257:6;58266:1;58257:10;;58252:97;58273:2;58269:1;:6;58252:97;;;58331:1;58326:2;:6;58323:1;:10;58319:1;:15;58314:1;:21;;;;;;;;58303:34;;58296:1;58298;58296:4;;;;;;;;;;;;;;:41;;;;;;;;;;;58277:3;;;;;;;58252:97;;;;58136:219;;;:::o;2642:411:3:-;2746:13;2770:11;2784:18;:33;2803:13;2784:33;;;;;;;;;;;;2770:47;;2827:19;2849:33;2858:12;:17;2871:3;2858:17;;;;;;;;;;;:23;;;2849:8;:33::i;:::-;2827:55;;2892:19;2914:40;2930:12;:17;2943:3;2930:17;;;;;;;;;;;:23;;;;;;;;;;;;2914:15;:40::i;:::-;2892:62;;2971:75;;;;;;;;;;;;;;;;;;3007:5;2971:75;;;;;;;;;;;;;;;;;3040:5;2971:9;:75::i;:::-;2964:82;;;;;2642:411;;;:::o;7024:213:0:-;7109:10;7103:16;;:2;:16;;;;7095:25;;;;;;;;7167:8;7130:18;:30;7149:10;7130:30;;;;;;;;;;;;;;;:34;7161:2;7130:34;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;;;;;;;7217:2;7190:40;;7205:10;7190:40;;;7221:8;7190:40;;;;;;;;;;;;;;;;;;;;;;7024:213;;:::o;21534:90::-;21611:6;;21601:7;:16;;;;;;;:::i;:::-;;21534:90;;:::o;8048:211::-;8154:31;8167:4;8173:2;8177:7;8154:12;:31::i;:::-;8203:48;8226:4;8232:2;8236:7;8245:5;8203:22;:48::i;:::-;8195:57;;;;;;;;8048:211;;;;:::o;21630:114::-;21692:13;21724;21717:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21630:114;:::o;21338:82::-;21409:4;;21401:5;:12;;;;;;;:::i;:::-;;21338:82;;:::o;21870:151::-;21928:13;21961:16;21969:7;21961;:16::i;:::-;21953:25;;;;;;;;21995:10;:19;22006:7;21995:19;;;;;;;;;;;21988:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21870:151;;;:::o;876:34:3:-;;;;;;;;;;;;;:::o;23777:227:0:-;23883:4;883:6;;;;;;;;;;;869:20;;:10;:20;;;861:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23898:24;23910:2;23914:7;23898:11;:24::i;:::-;23932:44;23959:8;23968:7;23932:26;:44::i;:::-;23993:4;23986:11;;23777:227;;;;;:::o;7558:145::-;7638:4;7661:18;:25;7680:5;7661:25;;;;;;;;;;;;;;;:35;7687:8;7661:35;;;;;;;;;;;;;;;;;;;;;;;;;7654:42;;7558:145;;;;:::o;2137:499:3:-;2321:19;2343:29;2359:1;2361;2363;2365:6;2343:15;:29::i;:::-;2321:51;;2400:21;2419:1;2400:14;;:18;;:21;;;;:::i;:::-;2383:14;:38;;;;2466:5;2432:12;:25;2445:11;2432:25;;;;;;;;;;;:31;;;:39;;;;;;;;;;;;;;;;;;2515:14;;2481:12;:25;2494:11;2481:25;;;;;;;;;;;:31;;:48;;;;2577:11;2540:18;:34;2559:14;;2540:34;;;;;;;;;;;:48;;;;2604:25;2623:5;2604:25;;;;;;;;;;;;;;;;;;;;;;2137:499;;;;;;:::o;1004:402:0:-;883:6;;;;;;;;;;;869:20;;:10;:20;;;861:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1164:20;1195:1;1164:33;;1227:12;1215:24;;:8;:24;;;;1207:33;;;;;;;;1339:8;1330:6;;:17;;;;;;;;;;;;;;;;;;1363:36;1390:8;1363:36;;;;;;;;;;;;;;;;;;;;;;939:1;1004:402;:::o;43307:463:2:-;43355:27;43404:1;43398:2;:7;43394:48;;;43421:10;;;;;;;;;;;;;;;;;;;;;43394:48;43451:6;43460:2;43451:11;;43472:8;43490:66;43502:1;43497;:6;;43490:66;;;43519:5;;;;;;;43543:2;43538:7;;;;;;;;;;;43490:66;;;43565:17;43595:3;43585:14;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;43585:14:2;;;;43565:34;;43609:6;43624:1;43618:3;:7;43609:16;;43635:100;43648:1;43642:2;:7;;43635:100;;;43698:2;43693;:7;;;;;;;;43688:2;:12;43677:25;;43665:4;43670:3;;;;;;;43665:9;;;;;;;;;;;;;;:37;;;;;;;;;;;43722:2;43716:8;;;;;;;;;;;43635:100;;;43758:4;43744:19;;;;;;43307:463;;;;:::o;3334:262:3:-;3431:13;3455:11;3469:18;:33;3488:13;3469:33;;;;;;;;;;;;3455:47;;3512:19;3534:33;3543:12;:17;3556:3;3543:17;;;;;;;;;;;:23;;;3534:8;:33::i;:::-;3512:55;;3584:5;3577:12;;;;3334:262;;;:::o;8453:152:0:-;8510:4;8526:13;8542:11;:20;8554:7;8542:20;;;;;;;;;;;;;;;;;;;;;8526:36;;8596:1;8579:19;;:5;:19;;;;8572:26;;;8453:152;;;:::o;8965:727::-;9083:4;9099:13;9115:16;9123:7;9115;:16::i;:::-;9099:32;;9141:19;9174:5;9163:16;;:7;:16;;;9141:38;;9387:31;9445:7;9421:31;;:20;9433:7;9421:11;:20::i;:::-;:31;;;9387:65;;9462:20;9485:32;9502:5;9509:7;9485:16;:32::i;:::-;9462:55;;9557:14;:70;;;;9601:26;9557:70;:114;;;;9656:15;9557:114;9536:149;;;;;;8965:727;;;;:::o;15313:239::-;15398:38;15418:4;15424:2;15428:7;15398:19;:38::i;:::-;15447:47;15480:4;15486:7;15447:32;:47::i;:::-;15505:40;15533:2;15537:7;15505:27;:40::i;:::-;15313:239;;;:::o;1796:252:3:-;1976:7;2028:1;2030;2032;2034:5;2011:29;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2011:29:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2011:29:3;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2011:29:3;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2011:29:3;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2011:29:3;;;2001:40;;;;;;1994:47;;1796:252;;;;;;:::o;39748:166:2:-;39826:33;39878:29;39888:2;39892;39878:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:9;:29::i;:::-;39871:36;;39748:166;;;;:::o;15807:196:0:-;15870:24;15882:2;15886:7;15870:11;:24::i;:::-;15905:40;15933:2;15937:7;15905:27;:40::i;:::-;15956;15988:7;15956:31;:40::i;:::-;15807:196;;:::o;1065:112:5:-;1130:7;1156;:14;;;1149:21;;1065:112;;;:::o;40110:202:2:-;40224:33;40276:29;40286:2;40290;40294;40298;40276:29;;;;;;;;;;;;:9;:29::i;:::-;40269:36;;40110:202;;;;;;:::o;12045:347:0:-;12166:4;12191:15;:2;:13;;;:15::i;:::-;12190:16;12186:58;;;12229:4;12222:11;;;;12186:58;12254:13;12286:2;12270:36;;;12307:10;12319:4;12325:7;12334:5;12270:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;12270:70:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;12270:70:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;12270:70:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;12270:70:0;;;;;;;;;;;;;;;;12254:86;;4276:10;12368:16;;12358:26;;;:6;:26;;;;12350:35;;;12045:347;;;;;;;:::o;22280:595::-;22460:16;22468:7;22460;:16::i;:::-;22452:25;;;;;;;;22601:27;22631:17;22640:7;22631:8;:17::i;:::-;22601:47;;22757:26;22786:38;22796:12;22810:13;22786:9;:38::i;:::-;22757:67;;22856:12;22834:10;:19;22845:7;22834:19;;;;;;;;;;;:34;;;;;;;;;;;;:::i;:::-;;22280:595;;;;:::o;834:176:6:-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;10641:876:0:-;10828:4;10804:28;;:11;:20;10816:7;10804:20;;;;;;;;;;;;;;;;;;;;;:28;;;10847:82;;;;;;;;;;;;;;;;;;10887:21;10903:4;10887:15;:21::i;:::-;10909:19;10925:2;10909:15;:19::i;:::-;10847:9;:82::i;:::-;10796:134;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;10796:134:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10949:20;10980:1;10949:33;;11075:12;11069:18;;:2;:18;;;;11102:55;;;;;;;;;;;;;;;;;;11137:19;11153:2;11137:15;:19::i;:::-;11102:9;:55::i;:::-;11060:98;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;11060:98:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11200:23;11215:7;11200:14;:23::i;:::-;11318:35;:17;:23;11336:4;11318:23;;;;;;;;;;;;;;;:33;:35::i;:::-;11363:33;:17;:21;11381:2;11363:21;;;;;;;;;;;;;;;:31;:33::i;:::-;11429:2;11406:11;:20;11418:7;11406:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;11502:7;11498:2;11483:27;;11492:4;11483:27;;;;;;;;;;;;10641:876;;;;:::o;17779:1128::-;18041:22;18066:32;18096:1;18066:12;:18;18079:4;18066:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;18041:57;;18108:18;18129:17;:26;18147:7;18129:26;;;;;;;;;;;;18108:47;;18273:14;18259:10;:28;;18255:323;;;18303:19;18325:12;:18;18338:4;18325:18;;;;;;;;;;;;;;;18344:14;18325:34;;;;;;;;;;;;;;;;;;18303:56;;18407:11;18374:12;:18;18387:4;18374:18;;;;;;;;;;;;;;;18393:10;18374:30;;;;;;;;;;;;;;;;;:44;;;;18523:10;18490:17;:30;18508:11;18490:30;;;;;;;;;;;:43;;;;18255:323;;18664:12;:18;18677:4;18664:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;17779:1128;;;;:::o;16625:183::-;16738:12;:16;16751:2;16738:16;;;;;;;;;;;;;;;:23;;;;16709:17;:26;16727:7;16709:26;;;;;;;;;;;:52;;;;16771:12;:16;16784:2;16771:16;;;;;;;;;;;;;;;16793:7;16771:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;16771:30:0;;;;;;;;;;;;;;;;;;;;;;16625:183;;:::o;40318:1020:2:-;40450:33;40495:16;40520:2;40495:28;;40533:16;40558:2;40533:28;;40571:16;40596:2;40571:28;;40609:16;40634:2;40609:28;;40647:16;40672:2;40647:28;;40685:19;40770:3;:10;40757:3;:10;40744:3;:10;40731:3;:10;40718:3;:10;:23;:36;:49;:62;40707:74;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;40707:74:2;;;;40685:96;;40791:19;40819:5;40791:34;;40835:6;40844:1;40835:10;;40855:6;40864:1;40855:10;;40884:1;40880:5;;40875:78;40891:3;:10;40887:1;:14;40875:78;;;40936:3;40940:1;40936:6;;;;;;;;;;;;;;;;;;;40922;40929:3;;;;;;40922:11;;;;;;;;;;;;;;:20;;;;;;;;;;;40903:3;;;;;;;40875:78;;;40971:1;40967:5;;40962:78;40978:3;:10;40974:1;:14;40962:78;;;41023:3;41027:1;41023:6;;;;;;;;;;;;;;;;;;;41009;41016:3;;;;;;41009:11;;;;;;;;;;;;;;:20;;;;;;;;;;;40990:3;;;;;;;40962:78;;;41058:1;41054:5;;41049:78;41065:3;:10;41061:1;:14;41049:78;;;41110:3;41114:1;41110:6;;;;;;;;;;;;;;;;;;;41096;41103:3;;;;;;41096:11;;;;;;;;;;;;;;:20;;;;;;;;;;;41077:3;;;;;;;41049:78;;;41145:1;41141:5;;41136:78;41152:3;:10;41148:1;:14;41136:78;;;41197:3;41201:1;41197:6;;;;;;;;;;;;;;;;;;;41183;41190:3;;;;;;41183:11;;;;;;;;;;;;;;:20;;;;;;;;;;;41164:3;;;;;;;41136:78;;;41232:1;41228:5;;41223:78;41239:3;:10;41235:1;:14;41223:78;;;41284:3;41288:1;41284:6;;;;;;;;;;;;;;;;;;;41270;41277:3;;;;;;41270:11;;;;;;;;;;;;;;:20;;;;;;;;;;;41251:3;;;;;;;41223:78;;;41324:6;41310:21;;;;;;;;;;;40318:1020;;;;;;;:::o;9849:593:0:-;9996:20;10027:1;9996:33;;10053:12;10047:18;;:2;:18;;;;:52;;;;;10083:16;10091:7;10083;:16::i;:::-;10082:17;10047:52;10039:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10235:16;10254:11;:20;10266:7;10254:20;;;;;;;;;;;;;;;;;;;;;10235:39;;10307:2;10284:11;:20;10296:7;10284:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;10319:33;:17;:21;10337:2;10319:21;;;;;;;;;;;;;;;:31;:33::i;:::-;10427:7;10423:2;10404:31;;10413:8;10404:31;;;;;;;;;;;;9849:593;;;;:::o;17003:161::-;17106:10;:17;;;;17079:15;:24;17095:7;17079:24;;;;;;;;;;;:44;;;;17133:10;17149:7;17133:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;17133:24:0;;;;;;;;;;;;;;;;;;;;;;17003:161;:::o;686:610:8:-;746:4;1004:16;1030:19;1052:66;1030:88;;;;1219:7;1207:20;1195:32;;1258:11;1246:8;:23;;:42;;;;;1285:3;1273:15;;:8;:15;;1246:42;1238:51;;;;686:610;;;:::o;39920:184:2:-;40016:33;40068:29;40078:2;40082;40086;40068:29;;;;;;;;;;;;;;;;;;;;;;;;:9;:29::i;:::-;40061:36;;39920:184;;;;;:::o;12473:171:0:-;12572:1;12536:38;;:15;:24;12552:7;12536:24;;;;;;;;;;;;;;;;;;;;;:38;;;;12532:106;;;12625:1;12590:15;:24;12606:7;12590:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;12532:106;12473:171;:::o;1367:108:5:-;1447:21;1466:1;1447:7;:14;;;:18;;:21;;;;:::i;:::-;1430:7;:14;;:38;;;;1367:108;:::o;1183:178::-;1353:1;1335:7;:14;;;:19;;;;;;;;;;;1183:178;:::o;1274:134:6:-;1332:7;1358:43;1362:1;1365;1358:43;;;;;;;;;;;;;;;;;:3;:43::i;:::-;1351:50;;1274:134;;;;:::o;1732:187::-;1818:7;1850:1;1845;:6;;1853:12;1837:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1837:29:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1876:9;1892:1;1888;:5;1876:17;;1911:1;1904:8;;;1732:187;;;;;:::o;783:3790:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity >=0.4.21 <0.6.0;\n\nimport \"./ERC721Mintable.sol\";\n\n// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>\nimport \"./SquareVerifier.sol\";\n\ncontract VerifierZn is SquareVerifier {\n    \n    /*event VerifiedZnEvent (address owner);\n\n    function verifyZnTx(\n        address owner,\n        uint[2] memory a,\n        uint[2][2] memory b,\n        uint[2] memory c,\n        uint[2] memory input\n    ) public \n    returns(bool){\n\n        bool isVerified = this.verifyTx(\n            a,b,c,input\n        );\n\n        if(isVerified) {\n            emit VerifiedZnEvent(owner);\n        }\n\n        return isVerified;\n    }*/\n}\n\n\n// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class\ncontract SolnSquareVerifier is ERC721MintableComplete {\n    using SafeMath for uint256;\n\n    VerifierZn public verifierContract;\n\n    // TODO define a solutions struct that can hold an index & an address\n    struct Solution {\n        uint index;\n        address owner;\n    }\n    uint _countSolution = 0;\n\n    // as flight surety project address is not the key and link with uint -> key -> Solution with double map\n    // TODO define an array of the above struct\n    mapping(bytes32 => Solution) private _mapSolution;\n\n    // TODO define a mapping to store unique solutions submitted\n    mapping(uint => bytes32) private _mapLookupSolution;\n\n    // TODO Create an event to emit when a solution is added\n    event AddedSolutionEvent(address addressSolution);\n\n    constructor(\n        address verifierAddress,\n        string memory tokenName,\n        string memory tokenSymbol\n    ) \n    ERC721MintableComplete(tokenName, tokenSymbol)\n    public {\n        verifierContract = VerifierZn(verifierAddress);\n    }\n\n    function _getSolutionKey(\n        uint[2] memory a,\n        uint[2][2] memory b,\n        uint[2] memory c,\n        uint[2] memory input\n    )  \n    private \n    pure \n    returns (bytes32){\n        return keccak256(abi.encodePacked(a,b,c,input));\n    }\n\n    // TODO Create a function to add the solutions to the array and emit the event\n    function addSolution(\n        address owner,\n        uint[2] memory a,\n        uint[2][2] memory b,\n        uint[2] memory c,\n        uint[2] memory inputs\n    ) public \n    {\n        bytes32 solutionKey = _getSolutionKey(a,b,c,inputs);\n\n        _countSolution = _countSolution.add(1);\n\n        _mapSolution[solutionKey].owner = owner;\n        _mapSolution[solutionKey].index = _countSolution;\n\n        _mapLookupSolution[_countSolution] = solutionKey;\n\n        emit AddedSolutionEvent(owner);\n    }\n\n    function getSolutionInfoByCount(\n        uint256 countSolution\n    ) \n    public\n    view \n    returns (string memory){\n        bytes32 key = _mapLookupSolution[countSolution];\n        string memory index = uint2str(_mapSolution[key].index);\n        string memory owner = addressToString(_mapSolution[key].owner);\n        return strConcat(\n            \" index : \", index, \n            \" owner : \", owner);\n    }\n\n    function getOwnerByCount(\n        uint256 countSolution\n    ) \n    public\n    view \n    returns (string memory){\n        bytes32 key = _mapLookupSolution[countSolution];\n        string memory owner = addressToString(_mapSolution[key].owner);\n        return owner;\n    }\n\n    function getIndexByCount(\n        uint256 countSolution\n    ) \n    public\n    view \n    returns (string memory){\n        bytes32 key = _mapLookupSolution[countSolution];\n        string memory index = uint2str(_mapSolution[key].index);\n        return index;\n    }\n\n\n    // TODO Create a function to mint new NFT only after the solution has been verified\n    function mintNewNFT(\n        address owner,\n        uint256 tokenId,\n        uint[2] memory a,\n        uint[2][2] memory b,\n        uint[2] memory c,\n        uint[2] memory inputs\n    ) public {\n        bytes32 solutionKey = _getSolutionKey(a,b,c,inputs);\n\n        //  - make sure the solution is unique (has not been used before)\n        require(_mapSolution[solutionKey].index == 0,\n            strConcat(\"Already exist solution!\",\n                uint2str(_mapSolution[solutionKey].index)));\n\n        //  - make sure you handle metadata as well as tokenSuplly\n        require(verifierContract.verifyTx(\n                a,\n                b,\n                c,\n                inputs), \n            \"Solution isn't correct.\");\n\n        addSolution(\n            owner, \n            a,\n            b,\n            c,\n            inputs);\n\n        super._mint(owner, tokenId);\n    }\n}",
  "sourcePath": "D:/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SolnSquareVerifier.sol",
  "ast": {
    "absolutePath": "/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SolnSquareVerifier.sol",
    "exportedSymbols": {
      "SolnSquareVerifier": [
        7970
      ],
      "VerifierZn": [
        7656
      ]
    },
    "id": 7971,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7651,
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
        "id": 7652,
        "nodeType": "ImportDirective",
        "scope": 7971,
        "sourceUnit": 1178,
        "src": "34:30:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SquareVerifier.sol",
        "file": "./SquareVerifier.sol",
        "id": 7653,
        "nodeType": "ImportDirective",
        "scope": 7971,
        "sourceUnit": 10520,
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
              "id": 7654,
              "name": "SquareVerifier",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10519,
              "src": "228:14:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SquareVerifier_$10519",
                "typeString": "contract SquareVerifier"
              }
            },
            "id": 7655,
            "nodeType": "InheritanceSpecifier",
            "src": "228:14:3"
          }
        ],
        "contractDependencies": [
          10519
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7656,
        "linearizedBaseContracts": [
          7656,
          10519
        ],
        "name": "VerifierZn",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 7971,
        "src": "205:473:3"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7657,
              "name": "ERC721MintableComplete",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1177,
              "src": "814:22:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721MintableComplete_$1177",
                "typeString": "contract ERC721MintableComplete"
              }
            },
            "id": 7658,
            "nodeType": "InheritanceSpecifier",
            "src": "814:22:3"
          }
        ],
        "contractDependencies": [
          118,
          686,
          164,
          1177,
          984,
          1131,
          66,
          7649
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7970,
        "linearizedBaseContracts": [
          7970,
          1177,
          1131,
          984,
          686,
          7649,
          164,
          118,
          66
        ],
        "name": "SolnSquareVerifier",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 7661,
            "libraryName": {
              "contractScope": null,
              "id": 7659,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10755,
              "src": "849:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$10755",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "843:27:3",
            "typeName": {
              "id": 7660,
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
            "id": 7663,
            "name": "verifierContract",
            "nodeType": "VariableDeclaration",
            "scope": 7970,
            "src": "876:34:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VerifierZn_$7656",
              "typeString": "contract VerifierZn"
            },
            "typeName": {
              "contractScope": null,
              "id": 7662,
              "name": "VerifierZn",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7656,
              "src": "876:10:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VerifierZn_$7656",
                "typeString": "contract VerifierZn"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "SolnSquareVerifier.Solution",
            "id": 7668,
            "members": [
              {
                "constant": false,
                "id": 7665,
                "name": "index",
                "nodeType": "VariableDeclaration",
                "scope": 7668,
                "src": "1017:10:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7664,
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
                "id": 7667,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 7668,
                "src": "1037:13:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 7666,
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
            "scope": 7970,
            "src": "991:66:3",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7671,
            "name": "_countSolution",
            "nodeType": "VariableDeclaration",
            "scope": 7970,
            "src": "1062:23:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7669,
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
              "id": 7670,
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
            "id": 7675,
            "name": "_mapSolution",
            "nodeType": "VariableDeclaration",
            "scope": 7970,
            "src": "1249:49:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
            },
            "typeName": {
              "id": 7674,
              "keyType": {
                "id": 7672,
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
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
              },
              "valueType": {
                "contractScope": null,
                "id": 7673,
                "name": "Solution",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 7668,
                "src": "1268:8:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Solution_$7668_storage_ptr",
                  "typeString": "struct SolnSquareVerifier.Solution"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7679,
            "name": "_mapLookupSolution",
            "nodeType": "VariableDeclaration",
            "scope": 7970,
            "src": "1370:51:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
              "typeString": "mapping(uint256 => bytes32)"
            },
            "typeName": {
              "id": 7678,
              "keyType": {
                "id": 7676,
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
                "id": 7677,
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
            "id": 7683,
            "name": "AddedSolutionEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 7682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7681,
                  "indexed": false,
                  "name": "addressSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7683,
                  "src": "1514:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7680,
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
              "id": 7702,
              "nodeType": "Block",
              "src": "1727:63:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7700,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7696,
                      "name": "verifierContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7663,
                      "src": "1737:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VerifierZn_$7656",
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
                          "id": 7698,
                          "name": "verifierAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7685,
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
                        "id": 7697,
                        "name": "VerifierZn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7656,
                        "src": "1756:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_VerifierZn_$7656_$",
                          "typeString": "type(contract VerifierZn)"
                        }
                      },
                      "id": 7699,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1756:27:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VerifierZn_$7656",
                        "typeString": "contract VerifierZn"
                      }
                    },
                    "src": "1737:46:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_VerifierZn_$7656",
                      "typeString": "contract VerifierZn"
                    }
                  },
                  "id": 7701,
                  "nodeType": "ExpressionStatement",
                  "src": "1737:46:3"
                }
              ]
            },
            "documentation": null,
            "id": 7703,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7692,
                    "name": "tokenName",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7687,
                    "src": "1692:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 7693,
                    "name": "tokenSymbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7689,
                    "src": "1703:11:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 7694,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7691,
                  "name": "ERC721MintableComplete",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1177,
                  "src": "1669:22:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721MintableComplete_$1177_$",
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
              "id": 7690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7685,
                  "name": "verifierAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 7703,
                  "src": "1566:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7684,
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
                  "id": 7687,
                  "name": "tokenName",
                  "nodeType": "VariableDeclaration",
                  "scope": 7703,
                  "src": "1599:23:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7686,
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
                  "id": 7689,
                  "name": "tokenSymbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 7703,
                  "src": "1632:25:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7688,
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
              "id": 7695,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1727:0:3"
            },
            "scope": 7970,
            "src": "1545:245:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7736,
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
                            "id": 7729,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7707,
                            "src": "2028:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7730,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7713,
                            "src": "2030:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7731,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7717,
                            "src": "2032:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7732,
                            "name": "input",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7721,
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
                            "id": 7727,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10848,
                            "src": "2011:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 7728,
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
                        "id": 7733,
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
                      "id": 7726,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10855,
                      "src": "2001:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7734,
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
                  "functionReturnParameters": 7725,
                  "id": 7735,
                  "nodeType": "Return",
                  "src": "1994:47:3"
                }
              ]
            },
            "documentation": null,
            "id": 7737,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getSolutionKey",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7707,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7737,
                  "src": "1830:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7704,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1830:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7706,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7705,
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
                  "id": 7713,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7737,
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
                        "id": 7708,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1856:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7710,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7709,
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
                    "id": 7712,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7711,
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
                  "id": 7717,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7737,
                  "src": "1885:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7714,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1885:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7716,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7715,
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
                  "id": 7721,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 7737,
                  "src": "1911:20:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7718,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1911:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7720,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7719,
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
              "id": 7725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7724,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7737,
                  "src": "1976:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7723,
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
            "scope": 7970,
            "src": "1796:252:3",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 7800,
              "nodeType": "Block",
              "src": "2311:325:3",
              "statements": [
                {
                  "assignments": [
                    7761
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7761,
                      "name": "solutionKey",
                      "nodeType": "VariableDeclaration",
                      "scope": 7800,
                      "src": "2321:19:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7760,
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
                  "id": 7768,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7763,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7743,
                        "src": "2359:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7764,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7749,
                        "src": "2361:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7765,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7753,
                        "src": "2363:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7766,
                        "name": "inputs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7757,
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
                      "id": 7762,
                      "name": "_getSolutionKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7737,
                      "src": "2343:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7767,
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
                    "id": 7774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7769,
                      "name": "_countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7671,
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
                          "id": 7772,
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
                          "id": 7770,
                          "name": "_countSolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7671,
                          "src": "2400:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 7771,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10595,
                        "src": "2400:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 7773,
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
                  "id": 7775,
                  "nodeType": "ExpressionStatement",
                  "src": "2383:38:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7781,
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
                          "id": 7776,
                          "name": "_mapSolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7675,
                          "src": "2432:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                            "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                          }
                        },
                        "id": 7778,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 7777,
                          "name": "solutionKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7761,
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
                          "typeIdentifier": "t_struct$_Solution_$7668_storage",
                          "typeString": "struct SolnSquareVerifier.Solution storage ref"
                        }
                      },
                      "id": 7779,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7667,
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
                      "id": 7780,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7739,
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
                  "id": 7782,
                  "nodeType": "ExpressionStatement",
                  "src": "2432:39:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7788,
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
                          "id": 7783,
                          "name": "_mapSolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7675,
                          "src": "2481:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                            "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                          }
                        },
                        "id": 7785,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 7784,
                          "name": "solutionKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7761,
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
                          "typeIdentifier": "t_struct$_Solution_$7668_storage",
                          "typeString": "struct SolnSquareVerifier.Solution storage ref"
                        }
                      },
                      "id": 7786,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "index",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7665,
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
                      "id": 7787,
                      "name": "_countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7671,
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
                  "id": 7789,
                  "nodeType": "ExpressionStatement",
                  "src": "2481:48:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 7790,
                        "name": "_mapLookupSolution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7679,
                        "src": "2540:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                          "typeString": "mapping(uint256 => bytes32)"
                        }
                      },
                      "id": 7792,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 7791,
                        "name": "_countSolution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7671,
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
                      "id": 7793,
                      "name": "solutionKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7761,
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
                  "id": 7795,
                  "nodeType": "ExpressionStatement",
                  "src": "2540:48:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7797,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7739,
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
                      "id": 7796,
                      "name": "AddedSolutionEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7683,
                      "src": "2604:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 7798,
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
                  "id": 7799,
                  "nodeType": "EmitStatement",
                  "src": "2599:30:3"
                }
              ]
            },
            "documentation": null,
            "id": 7801,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addSolution",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7758,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7739,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7801,
                  "src": "2167:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7738,
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
                  "id": 7743,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7801,
                  "src": "2190:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7740,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2190:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7742,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7741,
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
                  "id": 7749,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7801,
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
                        "id": 7744,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2216:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7746,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7745,
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
                    "id": 7748,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7747,
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
                  "id": 7753,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7801,
                  "src": "2245:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7750,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2245:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7752,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7751,
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
                  "id": 7757,
                  "name": "inputs",
                  "nodeType": "VariableDeclaration",
                  "scope": 7801,
                  "src": "2271:21:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7754,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2271:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7756,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7755,
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
              "id": 7759,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2311:0:3"
            },
            "scope": 7970,
            "src": "2137:499:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7839,
              "nodeType": "Block",
              "src": "2760:293:3",
              "statements": [
                {
                  "assignments": [
                    7809
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7809,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7839,
                      "src": "2770:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7808,
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
                  "id": 7813,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7810,
                      "name": "_mapLookupSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7679,
                      "src": "2784:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                        "typeString": "mapping(uint256 => bytes32)"
                      }
                    },
                    "id": 7812,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7811,
                      "name": "countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7803,
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
                    7815
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7815,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 7839,
                      "src": "2827:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7814,
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
                  "id": 7822,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7817,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7675,
                            "src": "2858:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7819,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7818,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7809,
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
                            "typeIdentifier": "t_struct$_Solution_$7668_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7820,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "index",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7665,
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
                      "id": 7816,
                      "name": "uint2str",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6350,
                      "src": "2849:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 7821,
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
                    7824
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7824,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 7839,
                      "src": "2892:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7823,
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
                  "id": 7831,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7826,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7675,
                            "src": "2930:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7828,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7827,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7809,
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
                            "typeIdentifier": "t_struct$_Solution_$7668_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7829,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "owner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7667,
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
                      "id": 7825,
                      "name": "addressToString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7600,
                      "src": "2914:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (address) pure returns (string memory)"
                      }
                    },
                    "id": 7830,
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
                        "id": 7833,
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
                        "id": 7834,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7815,
                        "src": "3007:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "206f776e6572203a20",
                        "id": 7835,
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
                        "id": 7836,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7824,
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
                      "id": 7832,
                      "name": "strConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        5770,
                        5790,
                        5812,
                        6006
                      ],
                      "referencedDeclaration": 5812,
                      "src": "2971:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,string memory,string memory) pure returns (string memory)"
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
                    "src": "2971:75:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7807,
                  "id": 7838,
                  "nodeType": "Return",
                  "src": "2964:82:3"
                }
              ]
            },
            "documentation": null,
            "id": 7840,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getSolutionInfoByCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7803,
                  "name": "countSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7840,
                  "src": "2683:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7802,
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
              "id": 7807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7806,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7840,
                  "src": "2746:13:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7805,
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
            "scope": 7970,
            "src": "2642:411:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7864,
              "nodeType": "Block",
              "src": "3170:158:3",
              "statements": [
                {
                  "assignments": [
                    7848
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7848,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7864,
                      "src": "3180:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7847,
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
                  "id": 7852,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7849,
                      "name": "_mapLookupSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7679,
                      "src": "3194:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                        "typeString": "mapping(uint256 => bytes32)"
                      }
                    },
                    "id": 7851,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7850,
                      "name": "countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7842,
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
                    7854
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7854,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 7864,
                      "src": "3237:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7853,
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
                  "id": 7861,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7856,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7675,
                            "src": "3275:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7858,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7857,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7848,
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
                            "typeIdentifier": "t_struct$_Solution_$7668_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7859,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "owner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7667,
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
                      "id": 7855,
                      "name": "addressToString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7600,
                      "src": "3259:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (address) pure returns (string memory)"
                      }
                    },
                    "id": 7860,
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
                    "id": 7862,
                    "name": "owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7854,
                    "src": "3316:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7846,
                  "id": 7863,
                  "nodeType": "Return",
                  "src": "3309:12:3"
                }
              ]
            },
            "documentation": null,
            "id": 7865,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getOwnerByCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7842,
                  "name": "countSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7865,
                  "src": "3093:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7841,
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
              "id": 7846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7845,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7865,
                  "src": "3156:13:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7844,
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
            "scope": 7970,
            "src": "3059:269:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7889,
              "nodeType": "Block",
              "src": "3445:151:3",
              "statements": [
                {
                  "assignments": [
                    7873
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7873,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7889,
                      "src": "3455:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7872,
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
                  "id": 7877,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7874,
                      "name": "_mapLookupSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7679,
                      "src": "3469:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                        "typeString": "mapping(uint256 => bytes32)"
                      }
                    },
                    "id": 7876,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7875,
                      "name": "countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7867,
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
                    7879
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7879,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 7889,
                      "src": "3512:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7878,
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
                  "id": 7886,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7881,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7675,
                            "src": "3543:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7883,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7882,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7873,
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
                            "typeIdentifier": "t_struct$_Solution_$7668_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7884,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "index",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7665,
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
                      "id": 7880,
                      "name": "uint2str",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6350,
                      "src": "3534:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 7885,
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
                    "id": 7887,
                    "name": "index",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7879,
                    "src": "3584:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7871,
                  "id": 7888,
                  "nodeType": "Return",
                  "src": "3577:12:3"
                }
              ]
            },
            "documentation": null,
            "id": 7890,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getIndexByCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7867,
                  "name": "countSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7890,
                  "src": "3368:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7866,
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
              "id": 7871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7870,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7890,
                  "src": "3431:13:3",
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
            "scope": 7970,
            "src": "3334:262:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7968,
              "nodeType": "Block",
              "src": "3884:687:3",
              "statements": [
                {
                  "assignments": [
                    7916
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7916,
                      "name": "solutionKey",
                      "nodeType": "VariableDeclaration",
                      "scope": 7968,
                      "src": "3894:19:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7915,
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
                  "id": 7923,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7918,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7898,
                        "src": "3932:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7919,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7904,
                        "src": "3934:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7920,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7908,
                        "src": "3936:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7921,
                        "name": "inputs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7912,
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
                      "id": 7917,
                      "name": "_getSolutionKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7737,
                      "src": "3916:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7922,
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
                        "id": 7930,
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
                              "id": 7925,
                              "name": "_mapSolution",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7675,
                              "src": "4038:12:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                              }
                            },
                            "id": 7927,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 7926,
                              "name": "solutionKey",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7916,
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
                              "typeIdentifier": "t_struct$_Solution_$7668_storage",
                              "typeString": "struct SolnSquareVerifier.Solution storage ref"
                            }
                          },
                          "id": 7928,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "index",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7665,
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
                          "id": 7929,
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
                            "id": 7932,
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
                                    "id": 7934,
                                    "name": "_mapSolution",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7675,
                                    "src": "4150:12:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                                      "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                                    }
                                  },
                                  "id": 7936,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 7935,
                                    "name": "solutionKey",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7916,
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
                                    "typeIdentifier": "t_struct$_Solution_$7668_storage",
                                    "typeString": "struct SolnSquareVerifier.Solution storage ref"
                                  }
                                },
                                "id": 7937,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "index",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7665,
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
                              "id": 7933,
                              "name": "uint2str",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6350,
                              "src": "4141:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                "typeString": "function (uint256) pure returns (string memory)"
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
                          "id": 7931,
                          "name": "strConcat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            5770,
                            5790,
                            5812,
                            6006
                          ],
                          "referencedDeclaration": 5770,
                          "src": "4088:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (string memory,string memory) pure returns (string memory)"
                          }
                        },
                        "id": 7939,
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
                      "id": 7924,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10864,
                        10865
                      ],
                      "referencedDeclaration": 10865,
                      "src": "4030:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7940,
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
                  "id": 7941,
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
                            "id": 7945,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7898,
                            "src": "4313:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7946,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7904,
                            "src": "4332:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7947,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7908,
                            "src": "4351:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7948,
                            "name": "inputs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7912,
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
                            "id": 7943,
                            "name": "verifierContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7663,
                            "src": "4270:16:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VerifierZn_$7656",
                              "typeString": "contract VerifierZn"
                            }
                          },
                          "id": 7944,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "verifyTx",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10518,
                          "src": "4270:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) view external returns (bool)"
                          }
                        },
                        "id": 7949,
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
                        "id": 7950,
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
                      "id": 7942,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10864,
                        10865
                      ],
                      "referencedDeclaration": 10865,
                      "src": "4262:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7951,
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
                  "id": 7952,
                  "nodeType": "ExpressionStatement",
                  "src": "4262:156:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7954,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7892,
                        "src": "4454:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7955,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7898,
                        "src": "4474:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7956,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7904,
                        "src": "4489:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7957,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7908,
                        "src": "4504:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7958,
                        "name": "inputs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7912,
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
                      "id": 7953,
                      "name": "addSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7801,
                      "src": "4429:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory)"
                      }
                    },
                    "id": 7959,
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
                  "id": 7960,
                  "nodeType": "ExpressionStatement",
                  "src": "4429:97:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7964,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7892,
                        "src": "4549:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7965,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7894,
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
                        "id": 7961,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10920,
                        "src": "4537:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_SolnSquareVerifier_$7970",
                          "typeString": "contract super SolnSquareVerifier"
                        }
                      },
                      "id": 7963,
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
                    "id": 7966,
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
                  "id": 7967,
                  "nodeType": "ExpressionStatement",
                  "src": "4537:27:3"
                }
              ]
            },
            "documentation": null,
            "id": 7969,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintNewNFT",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7913,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7892,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7969,
                  "src": "3720:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7891,
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
                  "id": 7894,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 7969,
                  "src": "3743:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7893,
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
                  "id": 7898,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7969,
                  "src": "3768:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7895,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3768:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7897,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7896,
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
                  "id": 7904,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7969,
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
                        "id": 7899,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3794:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7901,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7900,
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
                    "id": 7903,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7902,
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
                  "id": 7908,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7969,
                  "src": "3823:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7905,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3823:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7907,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7906,
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
                  "id": 7912,
                  "name": "inputs",
                  "nodeType": "VariableDeclaration",
                  "scope": 7969,
                  "src": "3849:21:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7909,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3849:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7911,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7910,
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
              "id": 7914,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3884:0:3"
            },
            "scope": 7970,
            "src": "3691:880:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7971,
        "src": "783:3790:3"
      }
    ],
    "src": "0:4573:3"
  },
  "legacyAST": {
    "absolutePath": "/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SolnSquareVerifier.sol",
    "exportedSymbols": {
      "SolnSquareVerifier": [
        7970
      ],
      "VerifierZn": [
        7656
      ]
    },
    "id": 7971,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7651,
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
        "id": 7652,
        "nodeType": "ImportDirective",
        "scope": 7971,
        "sourceUnit": 1178,
        "src": "34:30:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/D/blockchain/UdacityBlockchainDeveloper/Project5/eth-contracts/contracts/SquareVerifier.sol",
        "file": "./SquareVerifier.sol",
        "id": 7653,
        "nodeType": "ImportDirective",
        "scope": 7971,
        "sourceUnit": 10520,
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
              "id": 7654,
              "name": "SquareVerifier",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10519,
              "src": "228:14:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SquareVerifier_$10519",
                "typeString": "contract SquareVerifier"
              }
            },
            "id": 7655,
            "nodeType": "InheritanceSpecifier",
            "src": "228:14:3"
          }
        ],
        "contractDependencies": [
          10519
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7656,
        "linearizedBaseContracts": [
          7656,
          10519
        ],
        "name": "VerifierZn",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 7971,
        "src": "205:473:3"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7657,
              "name": "ERC721MintableComplete",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1177,
              "src": "814:22:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721MintableComplete_$1177",
                "typeString": "contract ERC721MintableComplete"
              }
            },
            "id": 7658,
            "nodeType": "InheritanceSpecifier",
            "src": "814:22:3"
          }
        ],
        "contractDependencies": [
          118,
          686,
          164,
          1177,
          984,
          1131,
          66,
          7649
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7970,
        "linearizedBaseContracts": [
          7970,
          1177,
          1131,
          984,
          686,
          7649,
          164,
          118,
          66
        ],
        "name": "SolnSquareVerifier",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 7661,
            "libraryName": {
              "contractScope": null,
              "id": 7659,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10755,
              "src": "849:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$10755",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "843:27:3",
            "typeName": {
              "id": 7660,
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
            "id": 7663,
            "name": "verifierContract",
            "nodeType": "VariableDeclaration",
            "scope": 7970,
            "src": "876:34:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VerifierZn_$7656",
              "typeString": "contract VerifierZn"
            },
            "typeName": {
              "contractScope": null,
              "id": 7662,
              "name": "VerifierZn",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7656,
              "src": "876:10:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VerifierZn_$7656",
                "typeString": "contract VerifierZn"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "SolnSquareVerifier.Solution",
            "id": 7668,
            "members": [
              {
                "constant": false,
                "id": 7665,
                "name": "index",
                "nodeType": "VariableDeclaration",
                "scope": 7668,
                "src": "1017:10:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7664,
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
                "id": 7667,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 7668,
                "src": "1037:13:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 7666,
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
            "scope": 7970,
            "src": "991:66:3",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7671,
            "name": "_countSolution",
            "nodeType": "VariableDeclaration",
            "scope": 7970,
            "src": "1062:23:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7669,
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
              "id": 7670,
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
            "id": 7675,
            "name": "_mapSolution",
            "nodeType": "VariableDeclaration",
            "scope": 7970,
            "src": "1249:49:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
            },
            "typeName": {
              "id": 7674,
              "keyType": {
                "id": 7672,
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
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
              },
              "valueType": {
                "contractScope": null,
                "id": 7673,
                "name": "Solution",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 7668,
                "src": "1268:8:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Solution_$7668_storage_ptr",
                  "typeString": "struct SolnSquareVerifier.Solution"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7679,
            "name": "_mapLookupSolution",
            "nodeType": "VariableDeclaration",
            "scope": 7970,
            "src": "1370:51:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
              "typeString": "mapping(uint256 => bytes32)"
            },
            "typeName": {
              "id": 7678,
              "keyType": {
                "id": 7676,
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
                "id": 7677,
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
            "id": 7683,
            "name": "AddedSolutionEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 7682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7681,
                  "indexed": false,
                  "name": "addressSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7683,
                  "src": "1514:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7680,
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
              "id": 7702,
              "nodeType": "Block",
              "src": "1727:63:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7700,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7696,
                      "name": "verifierContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7663,
                      "src": "1737:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VerifierZn_$7656",
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
                          "id": 7698,
                          "name": "verifierAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7685,
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
                        "id": 7697,
                        "name": "VerifierZn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7656,
                        "src": "1756:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_VerifierZn_$7656_$",
                          "typeString": "type(contract VerifierZn)"
                        }
                      },
                      "id": 7699,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1756:27:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VerifierZn_$7656",
                        "typeString": "contract VerifierZn"
                      }
                    },
                    "src": "1737:46:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_VerifierZn_$7656",
                      "typeString": "contract VerifierZn"
                    }
                  },
                  "id": 7701,
                  "nodeType": "ExpressionStatement",
                  "src": "1737:46:3"
                }
              ]
            },
            "documentation": null,
            "id": 7703,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7692,
                    "name": "tokenName",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7687,
                    "src": "1692:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 7693,
                    "name": "tokenSymbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7689,
                    "src": "1703:11:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 7694,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7691,
                  "name": "ERC721MintableComplete",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1177,
                  "src": "1669:22:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721MintableComplete_$1177_$",
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
              "id": 7690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7685,
                  "name": "verifierAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 7703,
                  "src": "1566:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7684,
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
                  "id": 7687,
                  "name": "tokenName",
                  "nodeType": "VariableDeclaration",
                  "scope": 7703,
                  "src": "1599:23:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7686,
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
                  "id": 7689,
                  "name": "tokenSymbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 7703,
                  "src": "1632:25:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7688,
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
              "id": 7695,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1727:0:3"
            },
            "scope": 7970,
            "src": "1545:245:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7736,
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
                            "id": 7729,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7707,
                            "src": "2028:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7730,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7713,
                            "src": "2030:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7731,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7717,
                            "src": "2032:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7732,
                            "name": "input",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7721,
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
                            "id": 7727,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10848,
                            "src": "2011:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 7728,
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
                        "id": 7733,
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
                      "id": 7726,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10855,
                      "src": "2001:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7734,
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
                  "functionReturnParameters": 7725,
                  "id": 7735,
                  "nodeType": "Return",
                  "src": "1994:47:3"
                }
              ]
            },
            "documentation": null,
            "id": 7737,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getSolutionKey",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7707,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7737,
                  "src": "1830:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7704,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1830:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7706,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7705,
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
                  "id": 7713,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7737,
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
                        "id": 7708,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1856:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7710,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7709,
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
                    "id": 7712,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7711,
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
                  "id": 7717,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7737,
                  "src": "1885:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7714,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1885:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7716,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7715,
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
                  "id": 7721,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 7737,
                  "src": "1911:20:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7718,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1911:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7720,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7719,
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
              "id": 7725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7724,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7737,
                  "src": "1976:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7723,
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
            "scope": 7970,
            "src": "1796:252:3",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 7800,
              "nodeType": "Block",
              "src": "2311:325:3",
              "statements": [
                {
                  "assignments": [
                    7761
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7761,
                      "name": "solutionKey",
                      "nodeType": "VariableDeclaration",
                      "scope": 7800,
                      "src": "2321:19:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7760,
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
                  "id": 7768,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7763,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7743,
                        "src": "2359:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7764,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7749,
                        "src": "2361:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7765,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7753,
                        "src": "2363:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7766,
                        "name": "inputs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7757,
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
                      "id": 7762,
                      "name": "_getSolutionKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7737,
                      "src": "2343:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7767,
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
                    "id": 7774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7769,
                      "name": "_countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7671,
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
                          "id": 7772,
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
                          "id": 7770,
                          "name": "_countSolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7671,
                          "src": "2400:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 7771,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10595,
                        "src": "2400:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 7773,
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
                  "id": 7775,
                  "nodeType": "ExpressionStatement",
                  "src": "2383:38:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7781,
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
                          "id": 7776,
                          "name": "_mapSolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7675,
                          "src": "2432:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                            "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                          }
                        },
                        "id": 7778,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 7777,
                          "name": "solutionKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7761,
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
                          "typeIdentifier": "t_struct$_Solution_$7668_storage",
                          "typeString": "struct SolnSquareVerifier.Solution storage ref"
                        }
                      },
                      "id": 7779,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7667,
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
                      "id": 7780,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7739,
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
                  "id": 7782,
                  "nodeType": "ExpressionStatement",
                  "src": "2432:39:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7788,
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
                          "id": 7783,
                          "name": "_mapSolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7675,
                          "src": "2481:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                            "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                          }
                        },
                        "id": 7785,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 7784,
                          "name": "solutionKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7761,
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
                          "typeIdentifier": "t_struct$_Solution_$7668_storage",
                          "typeString": "struct SolnSquareVerifier.Solution storage ref"
                        }
                      },
                      "id": 7786,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "index",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7665,
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
                      "id": 7787,
                      "name": "_countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7671,
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
                  "id": 7789,
                  "nodeType": "ExpressionStatement",
                  "src": "2481:48:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 7790,
                        "name": "_mapLookupSolution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7679,
                        "src": "2540:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                          "typeString": "mapping(uint256 => bytes32)"
                        }
                      },
                      "id": 7792,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 7791,
                        "name": "_countSolution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7671,
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
                      "id": 7793,
                      "name": "solutionKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7761,
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
                  "id": 7795,
                  "nodeType": "ExpressionStatement",
                  "src": "2540:48:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7797,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7739,
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
                      "id": 7796,
                      "name": "AddedSolutionEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7683,
                      "src": "2604:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 7798,
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
                  "id": 7799,
                  "nodeType": "EmitStatement",
                  "src": "2599:30:3"
                }
              ]
            },
            "documentation": null,
            "id": 7801,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addSolution",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7758,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7739,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7801,
                  "src": "2167:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7738,
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
                  "id": 7743,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7801,
                  "src": "2190:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7740,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2190:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7742,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7741,
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
                  "id": 7749,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7801,
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
                        "id": 7744,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2216:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7746,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7745,
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
                    "id": 7748,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7747,
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
                  "id": 7753,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7801,
                  "src": "2245:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7750,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2245:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7752,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7751,
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
                  "id": 7757,
                  "name": "inputs",
                  "nodeType": "VariableDeclaration",
                  "scope": 7801,
                  "src": "2271:21:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7754,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2271:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7756,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7755,
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
              "id": 7759,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2311:0:3"
            },
            "scope": 7970,
            "src": "2137:499:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7839,
              "nodeType": "Block",
              "src": "2760:293:3",
              "statements": [
                {
                  "assignments": [
                    7809
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7809,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7839,
                      "src": "2770:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7808,
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
                  "id": 7813,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7810,
                      "name": "_mapLookupSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7679,
                      "src": "2784:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                        "typeString": "mapping(uint256 => bytes32)"
                      }
                    },
                    "id": 7812,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7811,
                      "name": "countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7803,
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
                    7815
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7815,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 7839,
                      "src": "2827:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7814,
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
                  "id": 7822,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7817,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7675,
                            "src": "2858:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7819,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7818,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7809,
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
                            "typeIdentifier": "t_struct$_Solution_$7668_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7820,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "index",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7665,
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
                      "id": 7816,
                      "name": "uint2str",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6350,
                      "src": "2849:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 7821,
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
                    7824
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7824,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 7839,
                      "src": "2892:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7823,
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
                  "id": 7831,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7826,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7675,
                            "src": "2930:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7828,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7827,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7809,
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
                            "typeIdentifier": "t_struct$_Solution_$7668_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7829,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "owner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7667,
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
                      "id": 7825,
                      "name": "addressToString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7600,
                      "src": "2914:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (address) pure returns (string memory)"
                      }
                    },
                    "id": 7830,
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
                        "id": 7833,
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
                        "id": 7834,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7815,
                        "src": "3007:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "206f776e6572203a20",
                        "id": 7835,
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
                        "id": 7836,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7824,
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
                      "id": 7832,
                      "name": "strConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        5770,
                        5790,
                        5812,
                        6006
                      ],
                      "referencedDeclaration": 5812,
                      "src": "2971:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory,string memory,string memory) pure returns (string memory)"
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
                    "src": "2971:75:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7807,
                  "id": 7838,
                  "nodeType": "Return",
                  "src": "2964:82:3"
                }
              ]
            },
            "documentation": null,
            "id": 7840,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getSolutionInfoByCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7803,
                  "name": "countSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7840,
                  "src": "2683:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7802,
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
              "id": 7807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7806,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7840,
                  "src": "2746:13:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7805,
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
            "scope": 7970,
            "src": "2642:411:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7864,
              "nodeType": "Block",
              "src": "3170:158:3",
              "statements": [
                {
                  "assignments": [
                    7848
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7848,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7864,
                      "src": "3180:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7847,
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
                  "id": 7852,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7849,
                      "name": "_mapLookupSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7679,
                      "src": "3194:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                        "typeString": "mapping(uint256 => bytes32)"
                      }
                    },
                    "id": 7851,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7850,
                      "name": "countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7842,
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
                    7854
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7854,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 7864,
                      "src": "3237:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7853,
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
                  "id": 7861,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7856,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7675,
                            "src": "3275:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7858,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7857,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7848,
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
                            "typeIdentifier": "t_struct$_Solution_$7668_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7859,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "owner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7667,
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
                      "id": 7855,
                      "name": "addressToString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7600,
                      "src": "3259:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (address) pure returns (string memory)"
                      }
                    },
                    "id": 7860,
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
                    "id": 7862,
                    "name": "owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7854,
                    "src": "3316:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7846,
                  "id": 7863,
                  "nodeType": "Return",
                  "src": "3309:12:3"
                }
              ]
            },
            "documentation": null,
            "id": 7865,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getOwnerByCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7842,
                  "name": "countSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7865,
                  "src": "3093:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7841,
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
              "id": 7846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7845,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7865,
                  "src": "3156:13:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7844,
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
            "scope": 7970,
            "src": "3059:269:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7889,
              "nodeType": "Block",
              "src": "3445:151:3",
              "statements": [
                {
                  "assignments": [
                    7873
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7873,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7889,
                      "src": "3455:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7872,
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
                  "id": 7877,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 7874,
                      "name": "_mapLookupSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7679,
                      "src": "3469:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                        "typeString": "mapping(uint256 => bytes32)"
                      }
                    },
                    "id": 7876,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 7875,
                      "name": "countSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7867,
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
                    7879
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7879,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 7889,
                      "src": "3512:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 7878,
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
                  "id": 7886,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 7881,
                            "name": "_mapSolution",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7675,
                            "src": "3543:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                            }
                          },
                          "id": 7883,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 7882,
                            "name": "key",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7873,
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
                            "typeIdentifier": "t_struct$_Solution_$7668_storage",
                            "typeString": "struct SolnSquareVerifier.Solution storage ref"
                          }
                        },
                        "id": 7884,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "index",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7665,
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
                      "id": 7880,
                      "name": "uint2str",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6350,
                      "src": "3534:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 7885,
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
                    "id": 7887,
                    "name": "index",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7879,
                    "src": "3584:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 7871,
                  "id": 7888,
                  "nodeType": "Return",
                  "src": "3577:12:3"
                }
              ]
            },
            "documentation": null,
            "id": 7890,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getIndexByCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7867,
                  "name": "countSolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 7890,
                  "src": "3368:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7866,
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
              "id": 7871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7870,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7890,
                  "src": "3431:13:3",
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
            "scope": 7970,
            "src": "3334:262:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7968,
              "nodeType": "Block",
              "src": "3884:687:3",
              "statements": [
                {
                  "assignments": [
                    7916
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7916,
                      "name": "solutionKey",
                      "nodeType": "VariableDeclaration",
                      "scope": 7968,
                      "src": "3894:19:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7915,
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
                  "id": 7923,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7918,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7898,
                        "src": "3932:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7919,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7904,
                        "src": "3934:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7920,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7908,
                        "src": "3936:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7921,
                        "name": "inputs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7912,
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
                      "id": 7917,
                      "name": "_getSolutionKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7737,
                      "src": "3916:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7922,
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
                        "id": 7930,
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
                              "id": 7925,
                              "name": "_mapSolution",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7675,
                              "src": "4038:12:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                              }
                            },
                            "id": 7927,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 7926,
                              "name": "solutionKey",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7916,
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
                              "typeIdentifier": "t_struct$_Solution_$7668_storage",
                              "typeString": "struct SolnSquareVerifier.Solution storage ref"
                            }
                          },
                          "id": 7928,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "index",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7665,
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
                          "id": 7929,
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
                            "id": 7932,
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
                                    "id": 7934,
                                    "name": "_mapSolution",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7675,
                                    "src": "4150:12:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7668_storage_$",
                                      "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                                    }
                                  },
                                  "id": 7936,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 7935,
                                    "name": "solutionKey",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7916,
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
                                    "typeIdentifier": "t_struct$_Solution_$7668_storage",
                                    "typeString": "struct SolnSquareVerifier.Solution storage ref"
                                  }
                                },
                                "id": 7937,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "index",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7665,
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
                              "id": 7933,
                              "name": "uint2str",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6350,
                              "src": "4141:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                "typeString": "function (uint256) pure returns (string memory)"
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
                          "id": 7931,
                          "name": "strConcat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            5770,
                            5790,
                            5812,
                            6006
                          ],
                          "referencedDeclaration": 5770,
                          "src": "4088:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (string memory,string memory) pure returns (string memory)"
                          }
                        },
                        "id": 7939,
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
                      "id": 7924,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10864,
                        10865
                      ],
                      "referencedDeclaration": 10865,
                      "src": "4030:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7940,
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
                  "id": 7941,
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
                            "id": 7945,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7898,
                            "src": "4313:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7946,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7904,
                            "src": "4332:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7947,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7908,
                            "src": "4351:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7948,
                            "name": "inputs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7912,
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
                            "id": 7943,
                            "name": "verifierContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7663,
                            "src": "4270:16:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VerifierZn_$7656",
                              "typeString": "contract VerifierZn"
                            }
                          },
                          "id": 7944,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "verifyTx",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10518,
                          "src": "4270:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) view external returns (bool)"
                          }
                        },
                        "id": 7949,
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
                        "id": 7950,
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
                      "id": 7942,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10864,
                        10865
                      ],
                      "referencedDeclaration": 10865,
                      "src": "4262:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7951,
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
                  "id": 7952,
                  "nodeType": "ExpressionStatement",
                  "src": "4262:156:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7954,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7892,
                        "src": "4454:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7955,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7898,
                        "src": "4474:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7956,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7904,
                        "src": "4489:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7957,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7908,
                        "src": "4504:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7958,
                        "name": "inputs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7912,
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
                      "id": 7953,
                      "name": "addSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7801,
                      "src": "4429:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory)"
                      }
                    },
                    "id": 7959,
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
                  "id": 7960,
                  "nodeType": "ExpressionStatement",
                  "src": "4429:97:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7964,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7892,
                        "src": "4549:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7965,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7894,
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
                        "id": 7961,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10920,
                        "src": "4537:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_SolnSquareVerifier_$7970",
                          "typeString": "contract super SolnSquareVerifier"
                        }
                      },
                      "id": 7963,
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
                    "id": 7966,
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
                  "id": 7967,
                  "nodeType": "ExpressionStatement",
                  "src": "4537:27:3"
                }
              ]
            },
            "documentation": null,
            "id": 7969,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintNewNFT",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7913,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7892,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7969,
                  "src": "3720:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7891,
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
                  "id": 7894,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 7969,
                  "src": "3743:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7893,
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
                  "id": 7898,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7969,
                  "src": "3768:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7895,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3768:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7897,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7896,
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
                  "id": 7904,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7969,
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
                        "id": 7899,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3794:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7901,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7900,
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
                    "id": 7903,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7902,
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
                  "id": 7908,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7969,
                  "src": "3823:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7905,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3823:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7907,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7906,
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
                  "id": 7912,
                  "name": "inputs",
                  "nodeType": "VariableDeclaration",
                  "scope": 7969,
                  "src": "3849:21:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7909,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "3849:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7911,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7910,
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
              "id": 7914,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3884:0:3"
            },
            "scope": 7970,
            "src": "3691:880:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7971,
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
      "address": "0xE9a08AC8f91C64E96724Ad6cE142468Fa21Ab2ae",
      "transactionHash": "0xecf03138af4c6127f73ec4cd916140b4ae5fe0dfa3942372e5cf8bc67225301e"
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
      "address": "0xCBaA8Fab3653a35C4B469E13f701335DE01e8efa",
      "transactionHash": "0x951c823895d584fa6f635b6063f31ea9c95c1eb05633da64e4760c80f1b08dbf"
    }
  },
  "schemaVersion": "3.0.22",
  "updatedAt": "2021-08-18T19:48:33.369Z",
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
