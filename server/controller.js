let globalID = 6

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

    deleteFortune: (req, res) => {
        const fortune = ["You'll win a dollar!", "Friend's aren't that far away", "Follow a rainbow to find rain", "Enjoy food for you may die.", "This may be dog but idk."];
        fortune.splice(0, 5)
        res.status(200).send(`Fortunes left:${fortune}`)
    },

    newFortune: (req, res) => {
        let newone = req.body
        fortune.push(newone)
        globalID++
        res.status(200).send(fortune)
    },

    getMoney: (req, res) => {
        const money = "$1,000,000,000"
        res.status(200).send(money)
    },

    suprise: (req, res) => {
        const suprise = "BOO"
        res.status(200).send(suprise)
    }



}