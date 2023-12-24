import React from 'react';

interface Reference {
  text: string;
  link: string;
}

interface PageData {
  references: Reference[];
  textTable: string[][];
  instructionTable: string[][];
}

interface PageContentProps {
  data: PageData;
}

const PageContent: React.FC<PageContentProps> = ({ data }) => {
  return (
    <div>
      {/* Render references */}
      {data.references.map((ref, index) => (
        <div key={index}>
          <a href={ref.link}>{ref.text}</a>
        </div>
      ))}

      {/* Render textTable */}
      {data.textTable.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, cellIndex) => <span key={cellIndex}>{cell} </span>)}
        </div>
      ))}

      {/* Render instructionTable */}
      {data.instructionTable.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, cellIndex) => <span key={cellIndex}>{cell} </span>)}
        </div>
      ))}
    </div>
  );
};

export default PageContent;
