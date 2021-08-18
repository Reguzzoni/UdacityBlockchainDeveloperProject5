pragma solidity >=0.4.21 <0.6.0;

import "./Oraclize.sol";
import "./ERC721Mintable.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./verifier.sol";

contract VerifierZn is Verifier {
    
    event VerifiedZnEvent (address owner);

    function verifyTx(
        address owner,
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    ) public 
    returns(bool){

        bool isVerified = this.verifyTx(
            a,b,c,input
        );

        if(isVerified) {
            emit VerifiedZnEvent(owner);
        }

        return isVerified;
    }
}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is usingOraclize, ERC721MintableComplete{
    using SafeMath for uint256;

    VerifierZn private verifierZn;

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint index;
        address owner;
    }
    uint countSolution = 0;

    // as flight surety project address is not the key and link with uint -> key -> Solution with double map
    // TODO define an array of the above struct
    mapping(bytes32 => Solution) private _mapSolution;

    // TODO define a mapping to store unique solutions submitted
    mapping(uint => bytes32) private _mapLookupSolution;

    // TODO Create an event to emit when a solution is added
    event AddedSolutionEvent(address addressSolution);

    constructor(
        address verifierZnAddress
    ) 
    public {
        verifierZn = VerifierZn(verifierZnAddress);
    }

    function _getSolutionKey(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    )  
    private 
    view 
    returns (bytes32){
        return keccak256(abi.encodePacked(a,b,c,input));
    }

    // TODO Create a function to add the solutions to the array and emit the event
    function _addSolution(
        address owner,
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory inputs
    ) internal 
    {
        bytes32 solutionKey = _getSolutionKey(a,b,c,inputs);

        countSolution = countSolution.add(1);

        _mapSolution[solutionKey].owner = owner;
        _mapSolution[solutionKey].index = countSolution;

        _mapLookupSolution[countSolution] = solutionKey;

        emit AddedSolutionEvent(owner);
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    function mintNewNFT(
        address owner,
        uint256 tokenId,
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory inputs
    ) public {
        bytes32 solutionKey = _getSolutionKey(a,b,c,inputs);

        //  - make sure the solution is unique (has not been used before)
        require(_mapSolution[solutionKey].index == 0,
            strConcat("Already exist solution!",
                uint2str(_mapSolution[solutionKey].index)));

        //  - make sure you handle metadata as well as tokenSuplly
        require(verifierZn.verifyTx(
                owner,
                a,
                b,
                c,
                inputs), 
            "Solution isn't correct.");

        _addSolution(
            owner, 
            a,
            b,
            c,
            inputs);

        super._mint(owner, tokenId);
    }
}