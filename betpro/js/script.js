// Data Storage
let currentBalance = 1000;
let betSlip = [];
let betHistory = [];
let currentSlide = 0;
let currentMatch = null;
let matches = [
    {
        id: 1,
        league: 'UEFA Champions League',
        team1: 'Club Brujas',
        team2: 'Barcelona',
        logo1: 'CB',
        logo2: 'BAR',
        time: '21:00',
        live: false,
        odds: { '1': 5.25, 'X': 4.75, '2': 1.53 },
        stats: {
            possession: [45, 55],
            shots: [8, 15],
            shotsOnTarget: [3, 9],
            corners: [4, 8],
            fouls: [12, 8],
            yellowCards: [2, 1],
            redCards: [0, 0]
        },
        markets: {
            goals: [
                { label: 'Más de 2.5', odd: 1.72 },
                { label: 'Menos de 2.5', odd: 2.10 },
                { label: 'Más de 3.5', odd: 2.85 },
                { label: 'Menos de 3.5', odd: 1.44 },
                { label: 'Primer tiempo +1.5', odd: 2.30 },
                { label: 'Primer tiempo -1.5', odd: 1.60 },
                { label: 'Segundo tiempo +1.5', odd: 1.95 },
                { label: 'Segundo tiempo -1.5', odd: 1.80 },
                { label: 'Primeros 10 min Gol', odd: 4.50 },
                { label: 'Primeros 10 min No Gol', odd: 1.18 }
            ],
            corners: [
                { label: 'Más de 9.5', odd: 1.90 },
                { label: 'Menos de 9.5', odd: 1.90 },
                { label: 'Más de 10.5', odd: 2.20 },
                { label: 'Menos de 10.5', odd: 1.66 },
                { label: '1ª mitad +4.5', odd: 2.10 },
                { label: '1ª mitad -4.5', odd: 1.70 },
                { label: '2ª mitad +4.5', odd: 1.95 },
                { label: '2ª mitad -4.5', odd: 1.85 },
                { label: '2ª mitad +2', odd: 2.25 },
                { label: '2ª mitad -2', odd: 1.60 }
            ],
            cards: [
                { label: 'Más de 3.5', odd: 2.00 },
                { label: 'Menos de 3.5', odd: 1.80 },
                { label: 'Más de 4.5', odd: 2.75 },
                { label: 'Menos de 4.5', odd: 1.44 },
                { label: '1ª mitad +1.5', odd: 2.40 },
                { label: '1ª mitad -1.5', odd: 1.55 },
                { label: 'Primeros 10 min Amarilla', odd: 5.00 },
                { label: 'Primeros 10 min No Amarilla', odd: 1.12 },
                { label: 'Tarjeta Roja Sí', odd: 3.50 },
                { label: 'Tarjeta Roja No', odd: 1.30 }
            ],
            shots: [
                { label: 'Más de 5.5 remates puerta', odd: 1.85 },
                { label: 'Menos de 5.5 remates puerta', odd: 1.95 },
                { label: '1ª mitad +2.5 remates puerta', odd: 2.20 },
                { label: '1ª mitad -2.5 remates puerta', odd: 1.65 },
                { label: '2ª mitad +2.5 remates puerta', odd: 2.10 },
                { label: '2ª mitad -2.5 remates puerta', odd: 1.70 }
            ],
            common: [
                { label: 'Ambos equipos marcan', odd: 1.72 },
                { label: 'Al menos un equipo no marca', odd: 2.10 },
                { label: 'Gol en ambos tiempos', odd: 2.50 },
                { label: 'Gol y más de 2.5', odd: 2.10 },
                { label: '1ª mitad +1 corner', odd: 1.45 },
                { label: '2ª mitad +1 corner', odd: 1.35 },
                { label: 'Más de 1 gol', odd: 1.30 },
                { label: 'Ganador y ambos marcan', odd: 3.20 }
            ]
        }
    },
    {
        id: 2,
        league: 'UEFA Champions League',
        team1: 'Pafos FC',
        team2: 'Villarreal',
        logo1: 'PAF',
        logo2: 'VIL',
        time: '18:45',
        live: true,
        odds: { '1': 8.00, 'X': 5.50, '2': 1.33 },
        stats: {
            possession: [38, 62],
            shots: [5, 18],
            shotsOnTarget: [2, 11],
            corners: [3, 9],
            fouls: [15, 7],
            yellowCards: [3, 1],
            redCards: [0, 0]
        },
        markets: {
            goals: [
                { label: 'Más de 2.5', odd: 1.85 },
                { label: 'Menos de 2.5', odd: 1.95 },
                { label: 'Primer tiempo +1.5', odd: 2.50 },
                { label: 'Primer tiempo -1.5', odd: 1.50 },
                { label: 'Segundo tiempo +1.5', odd: 2.10 },
                { label: 'Segundo tiempo -1.5', odd: 1.70 },
                { label: 'Primeros 10 min Gol', odd: 5.00 },
                { label: 'Primeros 10 min No Gol', odd: 1.15 }
            ],
            corners: [
                { label: 'Más de 10.5', odd: 1.75 },
                { label: 'Menos de 10.5', odd: 2.05 },
                { label: '1ª mitad +4.5', odd: 2.30 },
                { label: '1ª mitad -4.5', odd: 1.60 },
                { label: '2ª mitad +4.5', odd: 2.10 },
                { label: '2ª mitad -4.5', odd: 1.70 },
                { label: '2ª mitad +2', odd: 2.40 },
                { label: '2ª mitad -2', odd: 1.55 }
            ],
            cards: [
                { label: 'Más de 4.5', odd: 2.20 },
                { label: 'Menos de 4.5', odd: 1.66 },
                { label: '1ª mitad +1.5', odd: 2.60 },
                { label: '1ª mitad -1.5', odd: 1.48 },
                { label: 'Primeros 10 min Amarilla', odd: 6.00 },
                { label: 'Primeros 10 min No Amarilla', odd: 1.10 },
                { label: 'Tarjeta Roja Sí', odd: 4.00 },
                { label: 'Tarjeta Roja No', odd: 1.22 }
            ],
            shots: [
                { label: 'Más de 5.5 remates puerta', odd: 1.90 },
                { label: 'Menos de 5.5 remates puerta', odd: 1.90 },
                { label: '1ª mitad +2.5 remates puerta', odd: 2.40 },
                { label: '1ª mitad -2.5 remates puerta', odd: 1.55 },
                { label: '2ª mitad +2.5 remates puerta', odd: 2.20 },
                { label: '2ª mitad -2.5 remates puerta', odd: 1.65 }
            ],
            common: [
                { label: 'Ambos equipos marcan', odd: 1.80 },
                { label: 'Al menos un equipo no marca', odd: 2.00 },
                { label: 'Gol en ambos tiempos', odd: 2.70 },
                { label: 'Gol y más de 2.5', odd: 2.30 },
                { label: '1ª mitad +1 corner', odd: 1.50 },
                { label: '2ª mitad +1 corner', odd: 1.40 },
                { label: 'Más de 1 gol', odd: 1.35 },
                { label: 'Ganador y ambos marcan', odd: 3.50 }
            ]
        }
    },
    {
        id: 3,
        league: 'UEFA Champions League',
        team1: 'Ajax',
        team2: 'Galatasaray',
        logo1: 'AJA',
        logo2: 'GAL',
        time: '21:00',
        live: false,
        odds: { '1': 3.10, 'X': 3.80, '2': 2.10 },
        stats: {
            possession: [52, 48],
            shots: [12, 11],
            shotsOnTarget: [6, 5],
            corners: [6, 5],
            fouls: [10, 11],
            yellowCards: [2, 2],
            redCards: [0, 0]
        },
        markets: {
            goals: [
                { label: 'Más de 2.5', odd: 1.65 },
                { label: 'Menos de 2.5', odd: 2.25 },
                { label: 'Primer tiempo +1.5', odd: 2.10 },
                { label: 'Primer tiempo -1.5', odd: 1.70 },
                { label: 'Segundo tiempo +1.5', odd: 1.90 },
                { label: 'Segundo tiempo -1.5', odd: 1.90 },
                { label: 'Primeros 10 min Gol', odd: 4.20 },
                { label: 'Primeros 10 min No Gol', odd: 1.20 }
            ],
            corners: [
                { label: 'Más de 9.5', odd: 2.00 },
                { label: 'Menos de 9.5', odd: 1.80 },
                { label: '1ª mitad +4.5', odd: 2.00 },
                { label: '1ª mitad -4.5', odd: 1.80 },
                { label: '2ª mitad +4.5', odd: 1.95 },
                { label: '2ª mitad -4.5', odd: 1.85 },
                { label: '2ª mitad +2', odd: 2.15 },
                { label: '2ª mitad -2', odd: 1.68 }
            ],
            cards: [
                { label: 'Más de 3.5', odd: 1.95 },
                { label: 'Menos de 3.5', odd: 1.85 },
                { label: '1ª mitad +1.5', odd: 2.20 },
                { label: '1ª mitad -1.5', odd: 1.65 },
                { label: 'Primeros 10 min Amarilla', odd: 4.50 },
                { label: 'Primeros 10 min No Amarilla', odd: 1.17 },
                { label: 'Tarjeta Roja Sí', odd: 3.20 },
                { label: 'Tarjeta Roja No', odd: 1.35 }
            ],
            shots: [
                { label: 'Más de 5.5 remates puerta', odd: 1.80 },
                { label: 'Menos de 5.5 remates puerta', odd: 2.00 },
                { label: '1ª mitad +2.5 remates puerta', odd: 2.10 },
                { label: '1ª mitad -2.5 remates puerta', odd: 1.70 },
                { label: '2ª mitad +2.5 remates puerta', odd: 2.00 },
                { label: '2ª mitad -2.5 remates puerta', odd: 1.80 }
            ],
            common: [
                { label: 'Ambos equipos marcan', odd: 1.65 },
                { label: 'Al menos un equipo no marca', odd: 2.20 },
                { label: 'Gol en ambos tiempos', odd: 2.30 },
                { label: 'Gol y más de 2.5', odd: 1.95 },
                { label: '1ª mitad +1 corner', odd: 1.40 },
                { label: '2ª mitad +1 corner', odd: 1.35 },
                { label: 'Más de 1 gol', odd: 1.25 },
                { label: 'Ganador y ambos marcan', odd: 2.80 }
            ]
        }
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderMatches();
    startCarousel();
    
    // Add event listeners
    document.getElementById('stakeInput').addEventListener('input', calculatePotentialWin);
    document.querySelector('.search-bar input').addEventListener('input', handleSearch);
    
    // Close modals on background click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    console.log('🎮 BetPro365 - Plataforma de Apuestas Deportivas');
    console.log('✅ Sistema completamente funcional');
    console.log('📊 Estadísticas en tiempo real activadas');
    console.log('🎫 Sistema de apuestas y recibos operativo');
    console.log('💰 Gestión de saldo implementada');
    console.log('🔵 Colores cambiados a azules y negros');
    console.log('⚽ Nuevas opciones de apuestas agregadas');
});

// Carousel
function startCarousel() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % 3;
        goToSlide(currentSlide);
    }, 5000);
}

function goToSlide(index) {
    currentSlide = index;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Render Matches
function renderMatches() {
    const container = document.getElementById('matchList');
    container.innerHTML = matches.map(match => `
        <div class="match-card" onclick="showMatchDetail(${match.id})">
            <div class="match-header">
                <span class="match-league">${match.league}</span>
                ${match.live ? '<span class="live-badge">EN VIVO</span>' : `<span class="match-time">${match.time}</span>`}
            </div>
            <div class="match-teams">
                <div class="team">
                    <div class="team-logo">${match.logo1}</div>
                    <div class="team-name">${match.team1}</div>
                </div>
                <div class="vs">VS</div>
                <div class="team" style="justify-content: flex-end;">
                    <div class="team-name" style="text-align: right;">${match.team2}</div>
                    <div class="team-logo">${match.logo2}</div>
                </div>
            </div>
            <div class="match-odds">
                <div class="odd-btn ${isInBetslip(match.id, '1') ? 'selected' : ''}" onclick="event.stopPropagation(); toggleBet(${match.id}, '1', ${match.odds['1']})">
                    <div class="odd-label">1</div>
                    <div class="odd-value">${match.odds['1'].toFixed(2)}</div>
                </div>
                <div class="odd-btn ${isInBetslip(match.id, 'X') ? 'selected' : ''}" onclick="event.stopPropagation(); toggleBet(${match.id}, 'X', ${match.odds['X']})">
                    <div class="odd-label">X</div>
                    <div class="odd-value">${match.odds['X'].toFixed(2)}</div>
                </div>
                <div class="odd-btn ${isInBetslip(match.id, '2') ? 'selected' : ''}" onclick="event.stopPropagation(); toggleBet(${match.id}, '2', ${match.odds['2']})">
                    <div class="odd-label">2</div>
                    <div class="odd-value">${match.odds['2'].toFixed(2)}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Show Match Detail
function showMatchDetail(matchId) {
    currentMatch = matches.find(m => m.id === matchId);
    document.getElementById('mainView').style.display = 'none';
    document.getElementById('matchDetail').classList.add('active');
    
    document.getElementById('detailLeague').textContent = currentMatch.league;
    document.getElementById('detailTeams').innerHTML = `
        <div class="team">
            <div class="team-logo" style="width: 60px; height: 60px; font-size: 24px;">${currentMatch.logo1}</div>
            <div class="team-name" style="font-size: 20px;">${currentMatch.team1}</div>
        </div>
        <div class="vs" style="font-size: 24px;">VS</div>
        <div class="team" style="justify-content: flex-end;">
            <div class="team-name" style="font-size: 20px; text-align: right;">${currentMatch.team2}</div>
            <div class="team-logo" style="width: 60px; height: 60px; font-size: 24px;">${currentMatch.logo2}</div>
        </div>
    `;
    document.getElementById('detailTime').innerHTML = currentMatch.live ? 
        '<span class="live-badge" style="font-size: 14px; padding: 6px 15px;">EN VIVO</span>' : 
        `<span style="font-size: 16px;">${currentMatch.time}</span>`;
    
    switchTab('popular');
}

function showMainView() {
    document.getElementById('matchDetail').classList.remove('active');
    document.getElementById('mainView').style.display = 'block';
    currentMatch = null;
}

// Switch Tabs
function switchTab(tabName) {
    document.querySelectorAll('.detail-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const content = document.getElementById('tabContent');
    
    if (tabName === 'stats') {
        renderStats();
    } else {
        renderMarkets(tabName);
    }
}

// Render Markets
function renderMarkets(tabName) {
    const content = document.getElementById('tabContent');
    let markets = [];
    
    if (tabName === 'popular') {
        markets = [
            { title: 'Resultado Final', items: [
                { label: currentMatch.team1, odd: currentMatch.odds['1'], type: '1' },
                { label: 'Empate', odd: currentMatch.odds['X'], type: 'X' },
                { label: currentMatch.team2, odd: currentMatch.odds['2'], type: '2' }
            ]},
            { title: 'Ambos Equipos Anotarán', items: [
                { label: 'Sí', odd: 1.72, type: 'BTTS-Yes' },
                { label: 'No', odd: 2.10, type: 'BTTS-No' }
            ]},
            { title: 'Total de Goles', items: currentMatch.markets.goals.slice(0, 4).map((g, i) => ({...g, type: `goals-${i}`})) }
        ];
    } else if (tabName === 'goals') {
        markets = [
            { title: 'Total de Goles', items: currentMatch.markets.goals.slice(0, 4).map((g, i) => ({...g, type: `goals-${i}`})) },
            { title: 'Goles - Primera Mitad', items: currentMatch.markets.goals.slice(4, 6).map((g, i) => ({...g, type: `goals-ht-${i}`})) },
            { title: 'Goles - Segunda Mitad', items: currentMatch.markets.goals.slice(6, 8).map((g, i) => ({...g, type: `goals-2h-${i}`})) },
            { title: 'Goles - Minutos Específicos', items: currentMatch.markets.goals.slice(8, 10).map((g, i) => ({...g, type: `goals-time-${i}`})) }
        ];
    } else if (tabName === 'corners') {
        markets = [
            { title: 'Total de Córners', items: currentMatch.markets.corners.slice(0, 4).map((c, i) => ({...c, type: `corners-${i}`})) },
            { title: 'Córners - Primera Mitad', items: currentMatch.markets.corners.slice(4, 6).map((c, i) => ({...c, type: `corners-ht-${i}`})) },
            { title: 'Córners - Segunda Mitad', items: currentMatch.markets.corners.slice(6, 8).map((c, i) => ({...c, type: `corners-2h-${i}`})) },
            { title: 'Córners - Específicos', items: currentMatch.markets.corners.slice(8, 10).map((c, i) => ({...c, type: `corners-spec-${i}`})) }
        ];
    } else if (tabName === 'cards') {
        markets = [
            { title: 'Total de Tarjetas', items: currentMatch.markets.cards.slice(0, 4).map((c, i) => ({...c, type: `cards-${i}`})) },
            { title: 'Tarjetas - Primera Mitad', items: currentMatch.markets.cards.slice(4, 6).map((c, i) => ({...c, type: `cards-ht-${i}`})) },
            { title: 'Tarjetas - Minutos Específicos', items: currentMatch.markets.cards.slice(6, 8).map((c, i) => ({...c, type: `cards-time-${i}`})) },
            { title: 'Tarjetas Rojas', items: currentMatch.markets.cards.slice(8, 10).map((c, i) => ({...c, type: `cards-red-${i}`})) }
        ];
    } else if (tabName === 'shots') {
        markets = [
            { title: 'Total de Remates a Puerta', items: currentMatch.markets.shots.slice(0, 2).map((s, i) => ({...s, type: `shots-${i}`})) },
            { title: 'Remates a Puerta - Primera Mitad', items: currentMatch.markets.shots.slice(2, 4).map((s, i) => ({...s, type: `shots-ht-${i}`})) },
            { title: 'Remates a Puerta - Segunda Mitad', items: currentMatch.markets.shots.slice(4, 6).map((s, i) => ({...s, type: `shots-2h-${i}`})) }
        ];
    } else if (tabName === 'common') {
        markets = [
            { title: 'Apuestas Comunes', items: currentMatch.markets.common.map((c, i) => ({...c, type: `common-${i}`})) }
        ];
    } else if (tabName === 'create') {
        markets = [
            { title: 'Resultado Final', items: [
                { label: currentMatch.team1, odd: currentMatch.odds['1'], type: '1' },
                { label: 'Empate', odd: currentMatch.odds['X'], type: 'X' },
                { label: currentMatch.team2, odd: currentMatch.odds['2'], type: '2' }
            ]},
            { title: 'Total de Goles', items: currentMatch.markets.goals.slice(0, 4).map((g, i) => ({...g, type: `goals-${i}`})) },
            { title: 'Total de Córners', items: currentMatch.markets.corners.slice(0, 4).map((c, i) => ({...c, type: `corners-${i}`})) },
            { title: 'Total de Tarjetas', items: currentMatch.markets.cards.slice(0, 4).map((c, i) => ({...c, type: `cards-${i}`})) },
            { title: 'Remates a Puerta', items: currentMatch.markets.shots.slice(0, 2).map((s, i) => ({...s, type: `shots-${i}`})) }
        ];
    }
    
    content.innerHTML = markets.map((market, idx) => `
        <div class="market-section ${tabName === 'popular' || tabName === 'create' ? 'expanded' : ''}">
            <div class="market-header" onclick="toggleMarket(event)">
                <div class="market-title">${market.title}</div>
                <div class="market-arrow">▼</div>
            </div>
            <div class="market-content">
                <div class="market-grid">
                    ${market.items.map(item => `
                        <div class="odd-btn ${isInBetslip(currentMatch.id, item.type) ? 'selected' : ''}" 
                             onclick="toggleBet(${currentMatch.id}, '${item.type}', ${item.odd}, '${market.title}: ${item.label}')">
                                <div class="odd-label">${item.label}</div>
                                <div class="odd-value">${item.odd.toFixed(2)}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Render Stats
function renderStats() {
    const content = document.getElementById('tabContent');
    const stats = currentMatch.stats;
    
    content.innerHTML = `
        <div class="stats-container">
            <div class="stat-card">
                <div class="stat-title">Posesión</div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team1}</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.possession[0]}%;"></div>
                    </div>
                    <div class="stat-value">${stats.possession[0]}%</div>
                </div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team2}</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.possession[1]}%;"></div>
                    </div>
                    <div class="stat-value">${stats.possession[1]}%</div>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-title">Remates</div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team1}</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.shots[0]*5}%;"></div>
                    </div>
                    <div class="stat-value">${stats.shots[0]}</div>
                </div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team2}</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.shots[1]*5}%;"></div>
                    </div>
                    <div class="stat-value">${stats.shots[1]}</div>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-title">Tiros a Puerta</div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team1}</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.shotsOnTarget[0]*8}%;"></div>
                    </div>
                    <div class="stat-value">${stats.shotsOnTarget[0]}</div>
                </div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team2}</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.shotsOnTarget[1]*8}%;"></div>
                    </div>
                    <div class="stat-value">${stats.shotsOnTarget[1]}</div>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-title">Córners</div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team1}</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.corners[0]*10}%;"></div>
                    </div>
                    <div class="stat-value">${stats.corners[0]}</div>
                </div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team2}</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.corners[1]*10}%;"></div>
                    </div>
                    <div class="stat-value">${stats.corners[1]}</div>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-title">Faltas</div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team1}</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.fouls[0]*5}%;"></div>
                    </div>
                    <div class="stat-value">${stats.fouls[0]}</div>
                </div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team2}</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.fouls[1]*5}%;"></div>
                    </div>
                    <div class="stat-value">${stats.fouls[1]}</div>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-title">Tarjetas</div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team1} (Amarillas)</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.yellowCards[0]*25}%; background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);"></div>
                    </div>
                    <div class="stat-value" style="color: #fbbf24;">${stats.yellowCards[0]}</div>
                </div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team2} (Amarillas)</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.yellowCards[1]*25}%; background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);"></div>
                    </div>
                    <div class="stat-value" style="color: #fbbf24;">${stats.yellowCards[1]}</div>
                </div>
                ${stats.redCards[0] > 0 || stats.redCards[1] > 0 ? `
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team1} (Rojas)</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.redCards[0]*50}%; background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);"></div>
                    </div>
                    <div class="stat-value" style="color: #ef4444;">${stats.redCards[0]}</div>
                </div>
                <div class="stat-bar">
                    <div class="stat-label">${currentMatch.team2} (Rojas)</div>
                    <div class="stat-progress">
                        <div class="stat-fill" style="width: ${stats.redCards[1]*50}%; background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);"></div>
                    </div>
                    <div class="stat-value" style="color: #ef4444;">${stats.redCards[1]}</div>
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

function toggleMarket(event) {
    const section = event.currentTarget.parentElement;
    section.classList.toggle('expanded');
}

// Betslip Functions
function toggleBet(matchId, type, odd, customLabel = null) {
    const match = matches.find(m => m.id === matchId);
    const betId = `${matchId}-${type}`;
    
    // Check if already exists
    const existingIndex = betSlip.findIndex(b => b.id === betId);
    
    if (existingIndex !== -1) {
        betSlip.splice(existingIndex, 1);
    } else {
        // Prevent duplicate bets on same match for result market
        if (['1', 'X', '2'].includes(type)) {
            betSlip = betSlip.filter(b => !b.id.startsWith(`${matchId}-`) || !['1', 'X', '2'].includes(b.type));
        }
        
        let label = customLabel;
        if (!label) {
            if (type === '1') label = match.team1;
            else if (type === 'X') label = 'Empate';
            else if (type === '2') label = match.team2;
        }
        
        betSlip.push({
            id: betId,
            matchId: matchId,
            type: type,
            match: `${match.team1} vs ${match.team2}`,
            league: match.league,
            selection: label,
            odd: odd
        });
    }
    
    updateBetslip();
    renderMatches();
    if (currentMatch) {
        switchTab(document.querySelector('.detail-tab.active').textContent.toLowerCase().replace(' ', ''));
    }
}

function isInBetslip(matchId, type) {
    return betSlip.some(b => b.id === `${matchId}-${type}`);
}

function updateBetslip() {
    const content = document.getElementById('betslipContent');
    const summary = document.getElementById('betslipSummary');
    const count = document.getElementById('betCount');
    
    if (betSlip.length === 0) {
        content.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🎲</div>
                <div class="empty-message">Sin apuestas</div>
                <div class="empty-description">Selecciona cuotas para comenzar</div>
            </div>
        `;
        summary.style.display = 'none';
        count.textContent = '0 selecciones';
        return;
    }
    
    content.innerHTML = betSlip.map(bet => `
        <div class="bet-item">
            <button class="bet-remove" onclick="toggleBet(${bet.matchId}, '${bet.type}', ${bet.odd})">×</button>
            <div class="bet-match">${bet.league}</div>
            <div class="bet-match">${bet.match}</div>
            <div class="bet-selection">${bet.selection}</div>
            <div class="bet-odd">${bet.odd.toFixed(2)}</div>
        </div>
    `).join('');
    
    summary.style.display = 'block';
    count.textContent = `${betSlip.length} selección${betSlip.length > 1 ? 'es' : ''}`;
    
    const totalOdds = betSlip.reduce((acc, bet) => acc * bet.odd, 1);
    document.getElementById('totalBets').textContent = betSlip.length;
    document.getElementById('totalOdds').textContent = totalOdds.toFixed(2);
    
    calculatePotentialWin();
}

function calculatePotentialWin() {
    const stake = parseFloat(document.getElementById('stakeInput').value) || 0;
    const totalOdds = betSlip.reduce((acc, bet) => acc * bet.odd, 1);
    let potentialWin = stake * totalOdds;
    
    // Apply 30% bonus for 3+ selections
    if (betSlip.length >= 3) {
        potentialWin *= 1.3;
    }
    
    document.getElementById('potentialWin').textContent = `€${potentialWin.toFixed(2)}`;
}

// Place Bet
function placeBet() {
    const stake = parseFloat(document.getElementById('stakeInput').value);
    
    if (!stake || stake <= 0) {
        showNotification('Error', 'Por favor ingresa una cantidad válida');
        return;
    }
    
    if (stake > currentBalance) {
        showNotification('Error', 'Saldo insuficiente');
        return;
    }
    
    if (betSlip.length === 0) {
        showNotification('Error', 'No hay apuestas seleccionadas');
        return;
    }
    
    const totalOdds = betSlip.reduce((acc, bet) => acc * bet.odd, 1);
    let potentialWin = stake * totalOdds;
    let bonus = 0;
    
    if (betSlip.length >= 3) {
        bonus = potentialWin * 0.3;
        potentialWin *= 1.3;
    }
    
    const bet = {
        id: Date.now(),
        date: new Date().toLocaleString('es-ES'),
        bets: [...betSlip],
        stake: stake,
        totalOdds: totalOdds,
        bonus: bonus,
        potentialWin: potentialWin,
        status: 'pending'
    };
    
    betHistory.unshift(bet);
    currentBalance -= stake;
    updateBalance();
    
    showReceipt(bet);
    
    betSlip = [];
    updateBetslip();
    renderMatches();
    
    showNotification('¡Éxito!', 'Apuesta realizada correctamente');
}

// Show Receipt
function showReceipt(bet) {
    const content = document.getElementById('receiptContent');
    content.innerHTML = `
        <div class="receipt">
            <div class="receipt-header">
                <h2 style="font-size: 24px; color: #3b82f6; margin-bottom: 10px;">🎫 BOLETO DE APUESTA</h2>
                <div class="receipt-id">ID: #${bet.id}</div>
                <div class="receipt-date">${bet.date}</div>
            </div>
            
            ${bet.bets.map(b => `
                <div class="receipt-item">
                    <div class="receipt-match">${b.league}</div>
                    <div class="receipt-match">${b.match}</div>
                    <div class="receipt-bet">${b.selection}</div>
                    <div class="receipt-odd-value">Cuota: ${b.odd.toFixed(2)}</div>
                </div>
            `).join('')}
            
            <div class="receipt-summary">
                <div class="receipt-row">
                    <span>Total de Selecciones:</span>
                    <span style="font-weight: 700;">${bet.bets.length}</span>
                </div>
                <div class="receipt-row">
                    <span>Cuota Total:</span>
                    <span class="receipt-odd-value">${bet.totalOdds.toFixed(2)}</span>
                </div>
                <div class="receipt-row">
                    <span>Importe Apostado:</span>
                    <span style="font-weight: 700;">€${bet.stake.toFixed(2)}</span>
                </div>
                ${bet.bonus > 0 ? `
                <div class="receipt-row" style="color: #3b82f6;">
                    <span>🎁 Bonus 30%:</span>
                    <span style="font-weight: 700;">+€${bet.bonus.toFixed(2)}</span>
                </div>
                ` : ''}
                <div class="receipt-row receipt-total">
                    <span>Ganancia Potencial:</span>
                    <span>€${bet.potentialWin.toFixed(2)}</span>
                </div>
            </div>
            
            <div class="receipt-actions">
                <button class="receipt-btn receipt-btn-download" onclick="downloadReceipt(${bet.id})">📥 Descargar</button>
                <button class="receipt-btn receipt-btn-share" onclick="shareReceipt(${bet.id})">📤 Compartir</button>
            </div>
        </div>
    `;
    
    showModal('receipt');
}

// Balance
function updateBalance() {
    document.getElementById('balance').textContent = `€${currentBalance.toFixed(2)}`;
}

function addBalance() {
    const amount = parseFloat(document.getElementById('addBalanceInput').value);
    if (amount && amount > 0) {
        currentBalance += amount;
        updateBalance();
        closeModal('addBalanceModal');
        showNotification('¡Éxito!', `Se han añadido €${amount.toFixed(2)} a tu cuenta`);
        document.getElementById('addBalanceInput').value = '';
    } else {
        showNotification('Error', 'Ingresa una cantidad válida');
    }
}

// History
function showHistory() {
    const content = document.getElementById('historyContent');
    
    if (betHistory.length === 0) {
        content.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📋</div>
                <div class="empty-message">Sin historial</div>
                <div class="empty-description">Aún no has realizado ninguna apuesta</div>
            </div>
        `;
        return;
    }
    
    content.innerHTML = betHistory.map(bet => {
        let statusColor = '#fbbf24';
        let statusText = '⏳ Pendiente';
        
        if (bet.status === 'won') {
            statusColor = '#3b82f6';
            statusText = '✅ Ganada';
        } else if (bet.status === 'lost') {
            statusColor = '#ef4444';
            statusText = '❌ Perdida';
        }
        
        return `
            <div class="bet-item" style="margin-bottom: 15px; cursor: pointer;" onclick="showReceipt(${JSON.stringify(bet).replace(/"/g, '&quot;')})">
                <div class="receipt-id">ID: #${bet.id}</div>
                <div class="receipt-date" style="margin-bottom: 10px;">${bet.date}</div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                    <div>
                        <div style="font-size: 13px; color: #8b949e; margin-bottom: 5px;">${bet.bets.length} selección${bet.bets.length > 1 ? 'es' : ''} • Cuota ${bet.totalOdds.toFixed(2)}</div>
                        <div style="font-weight: 700;">€${bet.stake.toFixed(2)} → €${bet.potentialWin.toFixed(2)}</div>
                    </div>
                    <div style="color: ${statusColor}; font-weight: 700;">${statusText}</div>
                </div>
            </div>
        `;
    }).join('');
}

// Modals
function showModal(modalName) {
    if (modalName === 'history') {
        showHistory();
        document.getElementById('historyModal').classList.add('active');
    } else if (modalName === 'receipt') {
        document.getElementById('receiptModal').classList.add('active');
    } else if (modalName === 'addBalance') {
        document.getElementById('addBalanceModal').classList.add('active');
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Notifications
function showNotification(title, message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Receipt Actions
function downloadReceipt(betId) {
    showNotification('Descarga', 'Función de descarga simulada - En producción se generaría un PDF');
}

function shareReceipt(betId) {
    showNotification('Compartir', 'Función de compartir simulada - En producción se compartiría en redes sociales');
}

// Search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length < 2) {
        renderMatches();
        return;
    }
    
    const filteredMatches = matches.filter(m => 
        m.team1.toLowerCase().includes(searchTerm) ||
        m.team2.toLowerCase().includes(searchTerm) ||
        m.league.toLowerCase().includes(searchTerm)
    );
    
    const container = document.getElementById('matchList');
    if (filteredMatches.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔍</div>
                <div class="empty-message">No se encontraron resultados</div>
                <div class="empty-description">Intenta con otros términos de búsqueda</div>
            </div>
        `;
    } else {
        matches = filteredMatches;
        renderMatches();
    }
}

// Mobile menu toggle
let mobileMenuOpen = false;
function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    document.querySelector('.sidebar').classList.toggle('mobile-open');
}

// Simulate live stats updates
setInterval(() => {
    matches.forEach(match => {
        if (match.live) {
            // Random stat updates
            if (Math.random() > 0.7) {
                match.stats.possession[0] = Math.max(20, Math.min(80, match.stats.possession[0] + (Math.random() - 0.5) * 5));
                match.stats.possession[1] = 100 - match.stats.possession[0];
            }
            
            if (Math.random() > 0.85) {
                const team = Math.random() > 0.5 ? 0 : 1;
                match.stats.shots[team]++;
                if (Math.random() > 0.6) {
                    match.stats.shotsOnTarget[team]++;
                }
            }
            
            if (Math.random() > 0.9) {
                const team = Math.random() > 0.5 ? 0 : 1;
                match.stats.corners[team]++;
            }
            
            if (Math.random() > 0.95) {
                const team = Math.random() > 0.5 ? 0 : 1;
                match.stats.yellowCards[team]++;
            }
            
            // Update stats view if viewing this match
            if (currentMatch && currentMatch.id === match.id) {
                const activeTab = document.querySelector('.detail-tab.active');
                if (activeTab && activeTab.textContent.includes('Estadísticas')) {
                    renderStats();
                }
            }
        }
    });
}, 5000);

// Simulate bet results
setInterval(() => {
    betHistory.forEach(bet => {
        if (bet.status === 'pending' && Math.random() > 0.8) {
            const won = Math.random() > 0.4;
            bet.status = won ? 'won' : 'lost';
            
            if (won) {
                currentBalance += bet.potentialWin;
                updateBalance();
                showNotification('🎉 ¡Ganaste!', `Has ganado €${bet.potentialWin.toFixed(2)} en tu apuesta #${bet.id}`);
            } else {
                showNotification('❌ Perdiste', `Tu apuesta #${bet.id} no ha sido ganadora`);
            }
        }
    });
}, 15000);

// Live match notifications
setInterval(() => {
    matches.forEach(match => {
        if (match.live && Math.random() > 0.95) {
            const events = ['⚽ GOL!', '🟨 Tarjeta amarilla', '🔴 Tarjeta roja', '🚩 Córner'];
            const event = events[Math.floor(Math.random() * events.length)];
            const team = Math.random() > 0.5 ? match.team1 : match.team2;
            showNotification(`${match.team1} vs ${match.team2}`, `${event} - ${team}`);
        }
    });
}, 20000);