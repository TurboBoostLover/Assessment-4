const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const getStarWarsBtn = document.getElementById("getStarWars")
const deleteFortune = document.getElementById("deleteFortune")
const sumbit = document.getElementById("submit")
const money = document.getElementById("howmuchmoney")
const button = document.getElementById("button")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getStarWars = () => {
    axios.get("http://localhost:4000/api/getStarWars/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getdeleteFortune = () => {
    axios.delete("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const newFortune = () => {
    axios.post("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
};

const seemoney = () => {
    axios.get("http://localhost:4000/api/getMoney/")
    .then(res => {
        const data = res.data
        alert(data)
    })
};

const suprise = () => {
    axios.get("http://localhost:4000/api/suprise/")
    .then((res) => {
        console.log(res.data)
        let name = document.createElement("h2")
        name.textContent = (res.data)
        document.body.append(name)
    })
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
getStarWarsBtn.addEventListener('click', getStarWars)
deleteFortune.addEventListener('click', getdeleteFortune)
sumbit.addEventListener('click', newFortune)
money.addEventListener('click', seemoney)
button.addEventListener('click', suprise)