import { useState, useEffect } from "react";
import { Radio } from "@material-tailwind/react";

export default function CustomSidebar() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth <= 960);
  const currentPath = window.location.pathname;

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth <= 960);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-start h-screen gap-4">
      <Radio name="color" defaultChecked={currentPath === "/" || currentPath === "/Home"} className={isWideScreen ? "w-2 h-2" : ""} />
      <Radio name="color" defaultChecked={currentPath === "/About"} className={isWideScreen ? "w-2 h-2" : ""} />
      <Radio name="color" defaultChecked={currentPath === "/Skills"} className={isWideScreen ? "w-2 h-2" : ""} />
      <Radio name="color" defaultChecked={currentPath === "/Projects"} className={isWideScreen ? "w-2 h-2" : ""} />
    </div>
  );
}
