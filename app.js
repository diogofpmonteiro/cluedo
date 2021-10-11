//Suspects 

let mrGreen = {
    name: "Jacob Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image:
      "https://carboncostume.com/wordpress/wp-content/uploads/2017/10/mrgreen3.jpg",
    color: "green ",
  };
  
  let drOrchid = {
    name: "Doctor Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_2000,x_0,y_50/v1560965041/shape/mentalfloss/586055-hasbro.jpg?itok=x4QQWTxa",
    color: "white",
  };
  
  let profPlum = {
    name: "Victor Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image:
      "https://vignette.wikia.nocookie.net/cluedo/images/a/a4/2016C6.jpg/revision/latest?cb=20200927103539",
    color: "purple",
  };
  
  
  let missScarlet = {
    name: "Kasandra Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  };
  
  let mrsPeacock = {
    name: "Eleanor Peacock",
    occupation: "Socialité",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://vignette.wikia.nocookie.net/cluedo/images/b/b0/2016C5.jpg/revision/latest?cb=20200927103538",
    color: "blue",
  };
  
  let mrMustard = {
    name: "Jack Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  };

  // ### Weapons
  
  let rope = {
    name: 'rope',
    weight: 10,
  };
  
  let knife = {
    name: 'knife',
    weight: 8,
  };
  
  let candlestick = {
    name: 'candlestick',
    weight: 2,
  };
  
  let dumbbell = {
    name: 'dumbbell',
    weight: 30,
  };
  
  let poison = {
    name: 'poison',
    weight: 2,
  };
  
  let axe = {
    name: 'axe',
    weight: 15,
  };
  
  let bat = {
    name: 'bat',
    weight: 13,
  };
  
  let trophy = {
    name: 'trophy',
    weight: 25,
  };
  
  let pistol = {
    name: 'pistol',
    weight: 20,
  };
  
  // ### Rooms
  
  let diningRoom = {
    name: "Dining Room",
  };
  let conservatory = {
    name: "Conservatory",
  };
  let kitchen = {
    name: "Kitchen",
  };
  let study = {
    name: "Study",
  };
  let library = {
    name: "Library",
  };
  let billiardRoom = {
    name: "Billiard Room",
  };
  let lounge = {
    name: "Lounge",
  };
  let ballroom = {
    name: "Ballroom",
  };
  let hall = {
    name: "Hall",
  };
  let spa = {
    name: "Spa",
  };
  let livingRoom = {
    name: "Living Room",
  };
  let observatory = {
    name: "Observatory",
  };
  let theater = {
    name: "Theater",
  };
  let guestHouse = {
    name: "Guest House",
  };
  let patio = {
    name: "Patio",
  };

  let suspectsArray = [
    mrGreen, 
    drOrchid, 
    profPlum, 
    missScarlet, 
    mrsPeacock, 
    mrMustard
];

  let weaponsArray = [
    rope, 
    knife, 
    candlestick, 
    dumbbell, 
    poison, 
    axe,
    bat,
    trophy,
    pistol
];

  let roomsArray = [
    diningRoom, 
    conservatory, 
    kitchen, 
    study, 
    library, 
    billiardRoom,
    lounge,
    ballroom,
    hall,
    spa,
    livingRoom,
    observatory,
    theater,
    guestHouse,
    patio
];

//correct answer function - returns the killer, the location of the murder and the murder weapon 
function pickMystery() {
    let suspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length )]
    let weapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length )]
    let room = roomsArray[Math.floor(Math.random() * roomsArray.length )]
    
    return {suspect, weapon, room}
}

// Who killed Mr. Boddy with what in which room..
let mistery = pickMystery()

console.log(mistery)

//options display function - shows all of the options for the player
showArrays(suspectsArray)
showArrays(weaponsArray)
showArrays(roomsArray)

//Loops through all of our arrays and shows each item's name
function showArrays(arr) {
    console.log(arr);
    arr.forEach(function(eachItem) {
        document.body.innerHTML += `<li>${eachItem.name}</li>`
    })
}


/*  Guessing function - first we compare the guess input (let guessed.. variables) 
with the input id at the HTML page. 
    If the guessed input matches the value stored at the mystery variable the answer
is correct. Otherwise it's not and the correct answer is displayed. 
*/
document.querySelector("button").onclick = guess

function guess() {
    let guessedSuspect = document.querySelector('#suspect').value
    let guessedWeapon = document.querySelector('#weapon').value
    let guessedRoom = document.querySelector('#room').value

    if (guessedSuspect === mistery.suspect.name && guessedWeapon === mistery.weapon.name && guessedRoom === mistery.room.name) {
        alert("You guessed right! You win!!!") 
    } else {
        alert("Sorry, your guess was wrong!!")
        alert(mystery.suspect.name + 'killed Mr. Boddy in the ' + mystery.room.name + 'with the' + mystery.weapon.name)
    }
    document.body.innerHTML = `<img src=${mystery.suspect.image} />`
}
