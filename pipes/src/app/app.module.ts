import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
//Add, pois pt-BR não está registrado no módulo, aparentemente.
import { getLocaleCurrencyCode, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    [{provide: LOCALE_ID, useValue: 'pt-BR' }]
   /*  SettingsService,
   {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (SettingsService: any) => SettingsService.getLocale()
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
