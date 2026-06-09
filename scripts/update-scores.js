const fs = require('fs');

async function fetchResults() {
  const apiKey = process.env.RAPIDAPI_KEY;
  const today = new Date().toISOString().split('T')[0]; 

  try {
    // ID 1 geralmente é o da Copa do Mundo na API-Football
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=1&season=2026&date=${today}`, 
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }
      }
    );

    const data = await response.json();
    const apiMatches = data.response || [];

    if (apiMatches.length === 0) {
      console.log("Nenhum jogo encontrado para o dia de hoje na API.");
      return;
    }

    let mainJsContent = fs.readFileSync('./main.js', 'utf8');

    apiMatches.forEach(fixture => {
      if (fixture.fixture.status.short === "FT") {
        const home = fixture.teams.home.name.toLowerCase().replace(/\s/g, '');
        const away = fixture.teams.away.name.toLowerCase().replace(/\s/g, '');
        const score1 = fixture.goals.home;
        const score2 = fixture.goals.away;

        // Procura pelo ID do jogo dentro do array matchesData no seu main.js
        const regex = new RegExp(`(id:\\s*["']${home}-${away}["'].*?score1:\\s*["'])-["'](.*?,\\s*score2:\\s*["'])-["']`, 'g');
        mainJsContent = mainJsContent.replace(regex, `$1${score1}$2${score2}`);
      }
    });

    fs.writeFileSync('./main.js', mainJsContent, 'utf8');
    console.log("Arquivo main.js atualizado com sucesso pelo robô!");

  } catch (error) {
    console.error("Erro crítico ao rodar o script de atualização:", error);
    process.exit(1);
  }
}

fetchResults();