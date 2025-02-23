import generateRandomBillData from "./randomBill";
import Template from "./template";

function App() {
  const billsDataArray = generateRandomBillData({
    fuelStation: "io2",
    startDate: "2024-04-10",
    endDate: "2025-02-12",
    startTime: "13:00",
    endTime: "22:30",
    startInvoiceRange: 600000,
    endInvoiceRange: 900000,
    startFuelRate: 95.2,
    endFuelRate: 97.05,
    minAmount: 2517,
    maxAmount: 4300,
    totalAmount: 120000,
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
