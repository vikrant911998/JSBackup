window.addEventListener('load',init);


function init(){
    var first = document.getElementById('input1');
    var second = document.getElementById('input2');
    var result = document.getElementById('result');

    for(let i=1;i<5;i++){
        let btn = document.getElementById('btn'+i);
        btn.addEventListener('click',()=>{
            console.log('calc called');
        });    
    }
}

// function init(){
//     var first = document.getElementById('input1');
//     var second = document.getElementById('input2');
//     var result = document.getElementById('result');
//     var add = document.getElementById('add');
//     var sub = document.getElementById('sub');
//     var mul = document.getElementById('mul');
//     var div = document.getElementById('division');

//     add.addEventListener('click',()=>{
//         calc('+');
//     });
//     sub.addEventListener('click',calc);
//     mul.addEventListener('click',calc);
//     div.addEventListener('click',calc);


// }

// function calc(operator){
    
// }