import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ inputNumber }) {
  const data = calculateInvestmentResults(inputNumber);
  console.log("Azaza", data);
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
        {data.map((year) => (
          <tr key={year.year}>
            <td>{year.year}</td>
            <td>{formatter.format(year.valueEndOfYear)}</td>
            <td>{formatter.format(year.interest)}</td>
            <td>{formatter.format(year.interest)}</td>
            <td>{formatter.format(year.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
