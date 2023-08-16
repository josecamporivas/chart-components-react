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
import InputDataset from '../InputDataset/InputDataset';
import InputLabels from '../InputLabels/InputLabels';
import NavBar from '../NavBar/NavBar';
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import {DEFAULT_LABELS, DEFAULT_DATASETS} from '../../constants/constants' 

export default function Bar(){
    const [valuesAxisX, setValuesAxisX] = useState(DEFAULT_LABELS)
    const [datasets, setDatasets] = useState(DEFAULT_DATASETS)
    const [showChangeLabels, setShowChangeLabels] = useState(false)

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

    const toggleInputLabels = (e) => {
      setShowChangeLabels(!showChangeLabels)
    }

    return (
      <>
        <NavBar />
        <main>
          <button className='button buttonChange' onClick={toggleInputLabels}>
            {showChangeLabels ? 'Confirm changes': 'Change labels'}
          </button>
          <section className='barContainer'>
            <BarComponent data={data} className='bar'/>
            {showChangeLabels && <InputLabels labels={valuesAxisX} setLabels={setValuesAxisX} />}

            {datasets.map(dataset => {
              const {id, label, data, backgroundColor} = dataset
              return <InputDataset key={id} id={id} label={label} data={data} 
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