import dayjs from "dayjs";

/**
 * Get current date time - takes in a datetime property or returns the current date time
 * @param {string} date - Optional date string to convert to a Date object
 * @returns {string} - Formatted date time string in the format YYYY-MM-DDTHH:MM
 */
export const getCurrentDateTime = (date) => {
  // If a date is provided, create a new Date object from it; otherwise, use the current date and time
  let now = date ? new Date(date) : new Date();

  // Extract the year from the Date object
  const year = now.getFullYear();

  // Extract the month from the Date object and pad it with a leading zero if necessary
  // Note: getMonth() returns a zero-based value (0-11), so we add 1 to get the correct month number
  const month = String(now.getMonth() + 1).padStart(2, '0');

  // Extract the day of the month from the Date object and pad it with a leading zero if necessary
  const day = String(now.getDate()).padStart(2, '0');

  // Extract the hours from the Date object and pad with a leading zero if necessary
  const hours = String(now.getHours()).padStart(2, '0');

  // Extract the minutes from the Date object and pad with a leading zero if necessary
  const minutes = String(now.getMinutes()).padStart(2, '0');

  // Return the formatted date time string in the format YYYY-MM-DDTHH:MM
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const dateTimeArrayToDate = (dateTimeArray) => {

  // console.log("date time", dateTimeArray);
  let dayjsDate;
  // If no date is passed, use todays' date
  if (dateTimeArray.length < 3) {
    dayjsDate = new Date();
  } else if (dateTimeArray.length >= 3 && dateTimeArray.length < 7) {
    dayjsDate = dayjs(new Date(
      dateTimeArray[0],       // year
      dateTimeArray[1] - 1,   // month (0-based)
      dateTimeArray[2],       // day  
    ));
  } else {
    dayjsDate = dayjs(new Date(
      dateTimeArray[0],       // year
      dateTimeArray[1] - 1,   // month (0-based)
      dateTimeArray[2],       // day  
      dateTimeArray[3],       // hour
      dateTimeArray[4],       // minute
      dateTimeArray[5],       // second
      Math.floor(dateTimeArray[6] / 1000000)  //nanoseconds -> milliseconds
    ));

  }

  return dayjsDate.format("YYYY-MM-DD");
}