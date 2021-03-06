//code by luke baja ricketts

(() => {
  const pointsPerQuestion = parseInt(prompt("Points per question:"));

  const nativeFetch = fetch;
  window.fetch = function (resource, init) {
    if (
      [
        "https://game.quizizz.com/play-api/v4/soloProceed",
        "https://game.quizizz.com/play-api/v4/proceedGame",
      ].includes(resource)
    ) {
      const data = JSON.parse(init.body);

      data.response.provisional.scores = {
        correct: pointsPerQuestion,
        incorrect: pointsPerQuestion,
      };

      data.response.provisional.scoreBreakups = {
        correct: { base: pointsPerQuestion, timer: 0, streak: 0, powerups: [], total: pointsPerQuestion },
        incorrect: { base: pointsPerQuestion, timer: 0, streak: 0, powerups: [], total: pointsPerQuestion },
      };
      
      init.body = JSON.stringify(data);
    }

    return nativeFetch(resource, init);
  };
})();