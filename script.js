console.log("Script loaded");

const cardSection = document.querySelector('.cardSection');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <p>This is a card</p>
    <button class="removeBtn">Remove</button>
  `;
  
  // Attach event listener for remove button
  card.querySelector('.removeBtn').addEventListener('click', () => {
    card.remove();
  });

  cardSection.appendChild(card);
});