function updateTime() {
    const now = new Date();

    // Local time
    updateTimeZoneDisplay('local', now, Intl.DateTimeFormat().resolvedOptions().timeZone);

    // Dubai time
    const dubaiTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Dubai" }));
    updateTimeZoneDisplay('dubai', dubaiTime, "Asia/Dubai");

    // Sydney time
    const sydneyTime = new Date(now.toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
    updateTimeZoneDisplay('sydney', sydneyTime, "Australia/Sydney");
}

function updateTimeZoneDisplay(zone, time, timeZone) {
    const timeString = time.toLocaleTimeString();
    const hour = time.getHours();
    const symbol = getTimeSymbol(hour);

    document.getElementById(`${zone}-time-display`).textContent = `${symbol} ${timeString}`;
    document.getElementById(`${zone}-timezone-display`).textContent = `Timezone: ${timeZone}`;
}

function getTimeSymbol(hour) {
    if (hour >= 6 && hour < 12) {
        return "☀️"; // Morning (Orange Sun)
    } else if (hour >= 12 && hour < 18) {
        return "🌞"; // Noon (Bright Sun)
    } else {
        return "🌙"; // Night (Moon with Stars)
    }
}

// Update time immediately on load
updateTime();

// Update time every second
setInterval(updateTime, 1000);
