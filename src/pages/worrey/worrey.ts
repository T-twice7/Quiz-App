import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EducationPage } from '../education/education';
import { GeneralPage } from '../general/general';
import { MathsPage } from '../maths/maths';
import { TechnologyPage } from '../technology/technology';
import { WorkPage } from '../work/work';
import { HomePage } from '../home/home';


/**
 * Generated class for the WorreyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-worrey',
  templateUrl: 'worrey.html',
})
export class WorreyPage {
 final=13;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorreyPage');
  };
  show(){
    this.navCtrl.push(HomePage);
  };

}
