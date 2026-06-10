import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class Home{
  resumeUrl='shreya_CV_AngularDev2026.pdf';

  openResume(): void {
    window.open(this.resumeUrl, '_blank');
  }
}