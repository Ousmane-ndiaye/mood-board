import { AfterViewInit, Component } from '@angular/core';
import { MoodService } from '../api/mood.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: [ 'home.page.scss' ]
})
export class HomePage implements AfterViewInit {
	public currentDate = new Date();
	public monthNames = [
		'Janvier',
		'Février',
		'Mars',
		'Avril',
		'Mai',
		'Juin',
		'Juillet',
		'Aôut',
		'Septembre',
		'Octobre',
		'Novembre',
		'Décembre'
	];
	public days = [ 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi' ];
	public dayName: string;
	public monthName: string;
	public year: number;
	public dayNumber: number;
	public humeur: number;
	public isFinish = false;

	constructor(public moodService: MoodService) {}

	ionViewWillEnter() {
		this.dayName = this.days[this.currentDate.getDay()];
		this.dayNumber = this.currentDate.getDate();
		this.monthName = this.monthNames[this.currentDate.getMonth()];
		this.year = this.currentDate.getFullYear();
		this.humeur = null;
		this.isFinish = false;
	}

	ngAfterViewInit(): void {}

	setHumeur(hum: number) {
		this.humeur = hum;
	}

	validUserHumeur(com: string = '') {
		const response = {
			etat: this.humeur,
			commentaire: com
		};
		console.log(response);
		this.moodService.addMood(response).subscribe((res: any) => {
			console.log(res);
			this.isFinish = true;
		});
	}
}
