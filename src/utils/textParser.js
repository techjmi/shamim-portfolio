export function parseHighlightedText(text) {
  if (!text) return null;

  const parts = [];
  let currentIndex = 0;
  const regex = /\*\*(.*?)\*\*/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > currentIndex) {
      parts.push(<span key={currentIndex}>{text.slice(currentIndex, match.index)}</span>);
    }
    parts.push(<span key={match.index} className="highlight-text">{match[1]}</span>);
    currentIndex = match.index + match[0].length;
  }

  if (currentIndex < text.length) {
    parts.push(<span key={currentIndex}>{text.slice(currentIndex)}</span>);
  }

  return parts;
}
