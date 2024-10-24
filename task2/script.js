const button = document.querySelector(".btn")
const pass = document.querySelector(".password")
const generatePassword = (iteration) => {
    const chars= "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ@#$%&*+=/?!"
    let password = ""
    for (let i=1; i<=iteration;i++){
        const index = Math.floor(Math.random() * chars.length)
        password +=  chars[index]

    }
    return password
}

button.addEventListener("click",(event) => {
    event.preventDefault()
    const length = Number(document.querySelector(".length").value)

    if (length <=0){
        alert("YOU HAVE TO PUT A POSIIVE NUMBER")
    }else{
        pass.innerText= generatePassword(length)
    }
})