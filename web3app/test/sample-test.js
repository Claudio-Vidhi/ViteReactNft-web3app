const { expect } = require("chai");
const { ethers } = require("hardhat");
const { idText } = require("typescript");

describe("MyNFT", function(){
  it("Should mint and tranfer to someone", async function(){
    const TestNFT = await ethers.getContractFactory("TestNFT");
    const testNFT = await TestNFT.deploy();
    await testNFT.deployed();

    const recipient = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
    const metadataURi = 'cid/test.png';
    let balance =await testNFT.balanceOf(recipient);
    expect(balance).to.equal(0);
    const newlyMintedToken = await testNFT.payToMint(recipient, metadataURi,{value:ethers.utils.parseEther(0.01)});
    
  })
})