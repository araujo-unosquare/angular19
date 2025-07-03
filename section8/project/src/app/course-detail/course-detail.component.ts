import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent {
  id: number = 0;
  name: string = '';
  desc: string = '';
  img: string = '';
  price: number = 0;

  courses = [
    {
      id: 1,
      name: 'HTML, CSS, Sass, Bootstrap - Beginner to Expert + Bootcamp',
      desc: 'Learn to practice HTML & CSS the easy way. Sass/Bootstrap with real-world practical usage. Responsive web designs. Real-world interview questions & hands on practical assignments.',
      img: './assets/html-css-tutorials.jpg',
      price: 36.52,
    },
    {
      id: 2,
      name: 'JavaScript Marathon Interview Questions Series',
      desc: "Real-world JavaScript interviews questions asked in IT companies. Q&As that you'll need to become a JavaScript expert. Core concepts and features you need to know in JavaScript development. JS Language, Arrays, OOJS, DOM & Web, Asynchronous JS, Map, Set, WeakMap & WeakSet (ES6 Data structure), Automated Testing.",
      img: './assets/JS_Course.png',
      price: 22.5,
    },
    {
      id: 3,
      name: 'Mastering TypeScript with Marathon Interview Questions',
      desc: 'Learn and understand what is TypeScript and how it works. Basic to advanced level practical concepts in TypeScript development. Real-world TypeScript interview questions asked in IT companies world-wide.',
      img: './assets/TypeScript_Course.jpg',
      price: 20.99,
    },
    {
      id: 4,
      name: 'Mastering React With Interview Questions,eStore Project',
      desc: 'Basic to advanced level practical concepts in React development. Learn and understand what is React and how it works. Learn to use React Hooks for building functional components. Prepare for real- world interview questions on one of the most in-demand web development technologies.',
      img: './assets/React_Course.png',
      price: 17.8,
    },
    {
      id: 5,
      name: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
      desc: 'Best of both database types - RDBMS(MySQL) & NoSQL(MongoDB). Basic to advanced SQL queries with complex data-structures. NoSQL database structure designing using MongoDB. Practical hands-on assignments with their solutions. Prepare for real- world interview questions',
      img: './assets/RDBMS_Course.png',
      price: 25.45,
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
      const course = this.courses.find((c) => c.name === this.name);
      if (course) {
        this.id = course.id;
        this.price = course.price;
        this.desc = course.desc;
        this.img = course.img;
        console.log({ id: course.id, name: course.name, price: course.price });
      }
    });
  }
}
