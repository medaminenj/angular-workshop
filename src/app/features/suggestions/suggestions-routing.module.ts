import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component'; // ✅ correct import

const routes: Routes = [
  // ✅ List
  { path: '', component: ListSuggestionComponent },

  // ✅ Add — must come BEFORE :id to avoid being caught by it
  { path: 'add', component: SuggestionFormComponent },

  // ✅ Edit — matches ['/suggestions', id, 'edit'] from goToUpdate()
  { path: ':id/edit', component: SuggestionFormComponent },

  // ✅ Details — must come LAST among :id routes
  { path: ':id', component: SuggestionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
