import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { EducationPage } from '../pages/education/education';
import { GeneralPage } from '../pages/general/general';
import { MathsPage } from '../pages/maths/maths';
import { TechnologyPage } from '../pages/technology/technology';
import { WorkPage } from '../pages/work/work';
import { WorreyPage } from '../pages/worrey/worrey';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EducationPage,
    GeneralPage,
    MathsPage,
    TechnologyPage,
    WorkPage,
    WorreyPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EducationPage,
    GeneralPage,
    MathsPage,
    TechnologyPage,
    WorkPage,
    WorreyPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
