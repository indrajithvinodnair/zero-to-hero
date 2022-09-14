import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {

  highlightColor = 'white';
  isStyleApplied = false;

  constructor() { }



  ngOnInit(): void {
  }

  highlight(color: string) {
    this.highlightColor = color;
  }

  toggleStyle() {

    this.isStyleApplied = !this.isStyleApplied;

  }

}
