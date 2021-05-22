import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss']
})
export class ValidationErrorsComponent implements OnInit {

  @Input('form') form: FormGroup;
  @Input('field') fieldName: string;
  @Input('nicename') niceName: string;

  constructor() { }

  ngOnInit() { }

  fieldErrors(field: string) {
    const controlState = this.form.controls[field];
    return (controlState && controlState.dirty && controlState.errors) ? controlState.errors : null;
  }

}
