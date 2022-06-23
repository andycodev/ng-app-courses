import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private firestore: Firestore) { }

  addCourse(course: Course){
    const courseRef = collection(this.firestore, 'courses');
    return addDoc(courseRef, course);
  }

  getCourses(): Observable<Course[]> {
    const courseRef = collection(this.firestore, 'courses');
    return collectionData(courseRef, {idField: 'id'}) as Observable<Course[]>;
  }

  deleteCourse(id: string | number){
    const courseRef = doc(this.firestore, `courses/${id}`);
    return deleteDoc(courseRef);
  }

}
