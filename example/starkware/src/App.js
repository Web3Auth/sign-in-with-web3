import './App.css';
import MyWallet from './MyWallet';

function App() {
  return (
    <div className="main">
      <MyWallet />
      <div className="footer-logo-wrapper">
        <img className='logo' src="https://app.tor.us/v1.22.2/img/web3auth.b98a3302.svg" />
      </div>
    </div>
  );
}

export default App;
