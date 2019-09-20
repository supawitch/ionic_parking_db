import { Component, OnInit } from '@angular/core';
import { IParking } from '../../models/parking';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ParkingProviderService } from '../parking-provider.service';

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.page.html',
  styleUrls: ['./parking-detail.page.scss'],
})
export class ParkingDetailPage implements OnInit {
  parking: Array<IParking> = [];

  q: any;

  constructor(public navCtrl: NavController,private route: ActivatedRoute,private router: Router,private ParkingProvider: ParkingProviderService) { 
    let p = this.route.snapshot.paramMap.get('p');
    console.log(p);
    this.q = p;
    this.doSearch();
  }

  
  doSearch(){
    let query = 3;
    this.ParkingProvider.getParkingID(this.q).then((data:any) => {
      this.parking = data.rows;
     // console.error('name', this.parking.name);
    }, error =>{
      console.error('Error get data!', error);
    });
  }

  ngOnInit() {
  }

}
