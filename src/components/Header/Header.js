import { Link } from "react-router-dom";
import "./Header.css";
const header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Saims Quiz Hub
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default header;
