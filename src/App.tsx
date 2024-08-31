import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useLocalData, UserContext } from "@/hooks/useLocalData";
import Footer from "@/components/Footer";
import Presentation from "@/components/Presentation";
import Calculator from "@/components/Calculator";

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
        <Calculator />
      </UserContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
