import React from 'react';
import Latex from 'react-latex';

interface PreviewProps {
    displayTex: string;
    operation: string;
    wrt: string;
}

const Preview: React.FC<PreviewProps> = ({displayTex, operation, wrt}) => {
    let dif = "";
    switch (operation) {
        case "derivative":
            dif = `\\frac{d}{d${wrt}}`;
            break;
        case "integral":
            dif = "\\int";
            break;
        default:
            dif = "";
    }
    return (
        <div className="p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Preview</h2>
        <div className="flex flex-row items-center justify-items-start ">
            <Latex>{`$${dif}$`}</Latex>
            <div className="p-4 ml-2 rounded border h-16 w-full">
                <Latex>{`$${displayTex}$`}</Latex>
            </div>
        </div>
      </div>
    );
};


export default Preview;