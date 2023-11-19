import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [getIncomes, getExpenses])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                    </div>
                    <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
.stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }
  
  .chart-con {
    grid-column: span 3;
    height: 400px;
    width: 100%; /* Use 100% for responsiveness */
  }
  
  .amount-con {
    display: flex;
    flex-direction: column; /* Adjust this based on your design */
    justify-content: space-around;
    height: 400px;
    gap: 2rem;
    grid-column: 4 / 6; /* Adjust column span based on your design */
  }
  
  .income,
  .expense,
  .balance {
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
  
  /* Styling for the p element inside the boxes */
  .income p,
  .expense p {
    font-size: 2rem;
    font-weight: 700;
  }
  
  .balance p {
    color: var(--color-green);
    opacity: 0.6;
    font-size: 2rem;
    font-weight: 700;
  }
`;

export default Dashboard