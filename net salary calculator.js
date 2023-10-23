const basicSalary = 15000;
const benefits = 500;
const grossSalary = basicSalary + benefits;
const nssfDeductions = grossSalary * 0.06;
const nhifRates = [
  { min: 0, max: 5999, rate: 150 },
  { min: 6000, max: 7999, rate: 300 },
  { min: 8000, max: 11999, rate: 400 },
  { min: 12000, max: 14999, rate: 500 },
  { min: 15000, max: 19999, rate: 600 },
  { min: 20000, max: 24999, rate: 750 },
  { min: 25000, max: 29999, rate: 850 },
  { min: 30000, max: 34999, rate: 900 },
 
];
let nhifDeductions = nhifRates[0].rate;

const personalRelief = Math.min(2400 *12 ,grossSalary *0.1 *12);
const taxableIncome = grossSalary - nssfDeductions - nhifDeductions - personalRelief;
let payee = null;
if (taxableIncome <=12298) {
    payee = taxableIncome *0.1;
} else if (taxableIncome <=23885) {
    payee = (taxableIncome -12298) *0.15 +1229.8;
} else if (taxableIncome <=35472) {
    payee = (taxableIncome -23885) *0.2 +3067.3;
} else if (taxableIncome <=47059) {
    payee = (taxableIncome -35472) *0.25 +6296.2;
} else {
    payee = (taxableIncome -47059) *0.3 +11056.7;
}
const netSalary = grossSalary - nssfDeductions - nhifDeductions - payee;

console.log(`Gross Salary : ${grossSalary}`);
console.log(`NSSF Deductions : ${nssfDeductions}`);
console.log(`NHIF Deductions : ${nhifDeductions}`);
console.log(`Payee (Tax) : ${payee}`);
console.log(`Net Salary : ${netSalary}`);

