import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EducationPage } from '../education/education';
import { GeneralPage } from '../general/general';
import { MathsPage } from '../maths/maths';
import { TechnologyPage } from '../technology/technology';
import { WorkPage } from '../work/work';
import { WorreyPage } from '../worrey/worrey';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hide = false;

  constructor(public navCtrl: NavController) {

  };

  hideF(){
    this.hide = true;
  }
  select()
  {
    this.hide = true;
  };
 show(){
   this.navCtrl.push(GeneralPage);
 };
}
