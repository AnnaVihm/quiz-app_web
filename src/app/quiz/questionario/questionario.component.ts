import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {

  questoes = []
  questoes2= []
  questao;
  respostaCorreta;
  questoesRespondadidas;
  corretaErrada;
  corretas;
  erradas;
  constructor(private service: ServiceService, private router :  Router) { 
    this.questoesRespondadidas = []
  }

  ngOnInit(): void {
    this.initQuestoes()
  }

  ngOnChanges(): void {
  

  }

  initQuestoes() {
    this.service.questoes().subscribe(data => {
      this.questoes = data;
      this.questoes2= data;
      this.questao = data.find(e => e.respondido === false)
      this.corretas = this.questoes2.filter(e => e.itemRespondido.correta === true).length;
    this.erradas = this.questoes2.length;
    })
    
  }

  proxima() {
    this.questao.respondido = true;
    this.questao.itemRespondido = this.respostaCorreta;
    this.service.responder(this.questao.id, this.questao).subscribe()
    this.service.respondidas
      this.initQuestoes()
        
    
  }

  filtrarResposta(questao){
    console.log(questao)
    return questao.respostas.find(e => e.correta === true).descricao
  }

  correta(questao){
    let obj = {
      respondida :questao.respostas.find(e => e.id === questao.itemRespondido.id),
      correta:questao.respostas.find(e=> e.correta === true).descricao,
    }
    console.log(obj)
    return obj;
  }

  ranking(){
    this.router.navigate(['/ranking']);
    console.log()
    let obj ={
      id:null,
      jogador: sessionStorage.getItem("nomeJogador"),
      qntAcertos: this.questoes2.filter(e => e.itemRespondido.correta === true).length
    }
    this.service.saveranking(obj).subscribe()
    sessionStorage.clear()
  }
  inicio(){
    this.router.navigate(['/']);
  }
}
