import Web3 from "web3";
import React from "react";

import UniswapV2Abi from "../../assets/contracts/IUniswapV2Router.json";

import { UtilsHelpers } from "../../core/helpers/utils";

const Networks = {
  POLYGON: "137",
  METER: "82",
  BSC: "56",
};

const PossibleRouters = {
  QUICKSWAP: "quickswap",
  VOLTSWAP: "voltswap",
  PANCAKE: "pancake",
};

const RPCUrls = {
  [Networks.POLYGON]: "https://polygon-mainnet.g.alchemy.com/v2/IfBbeQVlWjzJGdhHsO_q3y7TvCgAg9aM",
  [Networks.METER]: "https://rpc-meter.jellypool.xyz",
  [Networks.BSC]: "https://bsc-dataseed.binance.org",
};

const Routers = {
  [Networks.POLYGON]: {
    [PossibleRouters.QUICKSWAP]: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
  },
  [Networks.METER]: {
    [PossibleRouters.VOLTSWAP]: "0xC6E88363ea74F31f514b56E979413B3Ee8d76f39",
  },
  [Networks.BSC]: {
    [PossibleRouters.PANCAKE]: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
  },
};

const PossibleTokens = {
  FTB: "FTB",
  BUSD: "BUSD",
  DAI: "DAI",
  MATIC: "MATIC",
  MTRG: "MTRG",
  AMPL: "AMPL",
  MOVR: "MOVR",
};

const BaseToken = {
  [Networks.POLYGON]: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  [Networks.METER]: "0x24aa189dfaa76c671c279262f94434770f557c35",
  [Networks.BSC]: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
};

const Tokens = {
  [Networks.POLYGON]: {
    [PossibleRouters.QUICKSWAP]: {
      [PossibleTokens.FTB]: {
        address: "0xf305012ea754252184f1071c86ae99fac5b40320",
        stablePath: [
          "0xf305012ea754252184f1071c86ae99fac5b40320",
          "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
          BaseToken[Networks.POLYGON],
        ],
        inversePath: [
          BaseToken[Networks.POLYGON],
          "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
          "0xf305012ea754252184f1071c86ae99fac5b40320",
        ],
        decimals: 18,
      },
    },
  },
  [Networks.METER]: {
    [PossibleRouters.VOLTSWAP]: {
      [PossibleTokens.FTB]: {
        address: "0x6cfe9adad5215195c1aa9755daed29360e6ab986",
        stablePath: [
          "0x6cfe9adad5215195c1aa9755daed29360e6ab986",
          "0x228ebbee999c6a7ad74a6130e81b12f9fe237ba3",
          BaseToken[Networks.METER],
        ],
        inversePath: [
          BaseToken[Networks.METER],
          "0x228ebbee999c6a7ad74a6130e81b12f9fe237ba3",
          "0x6cfe9adad5215195c1aa9755daed29360e6ab986",
        ],
        decimals: 18,
      },
      [PossibleTokens.MTRG]: {
        address: "0x228ebbee999c6a7ad74a6130e81b12f9fe237ba3",
        stablePath: ["0x228ebbee999c6a7ad74a6130e81b12f9fe237ba3", BaseToken[Networks.METER]],
        inversePath: [BaseToken[Networks.METER], "0x228ebbee999c6a7ad74a6130e81b12f9fe237ba3"],
        decimals: 18,
      },
      [PossibleTokens.AMPL]: {
        address: "0x1cf09d1b5da9d9d24365d87b932a7c4bd018a419",
        stablePath: [
          "0x1cf09d1b5da9d9d24365d87b932a7c4bd018a419",
          "0x228ebbee999c6a7ad74a6130e81b12f9fe237ba3",
          BaseToken[Networks.METER],
        ],
        inversePath: [
          BaseToken[Networks.METER],
          "0x228ebbee999c6a7ad74a6130e81b12f9fe237ba3",
          "0x1cf09d1b5da9d9d24365d87b932a7c4bd018a419",
        ],
        decimals: 9,
      },
      [PossibleTokens.MOVR]: {
        address: "0xb158870beB809Ad955Bf56065C5C10D7Fd957cC0",
        stablePath: [
          "0xb158870beB809Ad955Bf56065C5C10D7Fd957cC0",
          "0x228ebbee999c6a7ad74a6130e81b12f9fe237ba3",
          BaseToken[Networks.METER],
        ],
        inversePath: [
          BaseToken[Networks.METER],
          "0x228ebbee999c6a7ad74a6130e81b12f9fe237ba3",
          "0xb158870beB809Ad955Bf56065C5C10D7Fd957cC0",
        ],
        decimals: 9,
      },
    },
  },
  [Networks.BSC]: {
    [PossibleRouters.PANCAKE]: {
      [PossibleTokens.MTRG]: {
        address: "0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F",
        stablePath: ["0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F", BaseToken[Networks.BSC]],
        inversePath: [BaseToken[Networks.BSC], "0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F"],
        decimals: 18,
      },
      [PossibleTokens.AMPL]: {
        address: "0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F",
        stablePath: [
          "0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F",
          "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
          BaseToken[Networks.BSC],
        ],
        inversePath: [
          BaseToken[Networks.BSC],
          "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
          "0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F",
        ],
        decimals: 9,
      },
    },
  },
};

const Routes = [
  {
    from: Networks.METER,
    to: Networks.BSC,
    fromDex: PossibleRouters.VOLTSWAP,
    toDex: PossibleRouters.PANCAKE,
    token: PossibleTokens.MTRG,
  },
  {
    from: Networks.BSC,
    to: Networks.METER,
    fromDex: PossibleRouters.PANCAKE,
    toDex: PossibleRouters.VOLTSWAP,
    token: PossibleTokens.MTRG,
  },
  {
    from: Networks.METER,
    to: Networks.POLYGON,
    fromDex: PossibleRouters.VOLTSWAP,
    toDex: PossibleRouters.QUICKSWAP,
    token: PossibleTokens.FTB,
  },
  {
    from: Networks.POLYGON,
    to: Networks.METER,
    fromDex: PossibleRouters.QUICKSWAP,
    toDex: PossibleRouters.VOLTSWAP,
    token: PossibleTokens.FTB,
  },
  {
    from: Networks.METER,
    to: Networks.BSC,
    fromDex: PossibleRouters.VOLTSWAP,
    toDex: PossibleRouters.PANCAKE,
    token: PossibleTokens.AMPL,
  },
  {
    from: Networks.BSC,
    to: Networks.METER,
    fromDex: PossibleRouters.PANCAKE,
    toDex: PossibleRouters.VOLTSWAP,
    token: PossibleTokens.AMPL,
  },
];

interface RouterTrack {
  from: string;
  to: string;
  fromDex: string;
  toDex: string;
  USDAmount: number;
  buyAmount: number;
  buyGetAmount: number;
  sellAmount: number;
  sellGetAmount: number;
  success: boolean;
  token: string;
}

interface MainComponentProps {}

class UniSwapV2 {
  lastPrices = {};
  baseTokenBalance = 0;
  provider: any = null;
  network: any = null;
  router: any = null;
  contract: any = null;
  tokens: any = null;

  constructor(provider: any, network: any, router: any, contract: any, tokens: any) {
    this.provider = provider;
    this.network = network;
    this.router = router;
    this.contract = contract;
    this.tokens = tokens;
    this._updateBaseBalance();
  }

  async _updateBaseBalance() {
    const storageAmount = sessionStorage.getItem("passport-tracker-amount");
    if (storageAmount && !Number.isNaN(storageAmount)) this.baseTokenBalance = Number(storageAmount);
  }

  async _updatePrices() {
    const allTokens = this.tokens ? Object.keys(this.tokens) : [];
    const prices: any = {};

    if (allTokens.length > 0) {
      for (let i = 0; i < allTokens.length; i++) {
        const amountsOut = await this.contract.methods
          .getAmountsOut(Web3.utils.toWei("1", "ether"), this.tokens[allTokens[i]].stablePath)
          .call();

        if (Array.isArray(amountsOut)) {
          prices[allTokens[i]] = Web3.utils.fromWei(
            String(amountsOut[this.tokens[allTokens[i]].stablePath.length - 1]),
            "ether"
          );
        }
      }

      this.lastPrices = prices;
    }
  }

  async _getAmountsOut(path: [any], amountIn: string) {
    try {
      return await this.contract.methods.getAmountsOut(amountIn, path).call();
    } catch (error) {
      console.log("Invalid buy amount");
      return [];
    }
  }

  async getBaseTokenBalance() {
    await this._updateBaseBalance();
    return this.baseTokenBalance;
  }

  async simulateBuy(token: string, amount: number) {
    const out = await this._getAmountsOut(this.tokens[token].inversePath, Web3.utils.toWei(amount.toString(), "ether"));

    if (Array.isArray(out) && out.length > 0) {
      let total = Number(Web3.utils.fromWei(String(out[out.length - 1]), "ether"));
      let buyAmount = Number(Web3.utils.fromWei(String(out[0]), "ether"));
      total = total * Math.pow(10, 18 - this.tokens[token].decimals);
      // console.log("Finish buy simulation using " + token + " with " + amount + " USD = " + total + " " + token);
      return { total, buyAmount };
    } else return 0;
  }

  async simulateSell(token: string, amount: number) {
    const out = await this._getAmountsOut(
      this.tokens[token].stablePath,
      Web3.utils.toWei(
        amount.toFixed(18 - this.tokens[token].decimals).toString(),
        UtilsHelpers.getDecimalsUnit(18 - this.tokens[token].decimals)
      )
    );

    if (Array.isArray(out) && out.length > 0) {
      let total = Number(Web3.utils.fromWei(String(out[out.length - 1]), "ether"));
      let sellAmount = Number(Web3.utils.fromWei(String(out[0]), "ether"));
      sellAmount = sellAmount * Math.pow(10, 18 - this.tokens[token].decimals);
      // console.log("Finish sell simulation using " + token + " with " + amount + " " + token + " = " + total + " USD");
      return { total, sellAmount };
    } else return 0;
  }
}

interface MainComponentState {
  RPCs: any;
  providers: any;
  routersAddresses: any;
  routers: any;
  tokens: any;
  registers: any;
  buyingAmount: string;
  tracks: RouterTrack[];
}

export class MainPage extends React.PureComponent<MainComponentProps, MainComponentState> {
  constructor(props: MainComponentProps) {
    super(props);

    sessionStorage.setItem("passport-tracker-amount", "100");

    this.state = {
      RPCs: RPCUrls,
      providers: {},
      routersAddresses: Routers,
      routers: {},
      tokens: Tokens,
      registers: {},
      buyingAmount: "100",
      tracks: [],
    };
  }

  componentDidMount() {
    this._loadProviders();
  }

  private _loadProviders() {
    const providers: any = {};
    const networks = Object.keys(this.state.RPCs);

    for (let i = 0; i < networks.length; i++) {
      providers[networks[i]] = new Web3(new Web3.providers.HttpProvider(this.state.RPCs[networks[i]]));
    }

    this.setState({ providers }, () => this._createRouters());
  }

  private _createRouters() {
    const routers: any = {};
    const networks = Object.keys(this.state.RPCs);

    for (let i = 0; i < networks.length; i++) {
      const network = networks[i];
      const networkRouters = Object.keys(this.state.routersAddresses[network]);

      if (networkRouters.length > 0) {
        routers[network] = {};

        for (let i = 0; i < networkRouters.length; i++) {
          routers[network][networkRouters[i]] = new UniSwapV2(
            this.state.providers[network],
            network,
            networkRouters[i],
            new this.state.providers[network].eth.Contract(
              UniswapV2Abi.abi,
              this.state.routersAddresses[network][networkRouters[i]]
            ),
            this.state.tokens[network][networkRouters[i]]
          );
        }
      }
    }

    this.setState({ routers }, () => {
      this._startInterval();
    });
  }

  private _startInterval() {
    setInterval(async () => {
      // console.log("Searching posible transfers");

      try {
        for (let i = 0; i < Routes.length; i++) {
          if (this.state.routers[Routes[i].from][Routes[i].fromDex].simulateBuy) {
            const posibleBuyAmount = await this.state.routers[Routes[i].from][Routes[i].fromDex].getBaseTokenBalance();

            // console.log(
            //   "Buy simulation on " +
            //     Routes[i].from +
            //     " using " +
            //     Routes[i].fromDex +
            //     " with " +
            //     posibleBuyAmount +
            //     " USD"
            // );

            const posibleBuy = await this.state.routers[Routes[i].from][Routes[i].fromDex].simulateBuy(
              Routes[i].token,
              posibleBuyAmount
            );

            // console.log("Sell simulation on " + Routes[i].to + " using " + Routes[i].toDex);

            const posibleSell = await this.state.routers[Routes[i].to][Routes[i].toDex].simulateSell(
              Routes[i].token,
              posibleBuy.total
            );

            let newTracks = this.state.tracks;

            if (newTracks.length > 50) newTracks.pop();

            if (posibleBuyAmount >= posibleSell.total) {
              // console.log(
              //   "Failed emulation (" +
              //     Routes[i].token +
              //     "), invalid bridge transfer. Buy " +
              //     posibleBuyAmount +
              //     " USD, earn " +
              //     posibleSell.total +
              //     " USD, estimated loss " +
              //     (posibleSell.total - posibleBuyAmount) +
              //     " USD"
              // );

              this.setState({
                tracks: [
                  {
                    from: Routes[i].from,
                    to: Routes[i].to,
                    fromDex: Routes[i].fromDex,
                    toDex: Routes[i].toDex,
                    USDAmount: posibleBuyAmount,
                    buyAmount: posibleBuy.buyAmount,
                    buyGetAmount: posibleBuy.total,
                    sellAmount: posibleSell.sellAmount,
                    sellGetAmount: posibleSell.total,
                    success: false,
                    token: Routes[i].token,
                  },
                ].concat(newTracks),
              });
            } else {
              // console.log(
              //   "Success emulation (" +
              //     Routes[i].token +
              //     "), valid bridge transfer. Buy " +
              //     posibleBuyAmount +
              //     " USD, earn " +
              //     posibleSell +
              //     " USD, estimated earnings " +
              //     (posibleSell - posibleBuyAmount) +
              //     " USD"
              // );

              this.setState({
                tracks: [
                  {
                    from: Routes[i].from,
                    to: Routes[i].to,
                    fromDex: Routes[i].fromDex,
                    toDex: Routes[i].toDex,
                    USDAmount: posibleBuyAmount,
                    buyAmount: posibleBuy.buyAmount,
                    buyGetAmount: posibleBuy.total,
                    sellAmount: posibleSell.sellAmount,
                    sellGetAmount: posibleSell.total,
                    success: true,
                    token: Routes[i].token,
                  },
                ].concat(newTracks),
              });
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, 7000);
  }

  private _updateBuyingAmount(value: string) {
    this.setState({ buyingAmount: value }, () => {
      sessionStorage.setItem("passport-tracker-amount", JSON.stringify(Number(this.state.buyingAmount) || 0));
    });
  }

  render() {
    console.log(this.state.tracks);
    return (
      <React.Fragment>
        <div className="ct-mev-container">
          <h4>Passport MEV tracker</h4>
          <div className="ct-buy-amount">
            <label htmlFor="amount">USD</label>
            <input
              type="text"
              name="amount"
              placeholder="Simulate buy amount $USD"
              value={this.state.buyingAmount}
              onChange={(e) => this._updateBuyingAmount(e.target.value)}
            />
            <span className="fas fa-sync"></span>
          </div>
        </div>
        <div className="ct-track-list">
          <div className="ct-top">
            <div className="ct-buy">buy on</div>
            <div>buy $USD</div>
            <div>buy $token</div>
            <div className="ct-buy">sell on</div>
            <div>sell $token</div>
            <div>sell $USD</div>
            <div>earnings</div>
          </div>
          {this.state.tracks.length > 0
            ? this.state.tracks.map((track, index) => {
                return (
                  <div key={index} className={"ct-track" + (track.success ? " ct-valid" : " ct-invalid")}>
                    <div className="ct-buy">
                      <small>{UtilsHelpers.getBlockchainName(track.from)}</small>
                      <small>{track.fromDex}</small>
                    </div>
                    <div>
                      <small>{track.USDAmount} USD</small>
                    </div>
                    <div>
                      <small>
                        {Intl.NumberFormat().format(track.buyGetAmount)} {track.token}
                      </small>
                    </div>
                    <div className="ct-sell">
                      <small>{UtilsHelpers.getBlockchainName(track.to)}</small>
                      <small>{track.toDex}</small>
                    </div>
                    <div>
                      <small>
                        {Intl.NumberFormat().format(track.sellAmount)} {track.token}
                      </small>
                    </div>
                    <div>
                      <small>{Intl.NumberFormat().format(track.sellGetAmount)} USD</small>
                    </div>
                    <div>
                      <small>{Intl.NumberFormat().format(track.sellGetAmount - track.USDAmount)} USD</small>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </React.Fragment>
    );
  }
}
