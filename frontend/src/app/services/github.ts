import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';
import { RepositoryResult } from '../types/Repository';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = environment.apiUrl;
  repositories = signal<RepositoryResult>({
    lastPage: 0,
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
          console.log(response);
          this.repositories.set(response);
          this.error.set({ message: "" });
        }),
        catchError((err) => {
          this.error.set(err.error);
          this.repositories.set({
            lastPage: 0,
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