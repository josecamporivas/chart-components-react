import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie as PieComponent } from 'react-chartjs-2';
import { DEFAULT_DATASET_PIE, DEFAULT_LABELS } from '../../constants/constants';
import { useState } from 'react';
import './stylePie.css'
import InputLabels from '../InputLabels/InputLabels';
import InputDataPie from './InputDataPie';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Pie(){
    const [namePortions, setNamePortions] = useState(DEFAULT_LABELS)
    const [dataset, setDataset] = useState(DEFAULT_DATASET_PIE)

    const data = {
        labels: namePortions,
        datasets: [dataset],
    };

    const setData = (e) => {
        e.preventDefault()

        const newData = e.target.value.split(',')

        setDataset({
            ...dataset,
            data: newData
        })
    }

    const setColor = (e, label) => {
        e.preventDefault()

        const newColor = e.target.value
        const labelIndex = namePortions.findIndex(name => name === label)
        const newColors = [
            ...dataset.backgroundColor.slice(0, labelIndex),
            newColor,
            ...dataset.backgroundColor.slice(labelIndex + 1)
          ]

        setDataset({
            ...dataset,
            backgroundColor: newColors,
            borderColor: newColors
        })
    }

    return (
        <main>
            <section className='pieContainer'>
                <PieComponent data={data} className='pie'/>
                <InputLabels labels={namePortions} setLabels={setNamePortions} />
                <InputDataPie labels={namePortions} dataset={dataset} setColor={setColor} setData={setData} />
            </section>
        </main>
    )
}