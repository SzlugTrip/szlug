import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MapaPage } from '../pages/mapa/mapa';
import { PolygonPage } from '../pages/polygon/polygon';
import { HtmlInfoWindowPage } from '../pages/html-info-window/html-info-window';
import { MarkerClusterPage } from '../pages/marker-cluster/marker-cluster';
import { PolylinePage } from '../pages/polyline/polyline';
import { MarkerPage } from '../pages/marker/marker';
import { TileOverlayPage } from '../pages/tile-overlay/tile-overlay';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MapsComponent } from '../pages/maps/maps.component';
import { AddMeetingPage } from '../pages/AddMetting/Addmeeting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps, Geocoder } from "@ionic-native/google-maps";
import {Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { AddMeetingService } from'../services/addMeeting.service';

@NgModule({
  declarations: [
    MyApp,
    MapaPage,
    PolygonPage,
    HtmlInfoWindowPage,
    MarkerClusterPage,
    PolylinePage,
    MarkerPage,
    TileOverlayPage,
    HomePage,
    LoginPage,
    MapsComponent,
    RegisterPage,
    AddMeetingPage,
        
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      scrollPadding: false,
      scrollAssist: false
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [    
    MyApp,
    MapaPage,
    PolygonPage,
    HtmlInfoWindowPage,
    MarkerClusterPage,
    PolylinePage,
    MarkerPage,
    TileOverlayPage,
    HomePage,
    LoginPage,
    RegisterPage,
    MapsComponent,
    AddMeetingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    NativeGeocoder,
    Geocoder,
    AddMeetingService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
