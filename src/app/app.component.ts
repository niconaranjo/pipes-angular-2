import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Nicolas";
  nombre2: string = "caRlos nIcolaS pepitO";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;

  perce = 0.834;
  salario = 1643.90;

  heroe = {
    nombre:"Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      calle:"Primera",
      casa:"19"
    }
  };

  ValorDePromesa = new Promise ( (resolve, reject )=>{
    setTimeout( ()=>resolve('¡Llegó la data!'), 3500 );
  } );

  fecha = new Date();

  video = "w6J8x4oAyLk";
  activar:boolean = true;

}
