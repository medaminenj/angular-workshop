// suggestions.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

// ✅ NO AddSuggestionComponent — does not exist, use SuggestionFormComponent
// ✅ NO SuggestionsComponent — unless you have actual content in it

@NgModule({
  declarations: [
    ListSuggestionComponent,       // ✅ list
    SuggestionDetailsComponent,    // ✅ details
    SuggestionFormComponent        // ✅ handles both add AND edit
  ],
  imports: [
    CommonModule,          // ✅ for ngIf, ngFor inside lazy module
    FormsModule,           // ✅ for ngModel in search bar
    ReactiveFormsModule,   // ✅ for reactive form
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }