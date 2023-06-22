const express = require('express');
const cors = require('cors');

require('dotenv').config();
const mongoose = require('mongoose');
// possiamo usare la variabile d’ambiente process.env.MONGO_URI
// oppure inserire direttamente l’URL del DB in maniera cablata al suo posto.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//definiamo lo schema per Progetti
const progettoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    },
})

//definire il modello per Progetto
const Progetto = mongoose.model('Progetto', progettoSchema);

//qui inizializziamo il framework express
const app = express();
app.use(cors());

        //funzionalità che definiamo per il nostro backend
app.get('/', (req, res) => {
 res.send('Hello from Node.js server');
});

app.get('/progetti', (req, res) => {
            Progetto.find()
            then((progetti) => {
                console.log('progetti', progetti)
                res.json(progetti);
                })
                .catch((error) => {
                res.status(500).json({ error: error.message });
                });
            // res.json(progettiJson);
});

// Definizione di una route di fallback per gestire le pagine non trovate
app.use((req, res) => {
 res.status(404).send("Spiacenti, la pagina richiesta non è stata trovata.");
});

        //comando che ci permette di far partire il nostro server e quindi l'applicazione
const server = app.listen(process.env.PORT || 8000, () => {
 console.log(`Hacker news server started on port: ${server.address().port}`);
});
