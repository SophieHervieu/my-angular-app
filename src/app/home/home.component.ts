import { Component } from '@angular/core';
import { LoggerService } from '../services/logger/logger.service';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private logger: LoggerService) {
    this.logger.logErrorCustom('Ceci est un message d\'erreur d\'exemple.');
  }
}
