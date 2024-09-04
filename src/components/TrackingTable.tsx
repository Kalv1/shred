import { useContext, useState } from "react";
import { UserContext } from "@/hooks/useLocalData";
import { Tracking } from "@/type";

const TrackingTable = () => {
  const { user, setUser } = useContext(UserContext);

  const [tracking, setTracking] = useState<Tracking[] | undefined>(
    user.tracking
  );

  const editTracking = (index: number, value: string, meal: string) => {
    const newTracking = user.tracking ?? [];
    switch (meal) {
      case "breakfast":
        newTracking[index].breakfast = +value;
        break;
      case "lunch":
        newTracking[index].lunch = +value;
        break;
      case "dinner":
        newTracking[index].dinner = +value;
        break;
      case "snack":
        newTracking[index].snack = +value;
        break;
      default:
        break;
    }
    setUser({ ...user, tracking: newTracking });
  };

  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-2xl font-clash uppercase mb-5">
        Calories tracking<span className="text-primary">.</span>
      </h2>
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
            {
              !user.tracking?.map((el, index) => {
                <tr>
                  <td className="text-center py-2 px-4">
                    <input
                      type="text"
                      value={el.breakfast}
                      onChange={(e) =>
                        editTracking(index, e.target.value, "breakfast")
                      }
                      className="bg-transparent outline-none w-full h-full text-center"
                    />
                  </td>
                  <td className="text-center py-2 px-4">
                    <input
                      type="text"
                      value={el.lunch}
                      onChange={(e) =>
                        editTracking(index, e.target.value, "lunch")
                      }
                      className="bg-transparent outline-none w-full h-full text-center"
                    />
                  </td>
                  <td className="text-center py-2 px-4">
                    <input
                      type="text"
                      value={el.dinner}
                      onChange={(e) =>
                        editTracking(index, e.target.value, "dinner")
                      }
                      className="bg-transparent outline-none w-full h-full text-center"
                    />
                  </td>
                  <td className="text-center py-2 px-4">
                    <input
                      type="text"
                      value={el.snack}
                      onChange={(e) =>
                        editTracking(index, e.target.value, "snack")
                      }
                      className="bg-transparent outline-none w-full h-full text-center"
                    />
                  </td>
                  <td className="text-center py-2 px-4">
                    <p>{el.breakfast + el.lunch + el.dinner + el.snack}</p>
                  </td>
                </tr>;
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackingTable;
