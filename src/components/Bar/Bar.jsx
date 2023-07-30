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
    id: '3a62a2b1-be81-4795-a3b5-4741146cf1e8',
    label: 'Dataset 1',
    data: [10, 4, 5, 15, 2, 98, 9],
    backgroundColor: '#ff6384',
  },
  {
    id: 'af4aa9af-03a3-4f1f-a518-037e230a156c',
    label: 'Dataset 2',
    data: [10, 4, 5, 15, 2, 98, 9],
    backgroundColor: '#35a2eb',
  },
];

export default function Bar(){
    const [valuesAxisX, setValuesAxisX] = useState(DEFAULT_VALUES_AXISX)
    const [datasets, setDatasets] = useState(DEFAULT_DATASETS)
    const data = {
        labels: valuesAxisX,
        datasets
    }

    const changeDataset = (oldDatasetId, newDataset) => {
      const indexOldDataset = datasets.findIndex(dataset => dataset.id === oldDatasetId)
      const newDatasets = [
        ...datasets.slice(0, indexOldDataset),
        newDataset,
        ...datasets.slice(indexOldDataset + 1)
      ]

      setDatasets(newDatasets)
    }

    const deleteDataset = (id) => {
      setDatasets(datasets.filter(dataset => dataset.id !== id))
    }

    return (
      <main>
        <section className='barContainer'>
          <BarComponent data={data} className='bar'/>
          {datasets.map(dataset => {
            const {id, label, data, backgroundColor} = dataset
            return <BarDataset key={id} id={id} label={label} data={data} 
                    backgroundColor={backgroundColor} changeDataset={changeDataset}
                    deleteDataset={deleteDataset} />
          })} 
        </section>
        <section>

        </section>
      </main>
    )
}

/* 
  TODO:
  - Add personalization in the data and styles (options)
  - Add vertical Bar and Horizontal Bar (with options)

*/