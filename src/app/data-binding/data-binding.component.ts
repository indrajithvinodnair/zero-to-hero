import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  text = "Hello wold";

  username = "user";

  isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  displayMsg() {
    alert("Button clicked");
  }

}
