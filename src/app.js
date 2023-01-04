let hasAccess = false;

const generateUrl = (latitude, longitude) => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;
};

const onSuccess = async (position) => {
    hasAccess = true;
    const { latitude, longitude } = position.coords;
    const url = generateUrl(latitude, longitude);

    // TODO Fetch the URL.
    // TODO Change the page based on the data we get.
};

const onFailure = () => {
    hasAccess = false;
    alert('We dont have permission');
    // TODO change the page UI.
};

const getLocation = () => {
    if (!navigator.geolocation) {
        throw new Error('This browser doesn\'t support geolocation.');
    }

    navigator.geolocation.getCurrentPosition(
        // Has access to geolocation
        onSuccess,
        // Access blocked to geolocation
        onFailure
    );
};

const main = () => {
    // Main App logic.
    // Don't worry about it.

    geolocation();
};

main();