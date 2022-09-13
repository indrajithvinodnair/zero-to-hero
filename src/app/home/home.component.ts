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
    else {
      this.router.navigate(['two-way-data-binding']);
    }

  }

  ngOnInit(): void {
  }

}
