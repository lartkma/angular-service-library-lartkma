import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibPageComponent } from './libpage/libpage.component';

const routes: Routes = [
  {
    path: 'main',
    component: LibPageComponent
  },
  {
    path: '',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestLibraryRoutingModule { }
