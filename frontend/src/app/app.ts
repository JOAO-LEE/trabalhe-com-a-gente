import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSearch } from './components/header-search/header-search';
import { RepoCard } from './components/repo-card/repo-card';
import { GithubService } from './services/github';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderSearch, RepoCard],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  hasSearched = signal(false);
  page: number = 1;

  constructor(public githubService: GithubService) { }

  onSearch(query: string) {
    this.hasSearched.set(true);
    this.githubService
      .searchRepositories(query, this.page.toString())
      .subscribe();

  }
}
