import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TestLibraryRoutingModule } from './test-library-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    TestLibraryRoutingModule,
    HttpClientModule
  ],
  exports: [
  ]
})
export class TestLibraryModule { }
