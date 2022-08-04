import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCountryPipe } from './pipes/search-country.pipe';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { StringifyPipe } from './pipes/stringify.pipe';
import { SortingCountriesPipe } from './pipes/sorting-countries.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchCountryPipe,
    StringifyPipe,
    HomeComponent,
    DetailComponent,
    CountryInfoComponent,
    SortingCountriesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
