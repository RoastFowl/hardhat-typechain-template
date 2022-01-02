import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";

export default {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 4294967295,
          },
        },
      },
      {
        version: "0.8.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 4294967295,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      mining: {
        auto: true,
      },
      initialBaseFeePerGas: 0
    },
    polygon: {
      chainId: 137,
      url: "https://polygon-rpc.com",
      gasPrice: 30000000000, // 30 Gwei
      accounts: [], // TODO private keys
    },
    localhost: {
      gasPrice: 30000000000, // 30 Gwei
      accounts: [], // TODO private keys
    },
  },
  gasReporter: {
    currency: "USD",
    token: "MATIC",
    gasPriceApi:
      "https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice",
    gasPrice: 30,
  },
};

