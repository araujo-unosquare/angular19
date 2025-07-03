import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PantsComponent } from './pants/pants.component';
import { ProductsComponent } from './products/products.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { ShoesComponent } from './shoes/shoes.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'employee/:id', component: EmployeeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: 'shirts', component: ShirtsComponent },
      { path: 'pants', component: PantsComponent },
      { path: 'shoes', component: ShoesComponent },
    ],
  },
  { path: 'courses', component: CoursesComponent },
  { path: 'course-detail', component: CourseDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];
