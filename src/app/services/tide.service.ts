import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

import {formatDate} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class TideService {

  // rest service url
  private tidesUrl:string = 'https://tidesandcurrents.noaa.gov/api/datagetter';

  constructor(private http: HttpClient) {     
  }

  /*
    Gets tides info
  */
  getTides() {

    var currentDate = formatDate(new Date(), 'yyyyMMdd', 'en');

    console.log('service getTides... using date: ' + currentDate);

    const httpParams = new HttpParams()
      .set('product', 'predictions')
      .set('application', 'NOS.COOPS.TAC.WL')
      .set('begin_date', currentDate)
      .set('range', '48')
      .set('datum', 'MLLW')
      .set('station', 'TEC3047')
      .set('time_zone', 'lst_ldt')
      .set('units', 'english')
      .set('interval', 'hilo')
      .set('format', 'json');

    var tidesResp = this.http.get(this.tidesUrl, {params: httpParams});

    return tidesResp;
  }
}
