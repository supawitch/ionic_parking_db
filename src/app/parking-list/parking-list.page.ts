import { Component, OnInit } from '@angular/core';
import { IParking } from 'src/models/parking'; 
import { NavController, NavParams } from '@ionic/angular';
import { ParkingProviderService } from '../parking-provider.service';
import { ParkingDetailPage } from '../parking-detail/parking-detail.page';


@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.page.html',
  styleUrls: ['./parking-list.page.scss'],
})
export class ParkingListPage  {

  parkings:Array<IParking>=[];

  constructor(public navCtrl: NavController, private parkingProvider:ParkingProviderService,) { 
    
    // this.parking.push({
    //   id: 1,
    //   name: 'Paragon',
    //   distance: 10.5,
    //   available: 4,
    //   photo:'../../assets/img/paragon.jpg',
    // });
    // this.parking.push({
    //   id: 2,
    //   name: 'Iconsiam',
    //   distance: 12.2,
    //   available: 50,
    //   photo:'../../assets/img/iconsiam.jpg',
    // });
    // this.parking.push({
    //   id: 3,
    //   name: 'Victory Monument',
    //   distance: 15,
    //   available: 6,
    //   photo:'../../assets/img/03.jpg',
    // });
  }
  getParkingList(){
    this.parkingProvider.getParkingList().then(
      (data:any) =>{
      this.parkings = data.rows;
    }, error =>{
      console.error('Error get data!', error);
    });
  }

  ionViewWillEnter(){
    this.getParkingList();
  }

  doSearch(event){
    let query = event.target.value ||"";
    this.parkingProvider.searchParkingList(query).then(
      (data:any) =>{
      this.parkings = data.rows;
    }, error =>{
      console.error('Error get data!', error);
    });
  }

  viewParkingDetail(parking: IParking){
    console.log(parking.id);
    let p = parking.id;
    this.navCtrl.navigateForward(['/parking-detail', { p }]);
  }

}
