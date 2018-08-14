import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EducationPage } from '../education/education';
import { GeneralPage } from '../general/general';
import { MathsPage } from '../maths/maths';
import { TechnologyPage } from '../technology/technology';

import { WorreyPage } from '../worrey/worrey';

/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage {
  select= true;
 count = 0;
 wrong = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPage');
  };
  // show(){
  //   this.navCtrl.push(WorreyPage);
  // };


  show(){
    if(this.select){
      this.count += 1;
    }
  };

  countS()
    {
        if( this.wrong){
          this.count = this.count + 0;
        };
    }
  proceed()
  {
    this.navCtrl.push(WorreyPage);
    // this.score.push( this.select);
    // this.count = this.score.length;
    // if(this.count==5){
    //   this.navCtrl.push(WorreyPage)
    // }
    //   else{
    //     alert("Please each question should have only one answer... ANSWER ALL THE QUESTIONS!");
    //   };
    };
}
