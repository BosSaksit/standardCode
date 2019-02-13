import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TemplateDriven1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template-driven1',
  templateUrl: 'template-driven1.html',
})
export class TemplateDriven1Page {
  public user:object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = {
      'firstName':null,
      'lastName':null,
      'address':{
        'street':null,
        'city':null,
        'state':null,
        'zipCode':null
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplateDriven1Page');
  }
  onSubmit(){
    console.log(this.user);
    this.navCtrl.push("TemplateDriven2Page",{datauser:this.user})
  }

}
