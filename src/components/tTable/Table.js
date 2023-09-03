import React from 'react'
import t from '../../assets/evelyn-semenyuk-VY_9seCWWlQ-unsplash.jpg'
import './Table.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getActiveTable } from '../../redux/slice/centerSlice'
import {MdDining} from 'react-icons/md'

function Table({ table }) {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
 
  async function handleClick() {
    dispatch(getActiveTable({ _id: table._id }));

    naviagte(`/menu/${table._id}`);
  }

  return (
    <div className="table">
      <div className="innertable">
        <div className="tableimg">
          <img id='tablename' src={t} alt="" />
        </div>
        <div className="tableinfo">
          <div className="innertableinfo">
            <h3 className='tablenumber'>
              Table Number {table.tableNumber}
            </h3>
            <h3 className='capacity'>Capacity: {table.capacity} Person</h3>
          </div>
          <div className="icondining">
            <MdDining className='din'/>
          </div>

        </div>

        <button className='select' onClick={handleClick} >
          BOOK
        </button>
      </div>
    </div>
  )
}

export default Table