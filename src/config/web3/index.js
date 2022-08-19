import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector';

export const connector = new InjectedConnector({
  supportedChainIds: [
    4, // rinkeby
  ],
});

export const getLibrary = (provider) => {
  return new Web3(provider);
};
