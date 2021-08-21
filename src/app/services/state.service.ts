import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() {}

  // Scan State
  private isScanActive: boolean = true;
  private scanState$: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isScanActive
  );
  public scanState: Observable<boolean> = this.scanState$.asObservable();

  getScanState(): boolean {
    return this.scanState$.getValue();
  }

  setScanState(active: boolean) {
    this.scanState$.next(active);
  }

  // Error State
  private isError: boolean = false;
  private errorState$: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isError
  );
  public errorState: Observable<boolean> = this.errorState$.asObservable();

  setErrorState(active: boolean) {
    this.scanState$.next(active);
  }
}
