import './table.css'

export function Table({sortData, data, selectedColumn, setSelectedColumn}) {

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Дата</th>
                    <th 
                        className={selectedColumn==='name' && 'selected'} 
                        onClick={() => {sortData('name'); setSelectedColumn('name')}}
                    >
                        Название
                    </th>
                    <th 
                        className={selectedColumn==='amount' && 'selected'} 
                        onClick={() => {sortData('amount'); setSelectedColumn('amount')}}
                    >
                        Количество
                    </th>
                    <th 
                        className={selectedColumn==='distance' && 'selected'}
                        onClick={() => {sortData('distance'); setSelectedColumn('distance')}}
                    >
                        Расстояние
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map(el => (
                    <tr key={el.id}>
                        <th>{el.date}</th>
                        <th>{el.name}</th>
                        <th>{el.amount}</th>
                        <th>{el.distance}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}