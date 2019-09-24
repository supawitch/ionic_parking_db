import { Component, OnInit } from '@angular/core';
import { IParking } from 'src/models/parking'; 
import { ActivatedRoute,Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { ParkingProviderService } from '../parking-provider.service';


@Component({
  selector: 'app-parking-add',
  templateUrl: './parking-add.page.html',
  styleUrls: ['./parking-add.page.scss'],
})
export class ParkingAddPage {

  parking:Array<IParking>=[];

  constructor(public navCtrl: NavController,private route: ActivatedRoute, private router: Router, private parkingProvider: ParkingProviderService) 
  { 
    this.parking[0] = {id: 0,name:'',available: 1}; 
  }
  save(){
    console.log("This is save mode");
    this.parkingProvider.addParking(this.parking[0]).then((data: any) =>{
      if(data.ok){
        console.log('Add parking success');
      }
    },(error)=>{
      console.error('Error save data!',error);
    });
  }
  
}
