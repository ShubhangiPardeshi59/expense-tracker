import ExpenseItem from "./ExpenseItem";
export default function ExpenseList() {
  const events = [
    {
      id: 1,
      title: "Shopping",
      amount: "2$",
      date: "2023-10-10",
    },
    {
      id: 2,
      title: "Lunch at hotel",
      amount: "3$",
      date: "2023-10-10",
    },
    {
      id: 3,
      title: "Art workshop",
      amount: "1$",
      date: "2023-10-10",
    },
    {
      id: 4,
      title: "Shopping",
      amount: "2$",
      date: "2023-10-10",
    },
    {
      id: 5,
      title: "Lunch at hotel",
      amount: "3$",
      date: "2023-10-10",
    },
    {
      id: 6,
      title: "Art workshop",
      amount: "1$",
      date: "2023-10-10",
    },
  ];
 
  return (
    <div className="content-section">
      <h1>All Expenses</h1>
      <ul className="events-list">
        {events.map((event) => (
          <li key={event.id}>
            <ExpenseItem event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}
