import { Button } from "antd";
import "./style.scss";

type TBox = {
  team?: string;
  point: string;
  result: string;
};
const BoxResult = ({ team, point, result }: TBox) => {
  return (
    <div className="box-result">
      <Button>
        <div>
          <p>{team}</p>
          <span>{point}</span>
        </div>
        <p>{result}</p>
      </Button>
    </div>
  );
};

export default BoxResult;
