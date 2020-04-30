const randomVillager = () => {
    const species = ["Alligator", "Anteater", "Bear", "Bird", "Bull", "Cat", "Chicken", "Cow", "Cub", "Deer", "Dog", "Eagle", "Elephant", "Frog", "Goat", "Gorilla", "Hamster", "Hippo", "Horse", "Kangaroo", "Koala", "Lion", "Monkey", "Mouse", "Octopus", "Ostrich", "Penguin", "Pig", "Rabbit", "Rhino", "Sheep", "Squirrel", "Tiger", "Wolf"]
    const personalities = ["Lazy", "Jock", "Cranky", "Smug", "Normal", "Peppy", "Snooty", "Sisterly"]
    const gender = ["♂ Male", "♀ Female"]
    const color = ["White", "Yellow", "Fuchsia", "Red", "Silver", "Gray", "Olive", "Purple", "Maroon", "Aqua", "Lime", "Teal", "Green", "Blue", "Navy", "Black"]
    const style = ["Sporty", "Cute", "Iconic", "Rock 'n' Roll", "Official", "Ornate", "Flashy", "Modern", "Historical", "Basic"]


    const randomPersonalities = personalities[Math.floor(Math.random() * personalities.length)]
    const randomSpecies = species[Math.floor(Math.random() * species.length)]
    const randomGender = gender[Math.floor(Math.random() * gender.length)]
    const randomColor = color[Math.floor(Math.random() * color.length)]
    const randomStyle = style[Math.floor(Math.random() * style.length)]

    if(randomGender == "♂ Male") {
        classe = "man"
    } else {
        classe = "female"
    }

    document.getElementById("randomVillager").innerHTML = (`you would be a <span class="${classe}">${randomGender}</span> ${randomColor} <strong>${randomSpecies}</strong>, with a ${randomPersonalities} personality and a ${randomStyle} style!`)
}



