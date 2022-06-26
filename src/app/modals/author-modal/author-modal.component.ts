import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GenreInterface} from '../../interfaces/genre.interface';
import {Subject, takeUntil} from 'rxjs';
import {GenreService} from '../../services/genre.service';

@Component({
  selector: 'app-author-modal',
  templateUrl: './author-modal.component.html',
  styleUrls: ['./author-modal.component.scss']
})
export class AuthorModalComponent implements OnInit {
  public isOpenModal!: boolean;
  public genres: GenreInterface[] = [];

  private unsubscriber$ = new Subject<void>();


  @Input() authorForm!: FormGroup;
  @Output() emitAuthorForm = new EventEmitter();

  constructor(
    private genreService: GenreService
  ) {
  }

  ngOnInit(): void {
    this.getGenres();
  }

  public toggleModal(): void {
    this.isOpenModal = !this.isOpenModal;
  }

  public setAuthorForm(): void {
    this.emitAuthorForm.emit(this.authorForm);
    this.isOpenModal = false;
  }


  public getGenres(): void {
    this.genreService.getGenre()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((res: GenreInterface[]) => {
        this.genres = res;
      });
  }
}
