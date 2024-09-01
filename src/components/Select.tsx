import { useState, useRef } from "react";
import classNames from "classnames";
import selectArrow from "@/assets/svg/select-arrow.svg";
import { useOutsideClickCatcher } from "@/hooks/useOutsideClickCatcher";

type Props = {
  options: Array<{ value: string | number; label: string }>;
  onChange: (value: string | number) => void;
  value: string | number;
  placeholder: string;
};

const Select = ({ options, onChange, value, placeholder }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleClickOption = (value: string | number) => {
    setIsOpen(!isOpen);
    onChange(value);
  };

  useOutsideClickCatcher(wrapperRef, setIsOpen);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        className="bg-black rounded font-inter text-white font-bold p-2.5 uppercase border border-white/15 flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
        </p>
        <img
          src={selectArrow}
          alt="arrow"
          className={classNames("transition-all duration-300 ease-in-out", {
            "rotate-180": isOpen,
          })}
        />
      </div>
      {isOpen && (
        <ul className="absolute bg-black rounded w-full border border-white/15 h-fit left-0 -bottom-1 translate-y-full z-50 uppercase font-bold font-inter">
          {options.map((option, index) => (
            <li
              key={index}
              className={classNames(
                "flex items-center justify-between p-2 w-full",
                {
                  "border-b border-white/15": index !== options.length - 1,
                }
              )}
              onClick={() => handleClickOption(option.value)}
            >
              <p className="text-white">{option.label}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
