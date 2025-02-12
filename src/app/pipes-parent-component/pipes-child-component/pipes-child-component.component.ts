import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pipes-child-component',
  imports: [],
  templateUrl: './pipes-child-component.component.html',
  styleUrl: './pipes-child-component.component.css'
})
export class PipesChildComponentComponent {
  // ? @Input c'est l'Equivalent des PROPS sur les autre frameworks
  // !Déclarer propriété obligatoire (cela ne peut pas être undefined)
  // @Input() message!: string;
  // @Input() counter!: number;
  // ?Ici on déclare notre prore Event
  @Output() notify = new EventEmitter<string>();

  // !Déclarer propriété optionnelle avec ? (cela peut être undefined)
  // @Input() message?: string;
  // @Input() counter?: number;
  //! Déclarer propriété avec valeur par défaut (Faut être sûr que ca sera pas undefined)
  @Input() message: string='';
  @Input() counter: number=0;

  notifyParent() {
    // ! Emmission de l'event custom avec counter dedans
    this.notify.emit(`Counter is now from enfant: ${this.counter}`);
  }
}
