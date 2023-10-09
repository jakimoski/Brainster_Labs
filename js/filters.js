// ADD A CHANGE EVENT LISTENER TO THE "CODING" CHECKBOX
document
  .querySelector("#filter-coding")
  .addEventListener("change", filterCoding);
// ADD A CHANGEEVENT LISTENER TO THE "DESIGN" CHECKBOX
document
  .querySelector("#filter-design")
  .addEventListener("change", filterDesign);
// ADD A CHANGE EVENT LISTENER TO THE "MARKETING" CHECKBOX
document
  .querySelector("#filter-marketing")
  .addEventListener("change", filterMarketing);
// ADD A CLICK EVENT LISTENER TO THE "LOAD MORE" BUTTON
document.querySelector(".load-more").addEventListener("click", loadMoreCards);
// SELECT ALL CARDS
const allCards = document.querySelectorAll(".card");
// SELECT LOAD MORE BUTTON
const loadMoreButton = document.querySelector(".load-more");

// HIDE ALL CARDS FUNCTION
function hideAllCards() {
  allCards.forEach((card) => {
    card.classList.add("hidden");
    card.classList.remove("card-show");
  });
}

// SHOW ALL CARDS FUNCTION
function showAllCards() {
  allCards.forEach((card) => {
    card.classList.remove("hidden");
  });
  hideExcessCards();
}

// FUNCTION TO FILTER CODING CARDS
function filterCoding() {
  hideAllCards();

  if (document.querySelector("#filter-coding").checked) {
    const codingCards = document.querySelectorAll(".coding");
    codingCards.forEach((codingCard) => {
      codingCard.classList.remove("hidden");
      codingCard.classList.add("card-show");
      loadMoreButton.style.display = "none";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}
// /FUNCTION TO FILTER DESIGN CARDS
function filterDesign() {
  hideAllCards();

  if (document.querySelector("#filter-design").checked) {
    const designCards = document.querySelectorAll(".design");
    designCards.forEach((designCard) => {
      designCard.classList.remove("hidden");
      designCard.classList.add("card-show");
      loadMoreButton.style.display = "none";
    });

    document.querySelector("#filter-coding").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}
// FUNCTION FOR LITERING MARKTING CARDS
function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#filter-marketing").checked) {
    const marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach((marketingCard) => {
      marketingCard.classList.remove("hidden");
      marketingCard.classList.add("card-show");
      loadMoreButton.style.display = "none";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-coding").checked = false;
  } else {
    showAllCards();
  }
}

// FUNCTION TO HIDE ALL CARDS EXEPT FIRST 6 ON SMALL SCREENS
function hideExcessCards() {
  // Check if the screen size is less than or equal to 768px (mobile)
  if (window.innerWidth <= 768) {
    if (allCards.length > 6) {
      const cardsToHide = Array.from(allCards).slice(6);
      cardsToHide.forEach((card) => {
        card.classList.add("hidden");
        loadMoreButton.style.display = "block";
      });
    }
  } else {
    // If the screen size is larger than 768px (not mobile), show all cards
    allCards.forEach((card) => {
      card.classList.remove("hidden");
      loadMoreButton.style.display = "none";
    });
  }
  // Reapply filters based on selected categories
  if (document.querySelector("#filter-coding").checked) {
    filterCoding();
  } else if (document.querySelector("#filter-design").checked) {
    filterDesign();
  } else if (document.querySelector("#filter-marketing").checked) {
    filterMarketing();
  }
}

// FUNCTION TO LOAD NEXT 6 CARDS
function loadMoreCards() {
  // Check if there are more cards to show
  const hiddenCards = document.querySelectorAll(".card.hidden");

  // Show the next 6 cards (or fewer if there are fewer than 6 remaining)
  const cardsToShow = Array.from(hiddenCards).slice(0, 6);

  cardsToShow.forEach((card) => {
    card.classList.remove("hidden");
  });

  // Check if there are any hidden cards left
  const remainingHiddenCards = document.querySelectorAll(".card.hidden");

  if (remainingHiddenCards.length === 0) {
    // All cards are now shown, hide the button
    loadMoreButton.style.display = "none";
  }
}

// Track if it's a mobile view initially
let isMobileView = window.innerWidth <= 768;

// FUNCTION TO HANDLE RESIZING
function handleResize() {
  const isMobileNow = window.innerWidth <= 768;

  if (isMobileView !== isMobileNow) {
    // Only run hideExcessCards when the view changes from mobile to non-mobile or vice versa
    hideExcessCards();
    isMobileView = isMobileNow;
  }
}

// ADD A RESIZE EVENT LISTENER TO CALL HANDLERESIZE
window.addEventListener("resize", handleResize);

// CALL HIDEEXCESSCARDS INITIALLY
hideExcessCards();
