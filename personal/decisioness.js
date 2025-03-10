const decisions = [
    "Hoy es un buen día para empezar algo nuevo.",
    "Confía en tus instintos.",
    "No temas pedir ayuda.",
    "Tómate un tiempo para relajarte.",
    "La oportunidad está a la vuelta de la esquina.",
    "Sé valiente y toma la iniciativa.",
    "Recuerda ser agradecido.",
    "Aprende algo nuevo hoy."
];

const cardsContainer = document.getElementById("cardsContainer");
const showCardsButton = document.getElementById("showCards");

// Mostrar cartas al hacer clic en el botón
showCardsButton.addEventListener("click", () => {
    cardsContainer.innerHTML = ""; // Limpiar cartas anteriores
    const usedIndexes = new Set();

    for (let i = 0; i < 8; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * decisions.length);
        } while (usedIndexes.has(randomIndex));
        usedIndexes.add(randomIndex);

        const card = document.createElement("div");
        card.classList.add("card");

        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");

        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
        cardFront.innerText = "Carta " + (i + 1);

        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");
        cardBack.innerText = decisions[randomIndex];

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        // Evento para girar una sola carta
        card.addEventListener("click", () => {
            const flippedCards = document.querySelectorAll(".flip");
            if (flippedCards.length === 0) {
                card.classList.add("flip");
            }
        });

        cardsContainer.appendChild(card);
    }

    cardsContainer.style.display = "grid";
});
