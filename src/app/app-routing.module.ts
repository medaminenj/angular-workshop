import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

// ✅ NO direct import of ListSuggestionComponent — it's handled by lazy loading

const routes: Routes = [
  // ✅ Default redirect
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // ✅ Home
  { path: 'home', component: HomeComponent },

  // ✅ Lazy loaded modules
  { path: 'suggestions', loadChildren: () => import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },

  // ✅ Wildcard — always last
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
