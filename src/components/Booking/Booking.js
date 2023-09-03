import React from 'react'
import Table from '../tTable/Table'
import './Booking.scss'
import { useSelector } from 'react-redux'


function Booking() {
 
  const getAllTable=useSelector(state=>state.appConfigReducer.tables);
  // console.log(getAllTable,"callaed");
  return (
    <div className="booking">
        <div className="innerbooking">
            <div className="bookingtable">
              <h1>BOOK YOUR TABLE</h1>
              <span className='line'></span>
            </div>
            <div className="listoftables">
              {getAllTable?.map( table => <Table key={table._id} table={table}/>)}
            </div>
        </div>
    </div>
  )
}

export default Booking