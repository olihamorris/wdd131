const lastModifiedElement = document.getElementById("lastModified");
const lastModifiedDate = new Date(document.lastModified);

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};

lastModifiedElement.innerHTML = Last modified: ${lastModifiedDate.toLocaleString('en-US', options)};

