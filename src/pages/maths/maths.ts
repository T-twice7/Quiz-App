import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EducationPage } from '../education/education';
import { GeneralPage } from '../general/general';

import { TechnologyPage } from '../technology/technology';
import { WorkPage } from '../work/work';
import { WorreyPage } from '../worrey/worrey';

/**
 * Generated class for the MathsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maths',
  templateUrl: 'maths.html',
})
export class MathsPage {
  select= true;
 count = 0;
 wrong = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MathsPage');
  };
  // show(){
  //   this.navCtrl.push(TechnologyPage);
  // };

  countS()
    {
        if( this.wrong){
          this.count = this.count + 0;
        };
    }

  show(){
    if(this.select){
      this.count += 1;
    }
  };
  proceed()
  {
    this.navCtrl.push(WorkPage);
    // this.score.push( this.select);
    // this.count = this.score.length;
    // if(this.count==5){
    //   this.navCtrl.push(WorkPage)
    // }
    //   else{
    //     alert("Please each question should have only one answer... ANSWER ALL THE QUESTIONS!");
    //   };
    };
}
