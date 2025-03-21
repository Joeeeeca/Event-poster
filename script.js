function startCountdown(eventDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "The event has started!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

// Use UTC time to ensure accuracy across time zones
const eventDate = Date.UTC(2025, 5, 15, 10, 0, 0); // June 15, 2025, 10:00 AM UTC
startCountdown(eventDate);