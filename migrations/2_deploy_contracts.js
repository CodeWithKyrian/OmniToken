const OmniToken = artifacts.require("OmniToken.sol");

module.exports = async function(deployer) {
  await deployer.deploy(OmniToken);
  const instance = await OmniToken.deployed();
};
