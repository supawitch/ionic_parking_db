import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'parking-list', loadChildren: './parking-list/parking-list.module#ParkingListPageModule' },
  // { path: 'parking-add', loadChildren: './parking-add/parking-add.module#ParkingAddPageModule' },
  { path: 'parking-detail', loadChildren: './parking-detail/parking-detail.module#ParkingDetailPageModule' },
  // { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  // { path: 'gps', loadChildren: './gps/gps.module#GpsPageModule' },
  // { path: 'qrcode', loadChildren: './qrcode/qrcode.module#QrcodePageModule' },
  // { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  // { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path:'',loadChildren: './tabs/tabs.module#TabsPageModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
