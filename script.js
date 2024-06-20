function showDetails(exercise, details) {
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `<strong>${exercise}:</strong> ${details}`;
}
