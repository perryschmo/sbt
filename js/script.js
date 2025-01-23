let currentStep = 0;

function handleResponse(response) {
  const questionContainer = document.getElementById("question-container");
  const resultDiv = document.getElementById("result");

  if (currentStep === 0) {
    if (response === "yesPanels") {
      currentStep++;
      questionContainer.innerHTML = `
                <h2>Do you have battery packs?</h2>
                <button class="raise" onclick="handleResponse('yesBatteries')">Yes</button>
                <button class="raise" onclick="handleResponse('noBatteries')">No</button>
            `;
    } else {
      resultDiv.innerText =
        "At the moment, we are helping solar owners to optimize their solar buyback plan. Check in later for updates for non-solar residents!";
      questionContainer.style.display = "none"; // Hide question container
    }
  } else if (currentStep === 1) {
    if (response === "yesBatteries") {
      currentStep++;
      questionContainer.innerHTML = `
                <h2>Do you want a more precise or less precise option? \n\n Yes = More precise (we'll analyze your data) \n No = Less precise (we'll ask a few questions)</h2>
                <button class="raise" onclick="handleResponse('morePrecise')">Yes</button>
                <button class="raise" onclick="handleResponse('lessPrecise')">No</button>
            `;
    } else {
      resultDiv.innerText =
        "Great, this helps us give a more accurate recommendation.";
      questionContainer.style.display = "none"; // Hide question container
    }
  } else if (currentStep === 2) {
    if (response === "morePrecise") {
      resultDiv.innerText =
        "Check back in soon! We are building a tool to do this in a quick, effortless way!";
    } else {
      resultDiv.innerText =
        "No problem, let's just have you answer a few questions on our simple tool and you can get a better picture of your best options.";
    }
    questionContainer.style.display = "none"; // Hide question container
  }
}
