import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAutocompleteModule, IgxDropDownModule, IgxIconModule, IgxInputGroupModule, IgxToggleModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import { AutocompletePipeStartsWith, DropdownIEComponent } from './dropdown-ie/dropdown-ie.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownIEComponent,
    AutocompletePipeStartsWith
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IgxAutocompleteModule,
    IgxDropDownModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
