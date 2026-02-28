// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

import { provideHttpClient } from '@angular/common/http';

// ✅ NO ListSuggestionComponent here — it belongs to SuggestionsModule
// ✅ NO CommonModule here — BrowserModule already includes it
// ✅ NO ReactiveFormsModule here — only needed in SuggestionsModule

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
    FormsModule        // ✅ needed for ngModel in header search if any
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }