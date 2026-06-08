function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>

      <ul>
        ${games}
      </ul>
    </div>
  `
}

function createGame(player1, hour, player2, score1 = "-", score2 = "-", broadcasters = []) {

  const player1Name = formatCountryName(player1)
  const player2Name = formatCountryName(player2)

  

  return `
    <li>

      <div class="flag">
        <img 
          src="assets/icon-${player1}.svg" 
          alt="${player1Name}"
          title="${player1Name}"
        >

        <span class="country-name">
        ${player1Name}
        </span>

      </div>

      <div class="match-info">

        <div class="score-box">
          <span>${score1}</span>
          <strong>x</strong>
          <span>${score2}</span>
        </div>

        <small>${hour}</small>
     
        ${broadcasters.length ? `
  <div class="broadcasts">
    ${broadcasters
      .map(channel =>
        `<span class="broadcast-tag">${channel}</span>`
      )
      .join("")}
  </div>
` : ""}

      </div>

      <div class="flag">
        <img 
          src="assets/icon-${player2}.svg" 
          alt="${player2Name}"
          title="${player2Name}"
        >

         <span class="country-name">
         ${player2Name}
        </span>
      </div>

    </li>
  `
}
function formatCountryName(name) {
  const countries = {
    southafrica: "África do Sul",
    southkorea: "Coréia do Sul",
    ivorycoast: "Costa do Marfim",
    capeverde: "Cabo Verde",
    saudia: "Arábia Saudita",
    newzealand: "Nova Zelândia",
    czech: "Tchéquia",
    usa: "Estados Unidos",
    qatar: "Catar",
    switzerland: "Suíça",
    brazil: "Brasil",
    morocco: "Marrocos",
    haiti: "Haiti",
    scotland: "Escócia",
    australia: "Austrália",
    turkey: "Turquia",
    germany: "Alemanha",
    curacao: "Curaçao",
    netherlands: "Holanda",
    japan: "Japão",
    sweden: "Suécia", 
    tunisia: "Tunísia",
    spain: "Espanha",
    belgium: "Bélgica",
    egypt: "Egito", 
    iran: "Irã",
    uruguay: "Uruguai",
    france: "França",   
    senegal: "Senegal",
    iraq: "Iraque",
    norway: "Noruega",
    argentina: "Argentina",
    algeria: "Argélia",
    austria: "Áustria",
    jordan: "Jordânia",
    portugal: "Portugal",
    congo: "Rep. Dem do Congo",
    england: "Inglaterra",
    croatia: "Croácia",
    ghana: "Gana",
    panama: "Panamá",
    colombia: "Colômbia",
    uzbekistan: "Uzbequistão",
    paraguay: "Paraguai",
    bosnia: "Bósnia e Herzegovina",  
    canada: "Canadá",
    mexico: "México",
    ecuador: "Equador",
  }

  return countries[name] || 
    name.charAt(0).toUpperCase() + name.slice(1)
}

const champions = [
  { year: 1930, champion: "Uruguai", flag: "uruguay" },
  { year: 1934, champion: "Itália", flag: "italy" },
  { year: 1938, champion: "Itália", flag: "italy" },
  { year: 1950, champion: "Uruguai", flag: "uruguay" },
  { year: 1954, champion: "Alemanha", flag: "germany" },
  { year: 1958, champion: "Brasil", flag: "brazil" },
  { year: 1962, champion: "Brasil", flag: "brazil" },
  { year: 1966, champion: "Inglaterra", flag: "england" },
  { year: 1970, champion: "Brasil", flag: "brazil" },
  { year: 1974, champion: "Alemanha", flag: "germany" },
  { year: 1978, champion: "Argentina", flag: "argentina" },
  { year: 1982, champion: "Itália", flag: "italy" },
  { year: 1986, champion: "Argentina", flag: "argentina" },
  { year: 1990, champion: "Alemanha", flag: "germany" },
  { year: 1994, champion: "Brasil", flag: "brazil" },
  { year: 1998, champion: "França", flag: "france" },
  { year: 2002, champion: "Brasil", flag: "brazil" },
  { year: 2006, champion: "Itália", flag: "italy" },
  { year: 2010, champion: "Espanha", flag: "spain" },
  { year: 2014, champion: "Alemanha", flag: "germany" },
  { year: 2018, champion: "França", flag: "france" },
  { year: 2022, champion: "Argentina", flag: "argentina" }


]

function renderChampions() {

  const championsList =
    document.querySelector("#championsList")

  if (!championsList) return

  let html = ""

  champions.forEach(cup => {

    html += `
  <div class="champion-card">

    <span class="champion-year">
      ${cup.year}
    </span>

    <div class="champion-team">

      <img
        src="assets/icon-${cup.flag}.svg"
        alt="${cup.champion}"
      >

      <strong>
        ${cup.champion}
      </strong>

    </div>

  </div>
    `
  })

  championsList.innerHTML = html
}


document.querySelector("#cards").innerHTML =
  createCard(
  "11/06",
  "quinta",
  createGame("mexico", "16:00", "southafrica", "-", "-", ["Globo", "SporTV", "CazéTV", "SBT"]) +
  createGame("southkorea", "23:00", "czech", "-", "-", ["CazeTV"])) +
    createCard(
    "12/06",
    "sexta",
    createGame("canada", "16:00", "bosnia", "-", "-", ["CazéTV"]) +
      createGame("usa", "22:00", "paraguay", "-", "-", ["Globo", "SporTV", "CazéTV", "SBT"])
  ) +
  createCard(
    "13/06",
    "sábado",
    createGame("qatar", "16:00", "switzerland", "-", "-", ["CazéTV"]) +
      createGame("brazil", "19:00", "morocco", "-", "-", ["Globo", "SporTV", "CazéTV", "SBT"]) +
      createGame("haiti", "22:00", "scotland", "-", "-", ["CazéTV"])
    ) +
  createCard(
    "14/06",
    "domingo",
    createGame("australia", "01:00", "turkey", "-", "-", ["Globo", "SporTV", "CazéTV"]) +
      createGame("germany", "14:00", "curacao", "-", "-", ["CazéTV"]) +
      createGame("netherlands", "17:00", "japan", "-", "-", ["Globo", "SporTV", "CazéTV", "SBT"]) +
      createGame("ivorycoast", "20:00", "ecuador", "-", "-", ["Globo", "SporTV", "CazéTV", ]) +
      createGame("sweden", "23:00", "tunisia", "-", "-", ["CazéTV", "Globo", "SporTV"])
    )+
  createCard(
    "15/06",
    "segunda",
    createGame("spain", "13:00", "capeverde", "-", "-", ["CazéTV"]) +
      createGame("belgium", "16:00", "egypt", "-", "-", ["CazéTV", "Globo", "SporTV"]) +
      createGame("saudia", "19:00", "uruguay", "-", "-", ["CazéTV", "Globo", "SporTV, SBT"]) +
      createGame("iran", "22:00", "newzealand", "-", "-", ["CazéTV"])
  ) +
  createCard(
    "16/06",
    "terça",
    createGame("france", "16:00", "senegal", "-", "-", ["CazéTV", "Globo", "SporTV", "SBT"]) +
      createGame("iraq", "19:00", "norway", "-", "-", ["CazéTV"]) +
      createGame("argentina", "22:00", "algeria", "-", "-", ["CazéTV"])
    ) +
  createCard(
    "17/06",
    "quarta",
    createGame("austria", "01:00", "jordan", "-", "-", ["CazéTV", "Globo", "SporTV"]) +
      createGame("portugal", "14:00", "congo", "-", "-", ["CazéTV"]) +
      createGame("england", "17:00", "croatia", "-", "-", ["CazéTV", "Globo", "SporTV", "SBT"]) +
      createGame("ghana", "20:00", "panama", "-", "-", ["CazéTV"]) +
      createGame("uzbekistan", "23:00", "colombia", "-", "-", ["CazéTV", "Globo", "SporTV"])
    ) +
  createCard(
    "18/06",
    "quinta",
    createGame("czech", "13:00", "southafrica", "-", "-", ["CazéTV"]) +
      createGame("switzerland", "16:00", "bosnia", "-", "-", ["CazéTV", "Globo", "SporTV", "SBT"]) +
      createGame("canada", "19:00", "qatar", "-", "-", ["CazéTV"]) +
      createGame("mexico", "16:00", "southkorea", "-", "-", ["CazéTV", "Globo", "SporTV",])
  ) +
  createCard(
    "19/06",
    "sexta",
    createGame("usa", "16:00", "australia", "-", "-", ["CazéTV"]) +
      createGame("scotland", "19:00", "morocco", "-", "-", ["CazéTV"]) +
      createGame("brazil", "21:30", "haiti", "-", "-", ["CazéTV", "Globo", "SporTV", "SBT"])
    ) +
  createCard(
    "20/06",
    "sabado",
    createGame("turkey", "00:00", "paraguay", "-", "-", ["CazéTV", "Globo", "SporTV"]) +
      createGame("netherlands", "14:00", "sweden", "-", "-", ["CazéTV"]) +
      createGame("germany", "17:00", "ivorycoast", "-", "-", ["CazéTV", "Globo", "SporTV", "SBT"]) +
      createGame("ecuador", "21:00", "curacao", "-", "-", ["CazéTV"])
  ) +
  createCard(
    "21/06",
    "domingo",
    createGame("tunisia", "01:00", "japan", "-", "-", ["CazéTV", "Globo", "SporTV", ]) +
      createGame("spain", "13:00", "saudia", "-", "-", ["CazéTV"]) +
      createGame("belgium", "16:00", "iran", "-", "-", ["CazéTV"]) +
      createGame("uruguay", "19:00", "capeverde", "-", "-", ["CazéTV", "Globo", "SporTV", "SBT"]) +
      createGame("newzealand", "22:00", "egypt", "-", "-", ["CazéTV", "Globo", "SporTV"] )
  ) +
  createCard(
    "22/06",
    "segunda",
    createGame("argentina", "14:00", "austria", "-", "-", ["CazéTV", "Globo", "SporTV", "SBT"]) +
      createGame("france", "18:00", "iraq", "-", "-", ["CazéTV"]) +
      createGame("norway", "21:00", "senegal", "-", "-", ["CazéTV", "Globo", "SporTV"])
    ) +
      createCard(
    "23/06",
    "terça",
    createGame("jordan", "00:00", "algeria", "-", "-", ["CazéTV", "Globo", "SporTV",]) +
      createGame("portugal", "14:00", "uzbekistan", "-", "-", ["CazéTV"]) +
      createGame("england", "17:00", "ghana", "-", "-", ["CazéTV", "Globo", "SporTV", "SBT"]) +
      createGame("panama", "20:00", "croatia", "-", "-", ["CazéTV"]) +
      createGame("colombia", "23:00", "congo", "-", "-", ["CazéTV", "Globo", "SporTV"] )
    ) +
    createCard(
    "24/06",
    "quarta",
    createGame("switzerland", "16:00", "canada") +
      createGame("bosnia", "16:00", "qatar") +
      createGame("scotland", "19:00", "brazil", "-", "-", ["CazéTV", "Globo", "SporTV", "SBT"]) +
      createGame("morocco", "19:00", "haiti") +
      createGame("czech", "22:00", "mexico") +
      createGame("southafrica", "22:00", "southkorea")
    ) +
    createCard(
    "25/06",
    "quinta",
    createGame("ecuador", "17:00", "germany") +
      createGame("curacao", "17:00", "ivorycoast") +
      createGame("japan", "20:00", "sweden") +
      createGame("tunisia", "20:00", "netherlands") +
        createGame("turkey", "23:00", "usa") +
          createGame("paraguay", "23:00", "australia")
    ) +
    createCard(
    "26/06",
    "sexta",
    createGame("norway", "16:00", "france") +
      createGame("senegal", "16:00", "iraq") +
      createGame("capeverde", "21:00", "saudia") +
      createGame("uruguay", "21:00", "spain")
    ) +
    createCard(
    "27/06",    
    "sabado",
    createGame("egypt", "00:00", "iran") +
      createGame("newzealand", "00:00", "belgium") +
      createGame("panama", "18:00", "england") +
      createGame("croatia", "18:00", "ghana") + 
      createGame("colombia", "20:30", "portugal") +
      createGame("congo", "20:30", "uzbekistan") +
      createGame("algeria", "23:00", "austria") +
      createGame("jordan", "23:00", "argentina")
    ) 

    if ("serviceWorker" in navigator) {

  navigator.serviceWorker
    .register("./service-worker.js")

    .then(() => {
      console.log("Service Worker registrado")
    })

}

async function getLiveGames() {

  const response = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
    {
      method: "GET",

      headers: {
        "X-RapidAPI-Key": "ee4ff7aed956a2b95e3744750f395191",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
      }
    }
  )

  const data = await response.json()

  console.log(data)

}

const btnGames =
  document.querySelector("#btnGames")

const btnChampions =
  document.querySelector("#btnChampions")

const gamesScreen =
  document.querySelector("#gamesScreen")

const championsScreen =
  document.querySelector("#championsScreen")

if (
  btnGames &&
  btnChampions &&
  gamesScreen &&
  championsScreen
) {

  btnGames.addEventListener("click", () => {

    gamesScreen.classList.remove("hidden")
    championsScreen.classList.add("hidden")

    btnGames.classList.add("active")
    btnChampions.classList.remove("active")
  })

  btnChampions.addEventListener("click", () => {

    gamesScreen.classList.add("hidden")
    championsScreen.classList.remove("hidden")

    btnGames.classList.remove("active")
    btnChampions.classList.add("active")
  })

  renderChampions()
}

function updateCountdown() {

  const worldCupStart = new Date("2026-06-11T16:00:00");

  const now = new Date();

  const difference = worldCupStart - now;

  if (difference <= 0) {

    document.querySelector("#countdown").innerHTML =
      "⚽ A Copa do Mundo 2026 começou!";

    return;
  }

  const days =
    Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours =
    Math.floor(
      (difference % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

  const minutes =
    Math.floor(
      (difference % (1000 * 60 * 60)) /
      (1000 * 60)
    );

  const seconds =
    Math.floor(
      (difference % (1000 * 60)) / 1000
    );

  document.querySelector("#countdown").innerHTML =
    `
      ⏳ Faltam
      <strong>${days}</strong> dias,
      <strong>${hours}</strong>h,
      <strong>${minutes}</strong>min e
      <strong>${seconds}</strong>s
      para a Copa do Mundo FIFA 2026
    `;
}

updateCountdown();

setInterval(updateCountdown, 1000);
