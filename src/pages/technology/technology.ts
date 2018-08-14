import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EducationPage } from '../education/education';
import { GeneralPage } from '../general/general';
import { MathsPage } from '../maths/maths';

import { WorkPage } from '../work/work';
import { WorreyPage } from '../worrey/worrey';

/**
 * Generated class for the TechnologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {

  select= true;
 count = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechnologyPage');
  };
  // show(){
  //   this.navCtrl.push(WorkPage);
  // };


  show(){
    if(this.select){
      this.count += 1;
    }
  };

  proceed()
  {
    // this.score.push( this.select);
    // this.count = this.score.length;
    if(this.count==5){
      this.navCtrl.push(EducationPage);
    }
      else{
        alert("Please each question should have only one answer... ANSWER ALL THE QUESTIONS!");
      };
    };
}
