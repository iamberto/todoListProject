function playWithApi(){
    const url = "https://dog.ceo/api/breed/shihtzu/images/random"
    fetch(url);
    // console.log(url);

    const exampleTwo='{"random":7, "phrase":"This is super cool", "name":"Berto"}';
    // console.log(exampleTwo);

    const exampleParse=JSON.parse(exampleTwo);
    // console.log(exampleParse.name);

    const exampleStringify=JSON.stringify(exampleTwo);
    // console.log(exampleStringify);


}

// function practiceScope(){
//     let random = 'Inside scope';
//     const phrase = function(){
//         console.log(random);
//     }
//     return phrase();
// }
// let practiceOutside = practiceScope;

// practiceOutside();


class AboutMe{
    constructor(name, age, petName, petBreed) {
        this.name = name;
        this.age = age;
        this.petName = petName;
        this.petBreed = petBreed;
    }
}


const berto = new AboutMe('Berto', 28, 'Mushu', 'shihtzu');


// make a new class that works with your api

class AboutDawg{
    constructor(name, age, size, breed) {
        this.name;
        this.age;
        this.size;
        this.breed;
    }
}

AboutDawg.prototype.moosh = function(){
    const url = `https://dog.ceo/api/breed/${this.breed}/images/random`;
    fetch(url);
    .then((transformToJson)=>
        return transformToJson.json();
})
.then((breedData)=>{
    console.log(breedData);
})