const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const getStarWarsBtn = document.getElementById("getStarWars")
const money = document.getElementById("howmuchmoney")
const button = document.getElementById("button")
const formElement = document.getElementById("nameForm")
const fNameinput = document.getElementById("fName")
const lNameinput = document.getElementById("lName")
const formElement2 = document.getElementById("nameForm2")
const lNameinput2 = document.getElementById("lName2")
const deleteusers = document.getElementById("delete")



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

const seemoney = () => {
    axios.get("http://localhost:4000/api/getMoney/")
    .then(res => {
        const data = res.data
        alert(data)
    })
};

const surprise = () => {
    axios.get("http://localhost:4000/api/surprise/")
    .then((res) => {
        console.log(res.data)
        let name = document.createElement("h2")
        name.textContent = (res.data)
        document.body.append(name)
    })
};

const submitPerson = (event) => {
    event.preventDefault()
    const fName = fNameinput.value
    const lName = lNameinput.value
    const theBody = {
        fName: fName,
        lName: lName,
    }
    axios.post("http://localhost:4000/api/createUser/", theBody)
    .then((response) => {
        if (response.data.success) {
            alert('ya done it!')
        } else {
            alert('fail')
        }
    })
    fNameinput.value = ''
    lNameinput.value = ''
};

const changeUser = (event) => {
    event.preventDefault()
    const lName2 = lNameinput2.value
    const Body = {
        lName2: lName2
    }
    axios.put("http://localhost:4000/api/changeUser/", Body)
    .then((response) => {
        if (response.data.success) {
            alert('It is done!')
        } else {
            alert('fail')
        }
    })
    lNameinput2.value = ''
};

const deleteAll = () => {
    axios.delete("http://localhost:4000/api/deleteUsers/")
    .then((response) => {
        if (response.data.success) {
            alert('All Gone!')
        } else {
            alert('fail')
        }
    })
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
getStarWarsBtn.addEventListener('click', getStarWars)
money.addEventListener('click', seemoney)
button.addEventListener('click', surprise)
formElement.addEventListener('submit', submitPerson)
formElement2.addEventListener('submit', changeUser)
deleteusers.addEventListener('click', deleteAll)