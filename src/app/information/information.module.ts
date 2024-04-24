import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcursoComponent } from './concurso/concurso.component';
import { AboutOurComponent } from './about-our/about-our.component';



@NgModule({
  declarations: [
    ConcursoComponent,
    AboutOurComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConcursoComponent,
    AboutOurComponent
  ]
})
export class InformationModule { }
