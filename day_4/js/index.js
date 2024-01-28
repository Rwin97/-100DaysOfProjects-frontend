const _data = [37.5, 11, 33.5, 6];
const colors = ['#6792FF', '#4473EA', '#1A52E1', '#96B3FF'];
const backgroundColor = _data.map((value, index) => colors[index]);

const ctx = document.getElementById('graphic').getContext('2d');
const shadow = document.getElementById("shadow");
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: _data,
            backgroundColor: backgroundColor,
            borderWidth: 0,
            borderRadius: 2
        }]
    },
    options: {
        cutout: '80%',
        spacing: 5,
    }
});

new Chart(shadow, {
    type: "doughnut",
    rotation: 0.5 * Math.PI,
    data: {
        datasets: [
            {
                data: yValues,
                backgroundColor: ["#6868683d"],
            },
        ],
    },
    options: {
        cutout: "80%",
        spacing: 10,
        borderWidth: 0,
        borderRadius: 5,
        rotation: -5,
    },
});