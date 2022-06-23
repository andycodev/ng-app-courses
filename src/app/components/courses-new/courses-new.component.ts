import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-new',
  templateUrl: './courses-new.component.html',
  styleUrls: ['./courses-new.component.scss']
})
export class CoursesNewComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    state: 1
  })
  
  constructor(
    private coursesService: CoursesService,
    private fb: FormBuilder
    ) {}

  ngOnInit(): void {
  }

  async saveCourse(){
    try {
      await this.coursesService.addCourse(this.form.value);
      this.form.reset();
    } catch (error) {
      console.log(error);
    }
   
  }

}
