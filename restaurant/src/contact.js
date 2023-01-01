export default function contact() {
    const element = document.createElement('div');
    element.id = "CONTACT";
    const phone = document.createElement("p");
    const about = document.createElement("p");



    phone.innerHTML = "309-454-1423";
    about.innerHTML = "Owners phone number"


    element.appendChild(about);
    element.appendChild(phone);

    return element;

}