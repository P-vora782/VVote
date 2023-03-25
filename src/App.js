import "@rainbow-me/rainbowkit/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
// import { useAccount, useSigner } from "wagmi";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import "../src/styles/home.modules.scss";

function App() {
  const { chains, provider } = configureChains(
    [chain.goerli],
    [
      alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "projectone",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="App">
          <Router>
            <Navbar />
            <Home />
          </Router>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
