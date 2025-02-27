import Button from "../../UI/Button";
import product1 from "../../assets/image-product-1.jpg";
import product2 from "../../assets/image-product-2.jpg";
import product3 from "../../assets/image-product-3.jpg";
import product4 from "../../assets/image-product-4.jpg";
import nextIcon from "../../assets/icon-next.svg";
import previousIcon from "../../assets/icon-previous.svg";
import { useState } from "react";

type ProductCardProps = {
  onIncreaseItem: () => void;
  onDecreaseItem: () => void;
};

function ProductCard({ onIncreaseItem, onDecreaseItem }: ProductCardProps) {
  const [index, setIndex] = useState<number>(0);

  const productImages = [product1, product2, product3, product4];
  const currentImg = productImages[index];

  function handleNextImg() {
    if (index >= 3) {
      setIndex(0);
    } else {
      setIndex((value: number) => value + 1);
    }
  }

  function handlePrevImg() {
    if (index <= 0) {
      setIndex(3);
    } else {
      setIndex((value: number) => value - 1);
    }
  }

  return (
    <section>
      <div className="relative w-full">
        <img
          className={`mt-6 w-full`}
          src={currentImg}
          alt="A pair of brown and white sneakers, with one shoe showing its sole and the other lying flat."
        />

        <div className="absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between px-4">
          <Button
            type="navigate"
            onClick={handlePrevImg}
            ariaLabel="Previous Image"
            img={previousIcon}
          />

          <Button
            type="navigate"
            onClick={handleNextImg}
            ariaLabel="Next Image"
            img={nextIcon}
          />
        </div>
      </div>

      <div className="mx-6 mt-6">
        <h1 className="sr-only">Ecommerce Page</h1>
        <h2 className="text-Grey500 text-xs leading-[0.94rem] font-bold tracking-[1.85px] uppercase">
          Sneaker Company
        </h2>
        <h3 className="text-Preset-2 text-Grey950 mt-4">
          Fall Limited Edition Sneakers
        </h3>

        <p className="text-Grey500 mt-4 text-[0.94rem] leading-[26px] font-normal">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-Preset-2 text-Grey950 flex items-center gap-4">
            $125.00{" "}
            <span className="text-White bg-Grey950 rounded-md px-2.5 text-base leading-[26px] font-bold">
              50%
            </span>
          </p>

          <p className="text-Grey500 leading-[26px] font-bold line-through">
            $250.00
          </p>
        </div>

        <div className="mt-8 mb-[70px] grid grid-rows-2 gap-4">
          <Button
            onClickIncrease={() => onIncreaseItem({ id: 1, quanity: 1 })}
            onClickDecrease={() => onDecreaseItem()}
            type="quantity"
            value={0}
          />
          <Button ariaLabel="Add to cart" type="cart" />
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
