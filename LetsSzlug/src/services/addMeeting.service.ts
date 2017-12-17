import { Injectable } from '@angular/core';
import { NativeGeocoder, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

@Injectable()
export class AddMeetingService {
    meeting;
    constructor(
        private _nativeGeocoder: NativeGeocoder
    ) { }
  AddMeeting(meet){
        this._nativeGeocoder.forwardGeocode(meet.adres)
          .then((coordinates: NativeGeocoderForwardResult) => console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude))
          .catch((error: any) => console.log(error));
        
    } 
}