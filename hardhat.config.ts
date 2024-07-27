import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import dotenv from 'dotenv';
import '@nomicfoundation/hardhat-ethers';
import '@openzeppelin/hardhat-upgrades';

// Panggil dotenv.config() di awal
dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: 'swisstronik',
  solidity: '0.8.20',
  networks: {
    swisstronik: {
      url: 'https://json-rpc.testnet.swisstronik.com/',
      // Pastikan PRIVATE_KEY ada dalam variabel lingkungan
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};

export default config;
