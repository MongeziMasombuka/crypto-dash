import { BarLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto 50px auto",
};

type SpinnerProps = {
  color?: string;
  width?: number;
  height?: number;
};

const Spinner = ({ color = "blue", width = 150, height = 4 }: SpinnerProps) => {
  return (
    <div>
      <BarLoader
        color={color}
        width={width}
        height={height}
        cssOverride={override}
        aria-label="Loading..."
      />
    </div>
  );
};

export default Spinner;
