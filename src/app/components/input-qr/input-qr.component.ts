import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'input-qr',
  templateUrl: './input-qr.component.html',
  styleUrls: ['./input-qr.component.css'],
})
export class InputQrComponent implements OnInit, AfterViewInit, OnDestroy {
  stateSubsc: Subscription;
  disabled: boolean = false;
  @Output() scanned: EventEmitter<string> = new EventEmitter<string>();
  @Output() focus: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('inputQR') inputQR: ElementRef | undefined;
  inputValue: string | undefined;

  constructor(private _state: StateService) {
    this.stateSubsc = this._state.scanState.subscribe(
      (res: boolean) => {
        this.setState(res);
      },
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.stateSubsc.unsubscribe();
  }
  ngAfterViewInit() {
    if (!this.disabled) this.setState(true);
  }

  handleScanned() {
    this.scanned.emit(this.inputValue);
  }

  setState(active: boolean) {
    if (active) {
      this.disabled = false;
      this.inputValue = '';
      setTimeout(() => {
        this.inputQR?.nativeElement.focus();
      }, 500);
    } else {
      this.disabled = true;
    }
  }

  onBlur(event: Event) {
    event.preventDefault();
    this.focus.emit(false);
  }

  onFocus(event: Event) {
    event.preventDefault();
    this.focus.emit(true);
  }
}
