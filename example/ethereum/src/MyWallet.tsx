import {
  ethereumStrategy,
  Payload as SIWPayload,
  SIWWeb3,
} from "@web3auth/sign-in-with-web3";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { createWalletClient, custom, type Address } from "viem";
import { mainnet } from "viem/chains";
const EthereumLogo = "/ethereum-logo.png";

SIWWeb3.registerStrategy(ethereumStrategy);

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

const MyWallet: React.FC = () => {
  // Domain and origin
  const domain = window.location.host;
  const origin = window.location.origin;

  const statement = "Sign in with Ethereum to the app.";

  const [siwsMessage, setSiwsMessage] = useState<SIWWeb3 | null>();
  const [nonce, setNonce] = useState("");
  const [sign, setSignature] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [currentProvider, setProvider] = useState<any>();

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    return provider;
  };

  async function connectWallet() {
    try {
      const provider = detectCurrentProvider();
      setProvider(provider);
      if (provider) {
        if (provider !== window.ethereum) {
          Swal.fire(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
          );
        }
        const client = createWalletClient({
          chain: mainnet,
          transport: custom(provider),
        });
        const [address] = await client.requestAddresses();
        if (!address) {
          console.log("Please connect to meta mask");
        } else {
          setPublicKey(address);
        }
      }
    } catch (err) {
      console.log(
        "There was an error fetching your accounts. Make sure your Ethereum client is configured correctly."
      );
    }
  }

  // Generate a message for signing
  // The nonce is generated on the server side
  function createEthereumMessage() {
    const payload = new SIWPayload();
    payload.domain = domain;
    payload.address = publicKey;
    payload.uri = origin;
    payload.statement = statement;
    payload.version = "1";
    payload.chainId = 1;
    const header = {
      t: "eip191",
    };
    const chain = "ethereum";
    const message = new SIWWeb3({ header, payload, chain });
    // we need the nonce for verification so getting it in a global variable
    setNonce(message.payload.nonce);
    setSiwsMessage(message);
    const messageText = message.prepareMessage();
    const client = createWalletClient({
      chain: mainnet,
      transport: custom(currentProvider),
    });
    client
      .signMessage({
        account: publicKey as Address,
        message: messageText,
      })
      .then((result) => {
        setSignature(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {publicKey != "" && sign == "" && (
        <span>
          <p className="center">Sign Transaction</p>
          <input
            className="publicKey"
            type="text"
            id="publicKey"
            value={publicKey}
          />
          <button
            className="web3auth"
            id="w3aBtn"
            onClick={createEthereumMessage}
          >
            {" "}
            Sign In With Ethereum
          </button>
        </span>
      )}
      {publicKey == "" && sign == "" && (
        <div>
          <div className="logo-wrapper">
            <img className="ethereum-logo" src={EthereumLogo} />
          </div>
          <p className="sign">Sign in With Ethereum</p>
          <button className="web3auth" id="w3aBtn" onClick={connectWallet}>
            {" "}
            Conect Wallet
          </button>
        </div>
      )}

      {sign && (
        <>
          <p className="center">Verify Signature</p>
          <input
            className="signature"
            type="text"
            id="signature"
            value={sign}
            onChange={(e) => setSignature(e.target.value)}
          />
          <button
            className="web3auth"
            id="verify"
            onClick={(e) => {
              const signature = {
                t: "eip191",
                s: sign,
              };
              const payload = siwsMessage!.payload;
              siwsMessage!.verify(payload, signature).then((resp: any) => {
                if (resp.success == true) {
                  Swal.fire("Success", "Signature Verified", "success");
                } else {
                  Swal.fire("Error", resp.error!.type, "error");
                }
              });
            }}
          >
            Verify
          </button>
          <button
            className="web3auth"
            id="verify"
            onClick={(e) => {
              setSiwsMessage(null);
              setNonce("");
              setSignature("");
            }}
          >
            Back to Wallet
          </button>
        </>
      )}
    </>
  );
};

export default MyWallet;
