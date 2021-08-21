import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AsistanceService } from 'src/app/services/asistance.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'load-data-view',
  templateUrl: './load-data-view.component.html',
  styleUrls: ['./load-data-view.component.css'],
})
export class LoadDataViewComponent implements OnInit, OnDestroy {
  dataAsistance: any[] = [
    { title: 'Aforo', data: 250 },
    { title: 'Afluencia', data: 50 },
    { title: 'Asistencia', data: 200 },
  ];

  subsc: Subscription;

  constructor(private _asistance: AsistanceService) {
    this.subsc = this._asistance.asistanceData.subscribe(
      (res: any) => {
        if (res != null) {
          this.dataAsistance = [
            { title: 'Aforo', data: res.total },
            { title: 'Afluencia', data: res.connected.count },
            { title: 'Asistencia', data: res.asistance },
          ];
        }
      },
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {
    this._asistance.getAsistance();
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }
}
