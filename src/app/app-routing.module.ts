import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionarioComponent } from './quiz/questionario/questionario.component';
import { RankingComponent } from './ranking/ranking.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conteudo', component: ConteudoComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz/questionario', component: QuestionarioComponent },
  { path: 'ranking', component: RankingComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
