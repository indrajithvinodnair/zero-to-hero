import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  goToRoute(path: string) {
    if (path == 'one-way-data-binding') {
      this.router.navigate(['data-binding']);
    }
    else if (path == 'two-way-data-binding') {
      this.router.navigate(['two-way-data-binding']);
    }

    else if (path == 'structual-directives') {
      this.router.navigate(['structual-directives']);
    }
    else if (path == 'attribute-directives') {
      this.router.navigate(['attribute-directives']);
    }
    else if (path == 'dependency-injection') {
      this.router.navigate(['dependency-injection']);
    }
    else if (path == 'services') {
      this.router.navigate(['services']);
    }

  }

  ngOnInit(): void {
  }

}
