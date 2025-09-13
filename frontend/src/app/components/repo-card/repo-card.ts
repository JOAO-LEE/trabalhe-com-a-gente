import { Component, Input } from '@angular/core';
import { Repository } from '../../types/Repository';
import { ShortNumberPipe } from '../../pipes/short-number';
import { FormatLastUpdateDate } from '../../pipes/format-last-update-date';

@Component({
  selector: 'repo-card',
  imports: [ShortNumberPipe, FormatLastUpdateDate],
  templateUrl: './repo-card.html',
  styleUrl: './repo-card.css'
})
export class RepoCard {

  @Input() repository!: Repository;

}
