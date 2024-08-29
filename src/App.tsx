import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useLocalData } from "@/hooks/useLocalData";
import Footer from "@/components/Footer";
import Presentation from "@/components/Presentation";
import Calculator from "@/components/Calculator";

const App = () => {

  const { restoreMetaData } = useLocalData();

  useEffect(() => {
    console.log('je suis dans le useEffect')
    restoreMetaData();
  }, []);

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
        <Presentation/>
      </div>
      <Calculator/>
      <Footer/>
    </div>
  );
};

export default App;
