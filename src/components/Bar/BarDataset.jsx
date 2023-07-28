export default function BarDataset({label, data, backgroundColor}){
    return (
        <div>
            <h1>{label}</h1>
            <p>{data.join()}</p>
            {/* put background color */}
        </div>
    )
}

/* TODO: MAKE THE VALUES OF THIS COMPONENT EDITABLE */