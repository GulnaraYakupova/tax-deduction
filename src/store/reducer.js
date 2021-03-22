import {ActionType} from "./action";
import mockData from "../mock.json";

const {user, debt, paymentScedule, earlyPayment} = mockData;

const initialState = {
  user,
  debt,
  paymentScedule,
  earlyPayment,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_EARLY_PAYMENT:
      return {
        ...state,
        earlyPayment: action.payload,
      };

    default: return state;
  }
};

export {reducer};
