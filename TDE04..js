const soma = (n1, n2, sucessCb, erroCb) => {
    const result = n1 + n2;
    if(result % 2 === 0) return sucessCb(result)
    erroCb(result)
}

const ehPar = (n) => {
    console.log($(n)), console.log("é par")
    }

const ehImpar = (n) => {
    console.log($(n)), console.log("é Impar")
}

soma(2, 3, ehPar, ehImpar)

const somaPromise = (n1, n2) => {
    return new Promise((sucessCb, erroCb) => {
        if(result % 2 === 0) return sucessCb(result)
        erroCb(result)
    })
}

somaPromise(2, 1).then(ehPar).catch(ehImpar)
