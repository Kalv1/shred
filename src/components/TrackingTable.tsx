import { Tracking } from "@/type";

type Props = {
  onReset: () => void;
  setTracking: (newTracking: Tracking[]) => void;
  tracking: Tracking[];
};

const TrackingTable = ({ onReset, setTracking, tracking }: Props) => {
  if (tracking.length === 0) {
    const table = [];
    for (let i = 0; i < 7; i++) {
      table.push({
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        snack: 0,
      });
    }
    setTracking(table);
  }

  const handleChangeTracking = (index: number, value: number, type: string) => {
    const newTracking: Tracking[] = [...tracking];
    newTracking[index][type as keyof Tracking] = value;
    setTracking(newTracking);
  };

  return (
    <div className="container mx-auto mb-16">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold text-2xl font-clash uppercase">
          Calories tracking<span className="text-primary">.</span>
        </h2>
        <button
          onClick={onReset}
          className="bg-primary text-white rounded px-4 py-2 font-bold uppercase font-clash"
        >
          Reset
        </button>
      </div>

      <div className="border border-white/15 rounded overflow-hidden">
        <table className="w-full table-auto text-left font-clash uppercase">
          <thead className="bg-[#161616]">
            <tr>
              <th className="text-center py-4">Breakfast</th>
              <th className="text-center">Lunch</th>
              <th className="text-center">Dinner</th>
              <th className="text-center">Snack/Extra</th>
              <th className="text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {tracking.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input
                      value={item.breakfast.toString()}
                      type="number"
                      onChange={(e) =>
                        handleChangeTracking(
                          index,
                          +e.target.value,
                          "breakfast"
                        )
                      }
                      className="bg-transparent w-full text-center outline-none"
                    />
                  </td>
                  <td>
                    <input
                      value={item.lunch.toString()}
                      type="number"
                      onChange={(e) =>
                        handleChangeTracking(index, +e.target.value, "lunch")
                      }
                      className="bg-transparent w-full text-center outline-none"
                    />
                  </td>
                  <td>
                    <input
                      value={item.dinner.toString()}
                      type="number"
                      onChange={(e) =>
                        handleChangeTracking(index, +e.target.value, "dinner")
                      }
                      className="bg-transparent w-full text-center outline-none"
                    />
                  </td>
                  <td>
                    <input
                      value={item.snack.toString()}
                      type="number"
                      onChange={(e) =>
                        handleChangeTracking(index, +e.target.value, "snack")
                      }
                      className="bg-transparent w-full text-center outline-none"
                    />
                  </td>
                  <td>
                    <p className="w-full text-center py-2">
                      {(item.breakfast ?? 0) +
                        (item.lunch ?? 0) +
                        (item.dinner ?? 0) +
                        (item.snack ?? 0)}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackingTable;
