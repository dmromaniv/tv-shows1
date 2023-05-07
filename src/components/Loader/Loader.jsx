import { Watch } from "react-loader-spinner";

function Loader() {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#F9A538"
      ariaLabel="watch-loading"
      visible={true}
    />
  );
}

export default Loader;
