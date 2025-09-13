import { Component, input, Input, output } from '@angular/core';
import { GithubService } from '../../services/github';

@Component({
  selector: 'paginator',
  imports: [],
  templateUrl: './paginator.html',
  styleUrl: './paginator.css'
})
export class Paginator {
  previous = output<void>();
  next = output<void>();
  @Input() page: number;
  @Input() totalPages: number

  constructor(public githubService: GithubService) {
  }


  onNext() {
    console.log(this.page);
    this.next.emit();
  }

  onPrevious() {
    this.previous.emit();
  }

  isPreviousDisabled(): boolean {
    return this.page <= 1;
  }

  isNextDisabled(): boolean {
    return this.totalPages === this.page;
  }
}
