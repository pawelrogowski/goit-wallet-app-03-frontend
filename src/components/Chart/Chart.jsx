import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux'; // Remove 'useDispatch' and 'useEffect'
import { formatBalance } from 'utils/numberUtils';
import { ChartContainer, Balance } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { totals, monthlyTotals } = useSelector(state => state.finance);

  const showTotals = monthlyTotals && monthlyTotals.totals;
  const dataToMap = showTotals ? monthlyTotals.totals : totals.totals;

  if (!dataToMap || totals.totals.length === 0) {
    return null;
  }
  const labels = dataToMap.map(item => item.category);
  const backgroundColors = dataToMap.map(item => item.color);
  const dataValues = dataToMap.map(item => item.sum);

  const balance = showTotals ? monthlyTotals.difference : totals.difference || 0;

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Amount of spending',
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 0,
        weight: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,

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
      <Balance>$ {formatBalance(balance)}</Balance>
    </ChartContainer>
  );
};

export default Chart;
