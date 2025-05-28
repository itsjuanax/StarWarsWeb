import { ArrayType } from "@angular/compiler";
import { ArgumentOutOfRangeError } from "rxjs";

export interface Films {
    id: string;
    tittle: string; //Titulo película
    episodeId: number; //Número episodio
    openingCrawl: string; //Parrafos de inicio película
    director: string //Director película
    producer: string //Productor película
    releaseDate: Date //Fecha de estreno
    species: ArrayType; //array de las especies a las que pertenece el personaje (URL)
    starships: ArrayType; //array de las naves que ha manejado el personaje (URL)
    vehiculos: ArrayType; //array de los vehiculos que ha manejado el personaje (URL)
    characters: ArrayType; //array personajes que aparecen en la película (URL)
    planets: ArrayType; //array planetas que aparecen en la película (URL)

}