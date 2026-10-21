// const container = document.getElementById("ickets-container");

// for ()

//     const article = createElement("article");
// addClassName("ticket");

// container.appendChild(article);
const tab =[

]

const titre = document.getElementById("titre");
const catégorie = document.getElementById("catégorie");
const priorité = document.getElementById("priorité");
const descrip = document.getElementById("descrip");
const ajouter = document.getElementById("bottonAjouter");
const ticketList = document.getElementById("ticket");
const actions = document.getElementById("actions");
const modifier=""

ajouter.addEventListener("click" , () => {
    alert("b fonctionne")
    const valeuTitre = titre.value;
    const valeucatégorie =catégorie.value;
    const valeuPriorité =priorité.value;
    const valeuDescrip = descrip.value;



    const champ =document.createElement("p");
    champ.textContent = valeuTitre;
    ticketList.appendChild(champ)
    titre.value =""

    const champ1 =document.createElement("p");
    champ1.textContent= valeucatégorie;
    ticketList.appendChild(champ1)
    catégorie.value =""

    const champ2 =document.createElement("p");
    champ2.textContent= valeuPriorité;
    ticketList.appendChild(champ2)
    priorité.value =""

    const champ3 =document.createElement("p");
    champ3.textContent= valeuDescrip;
    ticketList.appendChild(champ3)
    descrip.value =""
    champ.attributes(champ)

})
// modifier.addEventListener("click" , () =>{

// })

const info={
    titre:valeuTitre,
    catégorie:valeucatégorie,
    priorité:valeuPriorité,
    descrip:valeuDescrip
}

tab.push(info)
// console.log(tab)

// console.log(info)




