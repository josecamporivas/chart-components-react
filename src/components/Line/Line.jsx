import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState } from 'react';
import { Line as LineComponent } from 'react-chartjs-2';
import NavBar from '../NavBar/NavBar';

import './styleLine.css'
import InputLabels from '../InputLabels/InputLabels';
import InputDataset from '../InputDataset/InputDataset';
import { DEFAULT_DATASETS, DEFAULT_LABELS } from '../../constants/constants';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Line(){
    const [valuesAxisX, setValuesAxisX] = useState(DEFAULT_LABELS)
    const [showChangeLabels, setShowChangeLabels] = useState(false)
    const [datasets, setDatasets] = useState(DEFAULT_DATASETS)

    const data = {
        labels: valuesAxisX,
        datasets
    }

    const addDataset = (e) => {
        const color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, Math.floor(Math.random()*9))
        const emptyDataset = {
          id: crypto.randomUUID(),
          label: '',
          data: [0,0,0,0,0,0,0],
          backgroundColor: color,
          borderColor: color
        }
        setDatasets([...datasets, emptyDataset])
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
                <section className='lineContainer' >
                    <LineComponent data={data} className='line'/>
                    {showChangeLabels && <InputLabels labels={valuesAxisX} setLabels={setValuesAxisX} />}

                    {datasets.map(dataset => {
                        const {id, label, data, backgroundColor, borderColor} = dataset
                        return <InputDataset key={id} id={id} label={label} data={data} 
                        backgroundColor={backgroundColor} borderColor={borderColor} changeDataset={changeDataset}
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