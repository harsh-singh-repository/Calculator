//Making a Empty String for storing data.
let string = "";
let buttonItem = document.querySelectorAll(".button-item");

// 
Array.from(buttonItem).forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.innerHTML == "="){
            document.querySelector('input').value = string;
            string = eval(string);
        }
        else if(e.target.innerHTML == "C"){
            document.querySelector('input').value = string;
            string = "";
        }
        else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
