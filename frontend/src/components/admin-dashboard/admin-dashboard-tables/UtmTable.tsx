import Pagination from "@/components/pagination/Pagination";
import http from "@/lib/server/http";
import { urls } from "@/lib/server/urls";
import { Page } from "@/lib/types/Page";
import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";

type UtmData = {
  id: number,
  site: string,
  os: string,
  ip: string,
  date: string
}

const UtmTable: FC = () => {

  const [utm, setUtm] = useState<Page<UtmData> | null>(null);
  const [page, setPage] = useState(0);



  useEffect(() => {
    (async () => {
      const httpRes = await http.get<Page<UtmData>>(urls.utm(), { params: { page } });
      const utm = httpRes.data;
      setUtm(utm);
      console.log(utm);
    })();
  }, [page]);

  return <Pagination activeItem={ page } onClickItem={setPage} itemNumbers={60} />

  if (!utm) return null;

  return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ip</th>
            <th scope="col">Site</th>
            <th scope="col">Date</th>
            <th scope="col">OS</th>
          </tr>
          </thead>
          <tbody>
          {
            utm.content.map(i => (
                <tr>
                  <th scope="row">{ i.id }</th>
                  <td>{ i.ip }</td>
                  <td>{ i.site }</td>
                  <td>{ i.date }</td>
                  <td>{ i.os }</td>
                </tr>
            ))
          }
          </tbody>
        </table>
        
        <Pagination activeItem={ page } onClickItem={setPage} itemNumbers={10} />

      </div>
  );
};

export default UtmTable;
