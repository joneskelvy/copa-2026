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

function createGame(player1, hour, player2, score1 = "-", score2 = "-") {

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
      </div>

      <div class="match-info">

        <div class="score-box">
          <span>${score1}</span>
          <strong>x</strong>
          <span>${score2}</span>
        </div>

        <small>${hour}</small>

      </div>

      <div class="flag">
        <img 
          src="assets/icon-${player2}.svg" 
          alt="${player2Name}"
          title="${player2Name}"
        >
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
    czech: "Tchequia",
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

document.querySelector("#cards").innerHTML =
  createCard(
  "11/06",
  "quinta",
  createGame("mexico", "16:00", "southafrica") +
  createGame("southkorea", "23:00", "czech")) +
    createCard(
    "12/06",
    "sexta",
    createGame("canada", "16:00", "bosnia") +
      createGame("usa", "22:00", "paraguay")
  ) +
  createCard(
    "13/06",
    "sábado",
    createGame("qatar", "16:00", "switzerland") +
      createGame("brazil", "19:00", "morocco") +
      createGame("haiti", "22:00", "scotland")
    ) +
  createCard(
    "14/06",
    "domingo",
    createGame("australia", "01:00", "turkey") +
      createGame("germany", "14:00", "curacao") +
      createGame("netherlands", "17:00", "japan") +
      createGame("ivorycoast", "20:00", "ecuador") +
      createGame("sweden", "23:00", "tunisia")
    )+
  createCard(
    "15/06",
    "segunda",
    createGame("spain", "13:00", "capeverde") +
      createGame("belgium", "16:00", "egypt") +
      createGame("saudia", "19:00", "uruguay") +
      createGame("iran", "22:00", "newzealand")
  ) +
  createCard(
    "16/06",
    "terça",
    createGame("france", "16:00", "senegal") +
      createGame("iraq", "19:00", "norway") +
      createGame("argentina", "22:00", "algeria")
    ) +
  createCard(
    "17/06",
    "quarta",
    createGame("austria", "01:00", "jordan") +
      createGame("portugal", "14:00", "congo") +
      createGame("england", "17:00", "croatia") +
      createGame("ghana", "20:00", "panama") +
      createGame("uzbekistan", "23:00", "colombia")
    ) +
  createCard(
    "18/06",
    "quinta",
    createGame("czech", "13:00", "southafrica") +
      createGame("switzerland", "16:00", "bosnia") +
      createGame("canada", "19:00", "qatar") +
      createGame("mexico", "16:00", "southkorea")
  ) +
  createCard(
    "19/06",
    "sexta",
    createGame("usa", "16:00", "australia") +
      createGame("scotland", "19:00", "morocco") +
      createGame("brazil", "21:30", "haiti")
    ) +
  createCard(
    "20/06",
    "sabado",
    createGame("turkey", "00:00", "paraguay") +
      createGame("netherlands", "14:00", "sweden") +
      createGame("germany", "17:00", "ivorycoast") +
      createGame("ecuador", "21:00", "curacao")
  ) +
  createCard(
    "21/06",
    "domingo",
    createGame("tunisia", "01:00", "japan") +
      createGame("spain", "13:00", "saudia") +
      createGame("belgium", "16:00", "iran") +
      createGame("uruguay", "19:00", "capeverde") +
      createGame("newzealand", "22:00", "egypt")
  ) +
  createCard(
    "22/06",
    "segunda",
    createGame("argentina", "14:00", "austria") +
      createGame("france", "18:00", "iraq") +
      createGame("norway", "21:00", "senegal")
    ) +
      createCard(
    "23/06",
    "terça",
    createGame("jordan", "00:00", "algeria") +
      createGame("portugal", "14:00", "uzbekistan") +
      createGame("england", "17:00", "ghana") +
      createGame("panama", "20:00", "croatia") +
      createGame("colombia", "23:00", "congo")
    ) +
    createCard(
    "24/06",
    "quarta",
    createGame("switzerland", "16:00", "canada") +
      createGame("bosnia", "16:00", "qatar") +
      createGame("scotland", "19:00", "brazil") +
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

      
