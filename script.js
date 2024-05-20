document.addEventListener("DOMContentLoaded", function() {
    const countElement = document.getElementById('count');
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const clearButton = document.getElementById('clear');
    const errorElement = document.getElementById('error');

    let count = 0;

    incrementButton.addEventListener('click', function() {
        count++;
        updateCount();
    });

    decrementButton.addEventListener('click', function() {
        if (count > 0) {
            count--;
            errorElement.style.display = 'none';
            updateCount();
        } else {
            errorElement.style.display = 'block';
        }
    });

    clearButton.addEventListener('click', function() {
        count = 0;
        updateCount();
    });

    function updateCount() {
        countElement.innerHTML = count;
        clearButton.style.display = count > 0 ? 'inline' : 'none';
    }
});
