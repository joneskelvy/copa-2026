// O robô do GitHub lê este array todas as noites e altera os hifens pelos gols reais
const matchesData = [
  {
    date: "11/06",
    day: "quinta",
    games: [
      { id: "mexico-southafrica", home: "mexico", hour: "16:00", away: "southafrica", score1: "-", score2: "-", broadcasters: ["Globo", "SporTV", "CazéTV", "SBT"] },
      { id: "southkorea-czech", home: "southkorea", hour: "23:00", away: "czech", score1: "-", score2: "-", broadcasters: ["CazéTV"] }
    ]
  },
  {
    date: "12/06",
    day: "sexta",
    games: [
      { id: "canada-bosnia", home: "canada", hour: "16:00", away: "bosnia", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "usa-paraguay", home: "usa", hour: "22:00", away: "paraguay", score1: "-", score2: "-", broadcasters: ["Globo", "SporTV", "CazéTV", "SBT"] }
    ]
  },
  {
    date: "13/06",
    day: "sábado",
    games: [
      { id: "qatar-switzerland", home: "qatar", hour: "16:00", away: "switzerland", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "brazil-morocco", home: "brazil", hour: "19:00", away: "morocco", score1: "-", score2: "-", broadcasters: ["Globo", "SporTV", "CazéTV", "SBT"] },
      { id: "haiti-scotland", home: "haiti", hour: "22:00", away: "scotland", score1: "-", score2: "-", broadcasters: ["CazéTV"] }
    ]
  },
  {
    date: "14/06",
    day: "domingo",
    games: [
      { id: "australia-turkey", home: "australia", hour: "01:00", away: "turkey", score1: "-", score2: "-", broadcasters: ["Globo", "SporTV", "CazéTV"] },
      { id: "germany-curacao", home: "germany", hour: "14:00", away: "curacao", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "netherlands-japan", home: "netherlands", hour: "17:00", away: "japan", score1: "-", score2: "-", broadcasters: ["Globo", "SporTV", "CazéTV", "SBT"] },
      { id: "ivorycoast-ecuador", home: "ivorycoast", hour: "20:00", away: "ecuador", score1: "-", score2: "-", broadcasters: ["Globo", "SporTV", "CazéTV"] },
      { id: "sweden-tunisia", home: "sweden", hour: "23:00", away: "tunisia", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV"] }
    ]
  },
  {
    date: "15/06",
    day: "segunda",
    games: [
      { id: "spain-capeverde", home: "spain", hour: "13:00", away: "capeverde", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "belgium-egypt", home: "belgium", hour: "16:00", away: "egypt", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "saudia-uruguay", home: "saudia", hour: "19:00", away: "uruguay", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "iran-newzealand", home: "iran", hour: "22:00", away: "newzealand", score1: "-", score2: "-", broadcasters: ["CazéTV"] }
    ]
  },
  {
    date: "16/06",
    day: "terça",
    games: [
      { id: "france-senegal", home: "france", hour: "16:00", away: "senegal", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "iraq-norway", home: "iraq", hour: "19:00", away: "norway", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "argentina-algeria", home: "argentina", hour: "22:00", away: "algeria", score1: "-", score2: "-", broadcasters: ["CazéTV"] }
    ]
  },
  {
    date: "17/06",
    day: "quarta",
    games: [
      { id: "austria-jordan", home: "austria", hour: "01:00", away: "jordan", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "portugal-congo", home: "portugal", hour: "14:00", away: "congo", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "england-croatia", home: "england", hour: "17:00", away: "croatia", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "ghana-panama", home: "ghana", hour: "20:00", away: "panama", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "uzbekistan-colombia", home: "uzbekistan", hour: "23:00", away: "colombia", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV"] }
    ]
  },
  {
    date: "18/06",
    day: "quinta",
    games: [
      { id: "czech-southafrica", home: "czech", hour: "13:00", away: "southafrica", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "switzerland-bosnia", home: "switzerland", hour: "16:00", away: "bosnia", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "canada-qatar", home: "canada", hour: "19:00", away: "qatar", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "mexico-southkorea", home: "mexico", hour: "16:00", away: "southkorea", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV"] }
    ]
  },
  {
    date: "19/06",
    day: "sexta",
    games: [
      { id: "usa-australia", home: "usa", hour: "16:00", away: "australia", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "scotland-morocco", home: "scotland", hour: "19:00", away: "morocco", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "brazil-haiti", home: "brazil", hour: "21:30", away: "haiti", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] }
    ]
  },
  {
    date: "20/06",
    day: "sabado",
    games: [
      { id: "turkey-paraguay", home: "turkey", hour: "00:00", away: "paraguay", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "netherlands-sweden", home: "netherlands", hour: "14:00", away: "sweden", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "germany-ivorycoast", home: "germany", hour: "17:00", away: "ivorycoast", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "ecuador-curacao", home: "ecuador", hour: "21:00", away: "curacao", score1: "-", score2: "-", broadcasters: ["CazéTV"] }
    ]
  },
  {
    date: "21/06",
    day: "domingo",
    games: [
      { id: "tunisia-japan", home: "tunisia", hour: "01:00", away: "japan", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "spain-saudia", home: "spain", hour: "13:00", away: "saudia", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "belgium-iran", home: "belgium", hour: "16:00", away: "iran", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "uruguay-capeverde", home: "uruguay", hour: "19:00", away: "capeverde", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "newzealand-egypt", home: "newzealand", hour: "22:00", away: "egypt", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV"] }
    ]
  },
  {
    date: "22/06",
    day: "segunda",
    games: [
      { id: "argentina-austria", home: "argentina", hour: "14:00", away: "austria", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "france-iraq", home: "france", hour: "18:00", away: "iraq", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "norway-senegal", home: "norway", hour: "21:00", away: "senegal", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV"] }
    ]
  },
  {
    date: "23/06",
    day: "terça",
    games: [
      { id: "jordan-algeria", home: "jordan", hour: "00:00", away: "algeria", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "portugal-uzbekistan", home: "portugal", hour: "14:00", away: "uzbekistan", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "england-ghana", home: "england", hour: "17:00", away: "ghana", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "panama-croatia", home: "panama", hour: "20:00", away: "croatia", score1: "-", score2: "-", broadcasters: ["CazéTV"] },
      { id: "colombia-congo", home: "colombia", hour: "23:00", away: "congo", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV"] }
    ]
  },
  {
    date: "24/06",
    day: "quarta",
    games: [
      { id: "switzerland-canada", home: "switzerland", hour: "16:00", away: "canada", score1: "-", score2: "-", broadcasters: [] },
      { id: "bosnia-qatar", home: "bosnia", hour: "16:00", away: "qatar", score1: "-", score2: "-", broadcasters: [] },
      { id: "scotland-brazil", home: "scotland", hour: "19:00", away: "brazil", score1: "-", score2: "-", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "morocco-haiti", home: "morocco", hour: "19:00", away: "haiti", score1: "-", score2: "-", broadcasters: [] },
      { id: "czech-mexico", home: "czech", hour: "22:00", away: "mexico", score1: "-", score2: "-", broadcasters: [] },
      { id: "southafrica-southkorea", home: "southafrica", hour: "22:00", away: "southkorea", score1: "-", score2: "-", broadcasters: [] }
    ]
  },
  {
    date: "25/06",
    day: "quinta",
    games: [
      { id: "ecuador-germany", home: "ecuador", hour: "17:00", away: "germany", score1: "-", score2: "-", broadcasters: [] },
      { id: "curacao-ivorycoast", home: "curacao", hour: "17:00", away: "ivorycoast", score1: "-", score2: "-", broadcasters: [] },
      { id: "japan-sweden", home: "japan", hour: "20:00", away: "sweden", score1: "-", score2: "-", broadcasters: [] },
      { id: "tunisia-netherlands", home: "tunisia", hour: "20:00", away: "netherlands", score1: "-", score2: "-", broadcasters: [] },
      { id: "turkey-usa", home: "turkey", hour: "23:00", away: "usa", score1: "-", score2: "-", broadcasters: [] },
      { id: "paraguay-australia", home: "paraguay", hour: "23:00", away: "australia", score1: "-", score2: "-", broadcasters: [] }
    ]
  },
  {
    date: "26/06",
    day: "sexta",
    games: [
      { id: "norway-france", home: "norway", hour: "16:00", away: "france", score1: "-", score2: "-", broadcasters: [] },
      { id: "senegal-iraq", home: "senegal", hour: "16:00", away: "iraq", score1: "-", score2: "-", broadcasters: [] },
      { id: "capeverde-saudia", home: "capeverde", hour: "21:00", away: "saudia", score1: "-", score2: "-", broadcasters: [] },
      { id: "uruguay-spain", home: "uruguay", hour: "21:00", away: "spain", score1: "-", score2: "-", broadcasters: [] }
    ]
  },
  {
    date: "27/06",
    day: "sabado",
    games: [
      { id: "egypt-iran", home: "egypt", hour: "00:00", away: "iran", score1: "-", score2: "-", broadcasters: [] },
      { id: "newzealand-belgium", home: "newzealand", hour: "00:00", away: "belgium", score1: "-", score2: "-", broadcasters: [] },
      { id: "panama-england", home: "panama", hour: "18:00", away: "england", score1: "-", score2: "-", broadcasters: [] },
      { id: "croatia-ghana", home: "croatia", hour: "18:00", away: "ghana", score1: "-", score2: "-", broadcasters: [] },
      { id: "colombia-portugal", home: "colombia", hour: "20:30", away: "portugal", score1: "-", score2: "-", broadcasters: [] },
      { id: "congo-uzbekistan", home: "congo", hour: "20:30", away: "uzbekistan", score1: "-", score2: "-", broadcasters: [] },
      { id: "algeria-austria", home: "algeria", hour: "23:00", away: "austria", score1: "-", score2: "-", broadcasters: [] },
      { id: "jordan-argentina", home: "jordan", hour: "23:00", away: "argentina", score1: "-", score2: "-", broadcasters: [] }
    ]
  }
];

// Mapeamento dos grupos da Copa de 2026
const groupsMapping = {
  "Grupo A": ["mexico", "southafrica", "czech", "southkorea"],
  "Grupo B": ["canada", "bosnia", "usa", "paraguay"],
  "Grupo C": ["qatar", "switzerland", "brazil", "morocco"],
  "Grupo D": ["haiti", "scotland", "australia", "turkey"],
  "Grupo E": ["germany", "curacao", "netherlands", "japan"],
  "Grupo F": ["ivorycoast", "ecuador", "sweden", "tunisia"],
  "Grupo G": ["spain", "capeverde", "belgium", "egypt"],
  "Grupo H": ["saudia", "uruguay", "iran", "newzealand"],
  "Grupo I": ["france", "senegal", "iraq", "norway"],
  "Grupo J": ["argentina", "algeria", "austria", "jordan"],
  "Grupo K": ["portugal", "congo", "england", "croatia"],
  "Grupo L": ["ghana", "panama", "uzbekistan", "colombia"]
};

// ==========================================
// CÁLCULO AUTOMÁTICO DOS GRUPOS
// ==========================================
function calculateGroups() {
  const tableData = {};

  // Inicializa todos os países mapeados com 0 pontos
  Object.values(groupsMapping).flat().forEach(country => {
    tableData[country] = { name: country, P: 0, V: 0, E: 0, D: 0, GP: 0, GC: 0, SG: 0 };
  });

  // Percorre todos os blocos de dias do seu matchesData
  matchesData.forEach(dayBlock => {
    dayBlock.games.forEach(game => {
      if (game.score1 !== "-" && game.score2 !== "-") {
        const g1 = parseInt(game.score1);
        const g2 = parseInt(game.score2);
        const p1 = game.home;
        const p2 = game.away;

        if (!tableData[p1] || !tableData[p2]) return;

        tableData[p1].GP += g1; tableData[p1].GC += g2;
        tableData[p2].GP += g2; tableData[p2].GC += g1;

        if (g1 > g2) {
          tableData[p1].P += 3; tableData[p1].V += 1;
          tableData[p2].D += 1;
        } else if (g2 > g1) {
          tableData[p2].P += 3; tableData[p2].V += 1;
          tableData[p1].D += 1;
        } else {
          tableData[p1].P += 1; tableData[p1].E += 1;
          tableData[p2].P += 1; tableData[p2].E += 1;
        }

        tableData[p1].SG = tableData[p1].GP - tableData[p1].GC;
        tableData[p2].SG = tableData[p2].GP - tableData[p2].GC;
      }
    });
  });

  return tableData;
}

// ==========================================
// RENDERIZAÇÃO DA TABELA DE GRUPOS
// ==========================================
function renderGroupsTable() {
  const container = document.querySelector("#groupsContainer");
  if (!container) return;

  const stats = calculateGroups();
  let html = "";

  Object.entries(groupsMapping).forEach(([groupName, teams]) => {
    // Ordenação (Pontos -> Vitórias -> Saldo de Gols)
    const sortedTeams = teams
      .map(t => stats[t] || { name: t, P: 0, V: 0, E: 0, D: 0, GP: 0, GC: 0, SG: 0 })
      .sort((a, b) => b.P - a.P || b.V - a.V || b.SG - a.SG);

    let rowsHtml = "";
    sortedTeams.forEach((team, index) => {
      const formattedName = formatCountryName(team.name);
      
      rowsHtml += `
        <tr>
          <td><span class="font-bold">${index + 1}°</span></td>
          <td><img class="table-flag" src="assets/icon-${team.name}.svg" alt="${formattedName}"> ${formattedName}</td>
          <td class="text-center font-bold">${team.P}</td>
          <td class="text-center">${team.V}</td>
          <td class="text-center">${team.SG}</td>
        </tr>
      `;
    });

    html += `
      <div class="group-card">
        <h3>${groupName}</h3>
        <table class="group-table">
          <thead>
            <tr>
              <th style="width: 10%">#</th>
              <th style="width: 50%">Seleção</th>
              <th class="text-center" style="width: 13%">P</th>
              <th class="text-center" style="width: 13%">V</th>
              <th class="text-center" style="width: 14%">SG</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  });

  container.innerHTML = html;
}

function createCard(date, day, gamesHtml) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${gamesHtml}
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
        <img src="assets/icon-${player1}.svg" alt="${player1Name}" title="${player1Name}">
        <span class="country-name">${player1Name}</span>
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
            ${broadcasters.map(channel => `<span class="broadcast-tag">${channel}</span>`).join("")}
          </div>
        ` : ""}
      </div>

      <div class="flag">
        <img src="assets/icon-${player2}.svg" alt="${player2Name}" title="${player2Name}">
         <span class="country-name">${player2Name}</span>
      </div>
    </li>
  `
}

function formatCountryName(name) {
  const names = {
    southafrica: "África do Sul",
    southkorea: "Coreia do Sul",
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
    congo: "Rep. Dem. do Congo",
    england: "Inglaterra",
    croatia: "Croácia",
    ghana: "Gana",
    panama: "Panamá",
    colombia: "Colômbia",
    uzbekistan: "Uzbequistão",
    paraguay: "Paraguai",
    bosnia: "Bósnia e Herz.",  
    canada: "Canadá",
    mexico: "México",
    ecuador: "Equador",
  };
  return names[name] || name.toUpperCase();
}

function renderAllCards(searchTerm = "") {
  const cardsContainer = document.querySelector("#cards");
  if (!cardsContainer) return;

  let htmlResult = "";
  const cleanedSearch = searchTerm.trim().toLowerCase();

  matchesData.forEach(dayBlock => {
    let gamesHtml = "";
    let dayHasMatches = false;
    
    dayBlock.games.forEach(game => {
      const homeName = formatCountryName(game.home).toLowerCase();
      const awayName = formatCountryName(game.away).toLowerCase();
      
      if (
        cleanedSearch === "" || 
        homeName.includes(cleanedSearch) || 
        awayName.includes(cleanedSearch) ||
        game.home.toLowerCase().includes(cleanedSearch) ||
        game.away.toLowerCase().includes(cleanedSearch)
      ) {
        gamesHtml += createGame(game.home, game.hour, game.away, game.score1, game.score2, game.broadcasters);
        dayHasMatches = true;
      }
    });

    if (dayHasMatches) {
      htmlResult += createCard(dayBlock.date, dayBlock.day, gamesHtml);
    }
  });

if (htmlResult === "") {
  cardsContainer.innerHTML = `
    <div class="no-results" style="width: 100%; text-align: center; color: var(--text-secondary); margin-top: 40px; scroll-snap-align: none;">
      <p style="font-size: 1.2rem;">⚽ Nenhuma partida encontrada para essa seleção.</p>
    </div>
  `;
} else {
  cardsContainer.innerHTML = htmlResult;
}
}

// ==========================================
// ESCUTADORES DE EVENTO DA BUSCA E BANDEIRAS
// ==========================================
const searchInput = document.querySelector("#search-input");
const flagButtons = document.querySelectorAll(".filter-flag-btn");
const clearFilterBtn = document.querySelector("#clear-filter");

function clearAllFilters() {
  if (searchInput) searchInput.value = "";
  flagButtons.forEach(btn => btn.classList.remove("active"));
  if (clearFilterBtn) clearFilterBtn.classList.add("hidden");
  renderAllCards();
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
    
    if (value.length > 0 && clearFilterBtn) {
      clearFilterBtn.classList.remove("hidden");
    } else if (value.length === 0 && clearFilterBtn) {
      const hasActiveFlag = document.querySelector(".filter-flag-btn.active");
      if (!hasActiveFlag) clearFilterBtn.classList.add("hidden");
    }
    
    renderAllCards(value);
  });
}

flagButtons.forEach(button => {
  button.addEventListener("click", () => {
    const country = button.getAttribute("data-country");
    
    if (button.classList.contains("active")) {
      clearAllFilters();
      return;
    }

    flagButtons.forEach(btn => btn.classList.remove("active"));
    if (searchInput) searchInput.value = "";

    button.classList.add("active");
    if (clearFilterBtn) clearFilterBtn.classList.remove("hidden");

    renderAllCards(country);
  });
});

if (clearFilterBtn) {
  clearFilterBtn.addEventListener("click", clearAllFilters);
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
];

function renderChampions() {
  const championsList = document.querySelector("#championsList")
  if (!championsList) return

  let html = ""
  champions.forEach(cup => {
    html += `
      <div class="champion-card">
        <span class="champion-year">${cup.year}</span>
        <div class="champion-team">
          <img src="assets/icon-${cup.flag}.svg" alt="${cup.champion}">
          <strong>${cup.champion}</strong>
        </div>
      </div>
    `
  })
  championsList.innerHTML = html
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(() => { console.log("Service Worker registrado") })
}

// ==========================================
// CONTROLE DE TELAS (ABAS) E INICIALIZAÇÃO
// ==========================================
const btnGames = document.querySelector("#btnGames")
const btnGroups = document.querySelector("#btnGroups")
const btnChampions = document.querySelector("#btnChampions")

const gamesScreen = document.querySelector("#gamesScreen")
const groupsScreen = document.querySelector("#groupsScreen")
const championsScreen = document.querySelector("#championsScreen")

if (btnGames && btnGroups && btnChampions && gamesScreen && groupsScreen && championsScreen) {
  
  btnGames.addEventListener("click", () => {
    gamesScreen.classList.remove("hidden")
    groupsScreen.classList.add("hidden")
    championsScreen.classList.add("hidden")
    
    btnGames.classList.add("active")
    btnGroups.classList.remove("active")
    btnChampions.classList.remove("active")
    renderAllCards() 
  })

  btnGroups.addEventListener("click", () => {
    gamesScreen.classList.add("hidden")
    groupsScreen.classList.remove("hidden")
    championsScreen.classList.add("hidden")
    
    btnGames.classList.remove("active")
    btnGroups.classList.add("active")
    btnChampions.classList.remove("active")
    renderGroupsTable()
  })

  btnChampions.addEventListener("click", () => {
    gamesScreen.classList.add("hidden")
    groupsScreen.classList.add("hidden")
    championsScreen.classList.remove("hidden")
    
    btnGames.classList.remove("active")
    btnGroups.classList.remove("active")
    btnChampions.classList.add("active")
    renderChampions()
  })

  // ==========================================
  // CORREÇÃO: EXECUÇÃO AUTOMÁTICA VISÍVEL NO STARTUP
  // ==========================================
  btnGames.classList.add("active") // Destaca o botão de jogos visualmente
  
  // Renderiza todas as informações em segundo plano
  renderAllCards()   // Faz a lista de jogos aparecer de imediato!
  renderChampions()
  renderGroupsTable()
}

// ==========================================
// CONTREGEM REGRESSIVA DA COPA
// ==========================================
function updateCountdown() {
  const worldCupStart = new Date("2026-06-11T16:00:00");
  const now = new Date();
  const difference = worldCupStart - now;

  const countdownElement = document.querySelector("#countdown");
  if (!countdownElement) return;

  if (difference <= 0) {
    countdownElement.innerHTML = "⚽ A Copa do Mundo 2026 começou!";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const daysText = days === 1 ? "dia" : "dias";

  countdownElement.innerHTML = `
 ⏳ Falta
    <strong>${days}</strong> ${daysText},
    <strong>${hours}</strong>h,
    <strong>${minutes}</strong>min e
    <strong>${seconds}</strong>s
    para o início da Copa do Mundo FIFA 2026
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// LISTA DE CURIOSIDADES HISTÓRICAS
const worldCupFacts = [
  "O primeiro gol contra da história das Copas foi marcado pelo zagueiro Manuel Rosas, do México, a favor do Chile, na Copa de 1930.",
  "A Itália (1934 e 1938) e o Brasil (1958 e 1962) são os únicos países na história que conseguiram vencer duas Copas seguidas.",
  "A primeira Copa do Mundo a usar cartões amarelos e vermelhos foi a de 1970, no México. Antes disso, as advertências eram apenas verbais.",
  "Em 1930, a final entre Uruguai e Argentina foi jogada com duas bolas diferentes (uma em cada tempo) porque os times não entravam em acordo.",
  "A primeira Copa do Mundo, em 1930, foi disputada inteiramente na cidade de Montevidéu, no Uruguai.",
  "O Brasil é o único país que participou de todas as edições da Copa do Mundo de futebol.",
  "O gol mais rápido da história das Copas foi marcado por Hakan Sükür, da Turquia, aos 11 segundos de jogo contra a Coreia do Sul em 2002.",
  "A Copa de 2026 é a maior da história, com 48 seleções e sediada por 3 países: Canadá, EUA e México.",
  "O maior artilheiro da história das Copas é o alemão Miroslav Klose, com 16 gols, superando o Ronaldo Fenômeno.",
  "Pelé é o jogador mais jovem a vencer uma Copa do Mundo (17 anos em 1958) e o único a ser tricampeão como jogador.",
  "A taça original da Copa, a Taça Jules Rimet, foi roubada no Brasil em 1983 e nunca foi recuperada; dizem que foi derretida.",
  "O jogador mais velho a disputar e marcar um gol em uma Copa foi Roger Milla, de Camarões, com 42 anos de idade em 1994."
];

function renderRandomFact() {
  const factTextElement = document.querySelector("#fact-text");
  if (!factTextElement) return;

  const randomIndex = Math.floor(Math.random() * worldCupFacts.length);
  factTextElement.textContent = worldCupFacts[randomIndex];
}

renderRandomFact();

// ==========================================
// INTERATIVIDADE DO BOTÃO DE ALTERNAR TEMA
// ==========================================
const themeToggleBtn = document.querySelector("#theme-toggle");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    // Alterna a classe global no body do HTML
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
  });
}