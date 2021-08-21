import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'src/app/services/electron.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  isElectron: any = null;

  participants: string[] = [
    'Andy Gabriel Sanchez Sandoval',
    'Gabrielon',
    'Sanchez',
    'Sandoval',
    'Eriberto',
  ];
  condition: any;

  data: any;

  constructor(private _electron: ElectronService) {
    this.isElectron = _electron.isElectron();
    _electron.data.subscribe((res) => {
      this.data = res;
    });
  }

  ngOnInit(): void {}

  dragover(ev: any) {
    ev.preventDefault();
  }

  drop(ev: any) {
    console.log(ev);
  }

  getData() {
    if (this.isElectron) {
      this._electron.updateData();
    }
  }
}
