// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
//var ERC721MintableComplete = artifacts.require("./ERC721MintableComplete.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
module.exports = async (deployer) => {
  await deployer.deploy(SquareVerifier);
  await deployer.deploy(
    SolnSquareVerifier, 
    SquareVerifier.address, 
    "ERC721MintableToken", 
    "TKN");
};