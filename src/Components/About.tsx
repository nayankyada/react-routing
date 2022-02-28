import React from "react";
import { useLocation, useHistory } from "react-router-dom";

interface AboutProps {
  msg: string;
  from: string;
}

const Index: React.FC = () => {
  const data = useLocation<AboutProps>();
  const history = useHistory();
  console.log(data);
  return (
    <div>
      <p className="mt-4">{data.state.msg}</p>
      <button
        className="mt-2 p-2 bg-gray-400"
        onClick={() => {
          history.push({
            pathname: "/about",
            search: "?orderBy=type",
            state: {
              from: "proectpage",
              msg: "data passed using useHistory",
            },
          });
        }}
      >
        Click to pass state using history
      </button>
    </div>
  );
};

export default Index;
