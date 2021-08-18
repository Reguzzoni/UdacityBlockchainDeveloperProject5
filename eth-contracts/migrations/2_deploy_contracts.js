// migrating the appropriate contracts
var Verifier = artifacts.require("./verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var ERC721MintableComplete = artifacts.require("./ERC721MintableComplete.sol");

module.exports = function(deployer, network, accounts) {

  let verifier;

  deployer.deploy(Verifier).
  then(data => {
    verifier = data;
    //deployer.deploy(SolnSquareVerifier,verifier.address);
  })

  deployer.deploy(ERC721MintableComplete,"testToken","SS");
  
};
