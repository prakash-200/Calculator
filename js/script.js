
function show(value){
    display.value += value
    console.log(display.value)
}

function calculate(){
    display.value = eval(document.getElementById('display').value)

}

function clearValue(){
    display.value = ''
    console.log("hello")
    
}

function change(){
    display.value = display.value.slice(0,-1);
}