export default function InputDataPie({labels, dataset, setData, setColor}){
    return (
        <form>
            <input name="data" value={dataset.data.join(',')} className='inputDataset' onChange={setData}/>
            {labels.map((label, index) => {
                const color = dataset.backgroundColor[index]
                return <input type="color" value={color ?? dataset.backgroundColor[0]} key={label} onChange={(e) => setColor(e, label)} />
            })}
        </form>
    )
}