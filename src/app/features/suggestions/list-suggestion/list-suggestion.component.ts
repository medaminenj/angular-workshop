import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent implements OnInit {

  searchText: string = '';
  suggestions: Suggestion[] = [];

  constructor(private suggestionService: SuggestionService) {}

  ngOnInit(): void {
    this.loadSuggestions();
  }

  loadSuggestions(): void {
    this.suggestionService.getSuggestionsList().subscribe({
      next: (data) => this.suggestions = data,
      error: (err) => console.error(err)
    });
  }

  filteredSuggestions(): Suggestion[] {
    if (!this.searchText) return this.suggestions;
    const text = this.searchText.toLowerCase();
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(text) ||
      s.category.toLowerCase().includes(text)
    );
  }

  likeSuggestion(s: Suggestion): void {
    s.nbLikes++;
    this.suggestionService.likeSuggestion(s).subscribe({
      error: (err) => {
        s.nbLikes--;
        console.error(err);
      }
    });
  }

  deleteSuggestion(id: number): void {
    this.suggestionService.deleteSuggestion(id).subscribe({
      next: () => {
        this.suggestions = this.suggestions.filter(s => s.id !== id);
      },
      error: (err) => console.error(err)
    });
  }

  addToFavorites(s: Suggestion): void {
    console.log('Ajouté aux favoris:', s.title);
  }
}