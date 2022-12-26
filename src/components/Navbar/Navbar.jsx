import { useState } from "react";
import home from "../../assets/icons/home.png";
import notification from "../../assets/icons/notification.png";
import wallet from "../../assets/icons/wallet.png";
import user from "../../assets/icons/user.png";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <nav className="navbar">
        <div
        // className={active === 0 ? "active" : ""}
        // onClick={() => setActive(0)}
        >
          <img src={home} />
        </div>
        <div
          className="notification"
          // className={active === 1 ? "active" : ""}
          // onClick={() => setActive(1)}
        >
          <span className="red-dot"/>
          <img src={notification} />
        </div>
        <div
        // className={active === 2 ? "active" : ""}
        // onClick={() => setActive(2)}
        >
          <img src={wallet} />
        </div>
        <div
        // className={active === 3 ? "active" : ""}
        // onClick={() => setActive(3)}
        >
          <img src={user} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
