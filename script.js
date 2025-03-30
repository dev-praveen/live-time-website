function updateTime() {
    const now = new Date();

    // Local time
    const timeString = now.toLocaleTimeString();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('local-time-display').textContent = timeString;
    document.getElementById('local-timezone-display').textContent = `Timezone: ${timeZone}`;

    // Dubai time
    const dubaiTimeString = now.toLocaleTimeString("en-US", { timeZone: "Asia/Dubai" });
    const dubaiTimeZone = Intl.DateTimeFormat("en-US", { timeZone: "Asia/Dubai" }).resolvedOptions().timeZone;
    document.getElementById('dubai-time-display').textContent = dubaiTimeString;
    document.getElementById('dubai-timezone-display').textContent = `Timezone: ${dubaiTimeZone}`;

    // Sydney time
    const sydneyTimeString = now.toLocaleTimeString("en-US", { timeZone: "Australia/Sydney" });
    const sydneyTimeZone = Intl.DateTimeFormat("en-US", { timeZone: "Australia/Sydney" }).resolvedOptions().timeZone;
    document.getElementById('sydney-time-display').textContent = sydneyTimeString;
    document.getElementById('sydney-timezone-display').textContent = `Timezone: ${sydneyTimeZone}`;
}

// Update time immediately on load
updateTime();

// Update time every second
setInterval(updateTime, 1000);
