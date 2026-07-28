// O robô do GitHub lê este array todas as noites e altera os hifens pelos gols reais
const matchesData = [
  {
    date: "11/06",
    day: "quinta",
    games: [
      { id: "mexico-southafrica", home: "mexico", hour: "16:00", away: "southafrica", score1: "2", score2: "0", broadcasters: ["Globo", "SporTV", "CazéTV", "SBT"] },
      { id: "southkorea-czech", home: "southkorea", hour: "23:00", away: "czech", score1: "2", score2: "1", broadcasters: ["CazéTV"] }
    ]
  },
  {
    date: "12/06",
    day: "sexta",
    games: [
      { id: "canada-bosnia", home: "canada", hour: "16:00", away: "bosnia", score1: "1", score2: "1", broadcasters: ["CazéTV"] },
      { id: "usa-paraguay", home: "usa", hour: "22:00", away: "paraguay", score1: "4", score2: "1", broadcasters: ["Globo", "SporTV", "CazéTV", "SBT"] }
    ]
  },
  {
    date: "13/06",
    day: "sábado",
    games: [
      { id: "qatar-switzerland", home: "qatar", hour: "16:00", away: "switzerland", score1: "1", score2: "1", broadcasters: ["CazéTV"] },
      { id: "brazil-morocco", home: "brazil", hour: "19:00", away: "morocco", score1: "1", score2: "1", broadcasters: ["Globo", "SporTV", "CazéTV", "SBT"] },
      { id: "haiti-scotland", home: "haiti", hour: "22:00", away: "scotland", score1: "0", score2: "1", broadcasters: ["CazéTV"] }
    ]
  },
  {
    date: "14/06",
    day: "domingo",
    games: [
      { id: "australia-turkey", home: "australia", hour: "01:00", away: "turkey", score1: "2", score2: "0", broadcasters: ["Globo", "SporTV", "CazéTV"] },
      { id: "germany-curacao", home: "germany", hour: "14:00", away: "curacao", score1: "7", score2: "1", broadcasters: ["CazéTV"] },
      { id: "netherlands-japan", home: "netherlands", hour: "17:00", away: "japan", score1: "2", score2: "2", broadcasters: ["Globo", "SporTV", "CazéTV", "SBT"] },
      { id: "ivorycoast-ecuador", home: "ivorycoast", hour: "20:00", away: "ecuador", score1: "1", score2: "0", broadcasters: ["Globo", "SporTV", "CazéTV"] },
      { id: "sweden-tunisia", home: "sweden", hour: "23:00", away: "tunisia", score1: "5", score2: "1", broadcasters: ["CazéTV", "Globo", "SporTV"] }
    ]
  },
  {
    date: "15/06",
    day: "segunda",
    games: [
      { id: "spain-capeverde", home: "spain", hour: "13:00", away: "capeverde", score1: "0", score2: "0", broadcasters: ["CazéTV"] },
      { id: "belgium-egypt", home: "belgium", hour: "16:00", away: "egypt", score1: "1", score2: "1", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "saudia-uruguay", home: "saudia", hour: "19:00", away: "uruguay", score1: "1", score2: "1", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "iran-newzealand", home: "iran", hour: "22:00", away: "newzealand", score1: "2", score2: "2", broadcasters: ["CazéTV"] }
    ]
  },
  {
    date: "16/06",
    day: "terça",
    games: [
      { id: "france-senegal", home: "france", hour: "16:00", away: "senegal", score1: "3", score2: "1", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "iraq-norway", home: "iraq", hour: "19:00", away: "norway", score1: "1", score2: "4", broadcasters: ["CazéTV"] },
      { id: "argentina-algeria", home: "argentina", hour: "22:00", away: "algeria", score1: "3", score2: "0", broadcasters: ["CazéTV"] }
    ]
  },
  {
    date: "17/06",
    day: "quarta",
    games: [
      { id: "austria-jordan", home: "austria", hour: "01:00", away: "jordan", score1: "3", score2: "1", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "portugal-congo", home: "portugal", hour: "14:00", away: "congo", score1: "1", score2: "1", broadcasters: ["CazéTV"] },
      { id: "england-croatia", home: "england", hour: "17:00", away: "croatia", score1: "4", score2: "2", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "ghana-panama", home: "ghana", hour: "20:00", away: "panama", score1: "1", score2: "0", broadcasters: ["CazéTV"] },
      { id: "uzbekistan-colombia", home: "uzbekistan", hour: "23:00", away: "colombia", score1: "1", score2: "3", broadcasters: ["CazéTV", "Globo", "SporTV"] }
    ]
  },
  {
    date: "18/06",
    day: "quinta",
    games: [
      { id: "czech-southafrica", home: "czech", hour: "13:00", away: "southafrica", score1: "1", score2: "1", broadcasters: ["CazéTV"] },
      { id: "switzerland-bosnia", home: "switzerland", hour: "16:00", away: "bosnia", score1: "4", score2: "1", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "canada-qatar", home: "canada", hour: "19:00", away: "qatar", score1: "6", score2: "0", broadcasters: ["CazéTV"] },
      { id: "mexico-southkorea", home: "mexico", hour: "22:00", away: "southkorea", score1: "1", score2: "0", broadcasters: ["CazéTV", "Globo", "SporTV"] }
    ]
  },
  {
    date: "19/06",
    day: "sexta",
    games: [
      { id: "usa-australia", home: "usa", hour: "16:00", away: "australia", score1: "2", score2: "0", broadcasters: ["CazéTV"] },
      { id: "scotland-morocco", home: "scotland", hour: "19:00", away: "morocco", score1: "0", score2: "1", broadcasters: ["CazéTV"] },
      { id: "brazil-haiti", home: "brazil", hour: "21:30", away: "haiti", score1: "3", score2: "0", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] }
    ]
  },
  {
    date: "20/06",
    day: "sábado",
    games: [
      { id: "turkey-paraguay", home: "turkey", hour: "00:00", away: "paraguay", score1: "0", score2: "1", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "netherlands-sweden", home: "netherlands", hour: "14:00", away: "sweden", score1: "5", score2: "1", broadcasters: ["CazéTV"] },
      { id: "germany-ivorycoast", home: "germany", hour: "17:00", away: "ivorycoast", score1: "2", score2: "1", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "ecuador-curacao", home: "ecuador", hour: "21:00", away: "curacao", score1: "0", score2: "0", broadcasters: ["CazéTV"] }
    ]
  },
  {
    date: "21/06",
    day: "domingo",
    games: [
      { id: "tunisia-japan", home: "tunisia", hour: "01:00", away: "japan", score1: "0", score2: "4", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "spain-saudia", home: "spain", hour: "13:00", away: "saudia", score1: "4", score2: "0", broadcasters: ["CazéTV"] },
      { id: "belgium-iran", home: "belgium", hour: "16:00", away: "iran", score1: "0", score2: "0", broadcasters: ["CazéTV"] },
      { id: "uruguay-capeverde", home: "uruguay", hour: "19:00", away: "capeverde", score1: "2", score2: "2", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "newzealand-egypt", home: "newzealand", hour: "22:00", away: "egypt", score1: "1", score2: "3", broadcasters: ["CazéTV", "Globo", "SporTV"] }
    ]
  },
  {
    date: "22/06",
    day: "segunda",
    games: [
      { id: "argentina-austria", home: "argentina", hour: "14:00", away: "austria", score1: "2", score2: "0", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "france-iraq", home: "france", hour: "18:00", away: "iraq", score1: "3", score2: "0", broadcasters: ["CazéTV"] },
      { id: "norway-senegal", home: "norway", hour: "21:00", away: "senegal", score1: "3", score2: "2", broadcasters: ["CazéTV", "Globo", "SporTV"] }
    ]
  },
  {
    date: "23/06",
    day: "terça",
    games: [
      { id: "jordan-algeria", home: "jordan", hour: "00:00", away: "algeria", score1: "1", score2: "2", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "portugal-uzbekistan", home: "portugal", hour: "14:00", away: "uzbekistan", score1: "5", score2: "0", broadcasters: ["CazéTV"] },
      { id: "england-ghana", home: "england", hour: "17:00", away: "ghana", score1: "0", score2: "0", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "panama-croatia", home: "panama", hour: "20:00", away: "croatia", score1: "0", score2: "1", broadcasters: ["CazéTV"] },
      { id: "colombia-congo", home: "colombia", hour: "23:00", away: "congo", score1: "1", score2: "0", broadcasters: ["CazéTV", "Globo", "SporTV"] }
    ]
  },
  {
    date: "24/06",
    day: "quarta",
    games: [
      { id: "switzerland-canada", home: "switzerland", hour: "16:00", away: "canada", score1: "2", score2: "1", broadcasters: ["CazéTV"] },
      { id: "bosnia-qatar", home: "bosnia", hour: "16:00", away: "qatar", score1: "3", score2: "1", broadcasters: ["CazéTV"] },
      { id: "scotland-brazil", home: "scotland", hour: "19:00", away: "brazil", score1: "0", score2: "3", broadcasters: ["CazéTV", "Globo", "SporTV", "SBT"] },
      { id: "morocco-haiti", home: "morocco", hour: "19:00", away: "haiti", score1: "4", score2: "2", broadcasters: ["CazéTV"] },
      { id: "czech-mexico", home: "czech", hour: "22:00", away: "mexico", score1: "0", score2: "3", broadcasters: ["CazéTV"] },
      { id: "southafrica-southkorea", home: "southafrica", hour: "22:00", away: "southkorea", score1: "1", score2: "0", broadcasters: ["CazéTV"] }
    ]
  },
  {
    date: "25/06",
    day: "quinta",
    games: [
      { id: "ecuador-germany", home: "ecuador", hour: "17:00", away: "germany", score1: "2", score2: "1", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "curacao-ivorycoast", home: "curacao", hour: "17:00", away: "ivorycoast", score1: "0", score2: "2", broadcasters: ["CazéTV", "SporTV"] },
      { id: "japan-sweden", home: "japan", hour: "20:00", away: "sweden", score1: "1", score2: "1", broadcasters: ["CazéTV", "Globo", "SBT", "SporTV"] },
      { id: "tunisia-netherlands", home: "tunisia", hour: "20:00", away: "netherlands", score1: "1", score2: "3", broadcasters: ["CazéTV"] },
      { id: "turkey-usa", home: "turkey", hour: "23:00", away: "usa", score1: "3", score2: "2", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "paraguay-australia", home: "paraguay", hour: "23:00", away: "australia", score1: "0", score2: "0", broadcasters: ["CazéTV"] }
    ]
  },
  {
    date: "26/06",
    day: "sexta",
    games: [
      { id: "norway-france", home: "norway", hour: "16:00", away: "france", score1: "1", score2: "4", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "senegal-iraq", home: "senegal", hour: "16:00", away: "iraq", score1: "5", score2: "0", broadcasters: ["CazéTV"] },
      { id: "capeverde-saudia", home: "capeverde", hour: "21:00", away: "saudia", score1: "0", score2: "0", broadcasters: ["CazéTV", "SporTV"] },
      { id: "uruguay-spain", home: "uruguay", hour: "21:00", away: "spain", score1: "0", score2: "1", broadcasters: ["CazéTV", "Globo", "SBT", "SporTV"] }
    ]
  },
  {
    date: "27/06",
    day: "sábado",
    games: [
      { id: "egypt-iran", home: "egypt", hour: "00:00", away: "iran", score1: "1", score2: "1", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "newzealand-belgium", home: "newzealand", hour: "00:00", away: "belgium", score1: "1", score2: "5", broadcasters: ["CazéTV"] },
      { id: "panama-england", home: "panama", hour: "18:00", away: "england", score1: "0", score2: "2", broadcasters: ["CazéTV", "Globo", "SBT", "SporTV"] },
      { id: "croatia-ghana", home: "croatia", hour: "18:00", away: "ghana", score1: "2", score2: "1", broadcasters: ["CazéTV"] },
      { id: "colombia-portugal", home: "colombia", hour: "20:30", away: "portugal", score1: "0", score2: "0", broadcasters: ["CazéTV"] },
      { id: "congo-uzbekistan", home: "congo", hour: "20:30", away: "uzbekistan", score1: "3", score2: "1", broadcasters: ["CazéTV"] },
      { id: "algeria-austria", home: "algeria", hour: "23:00", away: "austria", score1: "3", score2: "3", broadcasters: ["CazéTV", "Globo", "SporTV"] },
      { id: "jordan-argentina", home: "jordan", hour: "23:00", away: "argentina", score1: "1", score2: "3", broadcasters: ["CazéTV"] }
    ]
  }
];

// Mapeamento dos grupos da Copa de 2026
const groupsMapping = {
  "Grupo A": ["mexico", "southafrica", "czech", "southkorea"],
  "Grupo B": ["canada", "bosnia", "switzerland", "qatar"],
  "Grupo C": ["scotland", "haiti", "brazil", "morocco"],
  "Grupo D": ["usa", "paraguay", "australia", "turkey"],
  "Grupo E": ["germany", "curacao", "ecuador", "ivorycoast"],
  "Grupo F": ["netherlands", "japan", "sweden", "tunisia"],
  "Grupo G": ["iran", "newzealand", "belgium", "egypt"],
  "Grupo H": ["saudia", "capeverde", "spain", "uruguay"],
  "Grupo I": ["france", "senegal", "iraq", "norway"],
  "Grupo J": ["argentina", "algeria", "austria", "jordan"],
  "Grupo K": ["portugal", "congo", "uzbekistan", "colombia"],
  "Grupo L": ["ghana", "panama", "croatia", "england"]
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

        tableData[p1].GP += g1;
        tableData[p1].GC += g2;
        tableData[p2].GP += g2;
        tableData[p2].GC += g1;

        if (g1 > g2) {
          tableData[p1].P += 3;
          tableData[p1].V += 1;
          tableData[p2].D += 1;
        } else if (g2 > g1) {
          tableData[p2].P += 3;
          tableData[p2].V += 1;
          tableData[p1].D += 1;
        } else {
          tableData[p1].P += 1;
          tableData[p1].E += 1;
          tableData[p2].P += 1;
          tableData[p2].E += 1;
        }

        tableData[p1].SG = tableData[p1].GP - tableData[p1].GC;
        tableData[p2].SG = tableData[p2].GP - tableData[p2].GC;
      }
    });
  });

  return tableData;
}

// ==========================================
// CLASSIFICADOS PARA O MATA-MATA
// ==========================================
function getQualifiedTeams() {
  const stats = calculateGroups();
  const qualified = {};

  Object.entries(groupsMapping).forEach(([groupName, teams]) => {
    const sorted = teams
      .map(team => stats[team])
      .sort((a, b) =>
        b.P - a.P ||
        b.V - a.V ||
        b.SG - a.SG
      );

    qualified[groupName] = {
      first: sorted[0].name,
      second: sorted[1].name
    };
  });

  return qualified;
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
          <td class="text-center">${team.E}</td>
          <td class="text-center">${team.D}</td>
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
              <th style="width: 40%">Seleção</th>
              <th class="text-center" style="width: 10%">P</th>
              <th class="text-center" style="width: 10%">V</th>
              <th class="text-center" style="width: 10%">E</th>
              <th class="text-center" style="width: 10%">D</th>
              <th class="text-center" style="width: 10%">SG</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  });

  container.innerHTML = html + renderBestThirds();
}

function getBestThirdPlaced() {
  const stats = calculateGroups();
  const thirds = [];

  Object.entries(groupsMapping).forEach(([groupName, teams]) => {
    const sorted = teams
      .map(team => stats[team])
      .sort((a, b) =>
        b.P - a.P ||
        b.V - a.V ||
        b.SG - a.SG
      );

    const third = sorted[2];
    thirds.push({
      group: groupName,
      name: third.name,
      P: third.P,
      V: third.V,
      SG: third.SG
    });
  });

  return thirds.sort((a, b) =>
    b.P - a.P ||
    b.V - a.V ||
    b.SG - a.SG
  );
}

function renderBestThirds() {
  const thirds = getBestThirdPlaced();

  return `
    <div class="best-thirds-card">
      <h2 class="best-thirds-title">
        ⭐ MELHORES 3º COLOCADOS
      </h2>
      <table class="group-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Seleção</th>
            <th>P</th>
            <th>V</th>
            <th>SG</th>
          </tr>
        </thead>
        <tbody>
          ${thirds.map((team, index) => `
            <tr class="${index < 8 ? "qualified-third" : ""}">
              <td>${index + 1}</td>
              <td>
                <img
                  class="table-flag"
                  src="assets/icon-${team.name}.svg"
                  alt="${formatCountryName(team.name)}"
                >
                ${formatCountryName(team.name)}
              </td>
              <td>${team.P}</td>
              <td>${team.V}</td>
              <td>${team.SG}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <p class="thirds-note">
        ✅ Os 8 primeiros avançam para os 16 Avos de Final
      </p>
    </div>
  `;
}

// ==========================================
// RESULTADOS DOS 16 AVOS DE FINAL
// ==========================================
const knockoutResults = {
  game1: { score1: "0", score2: "1" },
  game2: { score1: "2", score2: "1" },
  game3: { score1: 1, score2: 1, penalties1: 3, penalties2: 4 },
  game4: { score1: 1, score2: 1, penalties1: 2, penalties2: 3 },
  game5: { score1: "1", score2: "2" },
  game6: { score1: "3", score2: "0" },
  game7: { score1: "2", score2: "0" },
  game8: { score1: "2", score2: "1" },
  game9: { score1: "3", score2: "2" },
  game10: { score1: "2", score2: "0" },
  game11: { score1: "3", score2: "0" },
  game12: { score1: "2", score2: "1" },
  game13: { score1: "2", score2: "0" },
  game14: { score1: 1, score2: 1, penalties1: 2, penalties2: 4 },
  game15: { score1: "3", score2: "2" },
  game16: { score1: "1", score2: "0" }
};

function getWinner(matchId, home, away) {
  const result = knockoutResults[matchId];
  if (!result) return null;

  const score1 = Number(result.score1);
  const score2 = Number(result.score2);

  if (score1 > score2) return home;
  if (score2 > score1) return away;

  if (result.penalties1 > result.penalties2) return home;
  if (result.penalties2 > result.penalties1) return away;

  return null;
}

// ==========================================
// MATA-MATA COMPLETO
// ==========================================
function renderKnockout() {
  const matches = [
    {
      id: "game1",
      date: "28/06",
      hour: "16:00",
      home: "southafrica",
      away: "canada",
      broadcasters: ["CazéTV"]
    },
    {
      id: "game2",
      date: "29/06",
      hour: "14:00",
      home: "brazil",
      away: "japan",
      broadcasters: ["Globo", "SBT", "SporTV", "CazéTV"]
    },
    {
      id: "game3",
      date: "29/06",
      hour: "17:30",
      home: "germany",
      away: "paraguay",
      broadcasters: ["Globo", "SBT", "SporTV", "CazéTV"]
    },
    {
      id: "game4",
      date: "29/06",
      hour: "22:00",
      home: "netherlands",
      away: "morocco",
      broadcasters: ["CazéTV"]
    },
    {
      id: "game5",
      date: "30/06",
      hour: "14:00",
      home: "ivorycoast",
      away: "norway",
      broadcasters: ["Globo", "SBT", "SporTV", "CazéTV"]
    },
    {
      id: "game6",
      date: "30/06",
      hour: "18:00",
      home: "france",
      away: "sweden",
      broadcasters: ["CazéTV"]
    },
    {
      id: "game7",
      date: "30/06",
      hour: "22:00",
      home: "mexico",
      away: "ecuador",
      broadcasters: ["Globo", "SporTV", "CazéTV"]
    },
    {
      id: "game8",
      date: "01/07",
      hour: "13:00",
      home: "england",
      away: "congo",
      broadcasters: ["CazéTV"]
    },
    {
      id: "game9",
      date: "01/07",
      hour: "17:00",
      home: "belgium",
      away: "senegal",
      broadcasters: ["Globo", "SBT", "SporTV", "CazéTV"]
    },
    {
      id: "game10",
      date: "01/07",
      hour: "21:00",
      home: "usa",
      away: "bosnia",
      broadcasters: ["CazéTV"]
    },
    {
      id: "game11",
      date: "02/07",
      hour: "16:00",
      home: "spain",
      away: "austria",
      broadcasters: ["Globo", "SBT", "SporTV", "CazéTV"]
    },
    {
      id: "game12",
      date: "02/07",
      hour: "20:00",
      home: "portugal",
      away: "croatia",
      broadcasters: ["CazéTV"]
    },
    {
      id: "game13",
      date: "03/07",
      hour: "00:00",
      home: "switzerland",
      away: "algeria",
      broadcasters: ["CazéTV"]
    },
    {
      id: "game14",
      date: "03/07",
      hour: "15:00",
      home: "australia",
      away: "egypt",
      broadcasters: ["Globo", "SporTV", "CazéTV"]
    },
    {
      id: "game15",
      date: "03/07",
      hour: "19:00",
      home: "argentina",
      away: "capeverde",
      broadcasters: ["Globo", "SBT", "SporTV", "CazéTV"]
    },
    {
      id: "game16",
      date: "03/07",
      hour: "22:30",
      home: "colombia",
      away: "ghana",
      broadcasters: ["CazéTV"]
    }
  ];

  const weekDays = {
    "28/06": "DOMINGO",
    "29/06": "SEGUNDA-FEIRA",
    "30/06": "TERÇA-FEIRA",
    "01/07": "QUARTA-FEIRA",
    "02/07": "QUINTA-FEIRA",
    "03/07": "SEXTA-FEIRA",
    "04/07": "SÁBADO",
    "05/07": "DOMINGO",
    "06/07": "SEGUNDA-FEIRA",
    "07/07": "TERÇA-FEIRA",
    "09/07": "QUINTA-FEIRA",
    "10/07": "SEXTA-FEIRA",
    "11/07": "SÁBADO",
    "14/07": "TERÇA-FEIRA",
    "15/07": "QUARTA-FEIRA",
    "18/07": "SÁBADO",
    "19/07": "DOMINGO"
  };

  // ======================
  // OITAVAS DE FINAL
  // ======================
  const roundOf16Matches = [
    {
      id: "r16_1",
      date: "04/07",
      hour: "14:00",
      home: "canada",
      away: "morocco",
      score1: "0",
      score2: "3",
      broadcasters: ["Globo", "SporTV", "CazéTV"]
    },
    {
      id: "r16_2",
      date: "04/07",
      hour: "18:00",
      home: "paraguay",
      away: "france",
      score1: "0",
      score2: "1",
      broadcasters: ["CazéTV"]
    },
    {
      id: "r16_3",
      date: "05/07",
      hour: "17:00",
      home: "brazil",
      away: "norway",
      score1: "1",
      score2: "2",
      broadcasters: ["Globo", "SporTV", "CazéTV"]
    },
    {
      id: "r16_4",
      date: "05/07",
      hour: "22:00",
      home: "mexico",
      away: "england",
      score1: "2",
      score2: "3",
      broadcasters: ["CazéTV"]
    },
    {
      id: "r16_5",
      date: "06/07",
      hour: "16:00",
      home: "portugal",
      away: "spain",
      score1: "0",
      score2: "1",
      broadcasters: ["Globo", "SporTV", "CazéTV"]
    },
    {
      id: "r16_6",
      date: "06/07",
      hour: "21:00",
      home: "usa",
      away: "belgium",
      score1: "1",
      score2: "4",
      broadcasters: ["CazéTV"]
    },
    {
      id: "r16_7",
      date: "07/07",
      hour: "13:00",
      home: "argentina",
      away: "egypt",
      score1: "3",
      score2: "2",
      broadcasters: ["Globo", "SporTV", "CazéTV"]
    },
    {
      id: "r16_8",
      date: "07/07",
      hour: "17:00",
      home: "switzerland",
      away: "colombia",
      score1: "0",
      score2: "0",
      penalties1: 4,
      penalties2: 3,
      broadcasters: ["CazéTV"]
    }
  ];

  // ======================
  // QUARTAS DE FINAL
  // ======================
  const quarterFinalMatches = [
    {
      id: "qf1",
      date: "09/07",
      hour: "17:00",
      home: "france",
      away: "morocco",
      score1: "2",
      score2: "0",
      broadcasters: ["Globo", "SporTV", "CazéTV"]
    },
    {
      id: "qf2",
      date: "10/07",
      hour: "16:00",
      home: "spain",
      away: "belgium",
      score1: "2",
      score2: "1",
      broadcasters: ["CazéTV"]
    },
    {
      id: "qf3",
      date: "11/07",
      hour: "18:00",
      home: "norway",
      away: "england",
      score1: "1",
      score2: "2",
      broadcasters: ["Globo", "SporTV", "CazéTV"]
    },
    {
      id: "qf4",
      date: "11/07",
      hour: "22:00",
      home: "argentina",
      away: "switzerland",
      score1: "3",
      score2: "1",
      broadcasters: ["CazéTV"]
    }
  ];

  // ======================
  // SEMIFINAIS - Espanha vence França, Argentina vence Inglaterra
  // ======================
  const semiFinalMatches = [
    {
      id: "sf1",
      date: "14/07",
      hour: "16:00",
      home: "france",
      away: "spain",
      score1: "0",
      score2: "2",
      broadcasters: ["Globo", "SporTV", "CazéTV"]
    },
    {
      id: "sf2",
      date: "15/07",
      hour: "16:00",
      home: "england",
      away: "argentina",
      score1: "1",
      score2: "2",
      broadcasters: ["Globo", "SporTV", "CazéTV"]
    }
  ];

  // ======================
  // DISPUTA DO 3º LUGAR - França vence Inglaterra
  // ======================
  const thirdPlaceMatch = [
    {
      id: "third",
      date: "18/07",
      hour: "15:00",
      home: "france",
      away: "england",
      score1: "4",
      score2: "6",
      broadcasters: ["Globo", "SporTV", "CazéTV"]
    }
  ];

  // ======================
  // GRANDE FINAL - ESPANHA CAMPEÃ em cima da Argentina
  // ======================
  const finalMatches = [
    {
      id: "final",
      date: "19/07",
      hour: "16:00",
      home: "spain",
      away: "argentina",
      score1: "1",
      score2: "0",
      broadcasters: ["Globo", "SporTV", "CazéTV", "SBT"]
    }
  ];

  // ======================
  // CONSTRUÇÃO DO HTML
  // ======================
  let html = `
    <div class="knockout-stage">
      🏆 FASE ELIMINATÓRIA
    </div>
  `;

  // ---- 16 AVOS DE FINAL ----
  html += `<div class="knockout-subtitle">16 AVOS DE FINAL</div>`;
  let currentDate = "";

  matches.forEach(match => {
    if (currentDate !== match.date) {
      currentDate = match.date;
      html += `
        <div class="knockout-day">
          ${match.date} • ${weekDays[match.date]}
        </div>
      `;
    }

    html += createKnockoutMatch(
      match.home,
      match.away,
      match.date,
      match.hour,
      "16 Avos de Final",
      knockoutResults[match.id]?.score1 ?? "-",
      knockoutResults[match.id]?.score2 ?? "-",
      knockoutResults[match.id]?.penalties1,
      knockoutResults[match.id]?.penalties2,
      match.broadcasters || []
    );
  });

// ---- OITAVAS DE FINAL ----
  html += `<div class="knockout-subtitle">OITAVAS DE FINAL</div>`;
  let currentR16Date = "";

  roundOf16Matches.forEach(match => {
    if (currentR16Date !== match.date) {
      currentR16Date = match.date;
      html += `
        <div class="knockout-day">
          ${match.date} • ${weekDays[match.date]}
        </div>
      `;
    }

    html += createKnockoutMatch(
      match.home,
      match.away,
      match.date,
      match.hour,
      "Oitavas de Final",
      match.score1,
      match.score2,
      match.penalties1,
      match.penalties2,
      match.broadcasters
    );
  });

  // ---- QUARTAS DE FINAL ----
  html += `<div class="knockout-subtitle">QUARTAS DE FINAL</div>`;
  let currentQFDate = "";

  quarterFinalMatches.forEach(match => {
    if (currentQFDate !== match.date) {
      currentQFDate = match.date;
      html += `
        <div class="knockout-day">
          ${match.date} • ${weekDays[match.date]}
        </div>
      `;
    }

    html += createKnockoutMatch(
      match.home,
      match.away,
      match.date,
      match.hour,
      "Quartas de Final",
      match.score1,
      match.score2,
      match.penalties1,
      match.penalties2,
      match.broadcasters
    );
  });

  // ---- SEMIFINAIS ----
  html += `<div class="knockout-subtitle">SEMIFINAIS</div>`;
  let currentSemiDate = "";

  semiFinalMatches.forEach(match => {
    if (currentSemiDate !== match.date) {
      currentSemiDate = match.date;
      html += `
        <div class="knockout-day">
          ${match.date} • ${weekDays[match.date]}
        </div>
      `;
    }

    html += createKnockoutMatch(
      match.home,
      match.away,
      match.date,
      match.hour,
      "Semifinal",
      match.score1,
      match.score2,
      match.penalties1,
      match.penalties2,
      match.broadcasters
    );
  });

  // ---- DISPUTA DO 3º LUGAR ----
  html += `
    <div class="knockout-subtitle" style="margin-top: 40px; color: #cd7f32;">
      🥉 DISPUTA DO 3º LUGAR
    </div>
  `;

  thirdPlaceMatch.forEach(match => {
    html += createKnockoutMatch(
      match.home,
      match.away,
      match.date,
      match.hour,
      "3º Lugar",
      match.score1,
      match.score2,
      match.penalties1,
      match.penalties2,
      match.broadcasters
    );
  });

  // ---- GRANDE FINAL ----
  html += `
    <div class="knockout-subtitle" style="margin-top: 40px; font-size: 1.8rem; color: #ffd700;">
      🏆 GRANDE FINAL
    </div>
  `;

  finalMatches.forEach(match => {
    html += createKnockoutMatch(
      match.home,
      match.away,
      match.date,
      match.hour,
      "⚽ FINAL",
      match.score1,
      match.score2,
      match.penalties1,
      match.penalties2,
      match.broadcasters
    );
  });

  // ---- BANNER DO CAMPEÃO - ESPANHA! ----
  html += `
    <div class="champion-banner" style="
      margin: 40px auto 20px;
      padding: 30px 20px;
      background: linear-gradient(135deg, #ffd700, #ff6b00);
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 0 40px rgba(255, 215, 0, 0.6);
      max-width: 600px;
    ">
      <span style="font-size: 2rem;">🏆</span>
      <h2 style="color: #121214; font-size: 2.2rem; margin: 10px 0;">CAMPEÃO DO MUNDO 2026</h2>
      <div style="display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 15px;">
        <img src="assets/icon-spain.svg" alt="Espanha" style="width: 80px; height: 80px; border-radius: 50%; border: 4px solid #121214;">
        <span style="font-size: 2.5rem; font-weight: 900; color: #121214;">ESPANHA</span>
      </div>
      <p style="color: #121214; margin-top: 15px; font-weight: 700;">3x1 na Argentina • 19/07/2026</p>
    </div>
  `;

  // ---- INSERE NO CONTAINER ----
  const container = document.querySelector("#knockoutContainer");
  if (container) {
    container.innerHTML = html;
  }
}

// ==========================================
// FUNÇÕES AUXILIARES DE RENDERIZAÇÃO
// ==========================================
function createCard(date, day, gamesHtml) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${gamesHtml}
      </ul>
    </div>
  `;
}

const streamingLinks = {
  "Globo": "https://globoplay.globo.com/",
  "SporTV": "https://globoplay.globo.com/canais/sportv/",
  "CazéTV": "https://www.youtube.com/@CazeTV",
  "SBT": "https://www.sbt.com.br/ao-vivo"
};

function createGame(player1, hour, player2, score1 = "-", score2 = "-", broadcasters = []) {
  const player1Name = formatCountryName(player1);
  const player2Name = formatCountryName(player2);

  const broadcastsHtml = broadcasters.length ? `
    <div class="broadcasts">
      ${broadcasters.map(channel => {
        const url = streamingLinks[channel] || `https://www.google.com/search?q=onde+assistir+${player1Name}+x+${player2Name}`;
        return `
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="broadcast-tag btn-streaming">
            ${channel}
          </a>
        `;
      }).join("")}
    </div>
  ` : "";

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
        ${broadcastsHtml}
      </div>

      <div class="flag">
        <img src="assets/icon-${player2}.svg" alt="${player2Name}" title="${player2Name}">
        <span class="country-name">${player2Name}</span>
      </div>
    </li>
  `;
}

function createKnockoutMatch(home, away, date, hour, stage, score1 = "-", score2 = "-", penalties1, penalties2, broadcasters = []) {
  const homeFlag = !home
    ? `<img src="assets/icon-tbd.svg">`
    : `<img src="assets/icon-${home}.svg" onerror="this.src='assets/icon-tbd.svg'">`;

  const awayFlag = !away
    ? `<img src="assets/icon-tbd.svg">`
    : `<img src="assets/icon-${away}.svg" onerror="this.src='assets/icon-tbd.svg'">`;

  const broadcastersHTML = broadcasters
    .map(channel => `
      <a href="${streamingLinks[channel]}" target="_blank" class="broadcast-btn">
        📺 ${channel}
      </a>
    `)
    .join("");

  const displayScore1 = penalties1 !== undefined ? `(${penalties1}) ${score1}` : score1;
  const displayScore2 = penalties2 !== undefined ? `${score2} (${penalties2})` : score2;

  return `
    <li class="match-card knockout">
      <div class="flag">
        ${homeFlag}
        <span class="country-name">${formatCountryName(home)}</span>
      </div>

      <div class="match-info">
        <div class="score-box">
          <span>${displayScore1}</span>
          <strong>x</strong>
          <span>${displayScore2}</span>
        </div>
        <small class="match-date">${hour}</small>
        <div class="match-broadcasters">${broadcastersHTML}</div>
      </div>

      <div class="flag">
        ${awayFlag}
        <span class="country-name">${formatCountryName(away)}</span>
      </div>
    </li>
  `;
}

function formatCountryName(name) {
  if (!name || name === "a-definir") {
    return "A definir";
  }

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
    ecuador: "Equador"
  };
  return names[name] || name.toUpperCase();
}

// ==========================================
// RENDERIZAÇÃO DOS CARDS DE JOGOS
// ==========================================
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

// ==========================================
// LISTA DE CAMPEÕES (ATUALIZADA COM 2026)
// ==========================================
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
  { year: 2022, champion: "Argentina", flag: "argentina" },
  { year: 2026, champion: "Espanha", flag: "spain" }
];

function renderChampions() {
  const championsList = document.querySelector("#championsList");
  if (!championsList) return;

  let html = "";
  champions.forEach(cup => {
    html += `
      <div class="champion-card">
        <span class="champion-year">${cup.year}</span>
        <div class="champion-team">
          <img src="assets/icon-${cup.flag}.svg" alt="${cup.champion}">
          <strong>${cup.champion}</strong>
        </div>
      </div>
    `;
  });
  championsList.innerHTML = html;
}

// ==========================================
// CONTROLE DE TELAS (ABAS)
// ==========================================
const btnGames = document.querySelector("#btnGames");
const btnGroups = document.querySelector("#btnGroups");
const btnKnockout = document.querySelector("#btnKnockout");
const btnChampions = document.querySelector("#btnChampions");
const btnCoach = document.querySelector("#btnCoach");

const gamesScreen = document.querySelector("#gamesScreen");
const groupsScreen = document.querySelector("#groupsScreen");
const knockoutScreen = document.querySelector("#knockoutScreen");
const championsScreen = document.querySelector("#championsScreen");
const coachScreen = document.querySelector("#coachScreen");

if (btnGames && btnGroups && btnKnockout && btnChampions && btnCoach &&
  gamesScreen && groupsScreen && knockoutScreen && championsScreen && coachScreen) {

  btnGames.addEventListener("click", () => {
    gamesScreen.classList.remove("hidden");
    groupsScreen.classList.add("hidden");
    knockoutScreen.classList.add("hidden");
    championsScreen.classList.add("hidden");
    coachScreen.classList.add("hidden");

    btnGames.classList.add("active");
    btnGroups.classList.remove("active");
    btnKnockout.classList.remove("active");
    btnChampions.classList.remove("active");
    btnCoach.classList.remove("active");

    renderAllCards();
  });

  btnGroups.addEventListener("click", () => {
    gamesScreen.classList.add("hidden");
    groupsScreen.classList.remove("hidden");
    knockoutScreen.classList.add("hidden");
    championsScreen.classList.add("hidden");
    coachScreen.classList.add("hidden");

    btnGames.classList.remove("active");
    btnGroups.classList.add("active");
    btnKnockout.classList.remove("active");
    btnChampions.classList.remove("active");
    btnCoach.classList.remove("active");

    renderGroupsTable();
  });

  btnKnockout.addEventListener("click", () => {
    gamesScreen.classList.add("hidden");
    groupsScreen.classList.add("hidden");
    championsScreen.classList.add("hidden");
    coachScreen.classList.add("hidden");

    knockoutScreen.classList.remove("hidden");

    btnGames.classList.remove("active");
    btnGroups.classList.remove("active");
    btnChampions.classList.remove("active");
    btnCoach.classList.remove("active");

    btnKnockout.classList.add("active");

    renderKnockout();
  });

  btnChampions.addEventListener("click", () => {
    knockoutScreen.classList.add("hidden");
    gamesScreen.classList.add("hidden");
    groupsScreen.classList.add("hidden");
    championsScreen.classList.remove("hidden");
    coachScreen.classList.add("hidden");

    btnGames.classList.remove("active");
    btnGroups.classList.remove("active");
    btnKnockout.classList.remove("active");
    btnChampions.classList.add("active");
    btnCoach.classList.remove("active");

    renderChampions();
  });

  btnCoach.addEventListener("click", () => {
    gamesScreen.classList.add("hidden");
    groupsScreen.classList.add("hidden");
    knockoutScreen.classList.add("hidden");
    championsScreen.classList.add("hidden");
    coachScreen.classList.remove("hidden");

    btnGames.classList.remove("active");
    btnGroups.classList.remove("active");
    btnKnockout.classList.remove("active");
    btnChampions.classList.remove("active");
    btnCoach.classList.add("active");

    initCoachModule();
  });

  // CONFIGURAÇÃO INICIAL
  btnGames.classList.add("active");
  renderAllCards();
  renderChampions();
  renderGroupsTable();
}

// ==========================================
// CONTAGEM REGRESSIVA - FINALIZADA
// ==========================================
function updateCountdown() {
  const worldCupEnd = new Date("2026-07-19T18:00:00");
  const now = new Date();
  const countdownElement = document.querySelector("#countdown");

  if (!countdownElement) return;

  if (now > worldCupEnd) {
    countdownElement.innerHTML = `
      🏆 COPA DO MUNDO FIFA 2026 FINALIZADA!
      <br>
      <span style="color: #ffd700; font-size: 1.8rem;">ESPANHA CAMPEÃ! 🏆</span>
      <br>
      <span style="font-size: 1rem; color: #e1e1e6;">3x1 na Argentina • 19/07/2026</span>
    `;
    return;
  }

  const worldCupStart = new Date("2026-06-11T16:00:00");
  const difference = worldCupStart - now;

  if (difference <= 0) {
    countdownElement.innerHTML = "⚽ A Copa do Mundo 2026 está em andamento!";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
    ⏳ Falta
    <strong>${days}</strong> dias,
    <strong>${hours}</strong>h,
    <strong>${minutes}</strong>min e
    <strong>${seconds}</strong>s
    para o início da Copa do Mundo FIFA 2026
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ==========================================
// CURIOSIDADES ATUALIZADAS
// ==========================================
const worldCupFacts = [
  "A Copa do Mundo de 2026 teve 03 sedes: 78 partidas nos Estados Unidos, 13 no México e 13 no Canadá.",
  "Eliminada sem sofrer gols: A Suíça detém o recorde de ter sido eliminada de uma Copa sem sofrer nenhum gol na edição de 2006.",
  "O primeiro gol contra da história das Copas foi marcado por Manuel Rosas, do México, a favor do Chile, em 1930.",
  "A Itália (1934 e 1938) e o Brasil (1958 e 1962) são os únicos países que venceram duas Copas seguidas.",
  "A primeira Copa a usar cartões amarelos e vermelhos foi a de 1970, no México.",
  "Em 1930, a final entre Uruguai e Argentina foi jogada com duas bolas diferentes porque os times não entravam em acordo.",
  "A primeira Copa, em 1930, foi disputada inteiramente em Montevidéu, Uruguai.",
  "O Brasil é o único país que participou de todas as edições da Copa do Mundo.",
  "O gol mais rápido da história foi de Hakan Sükür, da Turquia, aos 11 segundos em 2002.",
  "A Copa de 2026 foi a maior da história, com 48 seleções e sediada por 3 países.",
  "O maior artilheiro da história das Copas é Miroslav Klose, com 16 gols.",
  "Pelé é o jogador mais jovem a vencer uma Copa (17 anos em 1958) e o único tricampeão como jogador.",
  "A Taça Jules Rimet foi roubada no Brasil em 1983 e nunca foi recuperada.",
  "O jogador mais velho a marcar em uma Copa foi Roger Milla, com 42 anos em 1994.",
  "🏆 Em 2026, a Espanha conquistou seu segundo título mundial, vencendo a Argentina por 1x0 na grande final!",
];

function renderRandomFact() {
  const factTextElement = document.querySelector("#fact-text");
  if (!factTextElement) return;

  const randomIndex = Math.floor(Math.random() * worldCupFacts.length);
  factTextElement.textContent = worldCupFacts[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  renderAllCards();
  renderGroupsTable();
  updateCountdown();
  renderRandomFact();

  const factBox = document.querySelector("#fact-text");
  if (factBox) {
    factBox.style.cursor = "pointer";
    factBox.addEventListener("click", renderRandomFact);
  }
});

// ==========================================
// MÓDULO SEJA TÉCNICO
// ==========================================
const currentSquad = [
  { id: 1, name: "Alisson", pos: "GOL" },
  { id: 2, name: "Ederson", pos: "GOL" },
  { id: 3, name: "Weverton", pos: "GOL" },
  { id: 4, name: "Marquinhos", pos: "ZAG" },
  { id: 5, name: "G. Magalhães", pos: "ZAG" },
  { id: 6, name: "Bremer", pos: "ZAG" },
  { id: 7, name: "Leo Pereira", pos: "ZAG" },
  { id: 8, name: "Ibañez", pos: "ZAG" },
  { id: 9, name: "Danilo", pos: "LAT" },
  { id: 12, name: "Alex Sandro", pos: "LAT" },
  { id: 10, name: "Douglas Santos", pos: "LAT" },
  { id: 26, name: "Éderson", pos: "MEI" },
  { id: 11, name: "B. Guimarães", pos: "VOL" },
  { id: 13, name: "Casemiro", pos: "VOL" },
  { id: 14, name: "Lucas Paquetá", pos: "MEI" },
  { id: 15, name: "Fabinho", pos: "VOL" },
  { id: 16, name: "Vinícius Jr.", pos: "ATA" },
  { id: 17, name: "Danilo Santos", pos: "MEI" },
  { id: 18, name: "Raphinha", pos: "ATA" },
  { id: 19, name: "Endrick", pos: "ATA" },
  { id: 20, name: "Neymar Jr.", pos: "ATA" },
  { id: 21, name: "Igor Thiago", pos: "ATA" },
  { id: 22, name: "G. Martinelli", pos: "ATA" },
  { id: 23, name: "Matheus Cunha", pos: "ATA" },
  { id: 24, name: "Rayan", pos: "ATA" },
  { id: 25, name: "Luiz Henrique", pos: "ATA" }
];

const formationsCoords = {
  "433": [
    { name: "GOL", x: 50, y: 90 },
    { name: "LD", x: 15, y: 72 }, { name: "ZAG", x: 38, y: 75 }, { name: "ZAG", x: 62, y: 75 }, { name: "LE", x: 85, y: 72 },
    { name: "VOL", x: 50, y: 53 }, { name: "MEI", x: 28, y: 42 }, { name: "MEI", x: 72, y: 42 },
    { name: "ATA", x: 20, y: 18 }, { name: "ATA", x: 50, y: 12 }, { name: "ATA", x: 80, y: 18 }
  ],
  "442": [
    { name: "GOL", x: 50, y: 90 },
    { name: "LD", x: 15, y: 72 }, { name: "ZAG", x: 38, y: 75 }, { name: "ZAG", x: 62, y: 75 }, { name: "LE", x: 85, y: 72 },
    { name: "VOL", x: 35, y: 52 }, { name: "VOL", x: 65, y: 52 }, { name: "MEI", x: 20, y: 38 }, { name: "MEI", x: 80, y: 38 },
    { name: "ATA", x: 35, y: 15 }, { name: "ATA", x: 65, y: 15 }
  ],
  "352": [
    { name: "GOL", x: 50, y: 90 },
    { name: "ZAG", x: 25, y: 75 }, { name: "ZAG", x: 50, y: 78 }, { name: "ZAG", x: 75, y: 75 },
    { name: "LD", x: 12, y: 48 }, { name: "VOL", x: 38, y: 54 }, { name: "VOL", x: 62, y: 54 }, { name: "LE", x: 88, y: 48 },
    { name: "MEI", x: 50, y: 35 },
    { name: "ATA", x: 35, y: 15 }, { name: "ATA", x: 65, y: 15 }
  ]
};

let activeFieldSlot = null;
let coachModuleInitialized = false;
let scaledPlayerIds = [];

function initCoachModule() {
  renderPoolList();
  if (!coachModuleInitialized) {
    changeFormation();
    coachModuleInitialized = true;
  }
}

function renderPoolList() {
  const poolList = document.getElementById('pool-list');
  if (!poolList) return;

  poolList.innerHTML = "";
  currentSquad.forEach(p => {
    const card = document.createElement('div');
    const isScaled = scaledPlayerIds.includes(p.id);
    card.className = `coach-player-card ${isScaled ? 'already-scaled' : ''}`;
    card.innerHTML = `<span>${p.name}</span> <span class="badge-pos">${p.pos}</span>`;

    card.onclick = () => {
      if (scaledPlayerIds.includes(p.id)) {
        alert(`${p.name} já está escalado noutra posição!`);
        return;
      }
      if (!activeFieldSlot) {
        alert("Primeiro, clique numa posição vazia no campo de futebol!");
        return;
      }
      fillSlotWithPlayer(p);
    };
    poolList.appendChild(card);
  });
}

function playerAlreadyScaledId(name) {
  const found = currentSquad.find(p => p.name === name);
  return found ? found.id : null;
}

function changeFormation() {
  const field = document.getElementById('football-field');
  if (!field) return;

  const oldSlots = field.querySelectorAll('.position-slot');
  oldSlots.forEach(slot => slot.remove());

  scaledPlayerIds = [];
  activeFieldSlot = null;

  const currentType = document.getElementById('formation').value;
  formationsCoords[currentType].forEach((pos) => {
    const slot = document.createElement('div');
    slot.className = 'position-slot';
    slot.style.left = pos.x + '%';
    slot.style.top = pos.y + '%';
    slot.innerText = pos.name;

    slot.onclick = (e) => {
      e.stopPropagation();

      if (slot.classList.contains('filled')) {
        const playerName = slot.querySelector('strong').innerText;
        const playerId = playerAlreadyScaledId(playerName);

        if (playerId) {
          scaledPlayerIds = scaledPlayerIds.filter(id => id !== playerId);
        }

        slot.classList.remove('filled');
        slot.style.background = 'none';
        slot.style.borderColor = 'rgba(255,255,255,0.4)';
        slot.innerText = pos.name;

        if (activeFieldSlot === slot) activeFieldSlot = null;

        renderPoolList();
        verifyLineupComplete();
      } else {
        document.querySelectorAll('.position-slot').forEach(s => {
          if (!s.classList.contains('filled')) {
            s.style.borderColor = 'rgba(255,255,255,0.4)';
          }
        });

        slot.style.borderColor = '#f7dd43';
        activeFieldSlot = slot;
      }
    };
    field.appendChild(slot);
  });

  renderPoolList();
  verifyLineupComplete();
}

function fillSlotWithPlayer(player) {
  if (!activeFieldSlot) return;

  scaledPlayerIds.push(player.id);
  activeFieldSlot.innerHTML = `<strong>${player.name}</strong>`;
  activeFieldSlot.classList.add('filled');
  activeFieldSlot.style.borderColor = 'transparent';

  activeFieldSlot = null;
  renderPoolList();
  verifyLineupComplete();
}

function verifyLineupComplete() {
  const slotsFilled = document.querySelectorAll('.position-slot.filled').length;
  const shareSection = document.getElementById('share-section');
  if (shareSection) {
    shareSection.style.display = slotsFilled === 11 ? 'block' : 'none';
  }
}

function shareLineup(platform) {
  const filledSlots = document.querySelectorAll('.position-slot.filled');
  let lineupText = "";

  if (filledSlots.length > 0) {
    lineupText = "\n\nMeu Time Escalado:\n";
    filledSlots.forEach(slot => {
      const playerName = slot.querySelector('strong').innerText;
      lineupText += `• ${playerName}\n`;
    });
  }

  const projectLink = window.location.href;
  const messageText = `⚽ Montei a minha escalação oficial do Brasil para a Copa de 2026! Quem você escalaria?${lineupText}\nMonte o seu time aqui também: ${projectLink}`;
  const encodedMessage = encodeURIComponent(messageText);

  if (platform === 'WhatsApp') {
    window.open(`https://api.whatsapp.com/send?text=${encodedMessage}`, '_blank');
  } else {
    window.open(`https://twitter.com/intent/tweet?text=${encodedMessage}`, '_blank');
  }
}

function downloadLineup() {
  const fieldElement = document.getElementById("football-field");
  const downloadBtn = document.getElementById("btnDownload");

  if (!fieldElement) return;

  if (downloadBtn) {
    downloadBtn.disabled = true;
    downloadBtn.textContent = "⌛ A gerar imagem...";
  }

  html2canvas(fieldElement, {
    logging: false,
    useCORS: true,
    backgroundColor: "#0b5e29",
    scale: 2
  }).then(canvas => {
    const imageURI = canvas.toDataURL("image/png");

    const createDownloadLink = document.createElement("a");
    createDownloadLink.download = "minha-escalacao-selecao-2026.png";
    createDownloadLink.href = imageURI;

    document.body.appendChild(createDownloadLink);
    createDownloadLink.click();
    document.body.removeChild(createDownloadLink);

    if (downloadBtn) {
      downloadBtn.disabled = false;
      downloadBtn.textContent = "💾 Baixar Imagem";
    }
  }).catch(error => {
    console.error("Erro ao gerar a imagem da escalação:", error);
    alert("Não foi possível gerar a imagem de momento!");
    if (downloadBtn) {
      downloadBtn.disabled = false;
      downloadBtn.textContent = "💾 Baixar Imagem";
    }
  });
}