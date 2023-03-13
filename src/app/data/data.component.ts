import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{

  // для внедрения каких-то зависимостей и тоже что-то иницилизировать
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private routing: Router,

  ) {
  }

  // реализовуют какие-то начальные методы, переменные - то есть то что нужно сделать до загрузки и показать
  ngOnInit(): void {

  }

}

// ДОБАВИТЬ НОВЫЙ КОМПОНЕНТ - ng g component <name>
