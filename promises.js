function multiplicaPorSiMismo(valor, ejecuta) {
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    setTimeout(function () {
        ejecuta(valor, valor * valor);
        //ejecuta(2,2*2)
    }, 1000)
}
promise = new Promise((resolve,reject)=> {
    let func1 = function (valor, resultado) {
        console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
        }
        resolve([2,func1()])
    }).then((dataPromise)=>{
        multiplicaPorSiMismo(dataPromise[1],dataPromise[2])
        console.log('Procesando')
})
