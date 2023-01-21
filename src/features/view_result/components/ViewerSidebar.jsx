import classNames from "classnames";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../../../redux/reducers/viewer";

const ViewerSidebar = () => {
  const dispatch = useDispatch();
  const highlights = useSelector((state) => state.viewer.highlights);
  const activeIndex = useSelector((state) => state.viewer.activeIndex);

  let pageNumber = -1;
  return (
    <div className="sidebar h-screen w-full overflow-y-scroll">
      <div className="description p-4">
        <h2 className="text-xl font-semibold">Hasil</h2>
      </div>

      <ul className="menu bg-base-100">
        {highlights.map((highlight, index) => {
          const element = (
            <li
              key={`result-index-${index}`}
              className={classNames("cursor", {
                bordered: index === activeIndex,
              })}
            >
              <span
                onClick={() => {
                  dispatch(setActiveIndex(index));
                }}
              >
                {highlight.comment.text}
              </span>
            </li>
          );

          if (highlight.position.pageNumber > pageNumber) {
            pageNumber = highlight.position.pageNumber;
            return (
              <Fragment key={`page-number-${pageNumber}`}>
                <li className="menu-title">
                  <span>{`Halaman ${pageNumber}`}</span>
                </li>
                {element}
              </Fragment>
            );
          } else {
            return element;
          }
        })}
      </ul>
    </div>
  );
};

export default ViewerSidebar;
