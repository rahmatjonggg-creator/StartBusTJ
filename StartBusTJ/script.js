function generateTimes(startHour, startMin, interval, stopIndex, offsetPerStop) {
    return Array.from({length: 10}).map((_, j) => {
        let totalMinutes = (startHour * 60) + startMin + (j * interval) + (stopIndex * offsetPerStop);
        let h = Math.floor(totalMinutes / 60) % 24;
        let m = totalMinutes % 60;
        return {
            time: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
            direction: "По маршруту",
            bus: `№${Math.floor(Math.random() * 50) + 1}`
        };
    });
}
const routes = [
    { 
        id: 1, number: "3", path: "Панчшанбе — 12-й мкр",
        stops: [
            { 
                name: "Панчшанбе", 
                schedules: [
                    { time: "07:00", direction: "в 12-й мкр", bus: "№01" }, { time: "07:15", direction: "в 12-й мкр", bus: "№02" },
                    { time: "07:30", direction: "в 12-й мкр", bus: "№03" }, { time: "07:45", direction: "в 12-й мкр", bus: "№04" },
                    { time: "08:00", direction: "в 12-й мкр", bus: "№05" }, { time: "08:15", direction: "в 12-й мкр", bus: "№06" },
                    { time: "08:30", direction: "в 12-й мкр", bus: "№07" }, { time: "08:45", direction: "в 12-й мкр", bus: "№08" },
                    { time: "09:00", direction: "в 12-й мкр", bus: "№09" }, { time: "09:15", direction: "в 12-й мкр", bus: "№10" }
                ] 
            },
            { 
                name: "Универмаг", 
                schedules: [
                    { time: "07:10", direction: "в 12-й мкр", bus: "№01" }, { time: "07:25", direction: "в 12-й мкр", bus: "№02" },
                    { time: "07:40", direction: "в 12-й мкр", bus: "№03" }, { time: "07:55", direction: "в 12-й мкр", bus: "№04" },
                    { time: "08:10", direction: "в 12-й мкр", bus: "№05" }, { time: "08:25", direction: "в 12-й мкр", bus: "№06" },
                    { time: "08:40", direction: "в 12-й мкр", bus: "№07" }, { time: "08:55", direction: "в 12-й мкр", bus: "№08" },
                    { time: "09:10", direction: "в 12-й мкр", bus: "№09" }, { time: "09:25", direction: "в 12-й мкр", bus: "№10" }
                ] 
            },
            { 
                name: "12-й мкр", 
                schedules: [
                    { time: "07:40", direction: "Конечная", bus: "№01" }, { time: "07:55", direction: "Конечная", bus: "№02" },
                    { time: "08:10", direction: "Конечная", bus: "№03" }, { time: "08:25", direction: "Конечная", bus: "№04" },
                    { time: "08:40", direction: "Конечная", bus: "№05" }, { time: "08:55", direction: "Конечная", bus: "№06" },
                    { time: "09:10", direction: "Конечная", bus: "№07" }, { time: "09:25", direction: "Конечная", bus: "№08" }
                ] 
            }
        ]
    },
    {
        id: 2, number: "28", path: "Галамайдон — Фирдавс",
        stops: ["Галамайдон", "Ёва", "Спутник", "Автовокзал", "Ватан", "Тобон", "Коператор", "Универмаг", "Стадион", "Рахими", "Амид", "Фирдавс"].map((s, i) => ({
            name: s,
            schedules: Array.from({length: 10}).map((_, j) => ({
                time: `${String(6 + Math.floor((30 + j*15 + i*5)/60)).padStart(2, '0')}:${String((30 + j*15 + i*5)%60).padStart(2, '0')}`,
                direction: "к Фирдавс",
                bus: `№${String(j + 10).padStart(2, '0')}`
            }))
        }))
    },
    {
        id: 3, number: "30", path: "Кори бобо — Панчшанбе",
        stops: ["Кори бобо", "Пахтакор", "Амиди пахтакор", "Спутник", "Автовокзал", "Ватан", "Тобон", "Коператор", "Стадион", "Панчшанбе"].map((s, i) => ({
            name: s,
            schedules: Array.from({length: 10}).map((_, j) => ({
                time: `${String(6 + Math.floor((45 + j*12 + i*4)/60)).padStart(2, '0')}:${String((45 + j*12 + i*4)%60).padStart(2, '0')}`,
                direction: "к Панчшанбе",
                bus: `№${String(j + 20).padStart(2, '0')}`
            }))
        }))
    },
    {
        id: 4, number: "30а", path: "Санги хочи — Панчшанбе",
        stops: ["Санги хочи", "Ёва", "Спутник", "Автовокзал", "Ватан", "Тобон", "Коператор", "Анис", "Детская больница", "Гулистон", "Панчшанбе"].map((s, i) => ({
            name: s,
            schedules: Array.from({length: 10}).map((_, j) => ({
                time: `${String(7 + Math.floor((j*15 + i*6)/60)).padStart(2, '0')}:${String((j*15 + i*6)%60).padStart(2, '0')}`,
                direction: "к Панчшанбе",
                bus: `№${String(j + 40).padStart(2, '0')}`
            }))
        }))
    },
    {
        id: 5, number: "1", path: "Пахтакор — Северо-Восток",
        stops: ["Пахтакор", "12-й мкр", "Универмаг", "Панчшанбе", "Северо-Восток"].map((s, i) => ({
            name: s,
            schedules: generateTimes(7, 0, 12, i, 8)
        }))
    },
    {
        id: 6, number: "2", path: "Автовокзал — 3-й мкр",
        stops: ["Автовокзал", "Ватан", "Универмаг", "Лицей", "3-й мкр"].map((s, i) => ({
            name: s,
            schedules: generateTimes(6, 45, 15, i, 10)
        }))
    },
    {
        id: 7, number: "5", path: "Чкаловск (Бустон) — Панчшанбе",
        stops: ["Квартал", "Аэропорт", "Шелкокомбинат", "Панчшанбе"].map((s, i) => ({
            name: s,
            schedules: generateTimes(7, 10, 10, i, 12)
        }))
    },
    {
        id: 8, number: "17", path: "18-й мкр — Галамайдон",
        stops: ["18-й мкр", "Мечеть", "Универмаг", "Стадион", "Галамайдон"].map((s, i) => ({
            name: s,
            schedules: generateTimes(7, 20, 12, i, 7)
        }))
    },
    {
        id: 9, number: "25", path: "Кайраккум (Гулистон) — Панчшанбе",
        stops: ["Гулистон", "ГЭС", "Поворот", "Панчшанбе"].map((s, i) => ({
            name: s,
            schedules: generateTimes(6, 30, 20, i, 15)
        }))
    },
    {
        id: 10, number: "44", path: "Пахтакор — Аэропорт",
        stops: ["Пахтакор", "34-й мкр", "Универмаг", "Аэропорт"].map((s, i) => ({
            name: s,
            schedules: generateTimes(7, 0, 15, i, 10)
        }))
    },
    {
        id: 11, number: "101", path: "8-й мкр — Северо-Восток",
        stops: ["8-й мкр", "12-й мкр", "Универмаг", "Поворот", "Северо-Восток"].map((s, i) => ({
            name: s,
            schedules: generateTimes(6, 50, 10, i, 6)
        }))
    },
    {
        id: 12, number: "105", path: "Шелкокомбинат — Пахтакор",
        stops: ["Шелкокомбинат", "Панчшанбе", "Универмаг", "Пахтакор"].map((s, i) => ({
            name: s,
            schedules: generateTimes(7, 15, 12, i, 9)
        }))
    },
    {
        id: 13, number: "111", path: "Чкаловск — 12-й мкр",
        stops: ["Бустон", "Аэропорт", "34-й мкр", "12-й мкр"].map((s, i) => ({
            name: s,
            schedules: generateTimes(7, 0, 15, i, 11)
        }))
    },
    {
        id: 14, number: "114", path: "Пахтакор — Панчшанбе",
        stops: ["Пахтакор", "3-й мкр", "Лицей", "Панчшанбе"].map((s, i) => ({
            name: s,
            schedules: generateTimes(6, 40, 10, i, 7)
        }))
    }
];
const grid = document.getElementById('routeGrid');
const search = document.getElementById('searchInput');

function render(data) {
    grid.innerHTML = '';
    if (data.length === 0) {
        document.getElementById('emptyState').classList.remove('hidden');
        return;
    }
    document.getElementById('emptyState').classList.add('hidden');

    data.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <div class="card-header">
                    <div class="bus-number">${item.number}</div>
                    <div class="route-badge">Active</div>
                </div>
                <div class="route-desc">МАРШРУТ <b>${item.path}</b></div>
                
                <div class="stops-container hidden" id="stops-${item.id}">
                    <div class="timeline-line"></div>
                    ${item.stops.map(stop => `
                        <div class="stop-node" onclick="this.classList.toggle('active')">
                            <div class="stop-info">
                                <span class="stop-icon">📍</span>
                                <span class="stop-name">${stop.name}</span>
                            </div>
                            <div class="stop-details">
                                <div class="schedule-list">
                                    ${stop.schedules.map(sch => `
                                        <div class="schedule-item">
                                            <div class="schedule-header">
                                                <span class="sch-time">🕓 ${sch.time}</span>
                                                <span class="sch-bus">🚌 ${sch.bus}</span>
                                            </div>
                                            <span class="sch-dir">➔ ${sch.direction}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <button class="details-btn" onclick="toggleRoute(${item.id}, this)">
                    Развернуть маршрут
                </button>
            </div>
        `;
    });
}

function toggleRoute(id, btn) {
    const container = document.getElementById(`stops-${id}`);
    const isHidden = container.classList.toggle('hidden');
    
    if (isHidden) {
        btn.innerText = "Развернуть маршрут";
        btn.classList.remove('active-btn');
    } else {
        btn.innerText = "Скрыть маршрут";
        btn.classList.add('active-btn');
    }
}

search.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = routes.filter(r => 
        r.number.toLowerCase().includes(val) || 
        r.path.toLowerCase().includes(val) ||
        r.stops.some(s => s.name.toLowerCase().includes(val))
    );
    render(filtered);
});

render(routes);