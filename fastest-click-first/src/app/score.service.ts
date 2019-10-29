import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { IScore } from './score';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) { }

  saveScore(_name, _score){
    //save data to database using api
    let data = {"name": _name, "score": _score};
    console.log(JSON.stringify(data));
    return this.http.post("http://localhost:8080/api/v1/score",JSON.stringify(data),{headers: {'Content-Type': 'application/json'}})
          .pipe(catchError((err: HttpErrorResponse)=>{
            return throwError(err.message);
          }));
  }

  getScores(): Observable<IScore[]>{
    return this.http.get<IScore[]>("http://localhost:8080/api/v1/scores")
          .pipe(catchError((err: HttpErrorResponse)=>{
            return throwError(err.message);
          }));
  }
}
