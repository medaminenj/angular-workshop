import { Injectable } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  private suggestionUrl = 'http://localhost:3000/suggestions';

  constructor(private http: HttpClient) {}

  getSuggestionsList(): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>(this.suggestionUrl);
  }

  getSuggestionById(id: number): Observable<Suggestion> {
    return this.http.get<Suggestion>(`${this.suggestionUrl}/${id}`);
  }

  addSuggestion(s: Suggestion): Observable<Suggestion> {
    return this.http.post<Suggestion>(this.suggestionUrl, s);
  }

  updateSuggestion(s: Suggestion): Observable<Suggestion> {
    return this.http.put<Suggestion>(`${this.suggestionUrl}/${s.id}`, s);
  }

  deleteSuggestion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.suggestionUrl}/${id}`);
  }

  // ✅ Use PUT instead of PATCH
  likeSuggestion(s: Suggestion): Observable<Suggestion> {
    return this.http.put<Suggestion>(`${this.suggestionUrl}/${s.id}`, s);
  }
}