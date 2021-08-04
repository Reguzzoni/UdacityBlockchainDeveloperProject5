var ERC721MintableComplete = artifacts.require('ERC721MintableCompl,ete');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[2];

    const tokenId_one = 1;
    const tokenId_two = 2;
    const tokenId_three = 3;
    const tokenId_four = 4;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            try{
                await contractInstance.mint(account_two, tokenId_one, {from: account_one});
                console.log("Success minted tokenId ", tokenId_one);
                
                await contractInstance.mint(account_two, tokenId_two, {from: account_two});
                console.log("Success minted tokenId ", tokenId_two);
                
                await contractInstance.mint(account_three, tokenId_three, {from: account_three});
                console.log("Success minted tokenId ", tokenId_three);

            } catch (error) {
                throw ("Error into _mint function : ", error);
            }

            console.log("Contract mint finished");

        })

        it('should return total supply', async function () { 
            console.log("test 1");
            let totSupply = 0;
            try {
                totSupply = await this.contract.totalSupply.call({from: account_one});
            } catch(error) {
                console.log("Error into return total supply : ", error);
            }

            console.log("totSupply : ", totSupply);
        })

        it('should get token balance', async function () { 
            console.log("test 2");
            let tokenBalance = 0;
            try {
                tokenBalance = await this.contract.balanceOf(account_one);
            } catch(error) {
                console.log("Error into return tokenBalance : ", error)
            }

            console.log("tokenBalance : ", tokenBalance);
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            console.log("test 3");
            let tokenURI;
            try {
                tokenURI = await this.contract.tokenURI(tokenId_one);
            } catch(error) {
                console.log("Error into return tokenURI : ", error);
            }

            console.log("tokenURI : ", tokenURI);
        })

        it('should transfer token from one owner to another', async function () { 
            console.log("test 4");
            try {
                contractInstance.transferOwnership(account_two, {from: account_one});
            } catch(error) {
                console.log("Error into transferOwnership ", error);
            } 
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            console.log("test 5");
            try {
                await contractInstance.mint(account_two, tokenId_four, {from: account_four});
                console.log("Success minted tokenId ", tokenId_four);

            } catch (error) {
                throw ("As expected : Error into _mint function : ", tokenId_four);
            }
        })

        it('should return contract owner', async function () { 
            console.log("test 6");
            let contractOwner = 0;
            try {
                contractOwner = await this.contract.ownerOf(tokenId_one);
            } catch(error) {
                console.log("Error into return contractOwner : ", error)
            }

            console.log("contractOwner : ", contractOwner);
        })

    });
})