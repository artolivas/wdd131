document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('last-modified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = lastModified;

    const calculateWindChill = (temperature, windSpeed) => {
        if (temperature <= 10 && windSpeed > 4.8) {
            return (
                13.12 +
                0.6215 * temperature -
                11.37 * Math.pow(windSpeed, 0.16) +
                0.3965 * temperature * Math.pow(windSpeed, 0.16)
            ).toFixed(1);
        }
        return "N/A";
    };

    const windchillSpan = document.getElementById('windchill');
    const temperature = 10;
    const windSpeed = 5;

    windchillSpan.textContent = calculateWindChill(temperature, windSpeed);
});

});
