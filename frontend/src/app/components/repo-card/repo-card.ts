import { Component, Input } from '@angular/core';
import { Repository } from '../../types/Repository';
import { ShortNumberPipe } from '../../pipes/shortNumber';

@Component({
  selector: 'repo-card',
  imports: [ShortNumberPipe],
  templateUrl: './repo-card.html',
  styleUrl: './repo-card.css'
})
export class RepoCard {

  @Input() repository!: Repository;

}
