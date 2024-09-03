import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useLocalData, UserContext } from "@/hooks/useLocalData";
import Footer from "@/components/Footer";
import Presentation from "@/components/Presentation";
import Calculator from "@/components/Calculator";
import Macro from "@/components/Macro";

const App = () => {
  const { restoreMetaData } = useLocalData();

  const [user, setUser] = useState(restoreMetaData());

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
        <div className="w-full relative bg-[#161616] mt-48 mb-64 py-7">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent left-1/2 -translate-x-1/2 absolute top-0 z-[2]" />
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent left-1/2 -translate-x-1/2 absolute bottom-0 z-[2]" />
          <Calculator />
          {user.baseMetabolism !== 0 && <Macro />}
        </div>
      </UserContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
