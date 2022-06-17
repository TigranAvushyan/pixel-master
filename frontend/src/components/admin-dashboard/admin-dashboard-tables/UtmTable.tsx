import http from "@/lib/server/http";
import { urls } from "@/lib/server/urls";
import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";


const UtmTable: FC = () => {

  const [utm, setUtm] = useState(null);
  const [page, setPage] = useState(0);



  useEffect(() => {
    (async () => {
      const httpRes = await http.get(urls.utm(), { params: { page } });
      const utm = httpRes.data;
      setUtm(utm);
      console.log(utm);
    })();
  }, [page]);


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
            utm?.content?.map(i => (
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
        <div className="align-content-center flex-wrap d-flex justify-content-center my-3 ">
          <ul className="pagination   flex-wrap d-flex">
            { Array.from({ length: utm?.totalPages || 0 }, (_, i) => (
                <li
                    onClick={ () => setPage(i) }
                    className={ classNames("page-item", i === utm.number ? "active" : "") }><span
                    className="page-link ">{ i + 1 }</span></li>)) }
          </ul>
        </div>
      </div>
  );
};

export default UtmTable;
