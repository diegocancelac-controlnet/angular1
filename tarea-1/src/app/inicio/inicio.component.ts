import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container mt-5">
      <h1>Inicio</h1>
      <a class="btn btn-primary" routerLink="/tareas">
        Ver Mis Tareas
      </a>
    </div>
  `,
  styles: []
})
export class InicioComponent {}