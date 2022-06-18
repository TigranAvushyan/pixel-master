import classNames from "classnames";
import { FC } from "react";
import PaginationPagesLinks from "./PaginationPagesLiks";

interface PaginationProps {
    onClickItem: (number: number) => void,
    itemNumbers: number,
    activeItem: number
}


const Pagination:FC<PaginationProps> = ({onClickItem, itemNumbers, activeItem}) => {



    return (
        <div className="align-content-center flex-wrap d-flex justify-content-center my-3 ">
          <ul className="pagination   flex-wrap d-flex">
            <PaginationPagesLinks onClickItem={onClickItem}  activeItem={activeItem} itemNumbers={itemNumbers} />
          </ul>
        </div>
    )
}


export default Pagination;