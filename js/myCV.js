function calculateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }
    return age;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const birthDateElement = document.getElementById('Date').textContent;
    const birthDateFormatted = birthDateElement.split('-').reverse().join('-'); // Convert to YYYY-MM-DD format for Date object
    const age = calculateAge(birthDateFormatted);
    document.getElementById('Age').textContent = `（${age}歲）`;
});