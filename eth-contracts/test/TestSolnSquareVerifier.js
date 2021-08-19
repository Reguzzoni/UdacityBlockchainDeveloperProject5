var SolnSquareVerifier = artifacts.require('./SolnSquareVerifier.sol');
var Verifier = artifacts.require('./SquareVerifier.sol');
var Proof = require("../zokratesInfo/proof.json");

contract('TestSolnSquareVerifier', accounts => {
    const account_one = accounts[0];
    const account_two = accounts[1];
    const tokenId_one = 1;

    let solnSquareVerifierContact;

    describe('match spec', function () {
        beforeEach(async function () {
            let verifierContract;

            //DEBUG console.log(
            //DEBUG    "start new contract Verifier");
            verifierContract = await Verifier.new({
                from: account_one
            });
            //DEBUG console.log("Finished new contract Verifier");

            //DEBUG console.log(
            //DEBUG    "start new contract SolnSquareVerifier with verifier ",
            //DEBUG   verifierContract.address);

            this.solnSquareVerifierContact = await SolnSquareVerifier.new(
                verifierContract.address, "ERC721MintableToken", "TKN", {
                from: account_two
            }
            );
            //DEBUG console.log("finished new contract SolnSquareVerifier");
        });

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('1 - add solution ', async function () {
            let infoSolution;

            try {
                ////DEBUG console.log(`Proof.input ${JSON.stringify(Proof.inputs)}`)
                ////DEBUG console.log("Proof.proof : ", Proof.proof.a, "\n", Proof.proof.b, "\n", Proof.proof.c)

                await this.solnSquareVerifierContact.addSolution(
                    account_two,
                    Proof.proof.a,
                    Proof.proof.b,
                    Proof.proof.c,
                    Proof.inputs,
                    {
                        from: account_two
                    }
                );

                //check correctly added
                infoSolution =
                    await this.solnSquareVerifierContact
                        .getSolutionInfoByCount(1);

                //DEBUG console.log("infoSolution ", infoSolution);
            } catch (error) {
                //DEBUG console.log("error into add solution", error);
            }

            let tokenId =
                await this.solnSquareVerifierContact
                    .getIndexByCount(1);

            assert.equal(
                tokenId, tokenId_one,
                "Error into added solution cause wrong token expected");
        });

        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('2 - token can be minted ', async function () {

            let contractOwner;
            try {
                ////DEBUG console.log(`Proof.input ${JSON.stringify(Proof.inputs)}`)
                ////DEBUG console.log("Proof.proof : ", Proof.proof.a, "\n", Proof.proof.b, "\n", Proof.proof.c)
                /*
                function mintNewNFT(
                    address owner,
                    uint256 tokenId,
                    uint[2] memory a,
                    uint[2][2] memory b,
                    uint[2] memory c,
                    uint[2] memory inputs
                )
                */
                //console.log("before contractOwner : ", contractOwner);
                await this.solnSquareVerifierContact.mintNewNFT(
                    account_two,
                    tokenId_one,
                    Proof.proof.a,
                    Proof.proof.b,
                    Proof.proof.c,
                    Proof.inputs,
                    {
                        from: account_two
                    }
                );

                contractOwner = await this.solnSquareVerifierContact.ownerOf(tokenId_one);
                //console.log("contractOwner : ", contractOwner);

            } catch (error) {
                console.log("error into mintNewNFT", error);
            }
            
            let ownerOf;
            ownerOf = await this.solnSquareVerifierContact.ownerOf(tokenId_one);
            //console.log("ownerOf :" + ownerOf)

            let tokenURI;
            tokenURI = await this.solnSquareVerifierContact.tokenURI(tokenId_one);
            //console.log("tokenURI :" + tokenURI)

            assert.equal(contractOwner, 
                account_two, 
                "Error into transferfrom");
        });

        it('3 - check tokenName and symbol ', async function () {

            let name;
            let symbol;
            try {

                name = await this.solnSquareVerifierContact.getName(
                    {
                        from: account_two
                    }
                );
                
                symbol = await this.solnSquareVerifierContact.getSymbol(
                    {
                        from: account_two
                    }
                );

                


            } catch (error) {
                //DEBUG console.log("error into add solution", error);
            }

            //DEBUG console.log("name :" + name)
            //DEBUG console.log("symbol :" + symbol)

            assert.equal(name, 
                "ERC721MintableToken", 
                "Error into name token");

            assert.equal(symbol, 
                "TKN", 
                "Error into symbol token");
        });
    });
});
