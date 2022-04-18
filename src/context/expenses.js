import { createContext, useReducer } from "react";

export const ExpensesContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [{ ...action.payload.expense }, ...state.expenses];
    case "UPDATE":
      const expenses = [...state.expenses];
      const index = expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      expenses[index] = { ...state.payload.expense };

      return expenses;
    case "DELETE":
      return state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    default:
      return { ...state };
  }
};

const initialValues = {
  expenses: [
    {
      id: 1,
      amount: 99.99,
      description: "Shopping",
      date: new Date("2022-04-18"),
    },
  ],
};

const ExpensesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const addExpense = (expense) => {
    dispatch({
      type: "ADD",
      payload: {
        expense,
      },
    });
  };

  const updateExpense = (id, expense) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id,
        expense,
      },
    });
  };

  const deleteExpense = (id) => {
    dispatch({
      type: "DELETE",
      payload: {
        id,
      },
    });
  };

  const value = {
    expenses: state.expenses,
    addExpense,
    updateExpense,
    deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
