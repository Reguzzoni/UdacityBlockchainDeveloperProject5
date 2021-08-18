// migrating the appropriate contracts
var Verifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var ERC721MintableComplete = artifacts.require("./ERC721MintableComplete.sol");

module.exports = function(deployer, network, accounts) {

  let verifierContract;

  deployer.deploy(Verifier).
  then(data => {
    verifierContract = data;
    console.log("verifierContract.address : " + verifierContract.address);
    return deployer.deploy(SolnSquareVerifier,verifierContract.address);
  })

  //deployer.deploy(ERC721MintableComplete,"testToken","SS");
  
};
