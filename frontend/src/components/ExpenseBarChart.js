import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const ExpenseBarChart = ({ expenses }) => {
  const groupedByDate = expenses.reduce((acc, curr) => {
    acc[curr.date] = (acc[curr.date] || 0) + curr.amount;
    return acc;
  }, {});

  const data = Object.entries(groupedByDate).map(([date, amount]) => ({
    date,
    amount
  }));

  return (
    <div style={{ height: 300 }}>
      <h2 style={{ textAlign: 'center' }}>Daily Spend</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#4caf50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseBarChart;
