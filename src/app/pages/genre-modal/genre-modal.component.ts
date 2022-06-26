import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-genre-modal',
  templateUrl: './genre-modal.component.html',
  styleUrls: ['./genre-modal.component.scss']
})
export class GenreModalComponent implements OnInit {
  public isOpenModal!: boolean;

  @Input() form!: FormGroup;
  @Output() emitGenreForm = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  public toggleModal(): void {
    this.isOpenModal = !this.isOpenModal;
    console.log('clicked')
  }

  public askPermission(): void {
    confirm('you wanna make changes?') ? this.addGenre():  this.isOpenModal = false;

  }
  public addGenre(): void {
    this.emitGenreForm.emit(this.form);
    this.isOpenModal = false
  }
}
