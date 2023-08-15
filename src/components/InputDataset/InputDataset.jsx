import './styleInputDataset.css'

export default function InputDataset({id, label, data, backgroundColor, changeDataset, deleteDataset, borderColor}){

    const handleChangeLabel = (e) => {
        const newDataset = {
            label: e.target.value,
            data, backgroundColor, id, borderColor
        }

        changeDataset(id, newDataset)
    }

    const handleChangeData = (e) => {
        const newDataset = {
            data: e.target.value.split(','),
            label, backgroundColor, id, borderColor
        }

        changeDataset(id, newDataset)
    }

    const handleChangeColor = (e) => {
        const newColor = e.target.value
        const newDataset = {
            backgroundColor: newColor,
            borderColor: newColor,
            label, data, id
        }

        changeDataset(id, newDataset)
    }

    const handleDelete = (e) => {
        deleteDataset(id)
    }

    return (
        <div className="datasetContainer">
            <input className='inputDataset' value={label} onChange={handleChangeLabel} />
            <input className='inputDataset' value={data.join()} onChange={handleChangeData} />
            <input type='color' value={backgroundColor} onChange={handleChangeColor}/>
            <button className='button' onClick={handleDelete}>
                <img className='icon' src='/deleteIcon.svg' alt='delete icon'/>
            </button>
        </div>
    )
}