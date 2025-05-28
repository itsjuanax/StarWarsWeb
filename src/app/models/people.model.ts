import { ArrayType } from "@angular/compiler";
import { ArgumentOutOfRangeError } from "rxjs";

export interface People {
  id: string;
  name: string; //Nombre Personaje
  height: number; //Altura Personaje
  weight: number; //Masa personaje en kg
  hairColor?: string; //Opcional por si el personaje no tiene pelo
  skinColor: string; //Color de piel del personaje
  eyeColor?: string; //Opcional por si el personaje no tiene ojos
  birthYear: string; //BBY or ABY - (Before the Battle of Yavin or After the Battle of Yavin)
  gender?: string; //Opcional por si el personaje no tiene genero
  homeworld: string; //URL del planeta de origen/residencia
  films: ArrayType; //array de las películas en las que aparece el personaje (URL)
  species: ArrayType; //array de las especies a las que pertenece el personaje (URL)
  starships: ArrayType; //array de las naves que ha manejado el personaje (URL)
  vehiculos: ArrayType; //array de los vehiculos que ha manejado el personaje (URL)

}
