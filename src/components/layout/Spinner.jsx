import { ImSpinner9 } from "react-icons/im";

const Spinner = () => {
  return (
    <div className="text-center">
      <ImSpinner9 className="m-auto animate-spin text-4xl" />
      <span className="mt-2 block">Loading...</span>
    </div>
  );
};

export default Spinner;
