import React from 'react';

const Tips: React.FC = ({}) => {
    return (
        <div className="mt-4 text-sm text-gray-600">
        <h3 className="font-medium">Tips:</h3>
        <ul className="list-disc pl-5 mt-1">
          <li>For multiplication, use \cdot or \times</li>
          <li>For fractions, use \frac{"{numerator}"}{"{denomenator}"}</li>
          <li>For subscripts, use a_{"{subscript}"}</li>
          <li>For superscripts, use a^{"{superscript}"}</li>
          <li>For square roots, use \sqrt{"{expression}"}</li>
          <li>For log, use \log_{"{base}"}(exponent)</li>
        </ul>
        </div>
    );
};


export default Tips;