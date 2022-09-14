import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }

  isVisible = false;

  ngOnInit(): void {
  }

  formData(value: any) {
    if (value.exampleRadios == 'on') {

      this.isVisible = true;

    }
    else {
      this.isVisible = false;
    }
  }



}
