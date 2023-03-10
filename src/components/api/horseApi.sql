CREATE TABLE IF NOT EXISTS race_results (
  id INTEGER PRIMARY KEY,
  horse_id INTEGER NOT NULL,
  race_date DATE NOT NULL,
  position INTEGER NOT NULL,
  FOREIGN KEY (horse_id) REFERENCES horses(id)
);
