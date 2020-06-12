import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuild: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this.formBuild.group({
      nome: ['', Validators.required]
    })
  }

  inciarQuiz() {
    sessionStorage.setItem("nomeJogador", this.form.value.nome)
    this.router.navigate(['/quiz/questionario']);

  }

}
