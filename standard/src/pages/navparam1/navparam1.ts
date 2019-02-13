import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Navparam1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navparam1',
  templateUrl: 'navparam1.html',
})
export class Navparam1Page {
  user:string
  pass:string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Navparam1Page');
  }
  goNavparam2(){
    this.navCtrl.push("Navparam2Page",{username:this.user,password:this.pass})
  }

}
