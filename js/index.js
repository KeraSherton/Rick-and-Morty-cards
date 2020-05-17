class RMcollection{
    constructor(){
        this.collection=null;
        this.cards=[];
        this.info=null;


        this.API= "https://rickandmortyapi.com/api/character";

        this.UISelectors={
            content: '[data-content]',
        }
    }
initializeCollection(){
    this.collection=document.querySelector(this.UISelectors.content);

    this.pullCards();
}

async pullCards(){
    const {results, info}= await this.fetchData(`${this.API}`);
    this.cards=[...results];
    this.next=info.next;
    this.createCollection(this.cards);
    console.log(this.next);
}
async pullMoreCards(){
    // this.toggleShowElement(this.loader, this.button);
    const {results, info} =await this.fetchData(`${this.next}`);
    // this.toggleShowElement(this.loader, this.button);
    this.cards=[...results];
    this.next=info.next;
    this.createCollection(this.cards);
}
 
async fetchData(url){
    const response= await fetch(url);
    const parsedResponse= await response.json();  
    return parsedResponse;
 }
createCollection(cards){
    this.collection.insertAdjacentHTML('beforeend', [
        cards.map((card)=> this.createCard(card)).join('')
    ]);
}
createCard({ name, id, species, image, status, gender, location}){
    return `
    <article class="card" id=${id}>
       <header class="card__header">
           <h1 class="card__heading"> ${name} </h1>
           <p class="class_species"> ${species} </p>
       </header>
       <img class="card__image" src="${image}" alt="${name}"/>
       <p class="card__description"> <b> Status:</b> ${status} </p>
       <p class="card__description"> <b> Gender:</b> ${gender} </p>
       <p class="card__description"> <b> Location:</b> ${location.name} </p>
    </article>
    `;
}
toggleShowElement(...elements) {
    elements.forEach((element) => element.classList.toggle('hide'));
  }
}