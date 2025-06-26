const players = [
  {
    name: "Player One",
    strikeRate: "135.2",
    matches: 120,
    jersey: 10,
    best: "102* vs Australia"
  },
  {
    name: "Player Two",
    strikeRate: "98.6",
    matches: 88,
    jersey: 7,
    best: "5 wickets vs England"
  },
  {
    name: "Player Three",
    strikeRate: "110.0",
    matches: 104,
    jersey: 99,
    best: "85* + 3 wickets vs NZ"
  },
  {
    name: "Player Four",
    strikeRate: "125.5",
    matches: 72,
    jersey: 23,
    best: "4 stumpings vs SL"
  },
  {
    name: "Player Five",
    strikeRate: "140.3",
    matches: 98,
    jersey: 18,
    best: "112* vs Bangladesh"
  },
  {
    name: "Player Six",
    strikeRate: "90.7",
    matches: 60,
    jersey: 33,
    best: "4/21 vs Pakistan"
  }
];

function openModal(index) {
  const p = players[index];
  document.getElementById("modal-name").textContent = p.name;
  document.getElementById("modal-strike").textContent = p.strikeRate;
  document.getElementById("modal-matches").textContent = p.matches;
  document.getElementById("modal-jersey").textContent = p.jersey;
  document.getElementById("modal-best").textContent = p.best;
  document.getElementById("playerModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("playerModal").classList.add("hidden");
}
