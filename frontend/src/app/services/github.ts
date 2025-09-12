import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';
import { RepositoryResult } from '../types/Repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'http://localhost:3000/';
  repositories = signal<RepositoryResult>({
    pagination: '',
    totalCount: 0,
    incompleteResults: false,
    items: []
  });
  error = signal({ message: "" });

  constructor(private http: HttpClient) { }

  searchRepositories(query: string, page: string): Observable<RepositoryResult> {
    return this.http.get<RepositoryResult>(`${this.apiUrl}?q=${query}&page=${page}`)
      .pipe(
        tap((response) => {
          this.repositories.set(response);
          this.error.set({ message: "" });
        }),
        catchError((err) => {
          this.error.set(err.error);
          this.repositories.set({
            pagination: '',
            totalCount: 0,
            incompleteResults: false,
            items: []
          });
          console.error('Erro ao buscar repositórios:', err);
          throw err;
        })
      );
  }
}