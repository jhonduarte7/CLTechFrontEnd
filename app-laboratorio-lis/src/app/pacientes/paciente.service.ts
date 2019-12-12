import { Injectable } from '@angular/core';
import { Paciente } from './paciente';
import { of, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

	private urlEndpoint : string = "http://localhost:8080/api/pacientes";
	private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


   getPacientes(): Observable<Paciente[]>{
		     
              return this.http.get(this.urlEndpoint).pipe(

              	map( response => response as Paciente[] )

              	);     

		       } 
}
