// that's right i'm using snake case :sunglasses:
// % 24 * 60 * 60 * 1000
const namesEl = document.querySelector("select");

const indCanvas = document.querySelector(".ind-canvas");
const ctx = indCanvas.getContext("2d");

Chart.defaults.font.family = "'Source Code Pro', monospace";

let currChart;

(async () => {
    const data = parse_csv(
        await fetch("/data.csv", { method: "GET" })
            .then(r => r.text())
    );

    const names = Object.keys(data).slice(0, -1).sort();

    for (const name of names) {
        const el = document.createElement("option");
        el.innerHTML = name;
        namesEl.appendChild(el);
    }

    // easter egg!
    namesEl.value = "Junhao Zhang";

    all(data);

    namesEl.addEventListener("change", e => {
        render_graph(e.target.value);
    });


    const mean1 = document.querySelector(".imean1");
    const mean2 = document.querySelector(".imean2");
    const sd1 = document.querySelector(".isd1");
    const sd2 = document.querySelector(".isd2");
    const med1 = document.querySelector(".imedian1");
    const med2 = document.querySelector(".imedian2");
    const iqr1 = document.querySelector(".iiqr1");
    const iqr2 = document.querySelector(".iiqr2");

    function render_graph(name) {
        if (currChart) currChart.destroy();

        const user = get_row(data, name);
        const labels = [], part1 = [], part2 = [];

        for (let i = 1; i <= 25; i++) {
            labels.push(`Day ${i}`);
            if (user[i - 1]) part1.push(user[i - 1]);
            if (user[25 + i - 1]) part2.push(user[25 + i - 1]);
        }

        currChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: "Part 1",
                    backgroundColor: "#9999cc",
                    data: part1,
                    fill: false,
                    borderColor: '#9999cc',
                    tension: 0.1
                }, {
                    label: "Part 2",
                    backgroundColor: "#ffff66",
                    data: part2,
                    fill: false,
                    borderColor: '#ffff66',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                responsive: true
            }
        });

        mean1.innerHTML = (part1.length ? (mean(part1) / 1000) : 0).toFixed(2);
        mean2.innerHTML = (part2.length ? (mean(part2) / 1000) : 0).toFixed(2);

        sd1.innerHTML = (part1.length ? (std(part1) / 1000) : 0).toFixed(2);
        sd2.innerHTML = (part2.length ? (std(part2) / 1000) : 0).toFixed(2);

        med1.innerHTML = (part1.length ? (quartile(part1, .5) / 1000) : 0).toFixed(2);
        med2.innerHTML = (part2.length ? (quartile(part2, .5) / 1000) : 0).toFixed(2);

        iqr1.innerHTML = (part1.length ? ((quartile(part1, .75) - quartile(part1, .25)) / 1000) : 0).toFixed(2);
        iqr2.innerHTML = (part2.length ? ((quartile(part2, .75) - quartile(part2, .25)) / 1000) : 0).toFixed(2);
    }

    render_graph("Junhao Zhang");
})();

function all(data) {
    const labels = [];

    const part1 = [], part2 = [];

    for (let i = 1; i <= 25; i++) {
        labels.push(`Day ${i}`);
        part1.push(mean(get_col(data, i - 1)));
        part2.push(mean(get_col(data, 25 + i - 1)));
    }

    const ctx_all = document.getElementById('all').getContext('2d');

    const myChart = new Chart(ctx_all, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: "Part 1",
                backgroundColor: "#9999cc",
                data: part1,
                fill: false,
                borderColor: '#9999cc',
                tension: 0.1
            }, {
                label: "Part 2",
                backgroundColor: "#ffff66",
                data: part2,
                fill: false,
                borderColor: '#ffff66',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true
        }
    });

    document.querySelector(".mean1").innerHTML = (mean(part1) / 1000).toFixed(2);
    document.querySelector(".mean2").innerHTML = (mean(part2) / 1000).toFixed(2);

    document.querySelector(".sd1").innerHTML = (std(part1) / 1000).toFixed(2);
    document.querySelector(".sd2").innerHTML = (std(part2) / 1000).toFixed(2);

    document.querySelector(".median1").innerHTML = (quartile(part1, .5) / 1000).toFixed(2);
    document.querySelector(".median2").innerHTML = (quartile(part2, .5) / 1000).toFixed(2);

    document.querySelector(".iqr1").innerHTML = ((quartile(part1, .75) - quartile(part1, .25)) / 1000).toFixed(2);
    document.querySelector(".iqr2").innerHTML = ((quartile(part2, .75) - quartile(part2, .25)) / 1000).toFixed(2);
}
