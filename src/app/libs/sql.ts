import mysql from 'mysql';

const config: mysql.ConnectionConfig = {
  host: 'localhost',
  port: 3306,
  user: 'usuario',
  password: 'contraseña',
  database: 'nombre_de_la_base_de_datos',
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('¡Conectado a la base de datos!');

  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);

    connection.end();
  });
});
