import {Link} from "react-router-dom";

export default function Header() {
  
  return (
    <div className="header" id="main-header">
      <div className="header-tittle">
        <h1>Personal Expense Tracker</h1>
      </div>
      <div className="header-navbar">
        <Link to = "/events/new" className="button btn-1">Add Expense</Link>
        <button className="button">All List</button>
      </div>
    </div>
  );
}
