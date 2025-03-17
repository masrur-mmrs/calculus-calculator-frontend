import React, { useRef, useEffect } from 'react';
import Latex from 'react-latex';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store'; // Adjust based on your Redux setup

interface LatexWithCursorProps {
  displayTex: string;
}

const LatexWithCursor: React.FC<LatexWithCursorProps> = ({ displayTex }) => {
  const cursorIndex = useSelector((state: RootState) => state.cursor.index);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Wait for KaTeX to render the content
    setTimeout(() => {
      const katexElement = containerRef.current?.querySelector('.katex');
      if (!katexElement) return;
      
      // Find the appropriate location to inject the cursor
      // This is the challenging part as we need to map cursorIndex in plain TeX 
      // to the corresponding DOM position in the rendered KaTeX output
      
      // Get all text nodes in the KaTeX element
      const textNodes: Node[] = [];
      const walker = document.createTreeWalker(
        katexElement,
        NodeFilter.SHOW_TEXT,
        null
      );
      
      let node: Node | null;
      while ((node = walker.nextNode())) {
        textNodes.push(node);
      }
      
      // Find the text node and position where the cursor should be inserted
      let currentIndex = 0;
      let targetNode: Node | null = null;
      let offset = 0;
      
      for (const node of textNodes) {
        const nodeLength = node.textContent?.length || 0;
        
        if (currentIndex + nodeLength >= cursorIndex) {
          targetNode = node;
          offset = cursorIndex - currentIndex;
          break;
        }
        
        currentIndex += nodeLength;
      }
      
      if (targetNode) {
        // Create cursor element
        const cursor = document.createElement('span');
        cursor.className = 'blinking-cursor';
        cursor.style.display = 'inline-block';
        cursor.style.width = '2px';
        cursor.style.backgroundColor = 'white';
        cursor.style.animation = 'blink 1s step-end infinite';
        cursor.style.verticalAlign = 'middle';
        cursor.style.height = '1em';
        cursor.innerHTML = '&nbsp;';
        
        // Split the text node and insert cursor
        const parentNode = targetNode.parentNode;
        if (parentNode) {
          const textContent = targetNode.textContent || '';
          const beforeText = textContent.substring(0, offset);
          const afterText = textContent.substring(offset);
          
          const beforeNode = document.createTextNode(beforeText);
          const afterNode = document.createTextNode(afterText);
          
          parentNode.replaceChild(afterNode, targetNode);
          parentNode.insertBefore(cursor, afterNode);
          parentNode.insertBefore(beforeNode, cursor);
        }
      }
    }, 50); // Adjust timing based on your rendering needs
    
  }, [displayTex, cursorIndex]);
  
  return (
    <div ref={containerRef}>
      <style>
        {`
          @keyframes blink {
            from, to { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
      <Latex>{`$$${displayTex}$$`}</Latex>
    </div>
  );
};

export default LatexWithCursor;