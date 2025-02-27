import { useState } from "react";
import menuIcon from "../../assets/icon-menu.svg";
import closeMenuIcon from "../../assets/icon-close.svg";
import Button from "../../UI/Button";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleShowNavBar() {
    setIsOpen((show) => !show);
  }

  return (
    <nav className="relative flex items-center" aria-label="Main Navigation">
      {!isOpen && (
        <Button
          img={menuIcon}
          ariaLabel="Open menu"
          onClick={handleShowNavBar}
        />
      )}

      {isOpen && (
        <div className="fixed top-0 left-0 z-10 h-full w-[66.67%] bg-green-100 pt-6 pl-6">
          <Button
            onClick={handleShowNavBar}
            img={closeMenuIcon}
            ariaLabel="Close Menu"
          />

          <ul className="*:text-Grey950 mt-14 flex flex-col gap-6 *:text-lg *:leading-[26px] *:font-bold">
            <li>
              <a href="javascript:void">Collections</a>
            </li>

            <li>
              <a href="javascript:void">Men</a>
            </li>

            <li>
              <a href="javascript:void">Women</a>
            </li>

            <li>
              <a href="javascript:void">About</a>
            </li>

            <li>
              <a href="javascript:void">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
