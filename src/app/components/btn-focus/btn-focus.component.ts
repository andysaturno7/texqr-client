import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btn-focus',
  templateUrl: './btn-focus.component.html',
  styleUrls: ['./btn-focus.component.css'],
})
export class BtnFocusComponent implements OnInit {
  @Input() public type: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
