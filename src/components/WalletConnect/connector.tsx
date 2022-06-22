import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42,25,338],
 });
 
export const WalletConnect = new WalletConnectConnector({
  // rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  supportedChainIds: [1, 3, 4, 5, 42, 25, 338],
 });
 
export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 25, 338],

 });
