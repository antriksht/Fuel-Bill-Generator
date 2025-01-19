import generateRandomBillData from "./randomBill";
import Template from "./template";

function App() {
  const billsDataArray = generateRandomBillData({
    fuelStation: "hp|bp|io",
    startDate: "2024-12-01",
    endDate: "2024-12-31",
    startTime: "09:00",
    endTime: "23:30",
    startInvoiceRange: 600000,
    endInvoiceRange: 900000,
    startFuelRate: 94.4,
    endFuelRate: 94.65,
    minAmount: 2000,
    maxAmount: 3000,
    totalAmount: 20000,
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {billsDataArray.map((data, i) => (
        <Template key={i} {...data} />
      ))}
      {/* <Template /> */}
    </div>
  );
}

export default App;
