const form = document.getElementById('dataForm');
const wrraperData = document.querySelector('.wrapperData');
const inputsData = wrraperData.getElementsByTagName('input');
const btn = document.getElementById('dataFormsubmit');
const btnAdd = document.getElementById('addDataInput');

let eName = [];

const localInputs = function localInputs(evt) {
    evt.preventDefault()

    Array.from(inputsData).forEach(e => {
       

        const elValue = {
            key: e.name,
            value: e.value
        }

        eName.push(elValue);
    });

    let getLocal = localStorage.getItem('inputs') 

    if(getLocal) {
        eName.length = 0
        
        if(eName.length > 0){
            localStorage.clear()
            localStorage.setItem('inputs', JSON.stringify(eName))
            console.log(0)
            console.log(eName)
        }
    } else {
        localStorage.setItem('inputs', JSON.stringify(eName))
        console.log(3)
        console.log(eName)
    }
}

const addInput = function addInput() {
    let label = document.createElement('label')
    let input = document.createElement('input')
    let labelText = document.createTextNode('paravoz');

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

        // eName = eName[eName.length - 1]

        eName.push(elValue);
    })

    localStorage.setItem('inputs', JSON.stringify(eName))
    console.log(45)
    console.log(eName)
}

// window.onload = function() {
//     let items = localStorage.getItem('inputs');

//     if(items) {
//         let items = JSON.parse(localStorage.getItem('inputs'));
//         inputsData.name = items.name
//         inputsData.value = items.value
//         wrraperData.innerHTML = inputsData

//         console.log(wrraperData.innerHTML = inputsData)

//     }
// }

form.addEventListener('submit', localInputs)

btnAdd.addEventListener('click', addInput)