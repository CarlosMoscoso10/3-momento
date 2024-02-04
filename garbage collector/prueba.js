const Character = {
    Lover: {
      name: "Antonio",
      role: "General Romano",
      lover: {
        name: "Cleopatra",
        role: "Reina de Egipto",
      },
    },
  };
  
  function startingGame() {
    alert("Bienvenido");
    alert("Estás listo para jugar");
    alert("Solo tienes 4 oportunidades. No los dejes morir");
    FirstQuestion();
    secondQuestion();
    thirdQuestion();
    quarterQuestion();
    CleopatraQuestions();
  }
  
  function CleopatraQuestions() {
    alert("Antonio y Cleopatra, dos amantes apasionados en el antiguo Egipto.");
    alert("Tienes la oportunidad de salvarlos");
    questionCleopatraOne();
  }
  
  function questionCleopatraOne() {
    alert("Antonio y Cleopatra enfrentan amenazas políticas y militares.");
    alert("Deberías aconsejarles sobre su próxima acción.");
    alert("Selecciona 1: Negociar una alianza con otro reino., Selecciona 2: Desafiar a sus enemigos en el campo de batalla.");
    let cleopatraFirstQuestion = prompt("Selecciona tu respuesta");
    if (cleopatraFirstQuestion == "1") {
      alert("Felicitaciones, has logrado salvarlos, te quedan 3 preguntas.");
    } else {
      delete Character.Lover.lover;
      console.log(Character);
    }
  }
  
  function secondQuestion() {
    alert("Después de la batalla de Actium, Antonio se entera de la muerte de Cleopatra.");
    alert("Tienes la oportunidad de cambiar el curso de los eventos.");
    questionCleopatraTwo();
  }
  
  function questionCleopatraTwo() {
    alert("Antonio está devastado y considera unirse a Cleopatra en la muerte.");
    alert("¿Cómo puedes persuadir a Antonio para que no tome esa decisión?");
    alert("Selecciona 1: Recordarle sus responsabilidades como líder militar., Selecciona 2: Compartirle noticias falsas de la supervivencia de Cleopatra.");
    let cleopatraSecondQuestion = prompt("Selecciona tu respuesta");
    if (cleopatraSecondQuestion == "1") {
      alert("Bien hecho, has logrado cambiar su destino, te quedan 2 preguntas.");
    } else {
      delete Character.Lover;
      console.log(Character);
    }
  }
  
  // ... (the rest of the functions remain unchanged)
  
  startingGame();
  