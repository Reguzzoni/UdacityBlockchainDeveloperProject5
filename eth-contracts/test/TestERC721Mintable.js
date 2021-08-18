var ERC721MintableComplete = artifacts.require('./ERC721MintableComplete.sol');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[2];

    const tokenId_one = 1;
    const tokenId_two = 2;
    const tokenId_three = 3;
    const tokenId_four = 4;

    const tokenName1 = "TestUdacityToken1";
    const tokenSymbol1 = "TUT1";
    const tokenName2 = "TestUdacityToken2";
    const tokenSymbol2 = "TUT2";
    const tokenName3 = "TestUdacityToken3";
    const tokenSymbol3 = "TUT3";
    const tokenName4 = "TestUdacityToken3";
    const tokenSymbol4 = "TUT4";

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new(
                tokenName1,
                tokenSymbol1,
                {
                    from: account_one
                });
            
            // TODO: mint multiple tokens
            try{
                let success;
                success = await this.contract.mint(
                    account_one,
                    tokenId_one,
                    "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/",
                    {from: account_one}
                );
                console.log("Success minted tokenId ", tokenId_one);
                
                success = await this.contract.mint(
                    account_two,
                    tokenId_two,
                    "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/",
                    {from: account_one}
                );
                console.log("Success minted tokenId ", tokenId_two);
                
                success = await this.contract.mint(
                    account_three,
                    tokenId_three,
                    "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/",
                    {from: account_one}
                );
                console.log("Success minted tokenId ", tokenId_three);

            } catch (error) {
                throw ("Error into _mint function : ", error);
            }
            
            //check
            /*let balanceOwner1 = await this.contract.balanceOf(account_one);
            let balanceOwner2 = await this.contract.balanceOf(account_two);
            let balanceOwner3 = await this.contract.balanceOf(account_three);

            console.log('balanceOwner1 : ', balanceOwner1)
            console.log('balanceOwner2 : ', balanceOwner2)
            console.log('balanceOwner3 : ', balanceOwner3)*/

            console.log("Contract mint finished");

        })

        it('1 - should return total supply', async function () { 
            console.log("test 1");
            let totSupply = 0;
            try {
                totSupply = await this.contract.totalSupply.call({from: account_one});
            } catch(error) {
                console.log("Error into return total supply : ", error);
            }

            console.log("totSupply : ", totSupply);
            
            assert.equal(totSupply, 3, "Incorrect supply");
        })

        it('2 - should get token balance', async function () { 
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
        it('3 - should return token uri', async function () { 
            console.log("test 3");
            let tokenURI;
            try {
                tokenURI = await this.contract.tokenURI(tokenId_one);
            } catch(error) {
                console.log("Error into return tokenURI : ", error);
            }

            console.log("tokenURI : ", tokenURI);
            
            assert.equal(tokenURI, 
                "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/"+tokenId_one, 
                "Error into tokenURI");
        })

        it('4 - should transfer token from one owner to another', async function () { 
            console.log("test4");
            let contractOwner ;
            try {
                console.log(account_one,account_two,tokenId_one);

                contractOwner = await this.contract.ownerOf(tokenId_one);
                console.log("before contractOwner : ", contractOwner);

                await this.contract.transferFrom(
                    account_one,
                    account_two,
                    tokenId_one, 
                    {
                        from: account_one
                    });
                
                    
                contractOwner = await this.contract.ownerOf(tokenId_one);
                
            } catch(error) {
                console.log("Error into transferFrom ", error);
                console.log("Contract mined! Address: " + this.contract.address);
            } 

            console.log("after contractOwner : ", contractOwner);
            console.log("account_two : ", account_two);

            assert.equal(contractOwner, 
                account_two, 
                "Error into transferfrom");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new(
                tokenName1,
                tokenSymbol1,
                {from: account_one});
        })

        it('5 - should fail to mint when address is not contract owner', async function () { 
            console.log("test 5");
            try {
                await this.contract.mint(
                    account_two, 
                    tokenId_four,
                    "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/",
                    {
                        from: account_four
                    });
                console.log("Success minted tokenId ", tokenId_four);

            } catch (error) {
                //console.log ("As expected : Error into _mint function : ", error);
            }

            let contractOwner;
            contractOwner = await this.contract.ownerOf(tokenId_three);
            console.log("contractOwner : ", contractOwner);
        })

        it('6 - should return contract owner', async function () { 
            console.log("test 6");
            let contractOwner = 0;
            try {
                await this.contract.mint(
                    account_three,
                    tokenId_three,
                    "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/",
                    {from: account_one}
                );

                contractOwner = await this.contract.ownerOf(tokenId_three);
                console.log("contractOwner : ", contractOwner);
            } catch(error) {
                console.log("Error into return contractOwner : ", error)
            }

            assert.equal(contractOwner, 
                account_three, 
                "Error into ownerOf");
        })

    });
})