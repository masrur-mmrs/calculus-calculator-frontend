import React from 'react';

interface AlgebraOptionsProps {
    algebraMode?: number;
    setAlgebraMode?: (mode: number) => void;
}

const AlgebraOptions: React.FC<AlgebraOptionsProps> = ({ algebraMode, setAlgebraMode }) => {

    return (
        <>
            <div className="flex flex-col border-2 h-full border-white-mode-blue dark:border-muted-teal rounded-xl">
                <label htmlFor="Variable(s)" className="flex flex-col text-sm text-center font-bold m-1.5 border-b-2 border-white-mode-blue dark:border-muted-teal">
                    Variable(s)
                </label>
                <select
                    id="Variable(s)"
                    value={algebraMode}
                    onChange={(event) => setAlgebraMode && setAlgebraMode(Number(event.target.value))}
                    className="h-max w-max sm:p-5 m-auto font-mono text-md"
                >
                    <option value={1} defaultChecked>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </div>
            <div className="col-span-1"/>
        </>
    );
};

export default AlgebraOptions;