/** @format */

import { useEffect, useState } from "react";
import Publication from "./publication.box";
import axios from "axios";

export default function PublicationList() {
  const [pub, setPub] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:5000/api/create-pub");
      setPub(data.publication);
    }

    fetchData();
  }, []);
  return (
    <div className=" col-span-3 h-screen overflow-y-auto px-12 relative">
      {pub &&
        pub.map((a, i) => {
          return <Publication {...a} key={i} />;
        })}
    </div>
  );
}
