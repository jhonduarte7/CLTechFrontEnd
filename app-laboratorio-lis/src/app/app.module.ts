import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormExamenComponent } from './form-examen/form-examen.component';
import { PacientesComponent } from './pacientes/pacientes.component';

import { PacienteService } from './pacientes/paciente.service';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
//import { FormComponent } from './clientes/form.component';

import { FormsModule } from '@angular/forms';


const routes: Routes = [
{path: '', redirectTo: '/pacientes', pathMatch: 'full'},
{path: 'examenes', component: FormExamenComponent},
{path: 'pacientes', component: PacientesComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PacientesComponent,
    FormExamenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
