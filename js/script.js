
let tab = [
    {
        titre: "Connexion Wi-Fi instable",
        description: "Le réseau se déconnecte régulièrement.",
        catégorie: "Réseau",
        priorité: "Haute",
        id:1
    },
    {
        titre:"Installation d’un logiciel",
        description:"Installer un logiciel sur le poste.",
        catégorie:"Logiciel",
        priorité:"Normale",
        id:2,
    },
       {
        titre:"Clavier défectueux",
        description:"Certaines touches ne fonctionnent plus.",
        catégorie:"Matériel",
        priorité:"Basse",
        id:3,
    }
]

let contneur=4

const Ndemande =document.getElementById("Ndemande");
const titre = document.getElementById("titre");
const catégorie = document.getElementById("catégorie");
const priorité = document.getElementById("priorité");
const description = document.getElementById("descrip");
const ajouter = document.getElementById("bottonAjouter");
const supprime = document.getElementById("bottonSupprimer");
const modifier = document.getElementById("bottonModifier");
const ticketList = document.getElementById("ticketsContainer");
const cartesOuTableau =document.getElementById("cartesOuTableau")





const valeuTitre = titre.value;
const valeucatégorie = catégorie.value;
const valeuPriorité = priorité.value;
const valeuDescrip = descrip.value; 


let boulen =false

const nombreDeTicket =document.createElement("p")
Ndemande.append(nombreDeTicket)
nombreDeTicket.textContent=(tab.length)

const demande =document.createElement("p")
Ndemande.append(demande)
if(tab.length<=1){
    demande.textContent=("demande")
}else{
    demande.textContent=("demandes")
}


ajouter.addEventListener("click", (e) => {
    e.preventDefault();
    if(titre.value==="" || catégorie.value==="" || priorité.value==="" || description.value===""){
        
        return
    }
    if( boulen ===true){
        
        return
    }
    
    const valeuTitre = titre.value;
    const valeucatégorie = catégorie.value;
    const valeuPriorité = priorité.value;
    const valeuDescrip = descrip.value;

    const information = {
        id :contneur,
        titre: valeuTitre,
        catégorie: valeucatégorie,
        priorité: valeuPriorité,
        description: valeuDescrip
    }
    contneur++
    tab.push(information)
    idnetité=contneur
    titre.value = ""
    catégorie.value = ""
    priorité.value = ""
    description.value = ""
    
    afficherTickets()
})



function afficherTickets() {
    ticketList.textContent = "";
    for (let i = 0; i < tab.length; i++) {

        
        
        const ticket = document.createElement("article")
        ticketList.append(ticket)
        ticket.classList.add("ticket")

        const logoAndId =document.createElement("div")
        ticket.appendChild(logoAndId)
        logoAndId.classList.add("logoAndId")

        const logo =document.createElement("p")
        logoAndId.append(logo)
        givelogo()

        const idnetité =document.createElement("p")
        logoAndId.append(idnetité)
        idnetité.textContent=("HD-"+tab[i].id)
        idnetité.classList.add("idnetité")
        const nbr=tab[i].id

        const champ = document.createElement("h3");
        champ.textContent = tab[i].titre;
        ticket.append(champ)
        champ.classList.add("probblemTiter")

        const champ3 = document.createElement("p");
        ticket.append(champ3)
        champ3.textContent = tab[i].description;
        champ3.classList.add("problemDescription")

        const slecte = document.createElement("div")
        ticket.append(slecte)
        slecte.classList.add("typeAndPriorité")

        const champ1 = document.createElement("p");
        champ1.textContent = tab[i].catégorie;
        slecte.append(champ1)
        champ1.classList.add("problemcatégorie")

        const champ2 = document.createElement("p");
        champ2.textContent = tab[i].priorité;
        slecte.append(champ2)
        giveClass()

        const ligne = document.createElement("hr")
        ticket.append(ligne)
        ligne.classList.add("ligne")

        const actions = document.createElement("div")
        ticket.append(actions)
        actions.classList.add("actions")

        const modifier =document.createElement("button")
        modifier.textContent="✎ Modifier"
        actions.append(modifier)
        modifier.classList.add("bottonModifier")
        modifier.addEventListener("click", () =>{
            boulen==true
            modifierTicket(nbr);
        })

        const supprime = document.createElement("button")
        supprime.textContent = "♜ Supprimer"
        actions.append(supprime)
        supprime.classList.add("bottonSupprime")
        supprime.addEventListener("click", () =>{
            if (confirm("vous voulez suprimer cette ticket")===false){
                return
            }
            supprimerTicket(nbr);

        

        })
        

        function supprimerTicket(a){
            
            const index =tab.findIndex(i =>i.id ===a)
            console.log(index)
            if(index !== -1){
                tab.splice(index,1)
            }
            ticket.remove()
        }
        function giveClass(){
            if(valeuPriorité == "Haute"){
                champ2.classList.add("problemTypeH")
            }else if(valeuPriorité =="Normale") {
                champ2.classList.add("problemTypeN")
                
            } else {
                champ2.classList.add("problemTypeB")
            }
        }

        function givelogo(){
            if (tab[i].catégorie === "Réseau") {
                logo.textContent="⌁"
                logo.classList.add("logoR")

            }else if (tab[i].catégorie ==="Logiciel"){
                logo.textContent="▣"
                logo.classList.add("logoL")

            }else{
                logo.textContent="⌨"
                logo.classList.add("logoM")
            }
        }  
        function Ndemande(){

        }  
        function modifierTicket(a){
            const index =tab.findIndex(i =>i.id ===a)
            titre.value = tab[index].titre
            catégorie.value = tab[index].catégorie
            priorité.value = tab[index].priorité
            description.value = tab[index].description
            
        }
        function replace(a){
            const index =tab.findIndex(i =>i.id ===a)
                tab[index].titre= titre.value 
                tab[index].catégorie = catégorie.value
                tab[index].priorité= priorité.value
                tab[index].description =description.value
            }
        
    }
}













