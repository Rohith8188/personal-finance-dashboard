package com.finance.dashboard.repository;

import com.finance.dashboard.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    // We can add custom queries here later
}
