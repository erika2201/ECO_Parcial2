//Es como una clase que representa una tarjeta
//Genera el HTML necesario para visulizar mis 
import { getDatabase, ref, push, set, onValue, update } from 'firebase/database';

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

        //Preguntica
        let question = document.createElement("p");
        question.className = "bookQuestion"
        question.innerHTML = "¿Cuántas ⭐ le das?";

        //Puntaje del libro (el que se calcula)
        let points = document.createElement("p");
        points.className = "bookPoints"
        points.innerHTML = this.book.points+ "⭐";
       
        //Imput para el puntaje (el que pone el usuario)
        let inputpoints = document.createElement("input");
        inputpoints.className = "inputPoints"
        inputpoints.placeholder = "Ingresa N° del 1 al 5";

        //Boton para enviar el puntaje (el que pone el usuario)
        let sendBtn = document.createElement("button");
        sendBtn.className = "sendBtn";
        sendBtn.innerHTML = "Enviar";

        //Al presionar el boton
        sendBtn.addEventListener("click", (e, ev)=>{
            //Si el valor que ingrese esta en el rango de 0 a 5
            if(parseFloat(inputpoints.value) >= 0 && 
               parseFloat(inputpoints.value) <= 5){
                //Variable para los punticos
                const score = {
                    //La variable cambia al valor ingresado
                    score: parseFloat(inputpoints.value)
                }
                //Como lo de crear usuarios/candidatos/libros de otros labs
                const db = getDatabase();
                const newPointRef = push(ref(db, 'books/' + this.book.id + '/scores'));
                set(newPointRef, score);

                //De alguna manera calcular el promedio
                console.log("Tranquilo, ahorita calculo este asunto");
                this.getPointProm(points);
                
            } else {
                //Si el número es diferente al rango
                alert("El N° de estrellas debe ser entre 1 y 5");
            }
        })


        card.appendChild(name);
        card.appendChild(question);
        card.appendChild(points);
        card.appendChild(inputpoints);
        card.appendChild(sendBtn);
    
        return card;
    }

    getPointProm(points){
        let add = 0;
        const db = getDatabase();
        const pointRef = ref(db, 'books/' + this.book.id + '/scores');
            onValue(pointRef, (snapshot)=>{

                const pointData = snapshot.val();
                const result = Object.keys(pointData).length;
                    
                
                Object.keys(pointData).forEach((k, i)=>{
                    add += pointData[k].score;
                });

                //Saque el promedio ahora si
                let newPoints = add/result;
                let finalProm = newPoints.toFixed(1);
                //Al texto de los puntos promedios "cambielo" por su promedio
                points.innerHTML = finalProm;
                const bookRef = ref(db, 'books/' + this.book.id);
                update(bookRef, {"points": finalProm});
            });
        }
}
