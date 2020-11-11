import { Component, OnInit, ViewChild } from '@angular/core';

import tokenSwapSDK from '@inbloxme/inblox-token-swaps'

const tokenSwapWidget = new tokenSwapSDK.Widget({ rpcURL:'https://ropsten.infura.io/v3/b3a845111c5f4e3eaf646c79bcb4d4c0', env:'dev' });

declare let Web3: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  initTokenSwapSdk() {
    tokenSwapWidget.initTokenSwap();
  

// Listen to all events.
tokenSwapWidget.on(tokenSwapWidget.EVENTS.ALL_EVENTS,
  (transactionData: any) => {
    console.log('all events',transactionData);
  }
);

  }
}