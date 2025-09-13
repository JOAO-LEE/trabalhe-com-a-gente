import { Component, computed, input, Input, output } from '@angular/core';
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
  pageChange = output<number>();

  @Input() page: number;
  @Input() totalPages: number;

  onNext() {
    this.next.emit();
  }

  onPrevious() {
    console.log(this.totalPages)
    this.previous.emit();
  }

  onPageClick(page: number) {
    this.pageChange.emit(page);
  }

  isPreviousDisabled(): boolean {
    return this.page <= 1;
  }

  isNextDisabled(): boolean {
    return this.totalPages === this.page
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

}
