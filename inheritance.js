
 class Vehicle{
    constructor(name, price){
        this.name = name
        this.price = price
    }
    move(){
        console.log('gari chole na chole na re gari chole na')
    }
 }

 class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name,price)
        this.seat = seat
        this.ticketPrice= ticketPrice
    }
 }

 class truck extends Vehicle{
    constructor(name, price, load){
        supers(name, price)
        this.load = load
    }
 }

 