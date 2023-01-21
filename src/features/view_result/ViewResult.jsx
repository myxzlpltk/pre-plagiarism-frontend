import React, { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDocumentData } from "../../redux/reducers/viewer";
import LoadingDocumentAnimation from "../../shared/components/LoadingDocumentAnimation";
import ViewerDocument from "./components/ViewerDocument";
import ViewerSidebar from "./components/ViewerSidebar";

const ViewResult = () => {
  // State
  const params = useParams();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.viewer.status);

  // Effects
  useEffect(() => {
    dispatch(fetchDocumentData(params.id));
  }, [dispatch, params.id]);

  if (status === "success") {
    return (
      <div className="flex h-screen">
        <div className="basis-1/3 lg:basis-1/4">
          <ViewerSidebar />
        </div>
        <div className="basis-2/3 lg:basis-3/4">
          <ViewerDocument />
        </div>
      </div>
    );
  } else if (status === "error") {
    return (
      <div className="py-20">
        <FaExclamationTriangle className="text-5xl text-red-500 mx-auto mb-4" />
        <p className="text-center">There was an error loading the document.</p>
      </div>
    );
  } else {
    return <LoadingDocumentAnimation />;
  }
};

export default ViewResult;
