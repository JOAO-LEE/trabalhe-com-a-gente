import { Component, signal, output } from '@angular/core';

@Component({
  selector: 'header-search',
  standalone: true,
  templateUrl: './header-search.html',
  styleUrl: './header-search.css'
})
export class HeaderSearch {
  query = signal('');
  submitted = output<string>();

  submit() {
    if (this.query().trim()) {
      console.log("oi");
      this.submitted.emit(this.query());
    }
  }
}
