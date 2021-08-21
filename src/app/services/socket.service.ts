import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { AsistanceService } from './asistance.service';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket | undefined;

  constructor(
    @Inject('API_CONF') private conf: any,
    private _asistance: AsistanceService
  ) {
    this.socket = io(this.conf.uri, {
      extraHeaders: {
        'tex-header': '',
      },
    });
    this.socket.emit('connect_client', {
      name: this.conf.systemName,
      room: this.conf.roomId,
    });
    this.socket.on('error', console.log);
    this.socket.on('updated_asistance', (args: any) => {
      this._asistance.setAsistance(args);
    });
  }

  emit(channel: string, args: any) {
    this.socket?.emit(channel, args);
  }

  onWelcome() {
    return new Observable((observer) => {
      this.socket?.on('welcome', (data: any) => {
        observer.next(data);
      });
    });
  }

  onClientVerified() {
    return new Observable((observer) => {
      this.socket?.on('client_verified', (data: any) => {
        observer.next(data);
      });
    });
  }
}
