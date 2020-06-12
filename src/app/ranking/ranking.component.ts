import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  ranking:[]
  constructor(private service : ServiceService, private router :  Router) { }

  ngOnInit(): void {
    this.service.ranking().subscribe(data =>{
      this.ranking = data;
    })
  }

  inicio(){
    this.router.navigate(['/']);
  }

}
