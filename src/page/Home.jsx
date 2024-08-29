import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Home = () => {
  return (
    <MaxWidthWrapper>
      <div id="home" className="banner">
  
        <div className="container">
          <div className="bannerSec row">
            <div className="col-12 col-lg-6 col-xl-7 leftSec d-flex flex-column pe-sm-0">
              <h1 className="bannerTitle font-sm-40 fw-medium mb-2">
                <span className="text-secondary d-block">BITCOIN MINETRIX</span>
                <span className="text-secondary">STAKE TOKENS.</span>
                <span className="text-primary">MINE BITCOIN.</span>
              </h1>
              <p className="font-16 desc mb-3 text-center text-sm-start d-none d-md-block">
                One Bitcoin mined in 2013 appreciated 27,300% in 10 years.
                Bitcoin Minetrix provides hassle-free BTC mining for the next 10
                years. Buy $BTCMTX today for as little as $0.0148.
              </p>
              <div className="d-flex justify-content-center justify-content-sm-start">
                <a
                  href="/assets/documents/audit.pdf"
                  target="_blank"
                  className="btn btn-outline-tertiary fs-7 audit d-none d-md-block"
                >
                  Audit
                </a>
                <a
                  href="/assets/documents/whitepaper.pdf"
                  target="_blank"
                  className="btn btn-outline-primary fs-7 d-none d-md-block audit ms-2 d-flex justify-content-center align-items-center bg-transparent"
                >
                  <span className="text-primary me-2 text-capitalize">
                    Whitepaper
                  </span>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="svg-icon"
                  >
                    {/* SVG path elements */}
                  </svg>
                </a>
              </div>
              <div className="flex-grow-1"></div>
              <img
                src="/assets/images/svg-icons/Bitcoin-Cloud-Mining.svg"
                alt="Bitcoin-Cloud-Mining"
                className="worker"
              />
            </div>
            <div className="col-12 col-lg-6 col-xl-5 rightSec ps-sm-0">
              <div className="walletBox d-none d-md-block">
                <h4 className="bg-primary text-white text-center py-3 mb-3 text-uppercase font-22 fw-regular w-100 px-4">
                  $BTCMTX Claim and Token now LIVE!
                </h4>
                <p className="text-dark font-16 fw-semibold mb-2 text-break px-4 text-center">
                  You can now claim your $BTCMTX tokens. Plus, stake your tokens
                  to earn rewards! Add
                  0xb11dB272EbfABEdf611a07684e82165dB60dC70E to your wallet to
                  see your $BTCMTX.
                </p>
                <div className="w-100 d-flex flex-column align-items-center justify-content-start text-center px-4">
                  <p className="mt-3 mb-2 font-13 px-3 text-center">
                    <span className="fw-bold text-uppercase">
                      {" "}
                      USDT Raised:{" "}
                    </span>
                    <span className="fw-regular">$12,357,845.88</span>
                  </p>
                  <div className="d-flex justify-content-center align-items-center text-center font-13 px-3 mb-3">
                    <span className="fw-bold text-uppercase">
                      Your claimable BTCMTX
                    </span>
                    <span className="fw-regular">= 0</span>
                    <img
                      src="/assets/images/svg-icons/info-icon.svg"
                      alt=""
                      className="img-fluid ms-2 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="swapArea px-4 mt-3">
                  <a
                    href="https://dexscreener.com/ethereum/0x053da4662ab98f78254437580105b37aa999749c"
                    target="_blank"
                    className="btn btn-primary w-100 d-block text-white"
                  >
                    <img
                      src="/assets/images/svg-icons/dex-screener.svg"
                      alt=""
                      height="20"
                      className="me-2"
                    />
                    <span>BUY ON DEX SCREENER</span>
                  </a>
                  <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap flex-sm-nowrap mt-2">
                    <button className="btn btn-primary connect-btn fs-7 w-100">
                      Connect Wallet
                    </button>
                  </div>
                  <div className="mt-4">
                    <p className="font-13 text-center mb-2"></p>
                    <p className="font-14 text-black text-center fw-semibold mb-0">
                      Powered by{" "}
                      <a
                        href="https://web3paymentsolutions.io/"
                        target="_blank"
                      >
                        <img
                          src="/assets/images/svg-icons/W3P_Black.svg"
                          alt=""
                          className="poweredByIcon text-tertiary"
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mob-widget walletBox d-block d-md-none">
                <h4 className="bg-primary text-white text-center py-3 mb-3 text-uppercase font-20 fw-regular w-100 px-3">
                  $BTCMTX Claim and Token now LIVE!
                </h4>
                <div className="tab-container">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item active">
                      <a
                        href="javascript:void(0);"
                        className="nav-link active"
                        role="tab"
                      >
                        Buy BTCMTX
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="javascript:void(0);"
                        className="nav-link"
                        role="tab"
                      >
                        Info
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" role="tabpanel">
                      <div className="tab-card">
                        <p className="font-15 text-uppercase text-center fw-semibold text-break mt-3">
                          You can now claim your $BTCMTX tokens. Plus, stake
                          your tokens to earn rewards! Add
                          0xb11dB272EbfABEdf611a07684e82165dB60dC70E to your
                          wallet to see your $BTCMTX.
                        </p>
                        <p className="mt-3 mb-2 font-13 px-3 text-center">
                          <span className="fw-bold text-uppercase">
                            {" "}
                            USDT Raised:{" "}
                          </span>
                          <span className="fw-regular">$12,357,845.88</span>
                        </p>
                        <div className="d-flex justify-content-center align-items-center text-center font-13 px-3 mb-3">
                          <span className="fw-bold text-uppercase">
                            Your claimable BTCMTX
                          </span>
                          <span className="fw-regular">= 0</span>
                          <img
                            src="/assets/images/svg-icons/info-icon.svg"
                            alt=""
                            className="img-fluid ms-2 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Home;
