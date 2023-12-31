/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react'
import { KTSVG } from '../../../../../_metronic/helpers'



const CPOListSearchComponent = ({handleSearchInputChange,searchInput}) => {

  const [searchTerm, setSearchTerm] = useState('')
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
 

  return (
    <div className='card-title'>
      {/* begin::Search */}
      <div className='d-flex align-items-center position-relative my-1'>
        <KTSVG
          path='/media/icons/duotune/general/gen021.svg'
          className='svg-icon-1 position-absolute ms-6'
        />
        <input
          type='text'
          data-kt-user-table-filter='search'
          className='form-control form-control-solid w-250px ps-14'
          placeholder='Search user'
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>
      {/* end::Search */}
    </div>
  )
}

export {CPOListSearchComponent}
