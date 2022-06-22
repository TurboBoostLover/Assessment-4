
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["You'll win a dollar!", "Friend's aren't that far away", "Follow a rainbow to find rain", "Enjoy food for you may die.", "This may be dog but idk."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getStarWars: (req, res) => {
        const character = ["Obi-wan", "R2-D2", "Fennec Shand", "Luke Skywalker", "Crosshairs"];
      
        // choose random Chacter
        let randomIndex = Math.floor(Math.random() * character.length);
        let randomCharacter = character[randomIndex];
      
        res.status(200).send(randomCharacter);
    },
    getMoney: (req, res) => {
        const money = "$1,000,000,000"
        res.status(200).send(money)
    },

    surprise: (req, res) => {
        const surprise = "BOO"
        res.status(200).send(surprise)
    },

    createUser: (req, res) => {
        database.push(req.body)
        console.log(database)
        res.status(200).send({success: true})
    },

    changeUser: (req, res) => {
        database[0].lName = (req.body.lName2)
        console.log(database)
        res.status(200).send({success: true})
    },

    deleteUsers: (req, res) => {
        database.splice(0, database.length)
        console.log(database)
        res.status(200).send({success: true})
    }

}

const database = [
        {
            fName: 'Nathan',
            lName: 'Westergard'
        },
]