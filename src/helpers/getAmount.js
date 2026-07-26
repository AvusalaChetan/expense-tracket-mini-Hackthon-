export function getAmount(allTransaction) {
   
  const income = allTransaction
    .filter((t) => t.transactionType === "income")
    .reduce((sum, t) => sum +  Number(t.amount), 0);

  const expense = allTransaction
    .filter((t) => t.transactionType === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);
 
  const balance = income - expense;
  return [income, expense, balance];
}
