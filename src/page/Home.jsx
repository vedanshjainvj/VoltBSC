// import React from "react";
// import MaxWidthWrapper from "../components/MaxWidthWrapper";
// import { Link } from "react-router-dom";
// import { H3 } from "../components/typographyh3";
// import { P } from "../components/typographypara";
// import { Button } from "../components/Button";
// import { CopyCheck } from "lucide-react";
// import { IoMdPaper } from "react-icons/io";
// import { H4 } from "../components/typographyh4";

// const Home = () => {
//   return (
//     <MaxWidthWrapper className="max-w-8xl pt-5 px-0 sm:px-0 lg:px-0">
//       <div id="home" className="banner py-10">
//         <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="flex flex-col justify-start text-center lg:text-left flex-1">
//             <div className="text-4xl font-semibold mb-4">
//               <H3 className="block text-4xl text-zinc-700">BITCOIN MINETRIX</H3>
//               <span className="flex text-zinc-700">
//                 STAKE TOKENS.
//                 <span className="block text-primary">MINE BITCOIN.</span>
//               </span>
//             </div>
//             <P className="text-lg text-zinc-600 mb-6 text-balance">
//               One Bitcoin mined in 2013 appreciated 27,300% in 10 years. Bitcoin
//               Minetrix provides hassle-free BTC mining for the next 10 years.
//               Buy $BTCMTX today for as little as $0.0148.
//             </P>
//             <div className="flex justify-center lg:justify-start space-x-4">
//               <Button
//                 variant="outline"
//                 className="btn w-fit  border-gray-500 text-gray-500 border-[1px] px-4 py-2 rounded-md hover:bg-gray-500 hover:text-gray-100 transition-all uppercase duration-300 ease-in-out"
//               >
//                 {/* <Link to="/assets/documents/audit.pdf" target="_blank"> */}
//                 Audit
//                 {/* </Link> */}
//               </Button>
//               <Button
//                 variant="outline"
//                 className="btn w-fit  border-primary text-primary border-[1px] px-4 py-2 rounded-md hover:bg-primary hover:text-gray-100 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
//               >
//                 {/* <Link to="/assets/documents/audit.pdf" target="_blank"> */}
//                 Whitepaper <IoMdPaper className="w-6 h-6" />
//                 {/* </Link> */}
//               </Button>
//             </div>
//             <div className="ml-20 flex-1 flex-grow w-full flex items-end justify-center">
//               <img
//                 src="/Bitcoin-Cloud-Mining.svg"
//                 alt="Bitcoin-Cloud-Mining"
//                 className="w-full max-w-3xl mx-auto"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col justify-start h-fit  bg-white shadow-lg rounded-lg md:mx-10">
//             <H4 className="bg-primary    text-white text-center py-4 mb-6 text-xl font-normal rounded-t-md ">
//               $BTCMTX Claim and Token now LIVE!
//             </H4>
//             <P className="text-zinc-700 text-center mb-6 px-6">
//               You can now claim your $BTCMTX tokens. Plus, stake your tokens to
//               earn rewards! Add 0xb11dB272EbfABEdf611a07684e82165dB60dC70E to
//               your wallet to see your $BTCMTX.
//             </P>
//             <div className="text-center mb-6 px-6">
//               <P className="font-semibold">USDT Raised:</P>
//               <P className="text-2xl text-zinc-800">$12,357,845.88</P>
//             </div>
//             <div className="text-center mb-6 px-6">
//               <P className="font-semibold">Your claimable BTCMTX</P>
//               <P className="text-xl">= 0</P>
//             </div>

//             <Link
//               to="https://dexscreener.com/ethereum/0x053da4662ab98f78254437580105b37aa999749c"
//               target="_blank"
//               className="w-full px-6"
//             >
//               <Button className=" w-full btn bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md flex justify-center items-center mb-4">
//                 <img
//                   src="/dex-screener.svg"
//                   alt=""
//                   height="20"
//                   className="mr-2  object-cover h-6 w-auto"
//                 />
//                 <span>BUY ON DEX SCREENER</span>
//               </Button>
//             </Link>
//             <Link
//               to="https://dexscreener.com/ethereum/0x053da4662ab98f78254437580105b37aa999749c"
//               target="_blank"
//               className="w-full px-6"
//             >
//               <Button className=" w-full btn bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md flex justify-center items-center text-base mb-4 uppercase">
//                 <span> Connect Wallet</span>
//               </Button>
//             </Link>
//             <div className="my-4 text-center flex justify-center gap-2 items-center">
//               <P className="text-base font-medium text-zinc-800">Powered by</P>
//               <Link
//                 to="https://web3paymentsolutions.io/"
//                 target="_blank"
//                 className="inline-block mt-1"
//               >
//                 <img
//                   src="/W3P_Black.svg"
//                   alt="Web3 Payment Solutions"
//                   className="mx-auto h-6 w-auto object-cover"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </MaxWidthWrapper>
//   );
// };

// export default Home;

import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Link } from "react-router-dom";
import { H3 } from "../components/typographyh3";
import { P } from "../components/typographypara";
import { Button } from "../components/Button";
import { IoMdPaper } from "react-icons/io";
import { H4 } from "../components/typographyh4";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs";
import { H2 } from "../components/typographyh2";

const logos = [
  {
    src: "/cointelegraph.svg",
    alt: "cointelegraph",
  },
  {
    src: "/crypto3.svg",
    alt: "crypto3",
  },
  {
    src: "/cryptopotato.svg",
    alt: "cryptopotato",
  },
  {
    src: "/beincrypto.svg",
    alt: "beincrypto",
  },
  {
    src: "/bitcoin.svg",
    alt: "bitcoin",
  },
];

const Home = () => {
  return (
    <>
      <MaxWidthWrapper className="max-w-8xl pt-5 px-4 sm:px-8 lg:px-0">
        <div id="home" className="banner py-10">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-start text-center lg:text-left flex-1">
              <div className="text-3xl sm:text-4xl font-semibold mb-4">
                <H3 className="block text-3xl sm:text-4xl text-zinc-700">
                  BITCOIN MINETRIX
                </H3>
                <span className="flex text-zinc-700">
                  STAKE TOKENS.
                  <span className="block text-primary">MINE BITCOIN.</span>
                </span>
              </div>
              <P className="hidden sm:flex text-base sm:text-lg text-zinc-600 mb-6 text-balance">
                One Bitcoin mined in 2013 appreciated 27,300% in 10 years.
                Bitcoin Minetrix provides hassle-free BTC mining for the next 10
                years. Buy $BTCMTX today for as little as $0.0148.
              </P>
              <div className="hidden sm:flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="outline"
                  className="btn w-full sm:w-auto border-gray-500 text-gray-500 border-[1px] px-4 py-2 rounded-md hover:bg-gray-500 hover:text-gray-100 transition-all uppercase duration-300 ease-in-out"
                >
                  Audit
                </Button>
                <Button
                  variant="outline"
                  className="btn w-full sm:w-auto border-primary text-primary border-[1px] px-4 py-2 rounded-md hover:bg-primary hover:text-gray-100 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
                >
                  Whitepaper <IoMdPaper className="w-6 h-6" />
                </Button>
              </div>
              <div className="mx-auto sm:ml-20 flex-1 flex-grow w-full hidden sm:flex items-center sm:items-end justify-center">
                <img
                  src="/Bitcoin-Cloud-Mining.svg"
                  alt="Bitcoin-Cloud-Mining"
                  className="w-full max-w-3xl mx-auto object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center  justify-center h-fit   max-auto w-full">
              <div className="hidden sm:flex flex-col justify-center max-w-md w-full bg-white shadow-lg rounded-lg">
                {" "}
                <H4 className="bg-primary text-white text-center py-4 mb-6 text-lg sm:text-xl font-normal rounded-t-lg px-6">
                  $BTCMTX Claim and Token now LIVE!
                </H4>
                <div className="flex flex-col items-center justify-center gap-2 px-6 space-y-2">
                  <P className="text-zinc-700 text-center  text-base">
                    You can now claim your $BTCMTX tokens. Plus, stake your
                    tokens to earn rewards! Add 0xb11dB272e82165dB60dC70E to
                    your wallet to see your $BTCMTX.
                  </P>
                  <div className="flex flex-col items-center justify-center space-y-1 pb-4">
                    <div className="text-center flex items-center justify-center gap-2 ">
                      <P className="font-semibold text-zinc-600">
                        USDT Raised:
                      </P>
                      <P className="text-base sm:text-lg text-zinc-600">
                        $12,357,845.88
                      </P>
                    </div>
                    <div className="text-center flex items-center justify-center gap-2 ">
                      <P className="font-semibold text-zinc-600">
                        Your claimable BTCMTX
                      </P>
                      <P className="text-lg sm:text-xl">= 0</P>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 px-4 sm:px-6">
                  <Link
                    to="https://dexscreener.com/ethereum/0x053da4662ab98f78254437580105b37aa999749c"
                    target="_blank"
                    className="w-full"
                  >
                    <Button className="w-full btn bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md flex justify-center items-center">
                      <img
                        src="/dex-screener.svg"
                        alt=""
                        height="20"
                        className="mr-2 object-cover h-6 w-auto"
                      />
                      <span>BUY ON DEX SCREENER</span>
                    </Button>
                  </Link>
                  <Button className="w-full btn bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md flex justify-center items-center text-base mb-4 uppercase">
                    Connect Wallet
                  </Button>
                  <div className="my-4 pt-4 pb-6 text-center flex justify-center gap-2 items-center">
                    <P className="text-base font-medium text-zinc-800">
                      Powered by
                    </P>
                    <Link
                      to="https://web3paymentsolutions.io/"
                      target="_blank"
                      className="inline-block mt-1"
                    >
                      <img
                        src="/W3P_Black.svg"
                        alt="Web3 Payment Solutions"
                        className="mx-auto h-6 w-auto object-cover"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex sm:hidden flex-col justify-center max-w-md w-full  rounded-lg bg-white shadow-lg">
                <Tabs defaultValue="account" className="mx-auto">
                  <H4 className="bg-primary text-white text-center py-4 mb-6 text-lg sm:text-xl font-normal rounded-t-lg px-6">
                    $BTCMTX Claim and Token now LIVE!
                  </H4>
                  <div className="mx-2 mb-2">
                    <TabsList className="grid w-full grid-cols-2 mx-auto p-1 ">
                      <TabsTrigger value="account">BUY BTCMTX</TabsTrigger>
                      <TabsTrigger value="info">Info</TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="account">
                    <div className="flex flex-col items-center justify-center gap-2 px-6 space-y-2">
                      <P className="text-zinc-700 text-center  text-base">
                        You can now claim your $BTCMTX tokens. Plus, stake your
                        tokens to earn rewards! Add 0xb11dB272e82165dB60dC70E to
                        your wallet to see your $BTCMTX.
                      </P>
                      <div className="flex flex-col items-center justify-center space-y-1 pb-4">
                        <div className="text-center flex items-center justify-center gap-2 ">
                          <P className="font-semibold text-zinc-600">
                            USDT Raised:
                          </P>
                          <P className="text-base sm:text-lg text-zinc-600">
                            $12,357,845.88
                          </P>
                        </div>
                        <div className="text-center flex items-center justify-center gap-2 ">
                          <P className="font-semibold text-zinc-600">
                            Your claimable BTCMTX
                          </P>
                          <P className="text-lg sm:text-xl">= 0</P>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2 px-4 sm:px-6">
                      <Link
                        to="https://dexscreener.com/ethereum/0x053da4662ab98f78254437580105b37aa999749c"
                        target="_blank"
                        className="w-full"
                      >
                        <Button className="w-full btn bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md flex justify-center items-center">
                          <img
                            src="/dex-screener.svg"
                            alt=""
                            height="20"
                            className="mr-2 object-cover h-6 w-auto"
                          />
                          <span>BUY ON DEX SCREENER</span>
                        </Button>
                      </Link>
                      <Button className="w-full btn bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-md flex justify-center items-center text-base mb-4 uppercase">
                        Connect Wallet
                      </Button>
                      <div className="my-4 pt-4 pb-6 text-center flex justify-center gap-2 items-center">
                        <P className="text-base font-medium text-zinc-800">
                          Powered by
                        </P>
                        <Link
                          to="https://web3paymentsolutions.io/"
                          target="_blank"
                          className="inline-block mt-1"
                        >
                          <img
                            src="/W3P_Black.svg"
                            alt="Web3 Payment Solutions"
                            className="mx-auto h-6 w-auto object-cover"
                          />
                        </Link>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="info">
                    <div className="flex flex-col items-center justify-center gap-2 px-6 space-y-2 ">
                      <P className="flex text-base max-w-prose text-balance sm:text-lg text-zinc-600 py-2">
                        One Bitcoin mined in 2013 appreciated 27,300% in 10
                        years. Bitcoin Minetrix provides hassle-free BTC mining
                        for the next 10 years. Buy $BTCMTX today for as little
                        as $0.0148.
                      </P>
                      <div className="flex flex-col w-full justify-center lg:justify-start space-y-2  sm:space-x-4">
                        <Button
                          variant="outline"
                          className="btn w-full  border-gray-500 text-gray-500 border-[1px] px-4 py-4 rounded-md hover:bg-gray-500 hover:text-gray-100 transition-all uppercase duration-300 ease-in-out"
                        >
                          Audit
                        </Button>
                        <Button
                          variant="outline"
                          className="btn w-full border-primary text-primary border-[1px] px-4 py-2 rounded-md hover:bg-primary hover:text-gray-100 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
                        >
                          Whitepaper <IoMdPaper className="w-6 h-6" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2 px-4 sm:px-6">
                      <div className="my-4 pt-4 pb-6 text-center flex justify-center gap-2 items-center">
                        <P className="text-base font-medium text-zinc-800">
                          Powered by
                        </P>
                        <Link
                          to="https://web3paymentsolutions.io/"
                          target="_blank"
                          className="inline-block mt-1"
                        >
                          <img
                            src="/W3P_Black.svg"
                            alt="Web3 Payment Solutions"
                            className="mx-auto h-6 w-auto object-cover"
                          />
                        </Link>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <H2 className="text-center border-0 text-sm sm:text-sm font-medium leading-8 text-gray-400 uppercase">
              Featured in
            </H2>
            <div className="mx-auto mt-2 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              {logos.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  className="col-span-2 h-7 w-auto object-contain sm:col-span-1"
                />
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="border-y-[0.1px] border-zinc-300 my-16">
        <MaxWidthWrapper className="max-w-8xl pt-5 px-4 sm:px-8 lg:px-0">
          <div className=" py-12">
            <div className=" mx-auto px-4">
              <div className="row flex justify-center">
                <div className="col-md-10 offset-md-1 text-center">
                  <p className=" font-medium text-lg text-primary">
                    BITCOIN MINING made easy
                  </p>
                  <h2 className="heading text-2xl sm:text-3xl font-semibold text-gray-800 mt-4 mb-6">
                    What is Bitcoin Minetrix?
                  </h2>
                  <p className=" text-base sm:text-lg text-gray-600 mb-4">
                    Bitcoin Minetrix is a tokenized cloud mining platform that
                    allows everyday people to mine bitcoin (BTC) in a
                    decentralized way. We&apos;re tokenizing cloud mining to
                    ensure a secure and transparent experience.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600">
                    We&apos;re solving a huge problem by removing the risk of
                    third-party cloud mining scams and putting the control into
                    the hands of token holders. Simply stake BTCMTX to earn
                    credits, and use these to mine BTC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Home;
