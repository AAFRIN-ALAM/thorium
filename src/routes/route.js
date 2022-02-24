const express = require("express");
const router = express.Router();
const players = [
  {
    name: "Aafrin",
    dob: "07/05/2001",
    gender: "female",
    city: "Ghaziabad",
    sports: ["Badminton"],
    bookings: [
      {
        bookingNumber: 1,
        sportId: "",
        centerId: "",
        type: "private",
        slot: "1234567890",
        bookedOn: "30/01/2021",
        bookedFor: "03/06/2021",
      },
      {
        bookingNumber: 2,
        sportId: "",
        centerId: "",
        type: "private",
        slot: "12345678901",
        bookedOn: "25/09/2001",
        bookedFor: "02/11/2001",
      },
    ],
  },
  {
    name: "Ayush",
    dob: "01/02/1999",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
    bookings: [],
  },
  {
    name: "Sana",
    dob: "07/07/2002",
    gender: "female",
    city: "mumbai",
    sports: [""],
    bookings: [],
  },
];


//first problem Solution.........

router.post("/players/:name/:dob/:gender/:city/:sports/:bookings", function (req, res) {
    let newPlayer = {};
    newPlayer.name = req.params.name;
    newPlayer.dob = req.params.dob;
    newPlayer.gender = req.params.gender;
    newPlayer.city = req.params.city;
    newPlayer.sports = [req.params.sports];
    newPlayer.bookings = [req.params.bookings];
    for (let i = 0; i < players.length; i++) {
      if (players[i].name === newPlayer.name) {
        res.send("name already exist");
      }
    }
    players.push(newPlayer);
    console.log(newPlayer);
    res.send(players);
  }
);

//Second problem solution.......

router.post("/players/:playerName/bookings/:bookingId", function (req, res) {
  let userName = req.params.playerName;
  let userBookingId = req.params.bookingId;
  let userBookings = req.body;

  for (let i = 0; i < players.length; i++) {
    if (players[i].name == userName) {
      let arr = players[i].bookings;
      if (arr.length === 0) {
        arr.push(userBookings);
        res.send(players);
      } else {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j].bookingNumber == userBookingId) {
            res.send("booking ID already exist");
           break;
          }
          else if(j ===arr.length-1){
            arr.push(userBookings);
            res.send(players);
          }
        }
        
      }
    }
  }
  res.send("name does not exist");
});

module.exports = router;
