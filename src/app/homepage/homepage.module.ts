import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { HomepageRoutingModule } from './homepage-routing.module'; // Import the routing module

@NgModule({
  declarations: [
    FirstcomponentComponent,
    SecondcomponentComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule // Add the routing module here
  ]
})
export class HomepageModule { }
