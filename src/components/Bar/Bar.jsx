import { Bar as BarComponent } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
export default function Bar(){
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [10, 4, 5, 15, 2, 98, 9],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: [10, 4, 5, 15, 2, 98, 9],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
    }

    return (
        <div>
            <BarComponent data={data} />
        </div>
    )
}

/* 
  TODO:
  - Add personalization in the data and styles (options)
  - Add vertical Bar and Horizontal Bar (with options)

*/