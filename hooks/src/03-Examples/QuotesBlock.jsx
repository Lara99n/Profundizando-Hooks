export const QuotesBlock = ({ quote, author }) => {
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{quote}</p>
      <br />
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  );
};
