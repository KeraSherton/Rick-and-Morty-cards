class RMcollection{
    constructor(){
        this.collection=null;
        this.cards=[];
        this.info=null;
        this.button=null;
        this.search=null;
        this.loader=null;
        this.card=null;
        this.search_button=null;
        this.results=null;

        this.API= "https://rickandmortyapi.com/api/character";
        

        this.UISelectors={
            content: '[data-content]',
            button: '[data-button]',
            loader: '[data-loader]',
            search: 'search',
            search_button: '[data-search]',
            card: '[data-card]',
        }
    }
initializeCollection(){
    this.collection=document.querySelector(this.UISelectors.content);
    this.button=document.querySelector(this.UISelectors.button);
    this.loader=document.querySelector(this.UISelectors.loader);
    this.search=document.getElementById(this.UISelectors.search);
    this.search_button=document.querySelector(this.UISelectors.search_button);
    this.addEventListeners();
    this.pullCards();
}

addEventListeners() {
    this.button.addEventListener('click', () => this.pullMoreCards());
    this.search_button.addEventListener('click', () => this.searchPerson());
    
}

async pullCards(){
    const {results, info}= await this.fetchData(`${this.API}`);
    this.cards=[...results];
    this.next=info.next;
    this.createCollection(this.cards);
    console.log(this.next);
}
async pullMoreCards(){
    this.toggleShowElement(this.loader, this.button);
    const {results, info} =await this.fetchData(`${this.next}`);
    this.toggleShowElement(this.loader, this.button);
    this.cards=[...this.cards, ...results];
    this.newCards=[...results]
    this.next=info.next;
    this.createCollection(this.newCards);
    console.log(this.cards);
}
async searchPerson(){
    console.log(this.cards);
    this.cards.forEach(({id})=> document.getElementById(id).classList.add('hide'));
      
    const searchQuery= this.search.value.toLowerCase();
    // searchQuery ? this.button.classList.add('hide') : this.button.classList.remove('hide');
    
    const {results}= await this.fetchData(`${this.API}?name=${searchQuery}`);
    this.cards=[...this.cards, ...results];
    this.newCards=results;
    console.log(this.cards);
    this.createCollection(this.newCards);

}

async fetchData(url){
    const response= await fetch(url);
    const parsedResponse= await response.json();  
    return parsedResponse;
 }
createCollection(cards){
    this.collection.innerHTML += [
        cards.map((card)=> this.createCard(card)).join('')
    ];
}
createCard({ name, id, species, image, status, gender, location}){
    return `
    <article class="card" id=${id} data-card>
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