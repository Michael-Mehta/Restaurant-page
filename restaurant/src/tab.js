import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

export default function tabs() {

  
  const element = document.getElementById('content');
  const homebutton = document.createElement("BUTTON");
  const hometext = document.createTextNode("Home");

  homebutton.appendChild(hometext);

  const contactbutton = document.createElement("BUTTON");
  const contacttext = document.createTextNode("Contact");


  contactbutton.appendChild(contacttext);

  const menubutton = document.createElement("BUTTON");
  const menutext = document.createTextNode("Menu");

  menubutton.appendChild(menutext);


  homebutton.addEventListener('click', button => {

    if(element.contains(document.getElementById("HOME")))
    {
      document.getElementById("HOME").remove();
    }

    if(element.contains(document.getElementById("MENU")))
    {
      document.getElementById("MENU").remove();
    }
       
    if(element.contains(document.getElementById("CONTACT")))
    {
      document.getElementById("CONTACT").remove();
    }
       
       element.appendChild(home());

  });
  
  menubutton.addEventListener('click', button => {

     if(element.contains(document.getElementById("HOME")))
    {
      document.getElementById("HOME").remove();
    }

    if(element.contains(document.getElementById("MENU")))
    {
      document.getElementById("MENU").remove();
    }
       
    if(element.contains(document.getElementById("CONTACT")))
    {
      document.getElementById("CONTACT").remove();
    }

    element.appendChild(menu());

});

contactbutton.addEventListener('click', button => {
 
   if(element.contains(document.getElementById("HOME")))
    {
      document.getElementById("HOME").remove();
    }

    if(element.contains(document.getElementById("MENU")))
    {
      document.getElementById("MENU").remove();
    }
       
    if(element.contains(document.getElementById("CONTACT")))
    {
      document.getElementById("CONTACT").remove();
    }

  element.appendChild(contact());

});
  
  
  element.appendChild(homebutton);
  element.appendChild(contactbutton);
  element.appendChild(menubutton);


  return element;


}
