import './App.css';
import {useEffect, useState} from 'react'
import { Loading } from './loading/Loading';
import axios from 'axios';
import { Table } from './table/Table';
import { Paginator } from './paginator/Paginator';
import { Filter } from './filter/Filter';
import { API_URL } from './config';

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [goodsPerPage, setGoodsPerPage] = useState(5)
  const [goods, setGoods] = useState([])
  const lastGoodIndex = currentPage * goodsPerPage
  const firstGoodIndex = lastGoodIndex - goodsPerPage
  const currentGoods = goods.slice(firstGoodIndex, lastGoodIndex)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const [selectedColumn, setSelectedColumn] = useState()

  const prevPage = () => {
    if(currentPage !== 1) 
      setCurrentPage(currentPage - 1)
  }
  const nextPage = () => {
    if(currentPage !== Math.ceil(goods.length / goodsPerPage)) 
      setCurrentPage(currentPage + 1)
  }

  const filterData = ({column, condition, value}) => {
    console.log(column, condition, value)
    switch (condition) {
      case 'equals': 
        setGoods(data.filter(c => c[column] == value))
        break;

      case 'contains':
        setGoods(data.filter(c => c[column].includes(value)))
        break;

      case 'more':
        setGoods(data.filter(c => c[column] > value))
        break;

      case 'less':
        setGoods(data.filter(c => c[column] < value))
        break;

      default:
        setGoods(data.concat())
    }
    setSelectedColumn('')
  } 

  const sortData = (field) => {
    setGoods(goods.concat().sort((a,b) => {
      return field === 'name'?
      a[field] > b[field]? 1 : -1
      : a[field] - b[field]
    }))
  }

  useEffect(() => {
    const getGoods = () => {
      const url = API_URL;
      axios.get(url).then((res) => {
        setGoods(res.data.map(row => {
          return {
            ...row,
            date: new Date(row.date).toLocaleDateString()
          }
        }))
        setData(res.data.map(row => {
          return {
            ...row,
            date: new Date(row.date).toLocaleDateString()
          }
        }))

        setLoading(false)
      }).catch(e => console.log(e))
    }

    getGoods()
  }, [])

  return (
    <div className='rowContainer'>
      <div className='tableContainer'>
        <Table 
          sortData={sortData} 
          data={currentGoods} 
          selectedColumn={selectedColumn} 
          setSelectedColumn={setSelectedColumn}
        />
        { loading && <Loading />}
        <Paginator 
          goodsPerPage={goodsPerPage} 
          setGoodsPerPage={setGoodsPerPage} 
          totalGoods={goods.length} 
          paginate={paginate} 
          currentPage={currentPage} 
          prevPage={prevPage} 
          nextPage={nextPage} 
        />
      </div>
        <Filter filterData={filterData}/>
    </div>
  );
}

export default App;
