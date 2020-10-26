class Client {
    constructor(client) {
        this.family = client.family;
        this.name = client.name;
        this.otch = client.otch;
        this.date = client.date;
        this.city = client.city;
        this.cardNumber = client.cardNumber;
        this.accountBalance = client.accountBalance;
    }
    
    get cardNumber() {
        return this._cardNumber;
    }

    set cardNumber(value) {
        this._cardNumber = value;
    }

    get accountBalance() {
        return this._accountBalance;
    }

    set accountBalance(value) {
        this._accountBalance = value;
    }
}


export {
    Client
  };
  