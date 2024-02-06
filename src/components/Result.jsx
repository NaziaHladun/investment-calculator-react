import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ inputNumber }) {
  const data = calculateInvestmentResults(inputNumber);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

  return (
    <table id="result" className="center">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="center">
        {data.map((year) => {
          const totalInterest =
            year.valueEndOfYear -
            year.annualInvestment * year.year -
            initialInvestment;
          const totalAmountInvested = year.valueEndOfYear - totalInterest;
          return (
            <tr key={year.year}>
              <td>{year.year}</td>
              <td>{formatter.format(year.valueEndOfYear)}</td>
              <td>{formatter.format(year.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
