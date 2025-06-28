// main.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("flashcard-container");

  const mergedCards = [...allCards.react, ...allCards.node, ...allCards.behavioral];
  const shuffled = mergedCards.sort(() => 0.5 - Math.random());
  let currentIndex = 0;
  let isEnglish = true;

  const navigation = document.createElement("div");
  navigation.className = "flex justify-center gap-4 mt-6 flex-wrap";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "← Previous";
  prevBtn.className =
    "bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded disabled:opacity-50";
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      showCard(currentIndex);
      nextBtn.disabled = false;
    }
  });

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next →";
  nextBtn.className =
    "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50";
  nextBtn.addEventListener("click", () => showNextCard());

  const langToggle = document.createElement("button");
  langToggle.textContent = "Switch to PT-BR";
  langToggle.className =
    "bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded";
  langToggle.addEventListener("click", () => {
    isEnglish = !isEnglish;
    langToggle.textContent = isEnglish ? "Switch to PT-BR" : "Switch to EN";
    showCard(currentIndex);
  });

  navigation.appendChild(prevBtn);
  navigation.appendChild(nextBtn);
  navigation.appendChild(langToggle);
  container.after(navigation);

  function showCard(index) {
    container.innerHTML = "";
    const cardData = shuffled[index];

    const question = isEnglish ? cardData.question : cardData.question_pt || cardData.question;
    const answer = isEnglish ? cardData.answer : cardData.answer_pt || cardData.answer;

    const card = document.createElement("div");
    card.className = "card w-full max-w-2xl mx-auto";
    card.innerHTML = `
      <div class="card-inner relative w-full min-h-[250px] rounded-xl shadow-lg text-center transition-transform duration-500 ease-in-out transform-style-preserve-3d">
        <div class="card-front absolute w-full h-full backface-hidden bg-gray-800 text-white text-lg font-medium flex items-center justify-center p-6 rounded-xl">
          ${question}
        </div>
        <div class="card-back absolute w-full h-full backface-hidden transform rotate-y-180 bg-blue-600 text-white text-lg font-semibold flex items-center justify-center p-6 rounded-xl">
          ${answer}
        </div>
      </div>
    `;

    card.addEventListener("click", () => card.classList.toggle("flipped"));
    container.appendChild(card);
    prevBtn.disabled = index === 0;
  }

  function showNextCard() {
    currentIndex++;
    if (currentIndex >= shuffled.length) {
      container.innerHTML = `<p class='text-center text-green-400 text-xl font-bold'>All questions done! 🎉</p>`;
      nextBtn.disabled = true;
    } else {
      showCard(currentIndex);
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "Enter") {
      showNextCard();
    } else if (e.key === "ArrowLeft") {
      if (currentIndex > 0) {
        currentIndex--;
        showCard(currentIndex);
        nextBtn.disabled = false;
      }
    }
  });

  showCard(currentIndex);
});
