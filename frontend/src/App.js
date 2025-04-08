import React from 'react';
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import axios from 'axios';

import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import ExpenseBarChart from './components/ExpenseBarChart';

function App({ mode, setMode }) {
  const [expenses, setExpenses] = React.useState([]);
  const [filter, setFilter] = React.useState('All');

  // 🔄 Fetch expenses on initial render
  React.useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/expenses');
      setExpenses(res.data);
    } catch (err) {
      console.error('Error fetching expenses:', err);
    }
  };

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const exportToCSV = () => {
    const csv = Papa.unparse(expenses);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'expenses.csv');
  };

  const filteredExpenses = filter === 'All'
    ? expenses
    : expenses.filter((e) => e.category === filter);

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            💰 Personal Finance Dashboard
          </Typography>
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 3, mb: 4 }}>
          <ExpenseForm onAdd={handleAddExpense} />
        </Paper>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
          <Paper sx={{ p: 2, flex: 1 }}>
            <ExpenseChart expenses={filteredExpenses} />
          </Paper>
          <Paper sx={{ p: 2, flex: 1 }}>
            <ExpenseBarChart expenses={filteredExpenses} />
          </Paper>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'center' }}>
          <Typography variant="h6">All Expenses</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <InputLabel>Filter by Category</InputLabel>
              <Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                label="Filter by Category"
              >
                <MenuItem value="All">All</MenuItem>
                {[...new Set(expenses.map((e) => e.category))].map((cat, i) => (
                  <MenuItem key={i} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="outlined" color="primary" onClick={exportToCSV}>
              ⬇️ Export as CSV
            </Button>
          </Box>
        </Box>

        <Paper sx={{ p: 2 }}>
          <ExpenseList expenses={filteredExpenses} />
        </Paper>
      </Container>
    </>
  );
}

export default App;
