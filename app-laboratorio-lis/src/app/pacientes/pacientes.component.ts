import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html'
  
})
export class PacientesComponent implements OnInit {

  constructor(private pacienteService: PacienteService) { }

  pacientes: Paciente[];

  ngOnInit() {

  	 this.pacienteService.getPacientes().subscribe(
        pacientes => this.pacientes = pacientes 
   	);


  }

 

}
