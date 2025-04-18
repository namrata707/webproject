rbox=document.getElementById('input ')
cbtn=document.getElementById('cc')
cbtn.addEventListener('click',()=>{
    rbox.value=""
   
})
// function to get value in inputbox as soon as a button will click
function Val(n)
{
    rbox.value=rbox.value+n
}
// function to get value from inputbox and clear it for next input to display and set operator sign
// function to print result in the inputbox
function Result (){
    var r=eval(rbox.value)
    rbox.value=r
}
