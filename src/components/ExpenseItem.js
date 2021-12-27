import "./ExpenseItem.css";
function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <p>{month}</p>
        <p>{day}</p>
        <p>{year}</p>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
