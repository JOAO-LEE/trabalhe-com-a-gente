import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSearch } from './components/header-search/header-search';
import { RepoCard } from './components/repo-card/repo-card';
import { GithubService } from './services/github';
import { Paginator } from './components/paginator/paginator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderSearch, RepoCard, Paginator],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  hasSearched = signal(false);
  page: number = 1;
  currentQuery: string = "";
  totalPages: number = 0;
  currentPage: number = 0;

  constructor(public githubService: GithubService) { }

  onSearch(query: string, page?: number) {
    this.updateQuery(query)
    this.hasSearched.set(true);
    this.githubService
      .searchRepositories(query, this.page.toString())
      .subscribe(() => {
        this.totalPages = this.githubService.repositories().lastPage
      })
  }

  onNext() {
    this.page++;
    this.onSearch(this.currentQuery, this.page);
    console.log(this.githubService.repositories)
  }

  onPrev() {
    if (this.page > 1) {
      this.page--;
      this.onSearch(this.currentQuery, this.page);
    }
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.githubService.searchRepositories(this.currentQuery, newPage.toString()).subscribe();
  }

  updateQuery(query: string) {
    if (this.currentQuery !== query) {
      this.currentQuery = query;
      this.page = 1
    }
  }
}
