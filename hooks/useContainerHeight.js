import { useEffect, useState } from "react";

export const useContainerHeight = (firstRef, secondRef) => {
  const [containerHeights, setContainerHeights] = useState({
    firstReplyHeight: 0,
    lastReplyHeight: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setContainerHeights({
        ...containerHeights,
        firstReplyHeight: firstRef.current.clientHeight,
        lastReplyHeight: secondRef.current.clientHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setContainerHeights({
      ...containerHeights,
      firstReplyHeight: firstRef.current.clientHeight,
      lastReplyHeight: secondRef.current.clientHeight,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...containerHeights };
};
