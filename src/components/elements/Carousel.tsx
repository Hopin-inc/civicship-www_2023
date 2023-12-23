"use client";

import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.scss";
import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  items: JSX.Element[];
  cols?: number | `${ number }`;
  width?: number | `${ number }`;
}

const Carousel: React.FC<Props> = ({ items, cols, width, className }) => {
  const colsClass = cols ? `cols-${ cols }` : undefined;
  const widthClass = width ? `width-${ width }` : undefined;
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
  });
  return (
    <div className={ cn(className, "embla overflow-visible") } ref={ emblaRef }>
      <ul className={ cn(colsClass, widthClass, "embla__container gap-6") }>
        { items.map((item, index) => (
          <li className="embla__slide" key={ index }>{ item }</li>
        )) }
      </ul>
    </div>
  )
};

export default Carousel;
