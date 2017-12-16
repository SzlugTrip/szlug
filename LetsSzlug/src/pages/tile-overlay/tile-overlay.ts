import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

/**
 * Generated class for the TileOverlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tile-overlay',
  templateUrl: 'tile-overlay.html',
})
export class TileOverlayPage {

  map: GoogleMap;

  constructor(private GoogleMaps:GoogleMaps) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TileOverlayPage');
    this.loadMap();
  }

  loadMap() {

    this.map = this.GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.map.addTileOverlay({
        getTile: (x: number, y: number, zoom: number) => {
          return "http://tile.stamen.com/watercolor/" + zoom + "/" + x + "/" + y + ".jpg";
        }
      });
    });
  }

}
