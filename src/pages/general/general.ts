import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EducationPage } from '../education/education';
import { MathsPage } from '../maths/maths';
import { TechnologyPage } from '../technology/technology';
import { WorkPage } from '../work/work';
import { WorreyPage } from '../worrey/worrey';

/**
 * Generated class for the GeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {
 select= true;
 count = 0;
//  right = true;
 wrong = true;
//  score = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // this.count = this.score.length;
    console.log('ionViewDidLoad GeneralPage');
  }

  show(){
    if(this.select){
      this.count += 1;
    };
  }

  proceed()
  {
    this.navCtrl.push(EducationPage);
    // this.score.push( this.select);
    // this.count = this.score.length;
    // if(this.count==5){
    //   this.navCtrl.push(EducationPage)
    // }
    //   else{
    //     alert("Please each question should have only one answer... ANSWER ALL THE QUESTIONS!");
    //   };
    }

    countS()
    {
        if( this.wrong){
          this.count = this.count + 0;
        };
    }
}
