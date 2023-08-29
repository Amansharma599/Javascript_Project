const countValue = document.querySelector('#counter')

// Increment
const increment = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
     // update the value
    value=value+1;
    // set the value onto UI
    countValue.innerText = value
}

// Decrement
const decrement = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
     // update the value
    value=value-1;
    // set the value onto UI
    countValue.innerText = value
}

// Reset Button.
const reset = ()=> {
    let value = countValue.innerText;
    value=0
    countValue.innerText = value;
}