// https://rickandmortyapi.com/api/character/?page={PROMENLJIVA}
let currentPage = 1
const container = document.querySelector(".container")
const pagination = document.querySelector(".pagination")



const createNextPrevButtons = ()=>{
    const nextPage = document.createElement("button")
    const prevPage = document.createElement("button")
    prevPage.textContent = "<<"
    nextPage.textContent = ">>"
    prevPage.addEventListener ("click",()=>{
        --currentPage;
        createPagination ()
        fetchData()
    })
  
    
    nextPage.addEventListener("click", ()=>{
        ++currentPage; //povecava vrednost current page za 1
        createPagination ()
        fetchData() // fetchovanje podataka sa novim currentPage
    })

    pagination.appendChild(prevPage)
    pagination.appendChild(nextPage)
    
}

function createSingleButton (x){
    const button = document.createElement("button")
    button.textContent = x;
    button.classList.add("btn-pag")
    button.addEventListener("click",()=>{
        currentPage = x;
        createPagination()
        fetchData()
    })
    if(button.textContent==currentPage){
        button.classList.add("active")
    }
    pagination.appendChild(button)
}



function createPagination (){
    const btnDelete = document.querySelectorAll(".btn-pag")
    btnDelete.forEach(e=>e.remove())

    if (currentPage<=3){ 
        for (let i=1;i<6;i++){
            createSingleButton(i)
            // createSingleButton(1)
            // createSingleButton(2)
            // createSingleButton(3)
            // createSingleButton(4)
            // createSingleButton(5)
        }
    }
    else if (currentPage>=4 && currentPage<40){ 
        for (i=currentPage-2;i<=currentPage+2;i++){
            createSingleButton(i)
        }
    }
    else if (currentPage>=40 && currentPage<=42) {
        for (i=40-2;i<=40+2;i++){
            createSingleButton(i)
        }
    }
}


function createLayout (res){
//    console.log(res)
const cardsDelete = document.querySelectorAll('.card')
cardsDelete.forEach(e=>e.remove())

    res.results.map((e)=>{
        const card = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("h3");
        const button = document.createElement("button")
        name.className="ime"
        card.className = "card";
        img.setAttribute("src", e.image);
        name.textContent=e.name
        button.textContent ="Like"
        button.addEventListener("click",()=>{
            sessionStorage.setItem("user", e.id)
            window.open("./indexdva.html")
        })
        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(button)

        container.appendChild(card)

    })
}


function fetchData (){
    fetch("https://rickandmortyapi.com/api/character/?page=" + currentPage)
    .then (res=>res.json())
    .then (res=>createLayout (res))
    
}


window.addEventListener("load",()=>{
    fetchData()
    createNextPrevButtons()
    createPagination()
})