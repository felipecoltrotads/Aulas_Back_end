let user;
console.log("1")
setTimeout(() => {
    user = {
        nme: "Felipe"
    }
    console.log("dentro do timeout:", user)
}, 0)
console.log(user)

