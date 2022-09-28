import { useState } from 'react'
import './filter.css'

export function Filter({filterData}) {
    const [column, setColumn] = useState('name')
    const [condition, setCondition] = useState('equals')
    const [value, setValue] = useState('')

    const applyFilter = (e) => {
        e.preventDefault();
        filterData({column, condition, value})
    }

    const columnChanged = e => {
        setCondition('equals')
        setColumn(e.target.value)
    }

    return (
        <div className='filterContainer'>
            <h1>Фильтрация</h1>
            <form onSubmit={applyFilter}>
                <div className="form-group">
                    <label for="columnSelect">Выбор колонки для фильтрации</label>
                    <select className="form-control" id="columnSelect" onChange={columnChanged}>
                        <option value='name'>Название</option>
                        <option value='amount'>Количество</option>
                        <option value='distance'>Расстояние</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="conditionSelect">Выбор условия фильтрации</label>
                    <select className="form-control" id="conditionSelect" value={condition} onChange={e => setCondition(e.target.value)}>
                        {/* disabled для невозможности выбора других условий при фильтрации по имени */}
                        <option value='equals'>Равно</option>
                        <option disabled={column !== 'name'} value='contains'>Содержит</option>
                        <option disabled={column === 'name'} value='more'>Больше</option>
                        <option disabled={column === 'name'} value='less'>Меньше</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Значение</label>
                    <input type="text" className='form-control' value={value} onChange={e => setValue(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Применить фильтр</button>
            </form>
            <button className="btn btn-secondary mt-2" onClick={() => filterData({condition: null})}>Отменить фильтры</button>
        </div>
    )
}