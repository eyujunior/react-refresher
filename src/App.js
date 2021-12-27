import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car insurance",
      amount: 287.8,
      date: new Date(2000, 3, 28),
    },
    {
      title: "Soccer Betting",
      amount: 1000,
      date: new Date(2019, 4, 22),
    },
    {
      title: "Cristiano Ronaldo",
      amount: 778.2,
      date: new Date(2003, 2, 2),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
