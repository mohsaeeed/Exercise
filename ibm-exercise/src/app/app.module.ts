import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { ExeOneComponent } from './exe/exe-one/exe-one.component';
import { ExeTwoComponent } from './exe/exe-two/exe-two.component';
import { MainBarComponent } from './core/main-bar/main-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CharactersService } from './exe/exe-two/services/characters.service';
import { CharListComponent } from './exe/exe-two/components/char-list/char-list.component';
import { CharDetailsComponent } from './exe/exe-two/components/char-details/char-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ExeOneComponent,
    ExeTwoComponent,
    MainBarComponent,
    CharListComponent,
    CharDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
