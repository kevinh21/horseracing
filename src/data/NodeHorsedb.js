const sqlite3 = require('sqlite3').verbose();

// Open a database connection
const db = new sqlite3.Database('mydatabase.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

// Create a table
db.run(`CREATE TABLE Race_Horses (
  horse_id INT PRIMARY KEY AUTOINCREMENT,
  performance_races_run INT,
  performance_wins INT,
  performance_top_three_finishes INT,
  performance_win_percentage DECIMAL,
  performance_place_percentage DECIMAL,
  earnings_total_earnings DECIMAL,
  earnings_earnings_per_start DECIMAL,
  breeding_sire TEXT,
  breeding_dam TEXT,
  breeding_dams_sire TEXT,
  physical_height DECIMAL,
  physical_weight DECIMAL,
  physical_color TEXT,
  physical_markings TEXT,
  medical TEXT
)`);

// Insert some example data
db.run(`INSERT INTO Race_Horses (
  horse_id,
  performance_races_run,
  performance_wins,
  performance_top_three_finishes,
  performance_win_percentage,
  performance_place_percentage,
  performance_show_percentage,
  earnings_total_earnings,
  earnings_earnings_per_start,
  breeding_sire,
  breeding_dam,
  breeding_dams_sire,
  physical_height,
  physical_weight,
  physical_color,
  physical_markings,
  medical
) VALUES (
  1,
  10,
  5,
  8,
  0.5,
  0.8,
  0.6,
  10000,
  1000,
  'Sire 1',
  'Dam 1',
  'Dam Sire 1',
  68,
  500,
  'Chestnut',
  'Blaze',
  'No history'
)`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Inserted example data.');
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Closed the database connection.');
});
