const form = document.getElementById('dataForm');
const wrraperData = document.querySelector('.wrapperData');
const inputsData = wrraperData.getElementsByTagName('input');
const btn = document.getElementById('dataFormsubmit');
const btnAdd = document.getElementById('addDataInput');

const localInputs = function localInputs() {
    let eName = []

    Array.from(inputsData).forEach(e => {
       

        const elValue = {
            key: e.name,
            value: e.value
        }

        eName.push(elValue);
    })

    localStorage.setItem('key', JSON.stringify(eName));
}

const addInput = function addInput() {
    let label = document.createElement('label')
    let input = document.createElement('input')
    let labelText = document.createTextNode("paravoz");

    input.setAttribute('name', 'paravoz')

    wrraperData.appendChild(label)
    wrraperData.appendChild(input);
    label.appendChild(labelText);
}

form.addEventListener('submit', localInputs)
btnAdd.addEventListener('click', addInput)