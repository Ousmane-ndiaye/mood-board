import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class MoodService {
	//private apiUrl = 'http://conciergerie.rec.orange-sonatel.com';

	private apiUrl = 'http://127.0.0.1:8000';

	reqOpts = {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: ''
		},
		params: new HttpParams()
	};

	constructor(public http: HttpClient) {}

	public addMood(data) {
		return this.http.post(this.apiUrl + '/mood', data, this.reqOpts);
	}
}
