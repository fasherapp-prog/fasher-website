import Desktop from "../imports/Desktop1-1/Desktop1-1-320-fixed";
import MobileDesign from "./components/MobileDesign";

export default function App() {
  return (
    <>
      <div className="hidden sm:block">
        <Desktop />
      </div>
      <div className="sm:hidden">
        <MobileDesign />
      </div>
    </>
  );
}
