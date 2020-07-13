class Traveler {
    constructor(name, food) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food += 2
    }//this.hunt is implied by the fact that this is a hunt function.
    eat() {
        if (this.food > 0) {
            this.food -= 1
        } else {
            this.isHealthy = false
        }

        //VS Code won't know what isHealthy is on its own, it needs that in conjunction with this as in "this instance."
        // consumes 1 unit of food, and when there's no more food change isHealthy to false
    }
}



class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
        //this.passengers is an empty array, and we need the number of travelers in the array
        //Returns the number of empty seats, determined by capacity set minus number of passengers on board
    }

    join(traveler) {
        if (this.capacity - this.passengers.length > 0) {
            //could also do this.getAvailabbleSeatCount()
            this.passengers.push(traveler)
            //this is a method that pushes traveler to an array, specified by passengers. traveler goes in parentheses bc that's the structure of a method.
        }
        //Adds a traveler to the wagon if there's space. Else, don't add.
    }

    shouldQuarantine() {
        for (let i = 0; i < this.passengers.length; i++) {
            const currentTraveler = this.passengers[i]
            if (currentTraveler.isHealthy === false) {
                return true
            }
        }
        return false
        //no else, that's only in conjunction with if. and this goes after the for loop is complete, outside those curly braces.
    }
    totalFood() {
        let total = 0
        for (let i = 0; i < this.passengers.length; i++) {
            const currentTraveler = this.passengers[i]
            //with bracket notation and an array that has things in it, [i] lets you get at one thing after the other in that array
            total = total + currentTraveler.food
            //this.travelers.food doesn't work bc that path doesn't exist. however, using bracket notation and defining currentTraveler, that path changes so it starts at a specific instance of traveler which has all those individual traveler properties and methods. we want the one that involves food, and now we can get to it.
        }
        return total
        // Returns total amount of food among all passengers in the wagon
    }
}