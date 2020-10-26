import './main.css';
import './scss/style.scss';
import  * as cls from './classes';


let clientsList = document.getElementById('clientsList');
let clients = [];
let clientProt = {
    family: "",
    name: "",
    otch: "",
    date: "",
    city: "",
    cardNumber: "",
    accountBalance: 0
};



function generateNumber() {
    let cardNumber = [];
    for (let i = 0; i < 16; i++) { 
        cardNumber.push(Math.floor(Math.random()*10));
    }
    return cardNumber.join("");
}


function fillClientProtData() {
    clientProt.family = document.getElementById('family').value;
    clientProt.name = document.getElementById('name').value;
    clientProt.otch = document.getElementById('otch').value;
    clientProt.date = document.getElementById('date').value;
    clientProt.city = document.getElementById('city').value;
    clientProt.cardNumber = generateNumber();
};


function createNewClient(client) {
    let newClient = new cls.Client(client);
    clients.push(newClient);
};


function clearInputFields() {
     document.getElementById('family').value = "";
     document.getElementById('name').value= "";
     document.getElementById('otch').value = "";
     document.getElementById('date').value = "";
     document.getElementById('city').value = "";
     document.getElementById('addMoneyAmount').value = "";
     document.getElementById('removeMoneyAmount').value = "";
};


function addClientToList(client) {
    let insertedLine = clients[clients.length - 1].family + " " +
        clients[clients.length - 1].name + " " +
        clients[clients.length - 1].otch + ", " + 
        clients[clients.length - 1].city;
    clientsList.options[clientsList.length] = new Option(insertedLine);
};


function selectLastAddClient() {
    clientsList.selectedIndex = clientsList.length-1;
};


function addClient() {
    fillClientProtData();
    createNewClient(clientProt);
    clearInputFields();
    addClientToList();
    selectLastAddClient();
    renewClientInformation(clientsList.selectedIndex);
};


function isFilledCorrect(item) {
    if (item.value.length > 0) {
        return true;
    };
};


function checkClientFieldsCorrect() {
    let inputFields = Array.from(document.querySelectorAll(".clientInput"));
    if (inputFields.every(isFilledCorrect)) {
        return true;
    } else alert("Не все поля заполнены!");
};


document.getElementById('addClient').addEventListener('click', function(event) {
    if (checkClientFieldsCorrect()) {
        addClient();
    }
});


function makeJSON(clientsToModify) {
    let output = clientsToModify.map(function(item, number) {
        return JSON.stringify(item);
    })
    return output;    
};


function showJSONClients(clientList) {
    let outputJSONDiv = document.getElementById("clientJSONList");
    outputJSONDiv.innerHTML = makeJSON(clientList);
};


function formCardNumberToOutput(cardNumber) {
    let s = String(cardNumber);
    return(s.split("")
    .map((item, number) => {
        return ((number+1)%4 == 0) ? item+" " : item;
        })
    .join("")
    );
};


function renewClientInformation(clientNumber) {
    document.getElementById("infoFIO").innerHTML = `${clients[clientNumber].family} ${clients[clientNumber].name} ${clients[clientNumber].otch}`;
    document.getElementById("infoDate").innerHTML = `${clients[clientNumber].date}г.`;
    document.getElementById("infoCity").innerHTML = `${clients[clientNumber].city}`;
    document.getElementById("infoCardNumber").innerHTML = `${formCardNumberToOutput(clients[clientNumber].cardNumber)}`;
    document.getElementById("infoAccount").innerHTML = `${clients[clientNumber].accountBalance}`;
    showJSONClients(clients);
};


clientsList.addEventListener('click', function(event) {
    if (clients.length) {
        renewClientInformation(clientsList.selectedIndex);
    };
});


function errorInput() {
    alert("Вы ввели не число!");
}


function changeMoneyToClient(clientNumber, amount, operation) {
    if (operation === "add") {
        if (Number(amount) >= 0) {
            clients[clientNumber].accountBalance += Number(amount);
        } else errorInput();
    } else if (operation === "remove") {
        if (Number(amount) >= 0) {
            let balance = clients[clientNumber].accountBalance;
                if (balance - amount > 0) {
                    clients[clientNumber].accountBalance -= amount;
                } else alert("Недостаточно средств для списания!");
        } else errorInput();
    };
};


document.getElementById("addMoneyButton").addEventListener('click', function() {
    if (clients.length > 0) {
        changeMoneyToClient(clientsList.selectedIndex, document.getElementById("addMoneyAmount").value, "add");
        renewClientInformation(clientsList.selectedIndex);
        clearInputFields();
    };
});


document.getElementById("removeMoneyButton").addEventListener('click', function() {
    if (clients.length > 0) {
        changeMoneyToClient(clientsList.selectedIndex, document.getElementById("removeMoneyAmount").value, "remove");
        renewClientInformation(clientsList.selectedIndex);
        clearInputFields();
    };
});



