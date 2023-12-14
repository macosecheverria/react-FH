import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  quote: string;
  author: string;
};

type BoxSizingState = {
  width: number;
  height: number;
};

const Quote = ({ quote, author }: Props) => {
  const pRef = useRef<HTMLParagraphElement | null>(null);
  const [boxSizing, setBoxSizing] = useState<BoxSizingState>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const { width, height } = pRef.current!.getBoundingClientRect();
    setBoxSizing({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSizing)}</code>
    </>
  );
};

export default Quote;
