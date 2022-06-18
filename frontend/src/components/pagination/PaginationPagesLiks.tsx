import classNames from "classnames";
import { FC, useState } from "react";

interface PaginationPagesLinksProps {
  onClickItem: (number: number) => void,
  itemNumbers: number,
  activeItem: number
}


const FIRST_ITEMS_COUNT = 5;

const PaginationPagesLinks: FC<PaginationPagesLinksProps> = ({ onClickItem, itemNumbers, activeItem }) => {

  const renderItems = (index: number, step: number = 1) => (
    <li onClick={() => onClickItem(index + step - 1)}
      className={classNames("page-item", index + step - 1 === activeItem ? "active" : "")}>

      <span className="page-link ">{index + step}</span>
    </li>
  )

  return (<>
    {Array.from({ length: FIRST_ITEMS_COUNT }, (_, index) => renderItems(index))}
    {FIRST_ITEMS_COUNT && <li className="page-item disabled"><span className="page-link">...</span></li>}
  </>)
}


export default PaginationPagesLinks;