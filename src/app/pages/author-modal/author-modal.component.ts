import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {GenreInterface} from '../../interfaces/genre.interface';

@Component({
  selector: 'app-author-modal',
  templateUrl: './author-modal.component.html',
  styleUrls: ['./author-modal.component.scss']
})
export class AuthorModalComponent implements OnInit {
  public isOpenModal!: boolean;
  public genres: GenreInterface[] = [];

  @Input() authorForm!: FormGroup;
  @Output() emitAuthorForm = new EventEmitter();

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.getGenres();
  }

  public toggleModal(): void {
    this.isOpenModal = !this.isOpenModal;
    console.log('clicked')
  }

  public askPermission(): void {

  }

  public setAuthorForm(): void {
    this.emitAuthorForm.emit(this.authorForm);
    console.log(this.authorForm);
    this.isOpenModal = false;
  }

  private getGenres(): void {
    this.genres = this.dataService.genresArr;
  }
}
