import { Component, OnInit } from '@angular/core';
import { from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  users = [
    { id: 1, name: 'UserA' },
    { id: 2, name: 'UserB' },
    { id: 3, name: 'UserC' },
  ];

  courses = [
    { courseId: 1, title: 'JavaScript - Marathon Interview Questions Series' },
    {
      courseId: 2,
      title: 'Mastering React With Interview Questions,eStore Project',
    },
    {
      courseId: 1,
      title: 'Mastering TypeScript with Marathon Interview Questions',
    },
    {
      courseId: 3,
      title: 'Mastering CSS with Sass & Bootstrap + Interview Questions',
    },
    {
      courseId: 3,
      title: 'Mastering NodeJS with Interview Questions',
    },
  ];
  ngOnInit(): void {
    from(this.users)
      .pipe(
        mergeMap((user) => {
          const courseData = this.courses.filter(
            (course) => course.courseId === user.id
          );
          return of({ user, course: courseData });
        })
      )
      .subscribe((res) => console.log('Combined Users & Courses: ', res));
  }
}
