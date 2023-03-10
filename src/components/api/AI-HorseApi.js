const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(express.json());

const db = new sqlite3.Database('horses.db3', err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the horses database.');
  }
});

app.get('/horses', (req, res) => {
  db.all('SELECT * FROM horses', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      res.json(rows);
    }
  });
});

app.get('/horses/:id', (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM horses WHERE id = ?', id, (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else if (!row) {
      res.status(404).send(`Horse with id ${id} not found`);
    } else {
      res.json(row);
    }
  });
});

app.post('/horses', (req, res) => {
  const { name, age, breed } = req.body;
  if (!name || !age || !breed) {
    res.status(400).send('Name, age, and breed are required');
    return;
  }
  db.run('INSERT INTO horses (name, age, breed) VALUES (?, ?, ?)', name, age, breed, function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json({ id: this.lastID });
    }
  });
});

app.put('/horses/:id', (req, res) => {
  const id = req.params.id;
  const { name, age, breed } = req.body;
  if (!name || !age || !breed) {
    res.status(400).send('Name, age, and breed are required');
    return;
  }
  db.run('UPDATE horses SET name = ?, age = ?, breed = ? WHERE id = ?', name, age, breed, id, function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else if (this.changes === 0) {
      res.status(404).send(`Horse with id ${id} not found`);
    } else {
      res.sendStatus(204);
    }
  });
});

app.delete('/horses/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM horses WHERE id = ?', id, function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else if (this.changes === 0) {
      res.status(404).send(`Horse with id ${id} not found`);
    } else {
      res.sendStatus(204);
    }
  });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
