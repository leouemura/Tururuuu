Separei a api naqele estilo MVC (models, views, controllers) só q sem o view pq é os react da vida.


Pra criar o banco eu usei o knex, uma dependencia, que auxilia na criação do banco de dados sqlite (dps eu coloco em outro)... ele gera o knexfile.js que vc escolhe onde vc quer salvar o arquivo c os dados (OBS: nada ta na nuvem... ta td salvo no src/databasedb.sqlite3) e onde vc quer criar a migration, pelo q eu entendi é tipo o formato da tabela... tipo o models de um mvc
Se quiser olha na pasta src/database/migrations/20200411200934_create_papel.js

### programa ta rodando nessa logica
arrayPapelScrapping -> arrayPapelController -> routes -> index
pega os dados do site -> métodos das rotas -> rotas  -> porta 3333

### insomnia http://localhost:3333/papel

### index.js 
eu importo o express e taco pro *app* e defino a porta 3333 e uso o *routes*

### routes.js
ficam as rotas pra n ficar mt fudido e bao pra qnd tiver mt rota diferente

### arrayPapelController
parte logica q envia pro banco de dados após conectar c o banco de dados. 
src/controllers/arrayPapelController.js

AI Q TA O PROBLEMA...
