//Es como una clase que representa una tarjeta
//Genera el HTML necesario para visulizar mis 
import { getDatabase, ref, push } from 'firebase/database';

export class bookCard {

    constructor(book){
        this.book = book;   //Atributos siempre con this
    }

    //metodo para que me devuelva HTML y generar tarjeta
    render(){
        let card = document.createElement("div");
        card.className = "book-card";

        //Nombre libro
        let name = document.createElement("p");
        name.className = "bookName"
        name.innerHTML = this.book.name;

        //Puntaje del libro (el que se calcula)
        let points = document.createElement("p");
        points.className = "bookPoints"
        points.innerHTML = "Puntaje: " +this.book.points;
       
        card.appendChild(name);
        card.appendChild(points);
    
        return card;
    }
}
