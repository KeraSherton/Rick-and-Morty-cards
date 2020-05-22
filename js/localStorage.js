
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
        LsSpecies!="" ? localStorage.setItem("species", LsSpecies.value ) : null;
        LsStatus!="" ? localStorage.setItem("status", LsStatus.value ) : null; 
        LsImage!="" ? localStorage.setItem("image", LsImage.value ) : null;  
        LsGender!="" ? localStorage.setItem("gender", LsGender.value ) : null; 
        LsLocation!="" ? localStorage.setItem("genLocation", LsLocation.value ) : null; 
        console.log(localStorage);
    }
    buttonCreate.onclick= function(){
        // document.getElementById("new-card").classList.remove('hide');
        name= localStorage.getItem("name");
        species= localStorage.getItem("species");
        status= localStorage.getItem("status");
        gender= localStorage.getItem("gender");
        genLocation= localStorage.getItem("genLocation");
        image= localStorage.getItem("image");
        name && image ? 
        document.getElementById("collection-content").insertAdjacentHTML('afterbegin',  `
            <article class="card">
                <header class="card__header">
                    <h1 class="card__heading"> ${name} </h1>
                    <p class="class__species"> ${species} </p>
                </header>
                <img class="card__image" src="${image}" alt="${name}"/>
                <p class="card__description"> <b> Status:</b> ${status} </p>
                <p class="card__description"> <b> Gender:</b> ${gender} </p>
                <p class="card__description"> <b> Location:</b> ${genLocation} </p>
            </article>`) : alert("Pass at least name and image to create card!");
    }


            