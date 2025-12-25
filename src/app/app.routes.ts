import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then(m => m.routes)
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./teacher/teacher.routes').then(m => m.routes)
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.routes').then(m => m.routes)
  },
  {
    path:'student/:email',
    loadComponent:()=>import('./student/student-detail/student-detail').then(m=>m.StudentDetail)
  },
  {
    path:'teacher/:email',
    loadComponent:()=>import('./teacher/teacher-detail/teacher-detail').then(m=>m.TeacherDetail)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
