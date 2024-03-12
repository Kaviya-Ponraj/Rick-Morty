import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate'
// import styles from "./Pagination.module.scss"

const Pagination = ({info, pageNumber, setpageNumber}) => {

  let [width, setWidth] = useState(window.innerWidth)

  console.log(width);

  let updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener("resize", updateDimensions)
    return  () => {window.removeEventListener("resize", updateDimensions)}
  
  }, [])

  return (
    <>

    <style jsx>
    {`
    @media (max-width: 768px){
      .next, .prev{
          display : none;
      }
      .pagination{
        font-size: 14px;
      }
    }
    `}
    </style>

    <ReactPaginate 
    className = "pagination justify-content-center gap-4 my-4"
    nextLabel = "Next"
    previousLabel = "Prev"
    forcePage = {pageNumber === 1 ? 0 : pageNumber - 1}
    nextClassName = {` next`}
    previousClassName = {`prev `}
    pageClassName = "page-item"
    pageLinkClassName = "page-link"
    activeClassName = "active"
    marginPagesDisplayed = {width < 576 ? 1 : 2}
    pageRangeDisplayed = {width < 576 ? 1 : 2}
    onPageChange = {(data) => {
      setpageNumber(data.selected + 1);
    }}
    pageCount = {info?.pages}
    />
    </>
  )
}

export default Pagination

