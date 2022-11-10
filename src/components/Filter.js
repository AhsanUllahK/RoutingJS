import React from 'react'
import {useSearchParams} from 'react-router-dom';



// useSearchParam hook is used for getting the queries or passing the queries.........
const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const age = searchParams.get("age");
    const city = searchParams.get("city");
  return (
    <div>
        <h2>This is Filter Page</h2>
        <h2>The age is: {age}</h2>
        <h2>The city is : {city}</h2>
        <input type="text" onChange={(e)=>setSearchParams({age:e.target.value})} placeholder="Set Age in Query params" />
        <button onClick={(e)=>setSearchParams({age:40})}>Set Age in Query params</button>


    </div>

  )
}

export default Filter;