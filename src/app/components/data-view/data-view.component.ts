import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css'],
})
export class DataViewComponent implements OnInit {
  @Input() title: string | null = null;
  @Input() data: string | number | null = null;

  constructor() {}

  ngOnInit(): void {}
}
