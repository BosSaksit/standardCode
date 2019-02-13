import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TemplateDriven2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template-driven2',
  templateUrl: 'template-driven2.html',
})
export class TemplateDriven2Page {
  public user:object

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('datauser')
    console.log("data :"+this.user);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplateDriven2Page');
  }

}
