export default function getDay() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const todayDate = new Date();

  const data = {
    day: daysOfWeek[todayDate.getDay()],
    date: `${todayDate.getDate()}/${todayDate.getMonth()+1}/${todayDate.getFullYear()}`,
  };

  return data;
}
