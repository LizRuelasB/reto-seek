import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { TaskReducer } from './task/store/task.reducer';
import { AppRoutingModule } from './app.routes';
import { MaterialModule } from './material.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TaskModule } from './task/task.module';
import { TaskListComponent } from './task/components/task-list/task-list.component';
import { TaskModalComponent } from './task/components/task-modal/task-modal.component';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './task/store/task.effects';
import { AppEffects } from './store/common/App.Effects';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskModalComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({task:TaskReducer}),
    EffectsModule.forRoot([TaskEffects,AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() , connectInZone: true}),
    NgxMaskDirective,NgxMaskPipe,
 
  ],
  providers: [provideNgxMask(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }