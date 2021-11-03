class Customer{
    constructor(id,customerNumber){
        this.id = id ;
        this.customerNumber =customerNumber;
    }
}

let customer = new Customer(1,"12345")
//prototyping 
customer.name = "Ece Deniz"; //instans yapılan prototyping
console.log(customer.name)

Customer.bisey = "Bişey"; //class yapılan prototyping
console.log(Customer.bisey);

console.log(customer.customerNumber);
console.log(customer.id)

class IndivildualCustomer extends Customer{ //Bireysel Müşteri
    constructor(firstName,id,customerNumber){
    super(id,customerNumber)
    this.firstName =firstName
    }
}

class CorpoteCustomer extends Customer{ //Kurumsal Müşteri
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}
//map kullanımı
let products = [
    {id:1, name : "Acer Laptop",unitPrice:15000}
    {id:2, name : "Asus Laptop",unitPrice:16000}
    {id:3, name : "Hp Laptop", unitPrice:13000}
    {id:4, name : "Dell Laptop",unitPrice:12000}
    {id:5, name: "Casper Laptop",unitPrice:17000}
]

console.log("<ul>")
products.map(product=>console.log('<li>${product.name}</li>'))
console.log("</ul>")