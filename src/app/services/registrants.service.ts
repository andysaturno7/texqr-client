import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrantsService {
  constructor(
    @Inject('API_CONF') private conf: any,
    private http: HttpClient
  ) {}

  getRegistrantByCode(code: string | number) {
    return this.http.get<any>(`${this.conf.uri}/registrants/${code}`);
  }
}
