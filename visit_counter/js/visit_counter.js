const countEl = document.getElementById('count');
countvisits();

function countvisits() {
    fetch('https://api.countapi.xyz/update/jiale/tjl/?amount=1')
        .then((res) => res.json())
        .then((res) => {
            countEl.innerHTML = res.value;
        });
}