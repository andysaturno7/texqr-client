import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  electron: any = null;
  private data$: BehaviorSubject<any> = new BehaviorSubject(null);
  public data = this.data$.asObservable();

  constructor() {
    if (this.isElectron()) {
      this.electron = (<any>window).require('electron');
    }
  }

  isElectron(): boolean {
    if ((<any>window).require) {
      return true;
    } else {
      return false;
    }
  }

  updateData() {
    this.electron.ipcRenderer
      .invoke('getData', [{ message: 'argumento' }])
      .then((result: any) => {
        this.data$.next(result);
      });
  }

  send(ev: string, args = null) {
    if (this.isElectron()) {
      return this.electron.ipcRenderer.send(ev, args);
    }
    return;
  }
}
