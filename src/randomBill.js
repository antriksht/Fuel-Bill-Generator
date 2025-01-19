export default function generateRandomBillData({
  fuelStation,
  startDate,
  endDate,
  startTime,
  endTime,
  startInvoiceRange,
  endInvoiceRange,
  startFuelRate,
  endFuelRate,
  minAmount,
  maxAmount,
  totalAmount,
}) {
  const result = [];
  let currentTotal = 0;

  // Helper function to generate random data
  function getRandomValue(start, end) {
    return Math.random() * (end - start) + start;
  }

  //try to fit equally randimize throughout whole month
  function getRandomDate(start, end) {
    const randomTime = Math.random() * (end.getTime() - start.getTime());
    const date = new Date(start.getTime() + randomTime);
    return `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`;
  }

  function getRandomTime(start, end) {
    const startMinutes =
      parseInt(start.split(":")[0]) * 60 + parseInt(start.split(":")[1]);
    const endMinutes =
      parseInt(end.split(":")[0]) * 60 + parseInt(end.split(":")[1]);
    const randomMinutes = Math.floor(
      Math.random() * (endMinutes - startMinutes) + startMinutes
    );
    const hours = Math.floor(randomMinutes / 60);
    const minutes = randomMinutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  }

  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  while (currentTotal < totalAmount) {
    const amount = Math.floor(getRandomValue(minAmount, maxAmount) / 50) * 50;
    if (currentTotal + amount > totalAmount) break; // Ensure we don't exceed totalAmount

    const rate = getRandomValue(startFuelRate, endFuelRate).toFixed(2);
    const date = getRandomDate(startDateObj, endDateObj);
    const time = getRandomTime(startTime, endTime);
    const invoice_no = Math.floor(
      getRandomValue(startInvoiceRange, endInvoiceRange)
    );
    const station =
      fuelStation.split("|")[
        Math.floor(Math.random() * fuelStation.split("|").length)
      ];

    result.push({
      fuelStation: station,
      date,
      time,
      invoice_no,
      amount,
      rate: parseFloat(rate),
    });
    currentTotal += amount;
  }

  // Adjust last entry if needed to match the totalAmount exactly
  if (currentTotal < totalAmount) {
    const adjustment = totalAmount - currentTotal;
    const lastEntry = result[result.length - 1];
    if (lastEntry) {
      lastEntry.amount += adjustment;
    }
    if (lastEntry.amount > maxAmount) lastEntry.amount = maxAmount;
  }
  //before returning sort bill dateTime wise

  function getDateInYMDFormat(date) {
    //dd/mm/yyyy to yyyy/mm/dd
    return date.split("/").reverse().join("/");
  }

  result.sort((a, b) => {
    const dateA = new Date(`${getDateInYMDFormat(a.date)} ${a.time}`);
    const dateB = new Date(`${getDateInYMDFormat(b.date)} ${b.time}`);
    return dateA - dateB;
  });

  return result;
}
