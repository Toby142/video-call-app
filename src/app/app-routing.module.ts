import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CallPageComponent } from './call-page/call-page.component';
import { ArduinoAddonComponent } from './arduino-addon/arduino-addon.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'call', component: CallPageComponent },
  { path: 'arduino', component: ArduinoAddonComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
