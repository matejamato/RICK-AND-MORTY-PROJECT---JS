


const container = document.querySelector(".mateja")

const id = sessionStorage.getItem("user")

function createLayoutDva (res){
const dugme=document.createElement("a")
const slika = document.createElement("img")
const ime = document.createElement("h2")
const pol = document.createElement ("p")
const vrsta = document.createElement ("p")
const status = document.createElement ("p")
dugme.setAttribute("href","./index.html")
slika.setAttribute("src",res.image)
ime.textContent="Name: " + res.name
pol.textContent="Gender: " + res.gender
vrsta.textContent="Species: " + res.species
status.textContent="Status: " + res.status
dugme.textContent="Back To Home Page"

container.appendChild(slika)
container.appendChild(ime)
container.appendChild(pol)
container.appendChild(vrsta)
container.appendChild(status)
container.appendChild(dugme)



}



function fetchDataDva (){
    fetch("https://rickandmortyapi.com/api/character/"+ id)
    .then (res=>res.json())
    .then (res=>createLayoutDva (res))
}
window.addEventListener("load",fetchDataDva)