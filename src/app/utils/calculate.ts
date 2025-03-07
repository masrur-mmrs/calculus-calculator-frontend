const BACKEND_URL: string = process.env.BACKEND_URL || "http://localhost:3001";

export const calculateDerivative = async (expression: string, variable: string) => {
    const res = await fetch(BACKEND_URL+"/derivative", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expression, variable }),
    });
  
    return res.json();
  };

export const calculateIntegral = async (expression: string, variable: string) => {
    const res = await fetch(BACKEND_URL+"/integral", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expression, variable }),
    });
  
    return res.json();
  };