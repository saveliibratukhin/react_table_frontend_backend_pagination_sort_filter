import './paginator.css'

export function Paginator({goodsPerPage, setGoodsPerPage, totalGoods, paginate, currentPage, prevPage, nextPage}) {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="paginator_container">
            <nav aria-label="navigation">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href='#' onClick={prevPage}>Предудущая</a></li>
                    {pageNumbers.map(num => (<li className={ [ 'page-item ', currentPage === num ? 'active' : ''].join(' ')} key={num}>
                        <a className="page-link"
                            href="#" 
                            onClick={() => paginate(num)}
                        >
                            {num}
                        </a>
                    </li>))}
                    <li className="page-item"><a className="page-link" href='#' onClick={nextPage}>Следующая</a></li>
                </ul>
            </nav>
            <div className='selectAndLabelContainer'>
                <label>Количество элементов на странице: </label>
                <select 
                    className="form-control selectGoodsPerPage" 
                    value={goodsPerPage}
                    onChange={(e) => setGoodsPerPage(e.target.value)}
                >
                    <option>5</option>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
            </div>
        </div>
    )
}