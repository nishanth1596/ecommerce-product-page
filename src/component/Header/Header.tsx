import NavBar from "./NavBar";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/icon-cart.svg";
import avatarImg from "../../assets/image-avatar.png";

function Header() {
  return (
    <header className="mt-5 flex w-full items-center justify-between px-6">
      <div className="flex items-end gap-4">
        <NavBar />
        <img src={logo} alt="Sneakers Logo" />
      </div>
      <div className="flex items-center gap-6">
        <img src={cartIcon} alt="Shopping Cart Icon" />
        <img src={avatarImg} alt="User Avatar" className="h-6 w-6" />
      </div>
    </header>
  );
}

export default Header;
