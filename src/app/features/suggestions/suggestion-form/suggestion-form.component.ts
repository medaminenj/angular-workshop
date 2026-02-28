import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SuggestionService } from '../../../core/services/suggestion.service';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css']
})
export class SuggestionFormComponent implements OnInit {

  suggestionForm!: FormGroup;
  id!: number; // ✅ to detect edit mode

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,        // ✅ added
    private suggestionService: SuggestionService  // ✅ added
  ) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z][a-zA-Z ]*$')  // ✅ allow spaces in title
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(30)
      ]],
      category: ['', Validators.required],
      date: [{ value: new Date(), disabled: true }],
      status: [{ value: 'en attente', disabled: true }]  // ✅ space not underscore
    });

    // ✅ Edit mode: load existing suggestion
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.suggestionService.getSuggestionById(this.id).subscribe({
        next: (data) => {
          this.suggestionForm.patchValue(data);
        },
        error: (err) => console.error(err)
      });
    }
  }

  onSubmit(): void {
    if (this.suggestionForm.valid) {

      const suggestionData: Suggestion = {
        ...this.suggestionForm.getRawValue(),
        nbLikes: this.id ? undefined : 0  // ✅ keep existing likes on update
      };

      if (this.id) {
        // ✅ UPDATE mode
        const updated: Suggestion = { ...suggestionData, id: this.id };
        this.suggestionService.updateSuggestion(updated).subscribe({
          next: () => this.router.navigate(['/suggestions']),
          error: (err) => console.error(err)
        });
      } else {
        // ✅ ADD mode — no id sent, backend auto-increments
        this.suggestionService.addSuggestion(suggestionData).subscribe({
          next: () => this.router.navigate(['/suggestions']),
          error: (err) => console.error(err)
        });
      }
    }
  }
}