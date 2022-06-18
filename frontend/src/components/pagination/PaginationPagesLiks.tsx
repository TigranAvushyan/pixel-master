import classNames from "classnames";
import { FC } from "react";

interface PaginationPagesLinksProps {
  onClickItem: (number: number) => void,
  itemNumbers: number,
  activeItem: number
}


const FIRST_ITEMS_COUNT = 5;

const PaginationPagesLinks: FC<PaginationPagesLinksProps> = ({ onClickItem, itemNumbers, activeItem }) => {

  const renderItems = (index: number, step: number = 1) => (
      <li key={ index } onClick={ () => onClickItem(index) }
          className={ classNames("page-item", index === activeItem ? "active" : "") }>
        <span className="page-link">{ index + 1 }</span>
      </li>
  );

  return (<>
    { Array.from({ length: itemNumbers }, (_, index) => renderItems(index, activeItem)) }
    {/*{ FIRST_ITEMS_COUNT && <li className="page-item disabled"><span className="page-link">...</span></li> }*/ }
  </>);
};


export default PaginationPagesLinks;
