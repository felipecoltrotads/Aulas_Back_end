console.log("Ola Mundo")

let teste=10
var nome = 'Felipe'
const ehPar = true

console.log(teste)
console.log(nome)
console.log(ehPar)

console.log(2 + 2)
console.log(3 * 2)
console.log(10 / 2)
console.log(5 % 2)
console.log(parseInt(5 / 2)) //pegar somente a parte inteira

console.log("\n Comparações")
console.log(1 == 1)
console.log(1 == "1") // 2 iguais é bugado e por isso usa 3 iguais
console.log(1 === "1")
console.log(1 !== 2)

console.log("\n IFs")

let idade = 17
if (idade >= 18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}


const code = 1
switch(code) {
    case 1:
        console.log("Ligar tv")
        break
    case 2:
        console.log("Desligar tv")
        break
    default:
        console.log("Sei lá")        
}

console.log("---------------------------------------------------")
console.log("\n Laços de repetição \n")

for(let i = 0; i<10; i++){
    console.log(i)
}

let i=10;
while (i<30){
    console.log(i)
    i *= 2 //i = i * 2
}

console.log("\n\n Função")

function soma(a, b){
    return a + b
}


const result = soma(2, 2)
console.log(result)
