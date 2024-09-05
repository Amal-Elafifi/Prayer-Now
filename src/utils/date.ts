import HijriDate from 'hijri-date/lib/safe';

const date= () => {
  const date = new Date();
  const dayOfWeek = date.getDay(); // Get the current day of the week as a number

  // Create a HijriDate instance for the current date
  const hijriDate = new HijriDate();
  const hijriYear = hijriDate.getFullYear();
  const hijriMonth = hijriDate.getMonth() - 1 ; // Months are 0-based in HijriDate
  const hijriDay = hijriDate.getDate();

  // Convert dayOfWeek to a readable day name
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[dayOfWeek];

  // Convert dayOfWeek to a readable day name
  const months = ["Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani", "Jumada al-Ula", "Jumada al-Akhirah", "Rajab", "Shaban", "Ramadan", "Shawwal", "Dhu al-Qadah", "Dhu al-Hijjah"]
  const month = months[hijriMonth];

  const totalDate = `${today} ${hijriDay} ${month} ${hijriYear}`;

  return totalDate
}

export default date;



