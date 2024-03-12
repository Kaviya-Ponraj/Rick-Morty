import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// import "./App.css"

import Filters from "./Components/Filters/Filters";
import Cards from "./Components/Cards/Cards"
import Pagination from './Components/Pagination/Pagination';
import Search from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardDetails from './Components/Cards/CardDetails';


function App(){
  return (
    <Router>
      <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<CardDetails />}/>

        
        <Route path='/episodes' element={<Episodes />}/>
        <Route path='/episodes/:id' element={<CardDetails />}/>

        <Route path='/location' element={<Location />}/>
        <Route path='/location/:id' element={<CardDetails />}/>
      </Routes>
      </div>
    </Router>
  )
}


const Home = () => {
  let [ pageNumber, setpageNumber] = useState(1);
  // console.log(pageNumber);

  let [search, setSearch] = useState("")

  let [fetchData, updateFetchData] = useState([]);

  let [status, setStatus] = useState("")
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState("")

  let {info, results} = fetchData
  // console.log(fetchData)
  // console.log(info);
  // console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(()=>{
    ( async function() {
      let data = await fetch(api).then((res) => res.json())
      // console.log(data.results)
      updateFetchData(data)
    }())
  }, [api])
  return (
    <div className="App">
      
    <h1 className='text-center mb-4'>Characters</h1>

    <Search 
    setpageNumber = {setpageNumber}
    setSearch = {setSearch}
    />

    <div className="container">
      <div className="row">
        
          <Filters
          setpageNumber = {setpageNumber}
          setStatus = {setStatus}
          setGender = {setGender}
          setSpecies = {setSpecies}
          />
       
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards
            page = "/"
            results={results} />
            {/* <Cards />
            <Cards /> */}
          </div>
        </div>
      </div>
    </div>

    <Pagination 
     info = {info}
    pageNumber = {pageNumber}
    setpageNumber = {setpageNumber}
    />
    </div>
  );
}

export default App;
