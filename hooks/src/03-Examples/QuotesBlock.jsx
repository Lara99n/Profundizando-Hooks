export const QuotesBlock = ({ quote, author }) => {
  /*   const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [quote]);
 */
  return (
    <>
      <blockquote className="blockquote text-center">
        <p /* ref={pRef}  */ className="mb-1">{quote}</p>
        <br />
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      {/*  <code>{JSON.stringify(boxSize)}</code> */}
    </>
  );
};
