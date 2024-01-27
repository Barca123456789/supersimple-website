let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                currentInput = eval(currentInput);
                input.value = currentInput;
            } catch (error) {
                input.value = 'Error';
            }
        } else if (buttonText === 'AC') {
            currentInput = "";
            input.value = currentInput;
        } else if (buttonText === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            input.value = currentInput;
        } else {
            currentInput += buttonText;
            input.value = currentInput;
        }
    });
});