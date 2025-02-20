import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarea {
  id: number;
  texto: string;
}

@Component({
  selector: 'app-listado-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h2>Mis Tareas</h2>
      
      <div class="input-group mb-3">
        <input type="text" 
               class="form-control" 
               [(ngModel)]="nuevaTarea" 
               placeholder="Nueva tarea"
               (keyup.enter)="agregarTarea()">
        <button class="btn btn-primary" 
                (click)="agregarTarea()">
          Agregar
        </button>
      </div>

      <div class="list-group">
        <div *ngFor="let tarea of tareas" 
             class="list-group-item d-flex justify-content-between align-items-center">
          {{ tarea.texto }}
          <button class="btn btn-danger btn-sm" 
                  (click)="eliminarTarea(tarea.id)">
            Eliminar
          </button>
        </div>
      </div>

      <div class="mt-3">
        @if (tareas.length === 0) {
          <p>No hay tareas pendientes</p>
        } @else {
          <p>Cantidad de tareas pendientes: {{ tareas.length }}</p>
        }
      </div>
    </div>
  `
})
export class ListadoTareasComponent {
  tareas: Tarea[] = [];
  nuevaTarea: string = '';
  
  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      const tarea: Tarea = {
        id: Date.now(),
        texto: this.nuevaTarea
      };
      this.tareas.push(tarea);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }
}