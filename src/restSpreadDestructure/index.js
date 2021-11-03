
let sayi1 =10;
sayi1 ="Eda Ildır";
let student = {id :1, name:"Eda"}
console.log(student)

function save(ogrenci,puan=10) {
    console.log(ogrenci.name + " : " +puan)
    
}
save(student,100);

let students =["Eda", "Sümeyye","Dilek","Zehra"]

console.log(students)

let student2 = [student,{id :2, name:"Melike"},"Ankara",{city:"İstanbul"}]

console.log(student2)


//rest
//params
//varArgs
let showProducts = function (id,...products){
    console.log(id)
    console.log(products)
}
// console.log(typeof showProducts)
// showProducts(10,"Elma","Armut","Karpuz") 
// showProducts(10,["Elma","Armut","Karpuz"])

let points =[5,78,41,63,25,99,128]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructing ---parçalama
let populations =[1000,2000,3000,[4000,1000]]
let [small,medium,high,[veryHigh,maximum]] = populations // yukarıdaki array yani diziyi elimizdeki
// değişkenlere atamasını söylüyoruz . [small,medium,high]=[1000,2000,3000] değişken ve parametreleri olarak atansın
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
    
}
someFunction(populations)

let category ={ id:1,name:"içecek"}
console.log(category.id)
console.log(category["name"])
//console.log(category["id"])

//category.id ---------------- category["id"] Bu iki farklı çağırma yöntemi ikisini de kullanabilirsin.
//aşağıdaki yazım objeyi Destructing etme yöntemidir.

let {id,name} = category
console.log(id)
console.log(name) 

//Redux

