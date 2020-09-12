//document.write('Hello') //objeto

// Variáveis(quarda um valor para usar mais tarde), tipos de dados

/*

    var myvar // underfined = sem valor

    myvar= 'Hello' //Atribuindo um valor

    var myvar = 'Hello' //var

    document.write(myvar)

    const myconst = 'hi' //const = valor constante

    document.write(myconst)

    document.write(myvar + myconst)

    let mylet = 'he'

    document.write(mylet)

*/

/*

    // string

    const s1 = "Isso é uma string"

    const s2 = 'Isso também é uma string'

    const s3 = `Olha, isso também é uma string`

    document.write(s2)

*/


/*

    // number

    const n1 = 1

    const n2 = 12

    const n3 = '1'

    const n4 = '12'

    document.write(n1+n2)

    document.write(n3+n4)// dará 112,já que ambos são string

*/

/*

    // bollean

    const bTrue = true

    const bFalse = false

    document.write(bTrue)

*/

/*

    // objeto => todos possuem propriedades e funcionalidades

    const personal = {
        height: '1,88m', //sempre tem que ter uma vírgula
        age: 24,
        single: true, //solteiro
        run(){
            //document.write('Corra na Floresta')
            return "Corra na Floresta" // retorna qualquer tipos e dado
        },
        correr(){
            document.write('Executar corrida intensa')
        }
    }

    //document.write(personal)
    //document.write(personal.height)

    //document.write(personal.run()) //se não tiver o 'return' ele apareceria underfine

    personal.correr()//função

*/

/*

    // Array = vetores

    const colectionOfBalls = ['blue', 'green', 1, {name: 'Lucas'}] //coleção de dados

    //document.write(colectionOfBalls[0])

    document.write(colectionOfBalls[3].name)

*/

/*
    // function => funcionalidade, atalhos, reuso de código / Tudo que está dentro do parêntese são chamados de argumentos

    //registrar
    function sayMyName(name){ // O parêntese funciona como um filtro e recepitor
        document.write(name)
    }

    //executar

    sayMyName('Marcos Túlio')
    sayMyName('Lidiana')
    sayMyName('Antônio')
*/

/*

    // condition => condição

    const notaFinal = 7

    if ( /** tem que ser 'true'/*  notaFinal < 6 ) {
        //caminho 1
        document.write('Reprovado')
    }else{
        //caminho 2
        document.write('Aprovado')
    }

*/

/*
// loop => repetição

for(i = 0; i < 10; i++){ 
    // criando uma variavel com valor 0, depois ele confere se o i é menor que 10, 
    //se sim ele entra na condição e no final ele adiciona 1 (i++ = i +1)
    
    document.write(`<p> ${i} </p>`)
}

*/