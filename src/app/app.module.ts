import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { ListComponent } from './components/list/list.component';
import { SearchPipe } from './pipes/search.pipe';
import { ClientLayoutComponent } from './components/client-layout/client-layout.component';
import { DataViewComponent } from './components/data-view/data-view.component';
import { SideClientComponent } from './components/side-client/side-client.component';
import { LoadDataViewComponent } from './components/load-data-view/load-data-view.component';
import { MainClientComponent } from './components/main-client/main-client.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { InputQrComponent } from './components/input-qr/input-qr.component';
import { HttpClientModule } from '@angular/common/http';
import { BtnFocusComponent } from './components/btn-focus/btn-focus.component';

declare const __dirname: any;

export function init() {
  if ((<any>window).require) {
    var fs = (<any>window).require('fs');
    var path = (<any>window).require('path');
    return JSON.parse(
      fs.readFileSync(path.join(__dirname, 'assets', 'config.json'))
    );
  } else {
    return {
      uri: window.location.hostname+":5050",
      systemName: 'developSystemName',
      roomId: null,
    };
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchPipe,
    ClientLayoutComponent,
    DataViewComponent,
    SideClientComponent,
    LoadDataViewComponent,
    MainClientComponent,
    InputQrComponent,
    BtnFocusComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    SweetAlert2Module.forRoot(),
    // SocketIoModule.forRoot(config),
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'API_CONF',
      useValue: init(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
