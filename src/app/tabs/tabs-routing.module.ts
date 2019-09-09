import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page' 

const routes: Routes = [
 {path:'tabs',component:TabsPage,children:[
 {path:'home',children:[{path:'',loadChildren:'../home/home.module#HomePageModule'}]},
 {path:'parking-list',children:[{path:'',loadChildren:'../parking-list/parking-list.module#ParkingListPageModule'}]},
 {path:'map',children:[{path:'',loadChildren:'../map/map.module#MapPageModule'}]},
 {path:'qrcode',children:[{path:'',loadChildren:'../qrcode/qrcode.module#QrcodePageModule'}]},
 {path:'setting',children:[{path:'',loadChildren:'../setting/setting.module#SettingPageModule'}]},

 {path:'',redirectTo:'./tabs/home',pathMatch:'full'}]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
