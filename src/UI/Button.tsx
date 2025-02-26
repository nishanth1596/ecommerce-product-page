type ButtonProps = {
  onClick: () => void;
  img: string;
  alt: string;
  ariaLabel: string;
};

function Button({ onClick, img, alt, ariaLabel }: ButtonProps) {
  return (
    <button onClick={onClick} aria-label={ariaLabel}>
      <img src={img} alt={alt} />
    </button>
  );
}

export default Button;
