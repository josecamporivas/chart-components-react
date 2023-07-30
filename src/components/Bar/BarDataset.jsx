import './styleBar.css'

export default function BarDataset({id, label, data, backgroundColor, changeDataset}){

    const handleChangeLabel = (e) => {
        const newDataset = {
            label: e.target.value,
            data, backgroundColor, id
        }

        changeDataset(id, newDataset)
    }

    const handleChangeData = (e) => {
        const newDataset = {
            data: e.target.value.split(','),
            label, backgroundColor, id
        }

        changeDataset(id, newDataset)
    }

    const handleChangeColor = (e) => {
        const newDataset = {
            backgroundColor: e.target.value,
            label, data, id
        }

        changeDataset(id, newDataset)
    }

    return (
        <div className="datasetContainer">
            <input className='inputDataset' value={label} onChange={handleChangeLabel} />
            <input className='inputDataset' value={data.join()} onChange={handleChangeData} />
            <input type='color' value={backgroundColor} onChange={handleChangeColor}/>
        </div>
    )
}

/* TODO: MAKE THE VALUES OF THIS COMPONENT EDITABLE */