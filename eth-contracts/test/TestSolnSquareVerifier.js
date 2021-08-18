var SolInSquareVerifier = artifacts.require('./SolInSquareVerifier.sol');
var Verifier = artifacts.require('./verifier.sol');
var Proof = require("../zokratesInfo/proof.json");

contract('TestSolInSquareVerifier', accounts => {
    const account_one = accounts[0];
    const account_two = accounts[1];
    const tokenId_one = 1;

    let verifierContract;

    describe('match spec', function () {
        beforeEach(async function () {
            console.log("start new contract Verifier");
            verifierContract = await Verifier.new({
                from: account_one
            });
            console.log("start new contract Verifier");

            console.log("start new contract SolInSquareVerifier");
            this.contract = await SolInSquareVerifier.new(
                verifierContract.address, {
                    from: account_one
                }
            );
            
            console.log("finished new contract SolInSquareVerifier");
        });

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('1 - add solution ', async function () {
            try {
                console.log(`Proof.input ${JSON.stringify(Proof.inputs)}`)
                console.log("Proof.proof : ", Proof.proof.a, "\n", Proof.proof.b, "\n", Proof.proof.c)
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
                await this.solInSquareVerifierContact.mint(
                    account_two,
                    tokenId_one,
                    Proof.proof.a,
                    Proof.proof.b,
                    Proof.proof.c,
                    Proof.inputs,
                    {
                        from : account_two
                    }
                );
            } catch (error) {
                console.log("error into add solution", error);
            }
        });
    });
});


// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
