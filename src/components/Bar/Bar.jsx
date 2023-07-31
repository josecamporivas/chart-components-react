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
import { Link } from 'react-router-dom';
  
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

    const addDataset = (e) => {
      const emptyDataset = {
        id: crypto.randomUUID(),
        label: '',
        data: [0,0,0,0,0,0,0],
        backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, Math.floor(Math.random()*9))
      }
      setDatasets([...datasets, emptyDataset])
    }

    return (
      <>
        <nav className='navBar'>
          <Link to='/' className='homeLink'>
            <img className='icon' src='/arrowLeft.svg' alt='return home' />
            <p>Home</p>
          </Link>
          </button>
        </nav>
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
            <button className='button' onClick={addDataset}>
              <img className='icon' src='/addIcon.svg' alt='add icon'/>
            </button>
          </section>
        </main>
      </>
    )
}

/* 
  TODO:
  - Add personalization in the data and styles (options)
  - Add vertical Bar and Horizontal Bar (with options)

*/