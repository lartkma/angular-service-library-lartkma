import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPageComponent } from './apppage/apppage.component';

const routes: Routes = [
  {
    path: 'from-app',
    component: AppPageComponent
  },
  {
    path: 'from-lib',
    loadChildren: () => import('test-library').then(m => m.TestLibraryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
