const express = require('express');
const bodyParser = require('body-parser');
const firestore = require('@google-cloud/firestore');


const app = express();
const db = new firestore.Firestore();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let catVotes = 0;
let dogVotes = 0;


app.get('/', async (req, res) => {
  let catVotes = 0;
  let dogVotes = 0;

  // Get the current vote count from Cloud Firestore
  const doc = await db.collection('votes').doc('count').get();
  if (doc.exists) {
    const data = doc.data();
    catVotes = data.catVotes;
    dogVotes = data.dogVotes;
  }

  res.render('index', { catVotes, dogVotes });
});


app.post('/vote', async (req, res) => {
  const pet = req.body.pet;
  let catVotes = 0;
  let dogVotes = 0;

  // Get the current vote count from Cloud Firestore
  const doc = await db.collection('votes').doc('count').get();
  if (doc.exists) {
    const data = doc.data();
    catVotes = data.catVotes;
    dogVotes = data.dogVotes;
  }

  // Increment the vote count for the selected pet
  if (pet === 'cat') {
    catVotes++;
  } else if (pet === 'dog') {
    dogVotes++;
  }

  // Update the vote count in Cloud Firestore
  await db.collection('votes').doc('count').set({ catVotes, dogVotes });

  res.send({ catVotes, dogVotes });
});



app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
