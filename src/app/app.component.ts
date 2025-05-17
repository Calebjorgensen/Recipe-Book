import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadedFeature = 'recipe';


  title = 'recipe-book';


  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
