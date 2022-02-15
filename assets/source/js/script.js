const form = document.getElementById('dataForm');
const wrraperData = document.querySelector('.wrapperData');
const inputsData = wrraperData.getElementsByTagName('input');
const btn = document.getElementById('dataFormsubmit');


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

form.addEventListener('submit', localInputs)

console.log(localInputs())