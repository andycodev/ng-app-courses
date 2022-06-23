import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.listCourses();
  }

  listCourses() {
    try {
      this.coursesService.getCourses().subscribe((response) => {
        this.courses = response;
      });
    } catch (error) {
      console.log(error);
      
    }
  }

  async deleteCourse(id: string | number){
    await this.coursesService.deleteCourse(id);
  }
}
