import React from "react";
import { useParams,useRouteMatch } from "react-router-dom";
const Index: React.FC = () => {
  const { pid } = useParams<{pid:string}>();
  const match = useRouteMatch();
    console.log(match)
  return (
    <div>
      <p className="text-3xl mt-4">{pid}</p>
    </div>
  );
};

export default Index;
