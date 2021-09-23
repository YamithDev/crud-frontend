import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicio } from '../models/servicio.dto';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  serviceURL = environment.servicioURL;

  constructor(private httpClient: HttpClient) {}

  public list(): Observable<Servicio[]> {
    return this.httpClient.get<Servicio[]>(`${this.serviceURL}`);
  }

  public detail(id: number): Observable<Servicio> {
    return this.httpClient.get<Servicio>(`${this.serviceURL}${id}`);
  }

  public save(servicio: Servicio): Observable<any> {
    return this.httpClient.post<any>(`${this.serviceURL}`, servicio);
  }

  public update(id: number, servicio: Servicio): Observable<any> {
    return this.httpClient.put<any>(`${this.serviceURL}${id}`, servicio);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.serviceURL}${id}`);
  }
}
