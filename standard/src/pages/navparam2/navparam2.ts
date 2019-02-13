import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Navparam2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navparam2',
  templateUrl: 'navparam2.html',
})
export class Navparam2Page {
  subUser:string
  subPass:string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subUser = this.navParams.get('username')
    this.subPass = this.navParams.get('password')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Navparam2Page');
  }

}
