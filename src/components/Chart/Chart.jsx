import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { data } from '../DiagramTable/data';
import styled from 'styled-components';

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
  const labels = data.map(item => item.category);
  const dataValues = data.map(item => parseFloat(item.sum.replace(/\s+/g, '')));
  const backgroundColors = data.map(item => item.color);
  const sum = dataValues.reduce((total, value) => total + value, 0).toFixed(2);

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
      <Balance>{sum}</Balance>
    </ChartContainer>
  );
};

export default Chart;
