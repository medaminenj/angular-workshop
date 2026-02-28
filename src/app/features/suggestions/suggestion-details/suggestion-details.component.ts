import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css']
})
export class SuggestionDetailsComponent implements OnInit {

  id!: number;
  suggestion?: Suggestion;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.suggestionService.getSuggestionById(this.id).subscribe({
      next: (data) => this.suggestion = data,
      error: (err) => console.error(err)
    });
  }

  // ✅ Correct route matching suggestions-routing.module.ts
  goToUpdate(): void {
    this.router.navigate(['/suggestions', this.id, 'edit']);
  }

  // ✅ Delete with redirect to list
  deleteSuggestion(): void {
    this.suggestionService.deleteSuggestion(this.id).subscribe({
      next: () => this.router.navigate(['/suggestions']),
      error: (err) => console.error(err)
    });
  }

  // ✅ Back to list
  goBack(): void {
    this.router.navigate(['/suggestions']);
  }
}