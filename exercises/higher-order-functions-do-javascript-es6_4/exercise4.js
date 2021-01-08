const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo

const filteredPeople = people.filter(bornCountry => bornCountry.nationality === "Australian" && 
bornCountry.bornIn > 1900 && bornCountry.bornIn < 2001);

const xxCentury = people.born > 1900 && people.born < 2001;
const australianBorn = people.nationality === "Australian";
const filterPeople = (person => {
    return {}
})

const filteredPeople = filterPeople(people)


assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })