// Agenda de horários

for (let minutes = 0; minutes <= 240; minutes = minutes + 15) {
    let hour = Math.floor(minutes / 60) + 8;
    let minute = minutes % 60;

    let formattedHour = String(hour).padStart(2, "0");
    let formattedMinute = String(minute).padStart(2, "0");

    console.log(formattedHour + ":" + formattedMinute);
}