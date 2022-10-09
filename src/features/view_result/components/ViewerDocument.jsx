import React, { useEffect } from "react";
import {
  AreaHighlight,
  Highlight,
  PdfHighlighter,
  PdfLoader,
  Popup,
} from "react-pdf-highlighter";
import { useDispatch, useSelector } from "react-redux";
import { resetHighlight } from "../../../redux/reducers/viewer";
import LoadingDocumentAnimation from "../../../shared/components/LoadingDocumentAnimation";
import HighlightPopup from "../../../shared/utils/HighlightPopup";

const ViewerDocument = () => {
  const dispatch = useDispatch();
  const [scrollToViewer, setScrollToViewer] = React.useState(() => () => {});
  const url = useSelector((state) => state.viewer.url);
  const highlights = useSelector((state) => state.viewer.highlights);
  const activeIndex = useSelector((state) => state.viewer.activeIndex);

  // Effect
  useEffect(() => {
    if (activeIndex === -1) return;

    const highlight = highlights[activeIndex];
    if (!highlight) return;

    if (!scrollToViewer) return;
    scrollToViewer(highlight);
  }, [activeIndex, highlights, scrollToViewer]);

  return (
    <div className="h-screen w-full relative">
      <PdfLoader url={url} beforeLoad={<LoadingDocumentAnimation />}>
        {(pdfDocument) => (
          <PdfHighlighter
            pdfDocument={pdfDocument}
            highlights={highlights}
            enableAreaSelection={() => false}
            onScrollChange={() => dispatch(resetHighlight())}
            scrollRef={(scrollTo) => {
              setScrollToViewer(() => (highlight) => scrollTo(highlight));
            }}
            onSelectionFinished={() => {}}
            highlightTransform={(
              highlight,
              index,
              setTip,
              hideTip,
              viewportToScaled,
              screenshot,
              isScrolledTo
            ) => {
              const isTextHighlight = !Boolean(
                highlight.content && highlight.content.image
              );

              const component = isTextHighlight ? (
                <Highlight
                  isScrolledTo={isScrolledTo}
                  position={highlight.position}
                  comment={highlight.comment}
                />
              ) : (
                <AreaHighlight
                  isScrolledTo={isScrolledTo}
                  highlight={highlight}
                  onChange={() => {}}
                />
              );

              return (
                <Popup
                  popupContent={<HighlightPopup {...highlight} />}
                  onMouseOver={(popupContent) =>
                    setTip(highlight, () => popupContent)
                  }
                  onMouseOut={hideTip}
                  key={index}
                  children={component}
                />
              );
            }}
          />
        )}
      </PdfLoader>
    </div>
  );
};

export default ViewerDocument;
