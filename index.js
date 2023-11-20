const cluster = require("cluster")
const { cpus } = require("os")

const numProcesadores = cpus().length
console.log(numProcesadores)
if(cluster.isPrimary){
    console.log("Proceso primario")
    cluster.fork()
}else{
    console.log("No es un proceso ")
}