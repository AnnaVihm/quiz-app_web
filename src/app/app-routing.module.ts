import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conteudo', component: ConteudoComponent },
  { path: 'quiz', component: QuizComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
