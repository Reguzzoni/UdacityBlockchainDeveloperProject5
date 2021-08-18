// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var Verifier = artifacts.require('./verifier.sol');
var Proof = require("../zokratesInfo/proof.json");

contract('TestSquareVerifier', accounts => {
    const account_one = accounts[0];

    describe('match spec', function () {
        beforeEach(async function () {
            this.contract = await Verifier.new({
                from : account_one
            }
            );
        });

        // Test verification with correct proof
        // - use the contents from proof.json generated from zokrates steps
        // I copied zokrates files into folder zokratesInfo
        it('1 - Test verification with correct proof', async function () {
            let isVerified = false;
            try {

                //console.log(`Proof.proof ${JSON.stringify(Proof.proof)}`);
                /*Proof.proof {
                    "a":[
                        "0x14ec8a0ca452f1b36f77ccddbc9ea48253a8c1a1de9fe7cfdd8d1419e962df75",
                        "0x09e74626a3952fb77093c8fdf3dbc78adab0e49da9d0521e951b1b78bf391f74"],
                    "b":[
                        ["0x065de642997a4d34ddfb0981f9d1798607ea2daa8135e2ec732675feb6c039ce",
                        "0x07455c6e223aecfa5d14560245777ccb95f02efc159c635bfe47eaec788e2138"]
                        ,["0x2e41e25e14f3eee4d3a1e4a1384ff6e7d0aaefc2033dcd491b6248bd86d1a0d0"
                        ,"0x1ae6c7f77c4a06e28b3df8f7e95dca16b0a400c3f2dd81a370fb3a06a1489e7d"]
                    ],
                    "c":["0x160bd6d7f5dd1a4550afc07458290cbeb1e7d58690ebebc7465be07ec34fff63",
                    "0x1c35d364eaae8a48fb1b5b5372c63edd712935e215048fd94b105c7fdb63491a"
                ]*/
                console.log(`Proof.input ${JSON.stringify(Proof.inputs)}`)
                console.log("Proof.proof : ", Proof.proof.a, "\n", Proof.proof.b, "\n", Proof.proof.c)
                /*
                    function verifyTx(
                    uint[2] memory a,
                    uint[2][2] memory b,
                    uint[2] memory c, 
                    uint[2] memory input
                    ) public view returns (bool r)
                */
                isVerified = await this.contract.verifyTx(
                    Proof.proof.a,
                    Proof.proof.b,
                    Proof.proof.c,
                    Proof.inputs,
                    {
                        from: this.account_one
                    }
                );

                console.log("isVerified", isVerified);
            } catch (error) {
                console.log("error into verify proof", error)
            }

            assert.equal(
                isVerified,
                true,
                "Error into verify proof");
        });

        // Test verification with incorrect proof
        it('2 - Test verification with incorrect proof', async function () {
            let isVerified = true;
            try {

                // inverse a and c proof
                isVerified = await this.contract.verifyTx(
                    Proof.proof.c,
                    Proof.proof.b,
                    Proof.proof.a,
                    Proof.inputs,
                    {
                        from: this.account_one
                    }
                );

                console.log("isVerified", isVerified);
            } catch (error) {
                console.log("error into verify proof", error)
            }

            assert.equal(
                isVerified,
                false,
                "Error into verify proof");
        });
    });
});



