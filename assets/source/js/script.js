const form = document.getElementById('dataForm');
const wrraperData = document.querySelector('.wrapperData');
const inputsData = wrraperData.getElementsByTagName('input');
const btn = document.getElementById('dataFormsubmit');

const elValue = [];



const localInputs = function localInputs() {
    Array.from(elValue).forEach(e => {
        e.value = elValue;
    })
    localStorage.setItem('key', JSON.stringify(elValue));
}

form.addEventListener('submit', localInputs)
