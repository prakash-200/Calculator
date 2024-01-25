
function show(value){
    document.getElementById('display').value += value
    console.log(display.value)
}

function calculate(){
    document.getElementById('display').value = eval(document.getElementById('display').value)

}

function clearValue(){
    document.getElementById('display').value = ''
    console.log("hello")
    
}