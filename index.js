const express = require('express');
const cors = require('cors');

require('dotenv').config();
const mongoose = require('mongoose');
// possiamo usare la variabile d’ambiente process.env.MONGO_URI
// oppure inserire direttamente l’URL del DB in maniera cablata al suo posto.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//qui inizializziamo il framework express
const app = express();
app.use(cors());

        //funzionalità che definiamo per il nostro backend
app.get('/', (req, res) => {
 res.send('Hello from Node.js server');
});

app.get('/progetti', (req, res) => {
        const progettiJson = [
                {
                    "title": "To Do List",
                    "description": "Un esempio di utilizzo di JS per la creazione di una lista di cose da fare",
                    "image": "https://as2.ftcdn.net/v2/jpg/01/39/40/61/1000_F_139406177_40NJQiH2xx9aZ5MLxRWCMMjSyjC9E7W9.jpg",
                    "link": "https://shetechitaly.github.io/js-bootcamp/"
                }, 
                {
                    "title": "Timeline",
                    "description": "Un esempio di utilizzo di JS per simulare una linea temporale di post",
                    "image": "https://posttimeline.com/wp-content/themes/ptl-theme/images/demos/gutenberg/chat-timeline.jpg",
                    "link": "https://bootcamp.shetechitaly.org/day2/02-00"
                }, 
                {
                    "title": "Progetto 3",
                    "description": "Una descrizione per il progetto 3",
                    "image": null,
                    "link": "#"
                },
                {
                    "title": "Progetto 4",
                    "description": "Una descrizione per il progetto 4",
                    "image": null,
                    "link": "#"
                },
                {
                    "title": "Progetto 5",
                    "description": "Una descrizione per il progetto 5",
                    "image": null,
                    "link": "#"
                },
                {
                    "title": "Progetto 6",
                    "description": "Una descrizione per il progetto 6",
                    "image": null,
                    "link": "#"
                },
                {
                    "title": "Progetto 7",
                    "description": "Una descrizione per il progetto 7",
                    "image": null,
                    "link": "#"
                },
                {
                    "title": "Progetto 8",
                    "description": "Una descrizione per il progetto 8",
                    "image": null,
                    "link": "#"
                },
                {
                    "title": "Progetto 9",
                    "description": "Una descrizione per il progetto 9",
                    "image": null,
                    "link": "#"
                }
            ];

            res.json(progettiJson);
});

// Definizione di una route di fallback per gestire le pagine non trovate
app.use((req, res) => {
 res.status(404).send("Spiacenti, la pagina richiesta non è stata trovata.");
});

        //comando che ci permette di far partire il nostro server e quindi l'applicazione
const server = app.listen(process.env.PORT || 8000, () => {
 console.log(`Hacker news server started on port: ${server.address().port}`);
});
