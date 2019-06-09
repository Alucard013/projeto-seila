var desenvolvimento = false;

var configuracoes = {
    producao: {
        server: "servidorj.database.windows.net",
        user: "Jorel",
        password: "#Gf51022871846",
        database: "BancoProjeto",
        options: {
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000
        }
    },
    desenvolvimento: {
        server: "servidorj.database.windows.net",
        user: "Jorel",
        password: "#Gf51022871846",
        database: "BancoProjeto",
        options: {
            encrypt: true
        }
    }
}
 
var sql = require('mssql');
sql.on('error', err => {
    console.error(`Erro de Conexão: ${err}`);
});

var perfil = desenvolvimento ? 'desenvolvimento' : 'producao';

function conectar() {
  return sql.connect(configuracoes[perfil])
  // return new sql.ConnectionPool();  
} 

module.exports = {
    conectar: conectar,
    sql: sql
}