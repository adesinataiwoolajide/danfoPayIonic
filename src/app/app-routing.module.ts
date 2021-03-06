import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'find-ride', loadChildren: './find-ride/find-ride.module#FindRidePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'mytrips', loadChildren: './mytrip/mytrip.module#MytripPageModule' },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentPageModule' },
  { path: 'vehicle', loadChildren: './vehicle/vehicle.module#VehiclePageModule' },
  { path: 'ratings', loadChildren: './ratings/ratings.module#RatingsPageModule' },
  { path: 'enquiry', loadChildren: './enquiry/enquiry.module#EnquiryPageModule' },
  { path: 'support', loadChildren: './support/support.module#SupportPageModule' },
  { path: 'question', loadChildren: './question/question.module#QuestionPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
