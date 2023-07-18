import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const json = {
  one: 5423,
  two: 8721,
  three: 3154,
  four: 6432,
  five: 9267,
  six: 1889,
  seven: 4866,
  eight: 7854,
  nine: 2591,
  ten: 6678,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Chart = () => {
  const labels = Object.keys(json);
  const dataValues = Object.values(json);
  const backgroundColors = dataValues.map(() => getRandomHexColor());

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Amount of Votes',
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '70%',
  };
  return <Doughnut data={data} options={options} width={288} height={288} />;
};

export default Chart;