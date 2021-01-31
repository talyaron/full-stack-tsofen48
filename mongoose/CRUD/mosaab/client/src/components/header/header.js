import './header.css';

function Header({Amount}) {
  return (
    <div className="Header">
        <h3>total sum available {Amount}$</h3>
    </div>
  );
}

export default Header;
