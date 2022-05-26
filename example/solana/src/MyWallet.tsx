import {
    useConnection,
    useWallet
} from '@solana/wallet-adapter-react';
import {
    WalletDisconnectButton, WalletModalProvider, WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { SIWW } from '@web3auth/sign-in-with-web3';
import bs58 from 'bs58';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import SolanaLogo from '../public/solana-logo.png';

const MyWallet: React.FC = () => {
    const { connection } = useConnection();
    let walletAddress = "";

    // if you use anchor, use the anchor hook instead
    // const wallet = useAnchorWallet();
    // const walletAddress = wallet?.publicKey.toString();

    const wallet = useWallet();
    if (wallet.connected && wallet.publicKey) {
        walletAddress = wallet.publicKey.toString()
    }

    const { publicKey, signMessage } = useWallet();
    
    // Domain and origin
    const domain = window.location.host;
    const origin = window.location.origin;

    
    let statement = "Sign in with Solana to the app.";

    const [siwsMessage, setSiwsMessage] = useState<SIWW|null>();
    const [nonce, setNonce] = useState("");
    const [sign, setSignature] = useState("");

    // Generate a message for signing
    // The nonce is generated on the server side 
    function createSolanaMessage() {
        
        const payload = {
            domain: domain,
            uri: origin,
            address: publicKey!.toString(),
            statement : statement,
            version : '1',
            chainId : 1
        };
        const header = { t : "sip99" };
        const network = "solana";
        let message = new SIWW({ header, payload, network });

        // we need the nonce for verification so getting it in a global variable
        setNonce(message.payload.nonce);
        setSiwsMessage(message);
        const messageText = message.prepareMessage();
        const messageEncoded = new TextEncoder().encode(messageText);
        signMessage!(messageEncoded).then(resp => setSignature(
            bs58.encode(resp)));
    }

    return (
        <>
            {wallet.connected &&
                sign == "" &&
                <span>
                    <p className='center'>Sign Transaction</p>
                    <input className='publicKey' type="text" id="publicKey" value={walletAddress} />
                </span>
            }
            {
                wallet.connected != true &&
                sign=="" &&
                <div>
                    <div className="logo-wrapper">
                        <img className='solana-logo' src={SolanaLogo} />
                    </div>
                    <p className="sign">Sign in With Solana</p>
                </div>
            }
                    
            {wallet.connected &&
                sign == "" &&
                <div>
                    <button className='web3auth' id='w3aBtn' onClick={createSolanaMessage}>Sign-in with Solana</button>
                    <WalletDisconnectButton className='walletButtons' />
                </div>
            }
            {wallet.connected != true &&
                sign == "" &&
                <WalletModalProvider >
                <WalletMultiButton className='walletButtons' />
                </WalletModalProvider>
            }

            {
                sign &&
                <>
                    <p className='center'>Verify Signature</p>
                    <input className='signature' type="text" id="signature" value={sign} onChange={ e=> setSignature(e.target.value)} />
                    <button className='web3auth' id='verify' onClick={e => {
                        const signature = {
                            t: "sip99",
                            s: sign
                        } 
                        const payload = siwsMessage!.payload;
                        siwsMessage!.verify({ payload, signature }).then(resp => {
                            if (resp.success == true) {
                                new Swal("Success","Signature Verified","success")
                            } else {
                                new Swal("Error",resp.error!.type,"error")
                            }
                        });
                    }}>Verify</button>
                    <button className='web3auth' id='verify' onClick={e => {
                        setSiwsMessage(null);
                        setNonce("");
                        setSignature("")
                    }}>Back to Wallet</button>
                </>
            }

        </>
    );
};

export default MyWallet;
