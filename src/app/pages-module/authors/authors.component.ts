import { Component, OnInit } from '@angular/core';
import {AuthorsConfig, GenresConfig} from '../../constants/modal-configs.constants';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {AuthorInterface} from '../../interfaces/author.interface';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  public authorForm!: FormGroup;
  public authors!:  AuthorInterface[];

  constructor(
    private fb: FormBuilder,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.authorForm = this.fb.group({
      authorName: ['', [Validators.required, this.nameValidator()]],
      genre: ['', Validators.required]
    });
    console.log(this.authors)
    this.getAuthors();
  }

  private nameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const name = control.value;

      if (!name) {
        return null
      }
      const hasUpperCase = /[A-Z]+/.test(name);
      return !hasUpperCase ? { genreStrength: true}: null

    }
  }
  public getAuthors(): void {
    this.authors = this.data.authorsArr;
  }

  public addAuthor(form: any): void {
    this.authorForm.get(['authorName', 'genre'])?.setValue(form);
    this.data.addAuthor(this.authorForm.value);
    console.log(this.authorForm, form, this.authorForm.value);
    this.getAuthors()
  }

}
