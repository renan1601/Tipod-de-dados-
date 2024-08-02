let currentYear = new Date().getFullYear();
let firstDayOfYear = new Date(currentYear, 0, 1);

let today = new Date();

let timeDifference = today - firstDayOfYear;
let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log(`Diferença em dias desde o primeiro dia do ano: ${daysDifference}`);

let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0');
let year = today.getFullYear();
let formattedDate = `${day}/${month}/${year}`;

console.log(`Data de hoje: ${formattedDate}`);