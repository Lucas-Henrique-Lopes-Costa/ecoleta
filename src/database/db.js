//importar a dependencia do sqlite3

//função que tem um . => é chmado de método
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que irá fazer operações no banco de daods
const db = new sqlite3.Database("./src/database/database.db") //quando você utiliza o new, você está criando um objeto

//como exportar esses arquivos => utiizando o require para pegar esses dados
module.exports = db

//utilizar o objeto do banco de dados, para nossas operações

db.serialize( () => { //serialise => seguência de código
    
    //com comandos sql eu vou:

    // // 1 - Criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         itens TEXT
    //     );
    // `) 
    // // quebra de linha com crase => tamplate litorals
    // // autoincrement => ele altera o id altomaticamente


    // // 2 - inserir dados na tabela

    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         itens
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // //os interrogações serão trocados automaticamente
    
    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //     "Papersider",
    //     "Guilherme Gerballa, Jardim América",
    //     "Nº 260",
    //     "Santa Catarina",
    //     "Rio Grande do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData (err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log('Cadastrado com sucesso')
    //     console.log(this) //this => referencia a resposta do run
    // }

    // //db.run(query, values, afterInsertData) //função callback(afterInsertData) => tem que ter um parâmetro e demora um tempo para responder(depois de executar o query e o values)
    
    // // 3 - constutar os dados da tabela
    // /*

    // db.all(`SELECT name FROM places`, function(err, rows){
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    // })
    
    // */

    // //4 - deletar um dado da tabela
    
    
    // db.run(`DELETE FROM places WHERE id = ?`, [14], function(err) { //se você quiser apagar algo no seu site é so você mudar o array
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso")
    // })

    // db.run(`DELETE FROM places WHERE id = ?`, [15], function(err) { //se você quiser apagar algo no seu site é so você mudar o array
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso")
    // }) 

    // db.run(`DELETE FROM places WHERE id = ?`, [16], function(err) { //se você quiser apagar algo no seu site é so você mudar o array
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso")
    // })

})