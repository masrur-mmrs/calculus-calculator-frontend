const BACKEND_URL: string = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

export const basicEvaluate = async (expression: string) => {
console.log("Expression: ", expression);
const res = await fetch(BACKEND_URL+"/basic", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ expression }),
});

return res.json();
};

export const calculateDerivative = async (expression: string, variable: string, orderOfDerivative: string) => {
  const res = await fetch(BACKEND_URL+"/derivative", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ expression, variable, orderOfDerivative }),
  });

  return res.json();
};

export const calculateIntegral = async (expression: string, variable: string, bound: object) => {
  const res = await fetch(BACKEND_URL+"/integral", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ expression, variable, bound }),
  });

  return res.json();
};

export const getDerivativeSteps = async (expression: string, variable: string, orderOfDerivative: string) => {
  const res = await fetch(BACKEND_URL+"/derivative-steps", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ expression, variable, orderOfDerivative }),
  });

  return res.json();
};

export const calculateMatrix = async (expression: string) => {
  const res = await fetch(BACKEND_URL+"/matrix", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({ expression }),
  });

  return res.json();
}