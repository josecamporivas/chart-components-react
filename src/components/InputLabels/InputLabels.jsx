import './styleInputLabels.css'

export default function InputLabels({labels, setLabels}){

    const modifyLabels = (e) => {
        const newLabels = e.target.value.split(',')

        setLabels(newLabels)
    }

    return(
        <input className="inputDataset inputLabels" value={labels.join()} onChange={modifyLabels} />
    )
}

