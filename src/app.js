console.log("Merhaba Kodlama.io")

//JS type safe değildir.
let dolarBugun = 9.30
let dolarDun = 9.20 //var eski kod bloğu,var yerine let bloğunu kullanıyoruz
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Kredisi", "Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for (let i =0; i<konutKredileri.length; i++){
    console.log("<li> "+konutKredileri[i]+"</li>")

}
console.log("</ul>")
{
    /*<ul>
    <li>Konut Kredisi </li>
    <li>Emlak Kredisi </li>
    <li>Kamu Konut Kredisi</li>
    </ul> */
}

console.log(konutKredileri)