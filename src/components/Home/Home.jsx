import './styleHome.css'
import { Link } from 'react-router-dom'

const TYPE_OF_CHARTS = [
    {
        name:'BAR', 
        urlIcon: '/barChartIcon.svg',
        redirect: '/bar'
    },
    {
        name:'LINE', 
        urlIcon: '/lineChartIcon.svg',
        redirect: '/line'
    },
    {
        name:'PIE', 
        urlIcon: '/pieChartIcon.svg',
        redirect: 'pie'
    }
]

export default function Home(){
    return (
        <main>
            <h1 className='title'>SELECT YOUR FAVOURITE CHART</h1>
            <ul className='list'>
                {TYPE_OF_CHARTS.map(chart => {
                    return (
                        <Link className='link' key={chart.name} to={chart.redirect}>
                            <li className='itemList'>{chart.name} <img className='icon' src={chart.urlIcon}/></li>
                        </Link>
                        )
                    })}
            </ul>
        </main>
    )
}
