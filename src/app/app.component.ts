import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // External CSS stylesheet
  // styleUrls: ['./app.component.css']
  // Inline CSS Styles for app.compnent.html
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
}
