// DONNÉES
let players = [];
let idCounter = 0;
let draggedCard = null;

//DOM EFFECT SECTION DONE
const doneSection = document.querySelector('section[data-status="done"]');
const image = document.createElement('img');
image.src = "smile.jpg";
image.className = "hiden show-image";
document.body.appendChild(image);

function showImage(){
    image.classList.add("show");
    doneSection.classList.add("done-flash");
    setTimeout(()=>{
           image.classList.remove("show");
           doneSection.classList.remove("done-flash");
         },3000);
}

// DOM
const form = document.getElementById("playerForm");
const nameInput = document.getElementById("name");
const positionInput = document.getElementById("position");
const priorityInput = document.getElementById("priority");
const matchDateInput = document.getElementById("matchDate");
const lists = document.querySelectorAll(".list");

// NAVBAR
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const filterPriority = document.getElementById("filterPriority");
const filterStatus = document.getElementById("filterStatus");
const filterDate = document.getElementById("filterDate");

// AJOUT JOUEUR
form.addEventListener("submit", e => {
    e.preventDefault();

    if (!nameInput.value || !positionInput.value || !matchDateInput.value) return;

    players.push({
        id: idCounter++,
        name: nameInput.value,
        position: positionInput.value,
        priority: priorityInput.value,
        date: matchDateInput.value,
        status: "todo"
    });

    form.reset();
    render();
});

// FILTRES
searchForm.addEventListener("submit", e => {
    e.preventDefault();
    render();
});

searchForm.addEventListener("reset", () => {
    setTimeout(render, 0);
});

// DRAG & DROP
lists.forEach(list => {
    list.addEventListener("dragover", e => {
        e.preventDefault();
        list.classList.add("drag-over");
    });

    list.addEventListener("dragleave", () => {
        list.classList.remove("drag-over");
    });

    list.addEventListener("drop", () => {
        if (!draggedCard) return;

        const id = Number(draggedCard.dataset.id);
        const player = players.find(p => p.id === id);
        if (!player) return;

        const newStatus = list.parentElement.dataset.status;
        player.status = newStatus;

        list.appendChild(draggedCard);

        draggedCard.classList.remove("tackle");
        void draggedCard.offsetWidth;
        draggedCard.classList.add("tackle");

        if (newStatus === "done") {
        showImage();
        
        }

        draggedCard = null;
        list.classList.remove("drag-over");
    });
});

// RENDER GLOBAL
function render() {
    lists.forEach(list => (list.innerHTML = ""));

    let filtered = [...players];

    // SEARCH
    const search = searchInput.value.toLowerCase();
    if (search) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(search)
        );
    }

    // PRIORITY
    if (filterPriority.value) {
        filtered = filtered.filter(
            p => p.priority === filterPriority.value
        );
    }

    // STATUS
    if (filterStatus.value) {
        filtered = filtered.filter(
            p => p.status === filterStatus.value
        );
    }

    // DATE
    if (filterDate.value === "ascend") {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (filterDate.value === "descend") {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    filtered.forEach(player => createCard(player));
}

// CREATE CARD
function createCard(player) {
    const card = document.createElement("div");
    card.className = `card ${player.priority}`;
    card.draggable = true;
    card.dataset.id = player.id;

    showView();

    // DRAG
    card.addEventListener("dragstart", () => {
        draggedCard = card;
        card.classList.add("dragging");
    });

    card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
    });

    document
        .querySelector(`[data-status="${player.status}"] .list`)
        .appendChild(card);

    // VUE NORMALE
    function showView() {
        card.innerHTML = `
            <div class="card-header">
                <strong class="card-name">${player.name}</strong>
                <span class="card-date">📅${player.date}</span>
            </div>

            <div class="card-body">
                ${player.position}
            </div>

            <div class="card-actions">
                <button class="edit">✏️</button>
                <button class="delete">🗑</button>
            </div>
        `;

        card.querySelector(".delete").onclick = () => {
    const confirmCard = document.createElement("div");
    confirmCard.className = "card";
    confirmCard.style.position = "absolute";
    confirmCard.style.zIndex = "999";
    confirmCard.style.top = "50%";
    confirmCard.style.left = "50%";
    confirmCard.style.transform = "translate(-50%, -50%)";

    confirmCard.innerHTML = `
        <div class="header">
            <div class="image">
                <svg aria-hidden="true" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 9v3.75m0 3h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="content">
                <span class="title">Supprimer ce joueur ?</span>
                <p class="message">
                    Cette action est définitive.
                </p>
            </div>
        </div>
        <div class="actions">
            <button class="desactivate">Supprimer</button>
            <button class="cancel">Annuler</button>
        </div>
    `;

    document.body.appendChild(confirmCard);

    confirmCard.querySelector(".desactivate").onclick = () => {
        players = players.filter(p => p.id !== player.id);
        confirmCard.remove();
        render();
    };

    confirmCard.querySelector(".cancel").onclick = () => {
        confirmCard.remove();
    };
};


        card.querySelector(".edit").onclick = showEdit;
    }

    // ÉDITION
    function showEdit() {
        card.draggable = false;

        card.innerHTML = `
            <input type="text" value="${player.name}">
            <textarea class="card-body-edit">${player.position}</textarea>
            <input type="date" value="${player.date}">

            <div class="priority-buttons">
                <button data-priority="low" class="${player.priority === "low" ? "active" : ""}">Low</button>
                <button data-priority="medium" class="${player.priority === "medium" ? "active" : ""}">Medium</button>
                <button data-priority="high" class="${player.priority === "high" ? "active" : ""}">High</button>
            </div>

            <div class="status-buttons">
                <button data-status="todo" class="${player.status === "todo" ? "active" : ""}">To Do</button>
                <button data-status="inprogress" class="${player.status === "inprogress" ? "active" : ""}">In Progress</button>
                <button data-status="done" class="${player.status === "done" ? "active" : ""}">Done</button>
            </div>

            <div class="card-actions">
                <button class="save">✅</button>
                <button class="cancel">❌</button>
            </div>
        `;

const nameInput = card.querySelector("input[type='text']");
const positionTextarea = card.querySelector(".card-body-edit");
const dateInput = card.querySelector("input[type='date']");

        // CHANGEMENT DE PRIORITÉ ET DE STATUT
card.querySelectorAll(".priority-buttons button").forEach(btn => {
    btn.onclick = () => {
        player.priority = btn.dataset.priority;

        // Mise à jour visuelle immédiate de la card
        card.classList.remove("low", "medium", "high");
        card.classList.add(player.priority);

        card.querySelectorAll(".priority-buttons button")
            .forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    };
});

        card.querySelectorAll(".status-buttons button").forEach(btn => {
            btn.onclick = () => {
                player.status = btn.dataset.status;

                const targetList = document.querySelector(
                    `[data-status="${player.status}"] .list`
                );
                targetList.appendChild(card);

                card.querySelectorAll(".status-buttons button")
                    .forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
            };
        });

    card.querySelector(".save").onclick = () => {
  player.name = nameInput.value;
  player.position = positionTextarea.value;
  player.date = dateInput.value;

  card.draggable = true;
  showView();

  card.classList.remove("tackle");
  void card.offsetWidth;
  card.classList.add("tackle");
};

        card.querySelector(".cancel").onclick = () => {
            card.draggable = true;
            showView();
        };
    }
}

// INIT
render();
