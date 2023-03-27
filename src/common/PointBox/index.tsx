import { Button } from "antd";
import "./style.scss";

type TPointBox = { point: number; result: number };

const PointBox = ({ point, result }: TPointBox) => {
  return (
    <Button>
      <span>{point}</span>
      <p>{result}</p>
    </Button>
  );
};

export default PointBox;
