function createContributionsGraph() {

    const year = [];
    const contributionLevels = [0, 0, 0, 3, 5, 10];

    for (let i = 0; i < 52; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
            week.push(contributionLevels[Math.floor(Math.random() * contributionLevels.length)]);
        }
        year.push(week);
    }

    return year;
}

function drawGraph() {
    const graphElement = document.getElementById("graph");
    const contributions = createContributionsGraph();

    for (let i = 0; i < contributions.length; i++) {

        const weekElement = document.createElement("div");
        weekElement.classList.add("week");

        for (let j = 0; j < contributions[i].length; j++) {
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.dataset.value = contributions[i][j];
            weekElement.appendChild(cellElement);
        }

        graphElement.appendChild(weekElement);
    }
}

drawGraph();