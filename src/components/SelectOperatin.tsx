import React from 'react';

interface SelectOperatinProps {
    handleOperationChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleWrtChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectOperatin: React.FC<SelectOperatinProps> = ({handleOperationChange, handleWrtChange}) => {
    return (
        <div className='justify-between inline-flex w-full'>
            <div className="flex flex-col w-full mr-1">
                <label htmlFor="operation" className="block text-sm font-medium mb-2">
                Select Operation
                </label>
                <select
                    id="operation"
                    onChange={handleOperationChange}
                    className="w-full p-2 border rounded font-mono text-sm"
                >
                    <option value="" defaultChecked>Select an operation</option>
                    <option value="derivative">Derivative</option>
                    <option value="integral">Integral</option>
                </select>
            </div>
            <div className="flex flex-col w-max ml-1">
                <label htmlFor="wrt" className="block text-sm font-medium mb-2">
                WRT:
                </label>
                <select
                    id="wrt"
                    onChange={handleWrtChange}
                    className="w-full p-2 border rounded font-mono text-md italic"
                >
                    <option value="" defaultChecked></option>
                    <option value="x">x</option>
                    <option value="y">y</option>
                    <option value="z">z</option>
                </select>
            </div>
        </div>
    );
};


export default SelectOperatin;