document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to (August 14, 2025 11:59 PM IST)
    const countDownDate = new Date("August 14, 2025 11:59:00 GMT+0530").getTime();
    
    // Update the countdown every 1 second
    const countdownFunction = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
        
        // If the countdown is finished, clear interval
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById('countdown').innerHTML = '<h3>HackAura is Live Now!</h3>';
        }
    }, 1000);
});