const hamburger = document.querySelector('.menu');
const navMenu = document.querySelector('.flex-nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const FeaturedGames = [
  {
    id: 'game1',
    name: 'Dota 2',
    category: 'MOBA',
    description: 'Dota 2 is a multiplayer online battle arena (MOBA) in where 10 people fight in 2 different teams, 5 vs 5, to destroy the enemy base. You have different roles and a variety of more than 100 heroes to pick.',
    image: ['img/featured_games/dota2.jpg'],
  },
  {
    id: 'game2',
    name: 'CS GO',
    category: 'FPS',
    description: 'Counter Strike - Global Offensive (CS GO) is a First player shooter (FPS) in where 10 people fight in 2 different teams, one called the Terrorists and the other Counter-Terrorist (CT).',
    image: ['img/featured_games/csgo.jpg'],
  },
  {
    id: 'game3',
    name: 'PUBG',
    category: 'Battle Royale',
    description: "PlayerUnknown's Battlegrounds (PUBG) is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch.",
    image: ['img/featured_games/pubg.jpg'],
  },
  {
    id: 'game4',
    name: 'Tekken 7',
    category: 'Fighting',
    description: 'As with many fighting games, in Tekken players choose a character from a lineup and engage in hand-to-hand combat with an opponent.',
    image: ['img/featured_games/tekken.jpg'],
  },
  {
    id: 'game5',
    name: 'Clash Royale',
    category: 'RTS',
    description: 'Clash Royale is a real-time strategy (RTS) game that combines elements from collectible card games, tower defense and multiplayer online battle arena.',
    image: ['img/featured_games/clashroyale.jpg'],
  },
  {
    id: 'game6',
    name: 'Hearthstone',
    category: 'DC Card Game',
    description: 'Hearthstone is an online digital collectible card game (DC Card Game). The game is a turn-based card game between two opponents, using constructed decks of 30 cards along with a selected hero with a unique power.',
    image: ['img/featured_games/hearthstone.jpg'],
  },
];

const FeaturedGameContainer = document.getElementById('games-main');

let gamesInner = '';

function renderGames(num) {
  for (let i = 0; i < num; i += 1) {
    gamesInner += `
  <div id="${FeaturedGames[i].id}" class="game">
    <img class="game-img" src="${FeaturedGames[i].image}" width="100%" alt="featured_game">
  <div class="game-hover">       
    <h2 class="game-name jdx">${FeaturedGames[i].name}</h2>
    <ul class="game-tools jdx">
      <li class="game-tool">${FeaturedGames[i].category}</li>
    </ul>
    <p class="notes">${FeaturedGames[i].description}</p>
  </div>
  </div>
  `;
  }
  FeaturedGameContainer.innerHTML = gamesInner;
  gamesInner = '';
  return gamesInner;
}

const seeMoreBtn = document.getElementById('see-more');

seeMoreBtn.addEventListener('click', () => {
  if (seeMoreBtn.innerText === 'MORE') {
    seeMoreBtn.innerText = 'LESS';
    renderGames(6);
  } else {
    seeMoreBtn.innerText = 'MORE';
    renderGames(2);
  }
});

if (window.innerWidth >= 768) {
  renderGames(6);
} else {
  renderGames(2);
}

let desktop = false;

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && !desktop) {
    renderGames(6);
    desktop = true;
  }
});