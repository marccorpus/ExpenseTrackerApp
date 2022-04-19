import { createContext, useReducer } from "react";

export const ExpensesContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const expenses = [{ ...action.payload.expense }, ...state.expenses];

      return { expenses };
    }

    case "UPDATE": {
      const expenses = [...state.expenses];
      const index = expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      expenses[index] = { ...action.payload.expense };

      return { expenses };
    }

    case "DELETE": {
      const expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );

      return { expenses };
    }

    default:
      return { ...state };
  }
};

const initialValues = {
  expenses: [
    {
      id: 1,
      amount: 99.99,
      date: new Date("2022-04-19"),
      description: "Jordan 1",
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
