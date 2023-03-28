import { Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
type DataType = {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
};
const columns: ColumnsType<DataType> = [
  {
    title: "Match",
    dataIndex: "match",
    key: "match",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Result",
    dataIndex: "result",
    key: "result",
  },
  {
    title: "1 X 2",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Goals",
    dataIndex: "goals",
    key: "goals",
  },
  {
    title: "Over Under",
    key: "overUnder",
    dataIndex: "overUnder",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Both Team Goals",
    key: "bothGoal",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const MatchInfo = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
};

export default MatchInfo;
