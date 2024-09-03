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


    const handleChange = (value: string) =>  {
        const parsedValue = Number(value)
        if(parsedValue <= min) {
            onChange(min)
        }
        else if(parsedValue >= max) {
            onChange(max)
        }
        else {
            onChange(parsedValue)
        }
    }

    return (
        <div className="bg-black rounded font-inter text-white font-bold uppercase border border-white/15 flex justify-between">
            <div className="border-r select-none p-2 border-white/15 flex items-center justify-center w-1/5 cursor-pointer hover:bg-white/10 transition ease-in" onClick={() => handleDecrease()}>
                <p>-</p>
            </div>
            <div className="border-white/15 flex my-auto w-3/5 h-full p-2">
                <input onChange={(e) => handleChange(e.target.value)} type="number" value={value.toString()} min={min ?? 0} max={max ?? 100} className="w-full bg-transparent text-white text-center outline-none font-bold text-xl" />
            </div>
            <div className="border-l select-none border-white/15 p-2 flex items-center justify-center w-1/5 cursor-pointer hover:bg-white/10 transition ease-in" onClick={() => handleIncrease()}>
                <p>+</p>
            </div>
        </div>
    )
}

export default NumberPicker