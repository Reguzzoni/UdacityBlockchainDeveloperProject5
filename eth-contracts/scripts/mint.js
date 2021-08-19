const getReadFileSync = () => {

  var dir = __dirname;
  // actual directory
  // depends if you start from app path or out
  let readFileSyncVar;
  try {
    readFileSyncVar = fs.readFileSync('../resource/secret_properties.yml', 'utf8');
  } catch (error) {
    // silent exception to catch from resource or app/resource
    // console.log('Not found on ./resource/secret_properties.yml, try on ./app/resource/secret_properties.yml');
    readFileSyncVar = fs.readFileSync('..//resource/secret_properties.yml', 'utf8');

  }

  return readFileSyncVar;
}

const getInfuraKey = () => {
  try {
    let fileContents = getReadFileSync();
    let data = yaml.load(fileContents);
    let infuraKey = data.infura.project_id;
    return infuraKey;
  } catch (error) {
    console.log("Problem with secret properties, return it manually");
    return "";
  }
}//"fj4jll3k.....";
//
//const fs = require('fs');
//const mnemonic = fs.readFileSync(".secret").toString().trim();
const getMnemonicKey = () => {
  try {
    let fileContents = getReadFileSync();
    let data = yaml.load(fileContents);
    let mnemonic = data.mnemonic_keywords;
    return mnemonic;
  } catch (error) {
    console.log("Problem with secret properties, return it manually");
    return "";
  }
}

const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require("web3");
const MNEMONIC = getMnemonicKey();
const NODE_API_KEY = getInfuraKey() || process.env.ALCHEMY_KEY;
const isInfura = !!getInfuraKey();
const INFURA_KEY = getInfuraKey();

const FACTORY_CONTRACT_ADDRESS = process.env.FACTORY_CONTRACT_ADDRESS;

const CONTRACT_ADDRESS = "0x36AA3d727c0AC6732DDF90FC7A9C889b7c6BD5FD";
const OWNER_ADDRESS = "0x030E42A9a18A0dE7207A17c1Fb68e84b9074878c";
const NETWORK = "rinkeby";

if (!MNEMONIC || !NODE_API_KEY || !OWNER_ADDRESS || !NETWORK) {
  console.error(
    "Please set a mnemonic, Alchemy/Infura key, owner, network, and contract address."
  );
  return;
} else {
  console.log("Correctly set variables")
}

const contract = require('../build/contracts/SolnSquareVerifier.json');
const ABI = contract.abi;

async function main() {
  console.log("start main");
  const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`)
  const web3Instance = new web3(
    provider
  )

  console.log("finished set provider ");
  if (CONTRACT_ADDRESS) {
    //check abi and address
    console.log("CONTRACT_ADDRESS :" + CONTRACT_ADDRESS);
    console.log("ABI :" + ABI);
    const token = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS, { gasLimit: "4500000" })
    const zokratesProof = [
      require("../zokratesInfo/proof.json")
    ];
    console.log("zokratesProof :" + JSON.stringify(zokratesProof[0].proof));

    // mint with zokratesProof
    for (let i = 0; i < zokratesProof.length ; i++) {
        try {
            const tokenId = 2;
            const proofs = Object.values(zokratesProof[i].proof);
            const inputs = zokratesProof[i].inputs;
            console.log("OWNER_ADDRESS "+ OWNER_ADDRESS + "\n");
            console.log("i "+i+ "\n");
            console.log("proofs "+ proofs+ "\n");
            console.log("inputs "+ inputs+ "\n");
            let tx2 = await token.methods
            .mintNewNFT(OWNER_ADDRESS, tokenId, ...proofs, inputs)
            .send({ from: OWNER_ADDRESS });
            
            console.log("Minted item. Transaction: " + tx2.transactionHash);
        } catch (e) {
            console.log("error into minted function " + e);
        }
    }
    // mint token without proof
    try {
      const tokenId = 2;
      console.log("OWNER_ADDRESS " + OWNER_ADDRESS + "\n");
      let tx3 = await token.methods
        .mint(OWNER_ADDRESS, tokenId, "")
        .send({ from: OWNER_ADDRESS });

      console.log("Minted item. Transaction: " + tx3.transactionHash);
    } catch (e) {
      console.log("error into minted function " + e);
    }

    for(var countMint = 3; countMint<=5; countMint++){
      try {
        const tokenId = countMint;
        console.log("OWNER_ADDRESS " + OWNER_ADDRESS + "\n");
        let tx = await token.methods
          .mint(OWNER_ADDRESS, tokenId, "")
          .send({ from: OWNER_ADDRESS });
  
        console.log("Minted item. Transaction: " + tx.transactionHash);
      } catch (e) {
        console.log("error into minted function " + e);
      }
    }
  }
}
main()