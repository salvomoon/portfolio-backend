const express = require('express');

//qui inizializziamo il framework express
const app = express();

        //funzionalità che definiamo per il nostro backend
app.get('/', (req, res) => {
 res.send('Hello from Node.js server');
});


        //comando che ci permette di far partire il nostro server e quindi l'applicazione
const server = app.listen(process.env.PORT || 8000, () => {
 console.log(`Hacker news server started on port: ${server.address().port}`);
});
