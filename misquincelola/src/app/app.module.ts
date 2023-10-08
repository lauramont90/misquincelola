import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AssistanceComponent } from './components/assistance/assistance.component';
import { ClockComponent } from './components/clock/clock.component';
import { DressCodeComponent } from './components/dress-code/dress-code.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/location/location.component';
import { MusicComponent } from './components/music/music.component';
import { OthersComponent } from './components/others/others.component';
import { HomeXvComponent } from './components/home-xv/home-xv.component';

@NgModule({
  declarations: [
    AppComponent,
    AssistanceComponent,
    ClockComponent,
    DressCodeComponent,
    FooterComponent,
    LocationComponent,
    MusicComponent,
    OthersComponent,
    HomeXvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
