function beregnResultat(event) {
    event.preventDefault(); // Forhinder formularens standardindsendelse
  
    // Hent værdier fra inputfelterne
    const timelon = parseFloat(document.getElementById("timelon").value);
    const timerPerUge = parseFloat(document.getElementById("timer_per_uge").value);
    const indkobspris = parseFloat(document.getElementById("indkobspris").value);
    const vedligeholdelse = parseFloat(document.getElementById("vedligeholdelse").value);
  
    // Beregninger
    const samletUdgiftManuel = timelon * timerPerUge * 52 * 5; // 5 år manuel rengøring
    const samletUdgiftRobot = indkobspris + (vedligeholdelse * 5); // 5 år med robot
    const besparelse = samletUdgiftManuel - samletUdgiftRobot;
  
    // Indsæt resultater i HTML-felterne
    document.getElementById("manuelt-resultat").textContent = `${samletUdgiftManuel.toFixed(2)} kr.`;
    document.getElementById("robot-resultat").textContent = `${samletUdgiftRobot.toFixed(2)} kr.`;
    document.getElementById("besparelse-resultat").textContent = `${besparelse.toFixed(2)} kr.`;
  
    // Vis resultatfeltet
    document.getElementById("resultat-container").style.display = "block";
  
    return false; // Forhindrer genindlæsning af siden
  }
  