import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useLocalData, UserContext } from "@/hooks/useLocalData";
import Footer from "@/components/Footer";
import Presentation from "@/components/Presentation";
import Calculator from "@/components/Calculator";
import Macro from "@/components/Macro";
import TrackingTable from "@/components/TrackingTable";
import { Tracking } from "./type";

const App = () => {
  const { restoreMetaData, saveTracking, restoreTracking } = useLocalData();

  const [user, setUser] = useState(restoreMetaData());
  const [tracking, setTracking] = useState<Tracking[]>(restoreTracking());

  const handleTrackingReset = () => {
    setTracking([]);
  };

  useEffect(() => {
    saveTracking(tracking);
  }, [tracking]);

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="mx-auto container w-full">
        <Navbar
          navItems={[
            {
              name: "CALCULATOR",
              link: "/",
            },
            {
              name: "MACRO",
              link: "/",
            },
            {
              name: "TRACKING",
              link: "/",
            },
          ]}
        />
        <Presentation />
      </div>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <div className="w-full relative bg-[#161616] mt-48 mb-12 py-7">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent left-1/2 -translate-x-1/2 absolute top-0 z-[2]" />
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent left-1/2 -translate-x-1/2 absolute bottom-0 z-[2]" />
          <Calculator />
          {user.baseMetabolism !== 0 && <Macro />}
        </div>

        <TrackingTable
          onReset={handleTrackingReset}
          setTracking={setTracking}
          tracking={tracking}
        />
      </UserContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
