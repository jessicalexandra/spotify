// receta para consumir appis con js puro

//. pa donde vas mijo
// uri del servicio

const URI="https://api.spotify.com/v1/artists/7Ey4PD4MYsKc5I2dolUwbH/top-tracks?market=us"

// tenes datos epeciales
// hay datos de control en la peticion

const TOKEN="Bearer BQA62EqUFxAdcnML0-ndkYh7Bp7Nv3uHEJIqGqYuzf0SCSIk0Gvz92MOxna31Tj4al2_BEogD0QkQe_K2e1pqDOgRg1omR7ussOMiWjkyNEPm8F1AtagvB-V5ArG6MCoTAlJzDNOktfh2cceuTAA0sKZT3LkhYABKsflYvETkOJdLPX6B4685JkdILs5QECYpPE"

// QUE VAS A ENVIAR
// CONFIGURA LA PETICION (LA PETICION ES UN OBJETO)

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN }
}

//arranca ps
//utilizar una promesa llamada fetch
fetch(URI,PETICION)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (respuesta) {
    console.log(respuesta)
})
.catch(function (respuesta) {
    console.log(respuesta)
})