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
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  // реализовуют какие-то начальные методы, переменные - то есть то что нужно сделать до загрузки и показать
  ngOnInit(): void {
    const textScript = this.renderer2.createElement('script');
    textScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
    this.renderer2.appendChild(this.document.body, textScript);
    const srcScript = this.renderer2.createElement('script');
    srcScript.type = 'text/javascript';
    srcScript.text = `
    (function() {
      console.log('Hello from Siberia!')
    }());
  `;


  }

}

// ДОБАВИТЬ НОВЫЙ КОМПОНЕНТ - ng g component <name>
