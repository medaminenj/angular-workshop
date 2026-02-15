import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ListSuggestionComponent } from './features/suggestions/list-suggestion/list-suggestion.component';

import { FormsModule } from '@angular/forms';   // ✅ for ngModel
import { CommonModule } from '@angular/common';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component'; // ✅ for ngIf, ngFor

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   // ✅ for ngModel
    CommonModule   // ✅ for ngIf, ngFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
