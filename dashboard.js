let date = new Date()
document.querySelector('.date').textContent = `${date.toDateString()} ${date.getHours()}:${date.getMinutes()}`

