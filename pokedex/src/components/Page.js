import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Page = () => {
  const [returnPage, setReturnPage] = useState(1);
  return (
    <div>
      <Outlet context={{ setReturnPage, returnPage }} />
    </div>
  );
};

export default Page;
