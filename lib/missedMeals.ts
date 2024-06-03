// utils/missedMeals.js
const mealTimes = {
  breakfast: "08:00",
  lunch: "12:00",
  dinner: "18:00",
};

const parseTime = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  return { hours, minutes };
};

const calculateMissedMeals = (departure, arrival) => {
  const missedMeals = [];

  let currentDate = new Date(departure);
  const endDate = new Date(arrival);

  while (currentDate <= endDate) {
    const dayMissedMeals = {
      date: currentDate.toDateString(),
      breakfast: 0,
      lunch: 0,
      dinner: 0,
    };

    if (currentDate.toDateString() === departure.toDateString()) {
      console.log("currentDate" + currentDate.toDateString());
      console.log("departure" + departure.toDateString());

      const { hours: depHours, minutes: depMinutes } = parseTime(
        departure.toTimeString().substr(0, 5)
      );
      const departureDate = new Date(departure);
      departureDate.setHours(depHours, depMinutes, 0, 0);
      if (depHours < 9) dayMissedMeals.breakfast += 1;
      if (depHours < 13) {
        console.log(depHours);
        dayMissedMeals.lunch += 1;
      }
      if (depHours < 20) dayMissedMeals.dinner += 1;
    } else if (currentDate.toDateString() === arrival.toDateString()) {
      console.log("currentDate" + currentDate.toDateString());
      console.log("departure" + arrival.toDateString());
        

      const { hours: arrHours, minutes: arrMinutes } = parseTime(
        arrival.toTimeString().substr(0, 5)
      );
      const arrivalDate = new Date(arrival);
      console.log(arrivalDate.toDateString());
       
      arrivalDate.setHours(arrHours, arrMinutes, 0, 0);
      if (arrHours >= 9) dayMissedMeals.breakfast += 1;
      if (arrHours >= 13) {
        dayMissedMeals.lunch += 1;
        console.log(arrHours);
      }
      if (arrHours >= 20) dayMissedMeals.dinner += 1;
    } else {
      dayMissedMeals.breakfast += 1;
      dayMissedMeals.lunch += 1;
      dayMissedMeals.dinner += 1;
    }

    missedMeals.push(dayMissedMeals);

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return missedMeals;
};

export default calculateMissedMeals;
