import React from 'react'
import styles from './Search.module.scss'

const Search = ({setpageNumber, setSearch}) => {
  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5'>
        <input onChange={(e)=>{
            setpageNumber(1);
            setSearch(e.target.value);
            }} 
            type="text"
            placeholder='Search for Characters'
            className={`${styles.input}`}/>
        <button onClick={e => e.preventDefault()}
         className={` ${styles.search} btn btn-primary fs-5`}>
            Search
        </button>
    </form>
  )
}

export default Search