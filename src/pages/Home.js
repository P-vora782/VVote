import { useEffect, useState } from "react";
import image1 from "./Candidate_1.png";
import image2 from "./Candidate_2.png";
import image3 from "./Candidate_3.png";
import { useAccount, useSigner } from "wagmi";
import { ethers } from "ethers";
// import * as PushAPI from "@pushprotocol/restapi";
import "../styles/hime.css";
import bg1 from "../components/assets/bg1.png";
import "../styles/home.module.scss";

function Home() {
  const { address, isConnected } = useAccount();
  let abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "ind",
          type: "uint256",
        },
      ],
      name: "giveVote",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "cnt",
          type: "uint256",
        },
      ],
      name: "newWave",
      type: "event",
    },
    {
      inputs: [],
      name: "getAllVotes",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "time",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          internalType: "struct voting.Vote[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getVotes",
      outputs: [
        {
          internalType: "uint256[3]",
          name: "",
          type: "uint256[3]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const [vote0, setVote0] = useState(0);
  const [vote1, setVote1] = useState(0);
  const [vote2, setVote2] = useState(0);
  const [data, setData] = useState(
    "0x66a9633AC8E529B6CcD8E4c752901A71FcDf54A7"
  );
  const [arr, setVotes_array] = useState([]);
  const [notifications, setNotifications] = useState([]);

  let contractAddress = "0x0da3921fdF113BD2D71ecE442b47e4B37fb53Fe8";

  async function initialize() {
    const Provider = new ethers.providers.Web3Provider(window.ethereum);
    const sig = Provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, Provider);
    const tx = await contract.getVotes();
    setVote0(tx[0].toNumber());
    setVote1(tx[1].toNumber());
    setVote2(tx[2].toNumber());

    const tx1 = await contract.getAllVotes();
    setVotes_array(tx1);
    // opt_in()
  }

  async function giveVote0() {
    console.log("Voting 0...");
    const Provider = new ethers.providers.Web3Provider(window.ethereum);
    const sig = Provider.getSigner();
    console.log(sig);
    const contract = new ethers.Contract(contractAddress, abi, sig);
    if (isConnected) {
      try {
        const tx = await contract.giveVote(0);
        const res = await tx.wait();
        console.log(res.events[0].args[3].toNumber());
        setVote0(res.events[0].args[3].toNumber());
        let message =
          "You have voted for Candidate A: " +
          res.events[0].args[2] +
          " successfully.";

        initialize();
      } catch (err) {
        alert("You can only vote once!");
      }
    } else {
      alert("Please connect to your wallet first!");
    }
    initialize();
  }

  async function giveVote1() {
    console.log("Voting 1...");
    const Provider = new ethers.providers.Web3Provider(window.ethereum);
    const sig = Provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, sig);
    if (isConnected) {
      try {
        const tx = await contract.giveVote(1);
        const res = await tx.wait();
        console.log(res.events[0].args[3].toNumber());
        setVote1(res.events[0].args[3].toNumber());
        let message =
          "You have voted for Candidate B: " +
          res.events[0].args[2] +
          " successfully.";

        initialize();
      } catch (err) {
        alert("You can only vote once!");
      }
    } else {
      alert("Please connect to your wallet first!");
    }
    initialize();
  }

  async function giveVote2() {
    console.log("Voting 2...");
    const Provider = new ethers.providers.Web3Provider(window.ethereum);
    const sig = Provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, sig);
    if (isConnected) {
      try {
        const tx = await contract.giveVote(2);
        const res = await tx.wait();
        console.log(res.events[0].args[3].toNumber());
        setVote2(res.events[0].args[3].toNumber());
        let message =
          "You have voted for Candidate C: " +
          res.events[0].args[2] +
          " successfully.";
        initialize();
      } catch (err) {
        alert("You can only vote once!");
      }
    } else {
      alert("Please connect to your wallet first!");
    }
    initialize();
  }

  if (window.performance) {
    if (performance.navigation.type == 1) {
      initialize();
    } else {
    }
  }
  useEffect(() => {
    initialize();
  }, []);
  return (
    <div className="App">
      <div className="cards">
        <div className="card">
          <div className="card-image">
            <img src={image1} alt="Image" />
          </div>
          <div className="card-content">
            <h2 className="card-name">Donald Trump</h2>
            <p className="card-age">Address: 0x923...1b0cc47d</p>
            <p className="card-votes">Votes: {vote0}</p>
            <button className="button_y" onClick={giveVote0}>
              VOTE A
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={image2} alt="Image" />
          </div>
          <div className="card-content">
            <h2 className="card-name">Barack Obama</h2>
            <p className="card-age">Address: 0xafED...D5eC0F0dF7</p>
            <p className="card-votes">Votes: {vote1}</p>
            <button className="button_y" onClick={giveVote1}>
              VOTE B
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={image3} alt="Image" />
          </div>
          <div className="card-content">
            <h2 className="card-name">Joe Biden</h2>
            <p className="card-age">Address: 0x660...4d65A0b6e51</p>
            <p className="card-votes">Votes: {vote2}</p>
            <button className="button_y" onClick={giveVote2}>
              VOTE C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
