document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('checkmark');
    var counter = 0; 
    var failureCount = localStorage.getItem('failureCount') ? parseInt(localStorage.getItem('failureCount')) : 0;

    function changePosition() {
        var randomX = Math.floor(Math.random() * 300) + 1;
        var randomY = Math.floor(Math.random() * 200) + 1;
        checkbox.style.position = "absolute"; 
        checkbox.style.left = `${randomX}px`;
        checkbox.style.top = `${randomY}px`;
    }

    checkbox.addEventListener('mouseenter', function () {
        counter++;
        if (counter < 7) {
            changePosition();
        }
    });

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
         failureCount=   localStorage.getItem('failureCount'); 
         failureCount++; 
        localStorage.setItem('failureCount', failureCount); 
        if (failureCount < 3) {
        window.location.href="./page2.html";
       
        }
        else { 
            localStorage.setItem('failureCount', 0);
            window.location.href="./page5.html"; 
        }
    }
    });
});
