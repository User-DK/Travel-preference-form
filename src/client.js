
// document.addEventListener('DOMContentLoaded', (event) => {
//   const form = document.querySelector('.survey-form');
//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     //personalDetails
//     const name = document.querySelector('#name');
//     const email = document.querySelector('#email');
//     const age = document.querySelector('#age');
//     const occupation = document.querySelector('#occupation');

//     //Destination Preference
//     const checkbox1 = document.querySelectorAll('.destinationPref input[type="checkbox"]');
//     const destinations = [];

//     checkbox1.forEach(function (checkbox) {
//       if (checkbox.checked) {
//         destinations.push(checkbox.value);
//       }
//     });

//     //travel Activities
//     const checkbox2 = document.querySelectorAll('.travelAct input[type="checkbox"]');
//     const travelActivities = [];
//     checkbox2.forEach(function (checkbox) {
//       if (checkbox.checked) {
//         travelActivities.push(checkbox.value);
//       }
//     })

//     //travel budget
//     const budget = document.querySelector('input[name="budget"]:checked');

//     //accomodation
//     const checkbox3 = document.querySelectorAll('.accomodation input[type="checkbox"]');
//     const accomodation = [];
//     checkbox3.forEach(function (checkbox) {
//       if (checkbox.checked) {
//         accomodation.push(checkbox.value);
//       }
//     })

//     //transportation
//     const transportation = document.querySelector('input[name="transportation"]:checked').value;

//     //travel companions
//     const companions = document.querySelector('input[name="companions"]:checked');

//     //travel duration
//     const duration = document.querySelector('input[name="duration"]:checked');

//     //travel booking
//     const booking = document.querySelector('input[name="booking"]:checked');

//     //cuisine preference
//     const cuisinePref = document.querySelector('input[name="cuisine"]:checked');

//     //language and culture
//     const culture = document.querySelector('input[name="culture"]:checked');

//     //must see
//     const mustSee = document.querySelector('textarea[name="mustSee"]').value;

//     //travel frequency
//     const frequency = document.querySelector('input[name="frequency"]:checked');

//     //seasonal preference
//     const season = document.querySelector('input[name="season"]:checked');

//     //sustainability
//     const sustainability = document.querySelector('input[name="sustainability"]:checked');

//     //prefered travel season
//     const travelSeason = document.querySelector('select[name="season"]').value;

//     //travel insurance
//     const insurance = document.querySelector('input[name="insurance"]:checked');

//     //additional comments
//     const comments = document.querySelector('textarea[name="comments"]').value;


//     //botfield
//     if (document.getElementById('field').value) {
//       console.log("Bot detected, form submission aborted.");
//       event.preventDefault();
//     } else {
//       console.log("Form submitted successfully!");
//     }

//     const userData = {
//       name: name.value,
//       email: email.value,
//       age: age.value,
//       occupation: occupation.value
//     }

//     const preferenceData = {
//       destinations,
//       travelActivities,
//       budget,
//       accomodation,
//       transportation,
//       companions,
//       duration,
//       booking,
//       cuisinePref,
//       culture,
//       mustSee,
//       frequency,
//       season,
//       sustainability,
//       travelSeason,
//       insurance,
//       comments
//     };

//     const data = { userData, preferenceData };


//     const response = await fetch('http://localhost:3000/submitForm', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });

//     if (response.ok) {
//       alert('Form submitted successfully!');
//     } else {
//       alert('Error submitting form');
//     }

//   });
// });


document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('.survey-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    //personalDetails
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const age = document.querySelector('#age').value;
    const occupation = document.querySelector('#occupation').value;

    //Destination Preference
    const checkbox1 = document.querySelectorAll('.destinationPref input[type="checkbox"]');
    const destinations = [];

    checkbox1.forEach(function (checkbox) {
      if (checkbox.checked) {
        destinations.push(checkbox.value);
      }
    });

    //travel Activities
    const checkbox2 = document.querySelectorAll('.travelAct input[type="checkbox"]');
    const travelActivities = [];
    checkbox2.forEach(function (checkbox) {
      if (checkbox.checked) {
        travelActivities.push(checkbox.value);
      }
    })

    //travel budget
    const budget = document.querySelector('input[name="budget"]:checked').value;

    //accomodation
    const checkbox3 = document.querySelectorAll('.accomodation input[type="checkbox"]');
    const accomodation = [];
    checkbox3.forEach(function (checkbox) {
      if (checkbox.checked) {
        accomodation.push(checkbox.value);
      }
    })

    //transportation
    const transportation = document.querySelector('input[name="transportation"]:checked').value;

    //travel companions
    const companions = document.querySelector('input[name="companions"]:checked').value;

    //travel duration
    const duration = document.querySelector('input[name="duration"]:checked').value;

    //travel booking
    const booking = document.querySelector('input[name="booking"]:checked').value;

    //cuisine preference
    const cuisinePref = document.querySelector('input[name="cuisine"]:checked').value;

    //language and culture
    const culture = document.querySelector('input[name="culture"]:checked').value;

    //must see
    const mustSee = document.querySelector('textarea[name="mustSee"]').value;

    //travel frequency
    const frequency = document.querySelector('input[name="frequency"]:checked').value;

    //seasonal preference
    const season = document.querySelector('input[name="season"]:checked').value;

    //sustainability
    const sustainability = document.querySelector('input[name="sustainability"]:checked').value;

    //prefered travel season
    const travelSeason = document.querySelector('select[name="season"]').value;

    //travel insurance
    const insurance = document.querySelector('input[name="insurance"]:checked').value;

    //additional comments
    const comments = document.querySelector('textarea[name="comments"]').value;


    //botfield
    if (document.getElementById('field').value) {
      console.log("Bot detected, form submission aborted.");
      event.preventDefault();
    } 

    const userData = {
      name,
      email,
      age,
      occupation
    }

    const preferenceData = {
      destinations,
      travelActivities,
      budget,
      accomodation,
      transportation,
      companions,
      duration,
      booking,
      cuisinePref,
      culture,
      mustSee,
      frequency,
      season,
      sustainability,
      travelSeason,
      insurance,
      comments
    };

    const data = { userData, preferenceData };


    const response = await fetch('http://localhost:3000/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Error submitting form');
    }

  });
});   
