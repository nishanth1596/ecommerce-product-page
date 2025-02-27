import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";

type ButtonProps = {
  onClick?: () => void;
  onClickDecrease?: () => void;
  onClickIncrease?: () => void;
  img?: string;
  ariaLabel?: string;
  type?: string;
  value?: number;
};

function Button({
  onClick,
  onClickDecrease,
  onClickIncrease,
  img,
  ariaLabel,
  value,
  type,
}: ButtonProps) {
  if (type === "quantity") {
    return (
      <div
        onClick={onClick}
        className="bg-Grey50 flex w-full items-center justify-between rounded-[10px] px-[18.5px] py-4"
      >
        <button onClick={onClickDecrease}>
          <img src={minusIcon} alt="" aria-label="Decrease Quantity" />
        </button>

        <span className="leading-[26px] font-bold">{value}</span>

        <button onClick={onClickIncrease}>
          <img src={plusIcon} alt="" aria-label="Increase Quantity" />
        </button>
      </div>
    );
  }

  if (type === "cart") {
    return (
      <button className="bg-Orange500 dropShadow flex w-full items-center justify-center gap-4 rounded-[10px] pt-4 pb-3.5">
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#1d2026"
            fillRule="nonzero"
          />
        </svg>
        <span className="text-Grey950 leading-[26px] font-bold">
          Add to cart
        </span>
      </button>
    );
  }

  if (type === "navigate") {
    return (
      <button onClick={onClick} className="h-10 w-10 cursor-pointer">
        <img
          src={img}
          alt=""
          aria-label={ariaLabel}
          className="rounded-full bg-white px-4 py-3.5"
        />
      </button>
    );
  }

  return (
    <button onClick={onClick} aria-label={ariaLabel}>
      <img src={img} alt="" />
    </button>
  );
}

export default Button;
