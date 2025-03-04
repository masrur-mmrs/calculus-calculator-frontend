export const calculateDerivative = async (expression: string, variable: string) => {
    const res = await fetch("http://localhost:3001/derivative", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expression, variable }),
    });
  
    return res.json();
  };

export const calculateIntegral = async (expression: string, variable: string) => {
    const res = await fetch("http://localhost:3001/integral", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expression, variable }),
    });
  
    return res.json();
  };
  
  