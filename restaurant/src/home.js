import Icon from './Mexicanfood.png';

export default function home() {


        const element = document.createElement('div');
        element.id = "HOME";
        const name = document.createElement("p");
        const review = document.createElement("p");
      
        
       // Lodash, now imported by this script
        name.innerHTML = _.join(['Milibertos', 'Mexican','Food'], ' ');
     
     
       const myIcon = new Image();
       myIcon.src = Icon;
     
        // Add the image to our existing div.
     
        review.innerHTML = "Best mexican food in the country";
        
        element.appendChild(name);
        element.appendChild(myIcon);
       
        element.appendChild(review);


        return element;
          
  }