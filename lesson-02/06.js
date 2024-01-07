
let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddress2 = {...passportWithAddress}
let address2 = {...passportWithAddress.address}
address2.city='Bobryisk'
passportWithAddress2.address = address2


console.log(passportWithAddress.address.city)
console.log(passportWithAddress2.address.city)
