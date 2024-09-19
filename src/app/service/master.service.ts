import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from './models/location';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  baseUrl: string = 'https://projectapi.gerasim.in/api/BusBooking/';

  constructor(private http: HttpClient) {}

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.baseUrl + 'GetBusLocations');
  }
  searchBus(from: number, to: number, travelDate: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.baseUrl}searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${travelDate}`
    );
  }

  getScheduleById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}GetBusScheduleById?id=${id}`);
  }
  getBookedSeats(id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}getBookedSeats?shceduleId=${id}`);
  }
}
