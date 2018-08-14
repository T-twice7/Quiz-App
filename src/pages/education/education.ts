import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeneralPage } from '../general/general';
import { MathsPage } from '../maths/maths';
import { TechnologyPage } from '../technology/technology';
import { WorkPage } from '../work/work';
import { WorreyPage } from '../worrey/worrey';

/**
 * Generated class for the EducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {
  select= true;
 count = 0;
 wrong = true;
mine;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mine = this.navParams.get('me');
    console.log("the points are:"+ this.mine);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
  };

  show(){
    if(this.select){
      this.count += 1;
    };
  };

  countS()
    {
        if( this.wrong){
          this.count = this.count + 0;
        };
    }

  proceed()
  {
    this.navCtrl.push(MathsPage);
    // this.score.push( this.select);
    // this.count = this.score.length;
    // if(this.count==5){
    //   this.navCtrl.push(MathsPage)
    // }
    //   else{
    //     alert("Please each question should have only one answer... ANSWER ALL THE QUESTIONS!");
    //   };
    // };
}
  // show(){
  //   this.navCtrl.push(MathsPage);
  // };
}