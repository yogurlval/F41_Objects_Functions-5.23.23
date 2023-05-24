
const person = {
    firstName: 'Valentina',
    lastName: 'Bowman',
    age: 26

}
console.log(person.age)//OR console.log(person['age'])

//access value via deconstruct
let {firstName} = person

let {age:valsAge, lastName} = person

console.log(`hello my name is ${firstName} ${lastName} I am ${valsAge}`)

person.job = "bad bit-" //add NEW key/value to existing object

// for(let key in person){
    // console.log(key)
    // console.log(person[key])
// }
delete person.age // remove from object
// console.log(person)

class Robot{
    constructor(name, health, attack){
        this.name = name,
        this.health = health,
        this.attack = attack
    }
    takeDamage(para){
        this.health -= para
    }
    checkSelf(){
        for(let key in this){
            console.log(`${key}: ${this[key]}`)
        }
    }
}

let billy = new Robot("billy", 100, 20)
console.log(billy)

let henry = new Robot("henry", 100, 10)
console.log(henry)

henry.takeDamage(billy.attack)
billy.takeDamage(henry.attack)
// console.log(henry)
// console.log(billy)

billy.checkSelf()

class MedBot extends Robot{
    constructor(name, health, attack, heal){
        super(name, health, attack)
        this.heal = heal
    }
    repair(bot){
        bot.health += this.heal
    }
}

let mary = new MedBot("mary", 100, 5, 30)
console.log(mary)
mary.checkSelf()


billy.checkSelf()
mary.repair(billy)
billy.checkSelf()