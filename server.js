const express = require('express');
const cors = require('cors');
const app = express();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('UserData.Db');

app.use(cors());
app.use(express.json()); // for parsing application/json

app.post('/submitForm', async (req, res) => {
  const data = req.body;
  const { userData, preferenceData } = data;
  const { destinations, travelActivities, budget, accomodation, transportation, companions, duration, booking, cuisinePref, culture, mustSee, frequency, season, sustainability, travelSeason, insurance, comments } = preferenceData;
  const { email } = userData;
  try {
    await createTable();
    await insertFormUserDataIntoDb(userData);
    for (const destination of destinations) {
      await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Destination', PreferenceValue: destination, email: email });
    }
    for (const activity of travelActivities) {
      await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Travel Activities', PreferenceValue: activity, email: email });
    }
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Budget', PreferenceValue: budget, email: email });

    for (const accomodate of accomodation) {
      await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Accomodation', PreferenceValue: accomodate, email: email });
    }

    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Transportation', PreferenceValue: transportation, email: email });
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Travel Companions', PreferenceValue: companions, email: email });
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Travel Duration', PreferenceValue: duration, email: email });
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Booking', PreferenceValue: booking, email: email });
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Cuisine Preference', PreferenceValue: cuisinePref, email: email });
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Culture', PreferenceValue: culture, email: email });
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Must See', PreferenceValue: mustSee, email: email });
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Travel Frequency', PreferenceValue: frequency, email: email });
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Seasonal Preference', PreferenceValue: season, email: email });
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Sustainability', PreferenceValue: sustainability, email: email });
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Travel Season', PreferenceValue: travelSeason, email: email });
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Insurance', PreferenceValue: insurance, email: email });
    await insertFormPreferencesDataIntoDb({ PreferenceCategory: 'Comments', PreferenceValue: comments, email: email });
    res.send('Form submitted successfully!');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error submitting form');

  }

  console.log('Form submitted successfully!');
  res.send('Form submitted successfully!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));

function createTable() {
  return new Promise((resolve, reject) => {
    db.run(`CREATE TABLE IF NOT EXISTS Users (
      Name TEXT,
      Email TEXT PRIMARY KEY,
      Age INTEGER,
      Occupation TEXT
    )`, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });

    db.run(`CREATE TABLE IF NOT EXISTS Preferences (
      PreferenceCategory TEXT,
      PreferenceValue TEXT,
      Email TEXT,
      FOREIGN KEY (Email) REFERENCES Users(Email)
    )`, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}


function insertFormUserDataIntoDb(formData) {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO Users (name, email, age , occupation) VALUES (?, ?, ?, ?)',
      [formData.name, formData.email, formData.age, formData.occupation], (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("Inserted into Users table successfully!");
          resolve();
        }
      });
  });
}

function insertFormPreferencesDataIntoDb({ PreferenceCategory, PreferenceValue, email }) {
  return new Promise((resolve) => {
    db.run('INSERT INTO Preferences (PreferenceCategory, PreferenceValue, Email) VALUES (?, ?, ?)',
      [PreferenceCategory, PreferenceValue, email], (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Inserted into Preferences table successfully!");
          resolve();
        }
      });
  });
}


