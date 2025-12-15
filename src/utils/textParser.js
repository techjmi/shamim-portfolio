/**
 * Parses text with **bold** markdown syntax and returns React elements
 * @param {string} text - Text containing **bold** markers
 * @returns {Array} Array of React elements with highlighted text
 */
export function parseHighlightedText(text) {
  if (!text) return [];
  
  const parts = [];
  let currentIndex = 0;
  const regex = /\*\*(.*?)\*\*/g;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > currentIndex) {
      parts.push({
        text: text.slice(currentIndex, match.index),
        highlighted: false,
      });
    }
    
    // Add the highlighted text
    parts.push({
      text: match[1],
      highlighted: true,
    });
    
    currentIndex = match.index + match[0].length;
  }
  
  // Add remaining text after last match
  if (currentIndex < text.length) {
    parts.push({
      text: text.slice(currentIndex),
      highlighted: false,
    });
  }
  
  return parts;
}

