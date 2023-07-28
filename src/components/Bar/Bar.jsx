import { Bar as BarComponent } from 'react-chartjs-2';
import './styleBar.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useState } from 'react';
import BarDataset from './BarDataset';
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DEFAULT_VALUES_AXISX = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const DEFAULT_DATASETS = [
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
];

export default function Bar(){
    const [valuesAxisX, setValuesAxisX] = useState(DEFAULT_VALUES_AXISX)
    const [datasets, setDatasets] = useState(DEFAULT_DATASETS)
    const data = {
        labels: valuesAxisX,
        datasets
    }

    return (
      <main>
        <section className='barContainer'>
            <BarComponent data={data} />
            {datasets.map(dataset => {
              const {label, data, backgroundColor} = dataset
              return <BarDataset key={label} label={label} data={data} backgroundColor={backgroundColor} />
            })}
        </section>
      </main>
    )
}

/* 
  TODO:
  - Add personalization in the data and styles (options)
  - Add vertical Bar and Horizontal Bar (with options)

*/