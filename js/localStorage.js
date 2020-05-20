// const newCard=[{
//     id: 666,
//     name: "Gosia",
//     species: "human", 
//     image:"https://static.goldenline.pl/user_photo/152/user_1255064_af4a5f_huge.jpg",
//     status: "Alive", 
//     gender: "female", 
//     location: "Earth"}];

    const LsName= document.getElementById("LsName");
    const LsSpecies= document.getElementById("LsSpecies");
    const LsStatus= document.getElementById("LsStatus");
    const LsImage= document.getElementById("LsImage");
    const LsGender= document.getElementById("LsGender");
    const LsLocation= document.getElementById("LsLocation");
    const buttonSave= document.getElementById("save-button");
    const buttonCreate= document.getElementById("create-button");
    const NewCard= document.getElementById("new-card");
    
    
    buttonSave.onclick= function(){
        LsName.value!="" ? localStorage.setItem("name", LsName.value ) : null;
        localStorage.setItem("species", LsSpecies.value );
        localStorage.setItem("status", LsStatus.value ); 
        localStorage.setItem("image", LsImage.value );  
        localStorage.setItem("gender", LsGender.value ); 
        localStorage.setItem("GenLocation", LsLocation.value ); 
        console.log(localStorage);
    }
    buttonCreate.onclick= function(){
        document.getElementById("new-card").classList.remove('hide');
        name= localStorage.getItem("name");
        species= localStorage.getItem("species");
        status= localStorage.getItem("status");
        gender= localStorage.getItem("gender");
        GenLocation= localStorage.getItem("GenLocation");
        image= localStorage.getItem("image");
        document.getElementById("new-card").innerHTML +=  `
           <header class="card__header">
               <h1 class="card__heading"> ${name} </h1>
               <p class="class__species"> ${species} </p>
           </header>
           <img class="card__image" src="${image}" alt="${name}"/>
           <p class="card__description"> <b> Status:</b> ${status} </p>
           <p class="card__description"> <b> Gender:</b> ${gender} </p>
           <p class="card__description"> <b> Location:</b> ${GenLocation} </p>
        `;

        // for (let i=0; i<localStorage.length; i++){
        //     const key = localStorage.key(i);
        //     const value= localStorage.getItem(key);
    
        //     document.getElementById("new-card").innerHTML +=  ${key} : ${value}
            
        // // }<div class="card">
        //    <header class="card__header">
        //        <h1 class="card__heading"> ${name} </h1>
        //        <p class="class_species"> ${species} </p>
        //    </header>
        //    <img class="card__image" src="${image}" alt="${name}"/>
        //    <p class="card__description"> <b> Status:</b> ${status} </p>
        //    <p class="card__description"> <b> Gender:</b> ${gender} </p>
        //    <p class="card__description"> <b> Location:</b> ${location} </p>
        // </div>
    }