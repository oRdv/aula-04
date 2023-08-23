'use strict'

const botaoMostarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')
const botaoMostarTodosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostarTodosImpares = document.getElementById('botao-mostrar-numeros-impares')
const botaoMostarTodosMultiplos3e4 = document.getElementById('botao-mostrar-numeros-multiplos3e4')
const botaoMostarTodosMultiplicar3ou4 = document.getElementById('botao-mostrar-numeros-multiplicar3ou4')
const botaoMostarTodosAnterior = document.getElementById('botao-mostrar-numeros-anterior')
const botaoMostarTodosAnteriorImpar = document.getElementById('botao-mostrar-numeros-anterior-impar')
const botaoMostarTodosMultiplicar3 = document.getElementById('botao-mostrar-numeros-triplo')
const botaoMostarTodosPrimos = document.getElementById('botao-mostrar-numeros-primos')



function mostrarTodosNumeros() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros')
    container.replaceChildren('')
    const ultimoIndice = numeros.length

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)

        }
    }
}

function mostrarNumerosPares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if (numeros[contador] % 2 == 0) {
                const novoSpan = document.createElement('span')
                novoSpan.textContent = numeros[contador]
                container.appendChild(novoSpan)
            }
        }
    }
}

function mostrarNumerosImpares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-impares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if (numeros[contador] % 2 == 1) {
                const novoSpan = document.createElement('span')
                novoSpan.textContent = numeros[contador]
                container.appendChild(novoSpan)
            }
        }
    }
}

function mostrarMultiplos3e4() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multipos3e4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if (numeros[contador] % 3 == 0 && numeros[contador] % 4 == 0) {
                const novoSpan = document.createElement('span')
                novoSpan.textContent = numeros[contador]
                container.appendChild(novoSpan)
            }
        }
    }
}

function mostrarMultiplos3ou4() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplicar3ou4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if (numeros[contador] % 3 == 0 || numeros[contador] % 4 == 0) {
                const novoSpan = document.createElement('span')
                novoSpan.textContent = numeros[contador]
                container.appendChild(novoSpan)

            }
        }
    }
}
function mostrarTodosAnterior() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-anteriores')
    container.replaceChildren('')
    const ultimoIndice = numeros.length

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador] - 1
            container.appendChild(novoSpan)



        }
    }
}
function mostrarTodosAnteriorImpar() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-anteriores-impar')
    container.replaceChildren('')
    const ultimoIndice = numeros.length

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador] - 1
            if (numeros[contador] % 2 == 0) {
                container.appendChild(novoSpan)

            }
        }
    }
}

function mostrarMultiplos3() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-mutiplicar-triplo')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
                const novoSpan = document.createElement('span')
                novoSpan.textContent = numeros[contador] * 3 
                container.appendChild(novoSpan)

            }
        }
    }

    function mostrarNumerosPrimos() {
        const numeros = document.getElementById('numeros').value.split(',')
        const container = document.getElementById('container-numeros-mutiplicar-primos')
    
        container.replaceChildren('')
        const ultimoIndice = numeros.length
    
        if (numeros != '') {
            for (let contador = 0; contador < ultimoIndice; contador++) {
                if (numeros[contador] % 1 == 0 || numeros[contador] % numeros[contador] == 0) {
                    const novoSpan = document.createElement('span')
                    novoSpan.textContent = numeros[contador]
                    container.appendChild(novoSpan)
    
                }
            }
        }
    }


botaoMostarTodosNumeros.addEventListener('click', mostrarTodosNumeros)
botaoMostarTodosPares.addEventListener('click', mostrarNumerosPares)
botaoMostarTodosImpares.addEventListener('click', mostrarNumerosImpares)
botaoMostarTodosMultiplos3e4.addEventListener('click', mostrarMultiplos3e4)
botaoMostarTodosMultiplicar3ou4.addEventListener('click', mostrarMultiplos3ou4)
botaoMostarTodosAnterior.addEventListener('click', mostrarTodosAnterior)
botaoMostarTodosAnteriorImpar.addEventListener('click', mostrarTodosAnteriorImpar)
botaoMostarTodosMultiplicar3.addEventListener('click', mostrarMultiplos3)
botaoMostarTodosPrimos.addEventListener('click', mostrarNumerosPrimos)

