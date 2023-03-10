// Get race results for a horse
app.get('/horses/:id/race_results', (req, res) => {
    const id = req.params.id;
    db.all('SELECT * FROM race_results WHERE horse_id = ?', id, (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal server error');
      } else {
        res.json(rows);
      }
    });
  });
  
  // Add a new race result for a horse
  app.post('/horses/:id/race_results', (req, res) => {
    const id = req.params.id;
    const { race_date, position } = req.body;
    if (!race_date || !position) {
      res.status(400).send('Race date and position are required');
      return;
    }
    db.run('INSERT INTO race_results (horse_id, race_date, position) VALUES (?, ?, ?)', id, race_date, position, function(err) {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal server error');
      } else {
        res.status(201).json({ id: this.lastID });
      }
    });
  });
  