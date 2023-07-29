import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTotals } from 'redux/slices/transactionSlice';
import { fixDigitsToTwoDecimalPlaces, formatNumberWithSpaces } from 'utils/numberUtils';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 336px;
    height: 336px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 288px;
    height: 288px;
  }
`;

const Balance = styled.span`
  font-size: 18px;
  font-weight: 700;
  font-family: 'Circe';
  font-style: normal;
  line-height: normal;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Chart = () => {
  const dispatch = useDispatch();
  const { totals, monthlyTotals } = useSelector(state => state.transactions);

  useEffect(() => {
    dispatch(fetchTotals());
  }, [dispatch]);

  const showTotals = monthlyTotals && monthlyTotals.totals;
  const dataToMap = showTotals ? monthlyTotals.totals : totals.totals;

  if (!dataToMap || totals.totals.length === 0) {
    return <div>No data available.</div>;
  }
  const labels = dataToMap.map(item => item.category);
  const backgroundColors = dataToMap.map(item => item.color);
  const dataValues = dataToMap.map(item => item.sum);
  const formatNum = num => formatNumberWithSpaces(fixDigitsToTwoDecimalPlaces(num));

  const balance = showTotals ? monthlyTotals.difference : totals.difference || 0;

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Amount of spending',
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '70%',
  };
  return (
    <ChartContainer>
      <Doughnut data={chartData} options={options} />
      <Balance>$ {formatNum(balance)}</Balance>
    </ChartContainer>
  );
};

export default Chart;
