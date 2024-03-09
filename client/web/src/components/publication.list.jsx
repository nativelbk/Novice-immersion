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
    setInterval(fetchData,30)
  }, []);
  return (
    <div className=" col-span-4 h-screen overflow-y-auto px-12 relative">
      {pub &&
        pub.map((a, i) => {
          return <Publication {...a} key={i} />;
        })}
    </div>
  );
}
