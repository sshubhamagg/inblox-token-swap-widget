import { Component, OnInit, ViewChild } from '@angular/core';

import tokenSwapSDK from '@inbloxme/inblox-token-swaps'

const tokenSwapWidget = new tokenSwapSDK.Widget();

declare let Web3: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  handleName: any;
  userAddress: any;
  walletBalance: any;
  authUserData: any;
  userMasterData: any;
  userOrders: [];
  transactionOrders: [];
  inbloxUserData: any;
  userTokens: any;
  userTokensBalance: any;
  newTokenContractAddress: any;
  viewHelpers: {
    showAssetTokenSearch: boolean;
    showAddNewToken: boolean;
    showSuccess: boolean;
    showTokenTransfer: boolean;
  };
  transferTypeOptions: any;
  transferDetails: {
    type: any;
    to: any;
    amount: any;
    from: any;
    value: any;
    fees: any;
  };
  defaultEthereumDetails: any;
  gasFeesInGwei: any;
  gasLimit: any;
  isUserOptedToSendAllBalance: boolean;
  userOtherAssets: any;

  constructor(
  ) {
    this.gasLimit = 30000;
    this.viewHelpers = {
      showAssetTokenSearch: false,
      showAddNewToken: false,
      showSuccess: false,
      showTokenTransfer: false
    };

    this.transferDetails = {
      type: '',
      to: '',
      amount: '',
      from: '',
      value: '',
      fees: ''
    };
    this.transferTypeOptions = [];
    this.defaultEthereumDetails = {
      contractAddress: '',
      image: '',
      name: 'Ethereum',
      symbol: 'ETH',
      tokenId: '',
      balance: 0
    };
    this.userOtherAssets = [
      {
        coinName: 'Bitcoin',
        coinSymbol: 'btc',
        coinImage: 'https://files.kyberswap.com/DesignAssets/tokens/btc.svg',
        userAddress: '12JH2aBuhWEhnMjmM8xQwQ9hnWP2Y7yEKS',
        coinBalance: '0.00962476',
        vHMS: true
      }
    ];
  }


  initTokenSwapSdk() {
    tokenSwapWidget.initTokenSwap();
  }
}