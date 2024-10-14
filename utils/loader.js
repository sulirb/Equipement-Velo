import { ClipLoader } from "react-spinners";

const override = {
  fontWeight: "900",
};

function Loader() {
  return (
    <div className="load-container">
      <ClipLoader
        color="#3131ce"
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.9}
        cssOverride={override}
      />
    </div>
  );
}

export default Loader;
