import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantDetailsComponent } from './restaurant/restaurant-details/restaurant-details.component'
import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';
import { MenuComponent } from './restaurant-info/menu/menu.component';
import { CartComponent } from './restaurant-info/cart/cart.component';
import { MenuItemComponent } from './restaurant-info/menu-item/menu-item.component';
import { ReviewComponent } from './restaurant-info/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantInfoComponent,
    MenuComponent,
    CartComponent,
    MenuItemComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
