export const ADD_OPERATOR = 'ADD_OPERATOR';
export const SUB_OPERATOR = 'SUB_OPERATOR';
export const MULTI_OPERATOR = 'MULTI_OPERATOR';
export const DIVISON_OPERATOR = 'DIVISON_OPERATOR';

export const toExpression = (type, payload) => ({
    type,
    payload
  });
  
export const addNum = (add)=> toExpression(ADD_OPERATOR, add);
export const subNum = (sub)=> toExpression(SUB_OPERATOR, sub);
export const multiNum = (num)=> toExpression(MULTI_OPERATOR, num)
export const divideNum = (divide)=> toExpression(DIVISON_OPERATOR, divide)