import React from 'react';

interface OptionsProps {
    handleWrtChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Options: React.FC<OptionsProps> = ({ handleWrtChange}) => {
    return (
      <>
        <div className="flex flex-row w-full m-1 justify-center mt-5 mx-2">
            <div className="flex flex-col ml-2 border-2 border-white-mode-blue dark:border-muted-teal rounded-xl mr-2">
                <label htmlFor="wrt" className="block text-sm font-bold m-1.5 border-b-2 border-white-mode-blue dark:border-muted-teal">
                    WRT
                </label>
                <select
                    id="wrt"
                    onChange={handleWrtChange}
                    className="h-full w-full p-1.5 ml-0.5 font-mono text-md italic"
                >
                    <option value="x" defaultChecked>x</option>
                    <option value="y">y</option>
                    <option value="z">z</option>
                    <option value="θ">θ</option>
                </select>
            </div>
        </div>
      </>
    );
};

export default Options;