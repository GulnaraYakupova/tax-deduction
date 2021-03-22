export const ActionType = {
  ADD_EARLY_PAYMENT: `data/addEarlyPayment`,
}

export const ActionCreator = {
  addEarlyPayment: (earlyPayments) => ({
    type: ActionType.ADD_EARLY_PAYMENT,
    payload: earlyPayments,
  }),
}