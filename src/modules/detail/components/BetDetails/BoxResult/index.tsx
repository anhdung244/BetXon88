import { Button } from "antd";
import "./style.scss";

type TBox = {
  team?: string;
  point: string;
  result: number;
  handleSelectOption: () => void;
};
const BoxResult = ({ team, point, result, handleSelectOption }: TBox) => {
  return (
    <div className="box-result">
      <Button onClick={handleSelectOption}>
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
