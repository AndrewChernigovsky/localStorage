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
        }
    } else {
        localStorage.setItem('inputs', JSON.stringify(eName))
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

        eName.push(elValue)

        eName[eName.length - 1]

        console.log(eName)

        // let Ename = eName[eName.length - 1]

        // eName = Ename

        // console.log(eName)

        // eName.push(elValue)
    })

    localStorage.setItem('inputs', JSON.stringify(eName))
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

console.log('deafult 121312', eName)

form.addEventListener('submit', localInputs)

btnAdd.addEventListener('click', addInput)