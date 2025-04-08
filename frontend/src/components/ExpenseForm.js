import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

const ExpenseForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/expenses', formData);
      onAdd(res.data);
      toast.success('Expense added!');
      setFormData({ title: '', category: '', amount: '', date: '' });
    } catch (err) {
      toast.error('Failed to add expense');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Title" name="title" value={formData.title} onChange={handleChange} required />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Category" name="category" value={formData.category} onChange={handleChange} required />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth type="number" label="Amount" name="amount" value={formData.amount} onChange={handleChange} required />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth type="date" label="Date" name="date" InputLabelProps={{ shrink: true }} value={formData.date} onChange={handleChange} required />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth type="submit">Add Expense</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ExpenseForm;
