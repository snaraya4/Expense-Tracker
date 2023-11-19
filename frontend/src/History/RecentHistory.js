import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';
import History from './History';
import { InnerLayout } from '../styles/Layouts';


function RecentHistory() {
    const {incomes, expenses, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [getIncomes, getExpenses])

    return (
        <RecentHistoryStyled>
        <History />
        <InnerLayout>
            <h2 className="salary-title">Min <span>Income</span>Max</h2>
                <div className="salary-item">
                    <p>
                        ${Math.min(...incomes.map(item => item.amount))}
                    </p>
                    <p>
                        ${Math.max(...incomes.map(item => item.amount))}
                    </p>
                </div>
                    <br/>
                    <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                    <div className="salary-item">
                        <p>
                            ${Math.min(...expenses.map(item => item.amount))}
                        </p>
                        <p>
                            ${Math.max(...expenses.map(item => item.amount))}
                        </p>
                </div>
                </InnerLayout>
        </RecentHistoryStyled>
    )
}

const RecentHistoryStyled = styled.div`
    grid-column: 4 / -1;
    h2{
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .salary-title{
        font-size: 1.2rem;
        span{
            font-size: 1.8rem;
        }
    }
    .salary-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            font-weight: 600;
            font-size: 1.6rem;
        }
    }
`;

export default RecentHistory