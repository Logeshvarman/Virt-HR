require("babel-register");
require("babel-polyfill");

const HDWalletProvider = require("@truffle/hdwallet-provider");

// Add your Polygon Mumbai network configuration
const mnemonic = "dinosaur tobacco truth hunt current trend teach tennis bracket case solar various"; // Replace with your mnemonic

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network ID
    },
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, `https://polygon-mumbai.g.alchemy.com/v2/HDlJQU_srP5LUoTGb0IPvYF_7nocCW7I`),
      network_id: 80001, // Mumbai's network id
      confirmations: 2,
      timeoutBlocks: 200,
      gasPrice: 5000000000, // 5 gwei (default: 100 gwei)
      gas: 5500000,
      skipDryRun: true,
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "petersburg",
    },
  },
  plugins: ["truffle-contract-size"],
};
