import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import "../styles/navbar.scss";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [address, setAddress] = useState("");

  function handleClick() {
    setIsExpanded(!isExpanded);
  }
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <span className="logo">
            <Link to="/">
              {/* <Image src={logo} alt="logo" /> */}
              <h1 className="logo-h1">
                VVote
                {/* UpToData */}
              </h1>
            </Link>
          </span>
          {/* <ul className={isExpanded === false ? "navmenu" : "navmenu active"}>
            <li className="navitem">
              <span>
                <Link
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  to="/page1"
                  className="navlink"
                >
                  Page1
                </Link>
              </span>
            </li>
            <li className="navitem">
              <span>
                <Link
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  to="/page2"
                  className="navlink"
                >
                  Page2
                </Link>
              </span>
            </li>
            <li className="navitem">
              <span>
                <Link
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  to="/page3"
                  className="navlink"
                >
                  Page3
                </Link>
              </span>
            </li>
          </ul> */}
          <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
          />
          <button
            onClick={handleClick}
            className={isExpanded === false ? "hamburger" : "hamburger active"}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
      </header>

      {/* {children} */}
      {/* footer */}
      {/* <div className="container">
                <footer className="footer">
                    <span>Hacked</span>
                    <span>@</span>
                    ETHGlobal&apos;s
                    <a
                        target="_blank"
                        href="https://fevm.ethglobal.com/"
                        rel="noopener noreferrer"
                    >
                        Hack FEVM
                    </a>
                    <span className="miro-link">
                        <a
                            target="_blank"
                            href="https://miro.com/app/board/uXjVPBvZqS4=/?share_link_id=108563393303"
                            rel="noopener noreferrer"
                        >
                            Miro Board
                        </a>
                    </span>
                </footer>
            </div> */}
    </>
  );
}

export default Navbar;
