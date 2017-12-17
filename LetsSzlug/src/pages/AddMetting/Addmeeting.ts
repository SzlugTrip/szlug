import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AddMeetingService } from '../../services/addMeeting.service';
@Component({
    selector: 'addmeeting',
    templateUrl: 'addmeeting.html'
})

export class AddMeetingPage implements OnInit {
    constructor(private _AddMeetingService: AddMeetingService,public viewCtrl: ViewController) { }
    addmeet = {};
    ngOnInit() { 
    }
    
    addMeeting(){
        this._AddMeetingService.AddMeeting(this.addmeet);
    }
    close(){
        this.viewCtrl.dismiss();
    }

}