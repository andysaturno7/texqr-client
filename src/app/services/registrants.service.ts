import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ElectronService } from './electron.service';

@Injectable({
  providedIn: 'root',
})
export class RegistrantsService {
  constructor(
    @Inject('API_CONF') private conf: any,
    private http: HttpClient,
    private _electron: ElectronService
  ) {}

  getRegistrantByCode(code: string | number) {
    return this.http.get<any>(`${this.conf.uri}/registrants/${code}`);
  }

  print(userData: any) {
    this._electron.send('print', userData);
  }
}
