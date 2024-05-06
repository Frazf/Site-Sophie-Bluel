/*Variable*/
const galleryContainer = document.querySelector(".gallery");


const API = "http://localhost:5678/api/works";   /* Appel de l'api sur le swager (documentation */

let worksTab = []                              /* tableau ini */
const allWorks = async ()=> {                  /* Méthode pour récupérer tout les works */
try {
const result = await fetch (`${API}`);
const data = await result.json();            /* Réponse de l'appel fetch de l'api ( ligne 10) */
worksTab.length = 0 ;  /* Assure que le tableau est vide */
worksTab = data;
console.log("L'ensemble des works est",data)

for(let work of worksTab) {
const figure = createWorkByFigure(work);
galleryContainer.appendChild(figure);
}
} catch (error) {
    console.error("erreur lors de l'appel API",error)
}
}
allWorks()
/* Méthode*/
const createWorkByFigure = (work) => {
const figure = document.createElement("figure");
const image = document.createElement("img");
image.src = work.imageUrl;
image.alt = work.title;
figure.appendChild(image);

const figcaption = document.createElement("figcaption");
figcaption.innerHTML = work.title;
figure.appendChild(figcaption);
return figure;

}