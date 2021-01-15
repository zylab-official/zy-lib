import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zy-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class ZyBasicComponent implements OnInit {
  @Input() text: string;
  @Input() doBorder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
