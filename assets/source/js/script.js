const form = document.getElementById('dataForm');
const wrraperData = document.querySelector('.wrapperData');
const inputsData = wrraperData.getElementsByTagName('input');
const btn = document.getElementById('dataFormsubmit');



function localInputs() {
    Array.from(inputsData).forEach(el => {
        const elValue = {}
        el.value = elValue
        localStorage.setItem('inputs', JSON.stringify(elValue))
    }); 
}


form.addEventListener('submit', localInputs())
