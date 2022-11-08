const btn = document.querySelector('#send');

btn.addEventListener('click', function(e){
    
    e.preventDefault();
    
    const name = document.querySelector('#name');
    const name2 = document.querySelector('#name2');
    const value = name2.value + name.value;
    
    console.log(value);
    

});