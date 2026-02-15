import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component'; // Verify your correct path
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';

const routes: Routes = [
  // This matches '/suggestions'
  { path: '', component: ListSuggestionComponent }, 
  
  // This matches '/suggestions/:id'
  { path: ':id', component: SuggestionDetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }