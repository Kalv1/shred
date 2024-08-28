import type { Dispatch, SetStateAction } from "react";


type Props = {
    min: number;
    max: number;
    value: number;
    onChange: Dispatch<SetStateAction<number>>;
}

const NumberPicker = ({ min, max, value, onChange }: Props) => {

    const handleIncrease = () => {
        if(value + 1 <= max) {
            onChange(value + 1)
        }
    }

    const handleDecrease = () => {
        if(value - 1 >= min) {
            onChange(value - 1)
        }
    }

    return (
        <div className="bg-black rounded font-inter text-white font-bold uppercase border border-white/15 flex items-center justify-between">
            <div className="border-r p-2 border-white/15 flex items-center justify-center w-1/3 h-full" onClick={() => handleDecrease()}>
                <p>-</p>
            </div>
            <div className="border-white/15 p-2 flex items-center justify-center w-1/3 h-full">
                <input onChange={(e) => onChange(Number(e.target.value))} type="number" value={value.toString()} min={min ?? 0} max={max ?? 100} className="w-full bg-transparent text-white text-center outline-none font-bold text-xl" />
            </div>
            <div className="border-l border-white/15 p-2 flex items-center justify-center w-1/3 h-full" onClick={() => handleIncrease()}>
                <p>+</p>
            </div>
        </div>
    )
}

export default NumberPicker