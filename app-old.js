

const http = require('http');

http.createServer((req, res) => {
    //este comando hara que en la pestaña nueva de chrome(localhost:8080) se muestre nuestro mensaje "hola mundo "
    console.log(req);

    //res.setHeader('Content-Disposition', 'attachment; filemane=lista.csv'); //se coloca el tipo de archivo que se queire que se descargue
    //res.writeHead(200, {'Content-Type': 'application(csv'});



    res.write('Hola Mundo');
    //res.write('1, Elias\n');
    //res.write('2, Kin\n');
    //res.write('3, Daniel\n');
    //res.write('4, Osorio\n');
    //res.write('5, Edgar\n');
    
    res.end(); //si no colocamos el res.end la consola se quedara escuchando, y no mostrara ningun mensaje

 

})
    .listen(8080);

console.log('escuchando el puerto', 8080);


