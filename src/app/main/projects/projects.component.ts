import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectForm: FormGroup;

  minProjectDate = new Date();

  allDevs = [
    {label: 'Jill', value: 'Jill Cool'},
    {label: 'Joe', value: 'Joe Cool'},
    {label: 'Mary', value: 'Mary Cool'},
    {label: 'Susan', value: 'Susan Jones'},
    {label: 'Phil', value: 'Phil Stephens'},
    {label: 'Karen', value: 'Karen Phillips'},
    {label: 'Chris', value: 'Chris Hampton'},
    {label: 'Si', value: 'Si Chew'},
    {label: 'Terri', value: 'Terri Smith'}
  ];

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      projectId: ['', [Validators.required, Validators.minLength(5)]],
      description: ['My cool project', [Validators.required, Validators.maxLength(140)]],
      startDate: [new Date(), Validators.required],
      projectType: ['B'],
      selectedDevs: [[]],
      rating: [3]
    });
  }

  ngOnInit(): void {
    this.projectForm.valueChanges
      .pipe(
        map((value: any) => {
          value.projectId = value.projectId.toUpperCase();
          return value;
        }),
        filter(() => this.projectForm.valid)
      )
      .subscribe((value) => {
        console.log('Form values: ', JSON.stringify(value));
      });
  }

  hasFormErrors() {
    return !this.projectForm.valid;
  }

  onSubmit() {
    alert(JSON.stringify(this.projectForm.value));
  }
}
