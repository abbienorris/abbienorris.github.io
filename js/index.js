window.onload=function(){
    const lemonTeaTrigger = document.querySelector('#lemon-tea');
    const coffeeTrigger = document.querySelector('#coffee');
    const hotChocolateTrigger = document.querySelector('#hot-chocolate');
    const lemonTeaOrder = document.querySelector('#lemon-tea-order');
    const coffeeOrder = document.querySelector('#coffee-order');
    const hotChocolateOrder = document.querySelector('#hot-chocolate-order');

    function recipeController(ordered, disable1, disable2){
        ordered.classList.add('ordered');
        disable1.classList.add('disabled');
        disable2.classList.add('disabled');
    }
    
    lemonTeaTrigger.addEventListener('click', function() {
        recipeController(lemonTeaOrder, coffeeTrigger, hotChocolateTrigger);
    });

    coffeeTrigger.addEventListener('click', function() {
        recipeController(coffeeOrder, lemonTeaTrigger, hotChocolateTrigger);
    });

    hotChocolateTrigger.addEventListener('click', function() {
        recipeController(hotChocolateOrder, lemonTeaTrigger, coffeeTrigger);
    });

    document.querySelectorAll('.refresh').forEach(btn => 
        btn.addEventListener('click', () => changeClass())
    )

    function changeClass(){
        lemonTeaTrigger.classList.remove('disabled');
        coffeeTrigger.classList.remove('disabled');
        hotChocolateTrigger.classList.remove('disabled');
        lemonTeaOrder.classList.remove('ordered');
        coffeeOrder.classList.remove('ordered');
        hotChocolateOrder.classList.remove('ordered');
    }
}