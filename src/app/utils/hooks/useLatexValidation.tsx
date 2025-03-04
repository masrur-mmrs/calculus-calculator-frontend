import { useState, useEffect } from 'react';
import * as katex from 'katex';

export const useLatexValidation = (inputTex: string, delay: number = 500) => {
  const [displayTex, setDisplayTex] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
        const openBraces = (inputTex.match(/{/g) || []).length;
        const closeBraces = (inputTex.match(/}/g) || []).length;
        
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const caretCount = (inputTex.match(/\^/g) || []).length;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const underscoreCount = (inputTex.match(/_/g) || []).length;
        
        const incompleteSuper = inputTex.includes('^{') && openBraces > closeBraces;
        const incompleteSub = inputTex.includes('_{') && openBraces > closeBraces;
        const incompleteExpression = inputTex.includes('\\') && openBraces > closeBraces;
      // Check for potentially incomplete /frac /times /sqrt /int /sum /prod /lim /log /ln /sin /cos /tan /csc /sec /cot /arcsin /arccos /arctan /arccsc /arcsec /arccot /sinh /cosh /tanh /csch /sech /coth /arcsinh /arccosh /arctanh /arccsch /arcsech /arccoth /exp /sqrt /abs /floor /ceil /log /ln /sin /cos /tan /csc /sec /cot /arcsin /arccos /arctan /arccsc /arcsec /arccot /sinh /cosh /tanh /csch /sech /coth /arcsinh /arccosh /arctanh /arccsch /arcsech /arccoth
        const incompleteFrac = inputTex.includes('\\frac') && openBraces > closeBraces
        const incompleteTimes = inputTex.includes('\\times') && openBraces > closeBraces
        const incompleteSqrt = inputTex.includes('\\sqrt') && openBraces > closeBraces
        const incompleteInt = inputTex.includes('\\int') && openBraces > closeBraces
        const incompleteSum = inputTex.includes('\\sum') && openBraces > closeBraces
        const incompleteProd = inputTex.includes('\\prod') && openBraces > closeBraces
        const incompleteLim = inputTex.includes('\\lim') && openBraces > closeBraces
        const incompleteLog = inputTex.includes('\\log') && openBraces > closeBraces
        const incompleteLn = inputTex.includes('\\ln') && openBraces > closeBraces
        const incompleteSin = inputTex.includes('\\sin') && openBraces > closeBraces
        const incompleteCos = inputTex.includes('\\cos') && openBraces > closeBraces
        const incompleteTan = inputTex.includes('\\tan') && openBraces > closeBraces
        const incompleteCsc = inputTex.includes('\\csc') && openBraces > closeBraces
        const incompleteSec = inputTex.includes('\\sec') && openBraces > closeBraces
        const incompleteCot = inputTex.includes('\\cot') && openBraces > closeBraces
        const incompleteArcsin = inputTex.includes('\\arcsin') && openBraces > closeBraces
        const incompleteArccos = inputTex.includes('\\arccos') && openBraces > closeBraces
        const incompleteArctan = inputTex.includes('\\arctan') && openBraces > closeBraces
        const incompleteArccsc = inputTex.includes('\\arccsc') && openBraces > closeBraces
        const incompleteArcsec = inputTex.includes('\\arcsec') && openBraces > closeBraces
        const incompleteArccot = inputTex.includes('\\arccot') && openBraces > closeBraces
        const incompleteSinh = inputTex.includes('\\sinh') && openBraces > closeBraces
        const incompleteCosh = inputTex.includes('\\cosh') && openBraces > closeBraces
        const incompleteTanh = inputTex.includes('\\tanh') && openBraces > closeBraces
        const incompleteCsch = inputTex.includes('\\csch') && openBraces > closeBraces
        const incompleteSech = inputTex.includes('\\sech') && openBraces > closeBraces
        const incompleteCoth = inputTex.includes('\\coth') && openBraces > closeBraces
        const incompleteArcsinh = inputTex.includes('\\arcsinh') && openBraces > closeBraces
        const incompleteArccosh = inputTex.includes('\\arccosh') && openBraces > closeBraces
        const incompleteArctanh = inputTex.includes('\\arctanh') && openBraces > closeBraces
        const incompleteArccsch = inputTex.includes('\\arccsch') && openBraces > closeBraces
        const incompleteArcsech = inputTex.includes('\\arcsech') && openBraces > closeBraces
        const incompleteArccoth = inputTex.includes('\\arccoth') && openBraces > closeBraces
        const incompleteExp = inputTex.includes('\\exp') && openBraces > closeBraces
        const incompleteAbs = inputTex.includes('\\abs') && openBraces > closeBraces
        const incompleteFloor = inputTex.includes('\\floor') && openBraces > closeBraces
        const incompleteCeil = inputTex.includes('\\ceil') && openBraces > closeBraces
        const incompleteSimpleSuper = inputTex.includes('^') && !inputTex.includes('^{');
        const incompleteSimpleSub = inputTex.includes('_') && !inputTex.includes('_{');

      if (incompleteSuper || incompleteSub || incompleteSimpleSuper || incompleteSimpleSub) {
        setError('Incomplete superscript or subscript');
        return;
      }

      if (incompleteExpression) {
        setError('Incomplete expression');
        return;
      }

      if (incompleteFrac || incompleteTimes || incompleteSqrt || incompleteInt || incompleteSum || incompleteProd || incompleteLim || incompleteLog || incompleteLn || incompleteSin || incompleteCos || incompleteTan || incompleteCsc || incompleteSec || incompleteCot || incompleteArcsin || incompleteArccos || incompleteArctan || incompleteArccsc || incompleteArcsec || incompleteArccot || incompleteSinh || incompleteCosh || incompleteTanh || incompleteCsch || incompleteSech || incompleteCoth || incompleteArcsinh || incompleteArccosh || incompleteArctanh || incompleteArccsch || incompleteArcsech || incompleteArccoth || incompleteExp || incompleteAbs || incompleteFloor || incompleteCeil) {
        setError('Incomplete function');
        return;
      }

      try {
        katex.renderToString(inputTex);
        setDisplayTex(inputTex);
        setError('');
      } catch (err) {
        setError('Invalid LaTeX syntax');
        console.error(err);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [inputTex, delay]);

  return { displayTex, latexError: error };
};