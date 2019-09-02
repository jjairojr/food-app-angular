import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';
import { ReviewComponent } from './restaurant-info/review/review.component';
import { MenuComponent } from './restaurant-info/menu/menu.component';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'restaurants', component: RestaurantComponent },
  { path: 'restaurants/:id', component: RestaurantInfoComponent,
  children: [
    {path: '', redirectTo: 'menu', pathMatch: 'full'},
    {path: 'menu', component: MenuComponent},
    {path: 'reviews', component: ReviewComponent }
  ]},
  // { path: 'path4', component: Name4Component },
  // { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
