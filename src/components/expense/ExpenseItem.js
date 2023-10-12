// article tag is used when the elements have independent information
export default function ExpenseItem({ event }) {
  return (
    <article className="event-item">
      <div className="col-80">
        <h2 className="expenseItemHeader">{event.title}</h2>
        <time>{event.date}</time>
      </div>
      <div className="col-20 amount">
        <p>{event.amount}</p>
      </div>
    </article>
  );
}
