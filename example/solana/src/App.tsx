import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { FC, ReactNode, useMemo } from 'react';
import MyWallet from './MyWallet';

export const App: FC = () => {
    return (
        <Context>
            <Content />
        </Context>
    );
};

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    const network = WalletAdapterNetwork.Mainnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // Wallet Standard auto-detects installed wallets (Phantom, Solflare, etc.)
    const wallets = useMemo(() => [], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets}>
          <WalletModalProvider>
            <div className="main">
              <MyWallet />
              <div className="footer-logo-wrapper">
                <img className='logo' src="https://app.tor.us/v1.22.2/img/web3auth.b98a3302.svg" />
              </div>
            </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
    );
};

const Content: FC = () => {
    return <WalletMultiButton />;
};

