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

  getVisiblePages(): (number | string)[] {
    if (this.totalPages <= 7) return Array.from({ length: this.totalPages }, (_, i) => i + 1)

    const visiblePages: (number | string)[] = [];
    const current = this.page;
    const total = this.totalPages;

    visiblePages.push(1);


    let startPage = Math.max(2, current - 2);
    let endPage = Math.min(total - 1, current + 2);

    if (startPage > 2) {
      visiblePages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    if (endPage < total - 1) {
      visiblePages.push('...');
    }

    visiblePages.push(total);

    return visiblePages;
  }

  isEllipsis(page: number | string): boolean {
    return page === '...';
  }
}
