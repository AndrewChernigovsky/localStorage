const form = document.getElementById('dataForm');
const wrraperData = document.querySelector('.wrapperData');
const inputsData = wrraperData.getElementsByTagName('input');
const btn = document.getElementById('dataFormsubmit');
const btnAdd = document.getElementById('addDataInput');

let eName = [];

const localInputs = function localInputs() {
    
    Array.from(inputsData).forEach(e => {
       

        const elValue = {
            key: e.name,
            value: e.value
        }

        eName.push(elValue);
    })

    localStorage.setItem('inputs', JSON.stringify(eName));
}

const addInput = function addInput() {
    let label = document.createElement('label')
    let input = document.createElement('input')
    let labelText = document.createTextNode("paravoz");

    input.setAttribute('name', 'paravoz')
    input.setAttribute('value', '')

    wrraperData.appendChild(label)
    wrraperData.appendChild(input)
    label.appendChild(labelText)

    Array.from(inputsData).forEach(e => {
       

        const elValue = {
            key: e.name,
            value: e.value
        }

        eName.push(elValue);
    })

    localStorage.setItem('inputs', JSON.stringify(eName));

    let localItem = localStorage.getItem('inputs')

    if (localItem) {
        let localItemParse = JSON.parse(localItem);
        console.log(localItemParse)
        localStorage.clear()
        localItemParse.push(eName);
    } else {
        localStorage.setItem('inputs', JSON.stringify(eName));
    }
}
    

form.addEventListener('submit', localInputs)

btnAdd.addEventListener('click', addInput)