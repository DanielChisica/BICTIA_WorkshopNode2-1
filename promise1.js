function multiplicaPorSiMismo(valor, ejecuta) {
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    setTimeout(function () {
        ejecuta(valor, valor * valor);
        //ejecuta(2,2*2)
    }, 1000)
}
promise = new Promise((resolve,reject)=> {
        resolve([5,function (valor, resultado) {
            console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
        }])
    }).then((dataPromise)=>{
        console.log(dataPromise)
        multiplicaPorSiMismo(dataPromise[0],dataPromise[1])
        console.log('Procesando')
})
