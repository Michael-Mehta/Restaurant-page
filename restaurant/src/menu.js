import Birriatacopic from './BiriaTacos.jpg';
import Quesadillapic from './Qesadilla.png';
import Burritopic from './burrito.png';


export default function menu() {
    const element = document.createElement('div');
    element.id = "MENU";
    const burrito = document.createElement("p");
    const quesadilla = document.createElement("p");
    const birriataco = document.createElement("p");

    burrito.innerHTML = "Burrito";

    const burritoIcon = new Image();
       burritoIcon.src = Burritopic;
     

    quesadilla.innerHTML = "Quesadilla";

    const quesadillaIcon = new Image();
       quesadillaIcon.src = Quesadillapic;
     
     
    birriataco.innerHTML = "Birria Tacos";

    const birriaTacoIcon = new Image();
       birriaTacoIcon.src = Birriatacopic;
     
    element.appendChild(burrito);

    element.appendChild(burritoIcon);

    element.appendChild(quesadilla); 

    element.appendChild(quesadillaIcon);

    element.appendChild(birriataco); 

    element.appendChild(birriaTacoIcon); 


    return element;

}