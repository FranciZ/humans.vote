import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  contractsUrl = 'https://raw.githubusercontent.com/danesjenovdan/humans.vote/master/bin/contracts/';
  port: number = 8683;

  provider = {
    url: 'http://51.15.206.108:8683',
    chainId: 8692,
    name: 'humansvote',
  };

  constructor() {

  }

}
