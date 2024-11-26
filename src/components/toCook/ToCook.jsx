import PropTypes from "prop-types"

const ToCook = ({ toCook,handleAddToCooking }) => {
    

  return (
    
      <>
      
          <div>
              
        <div className="text-center font-bold text-xl">Want to cook : {toCook.length} </div>
        <hr/>

              <div className="overflow-x-auto">
                  
                  <table className="min-w-full ">

        <thead>
          <tr>
            <th className="  px-4 py-2 bg-gray-100">Name</th>
            <th className=" px-4 py-2 bg-gray-100">Time</th>
            <th className=" px-4 py-2 bg-gray-100">Calories</th>
            <th className=" px-4 py-2 bg-gray-100">  </th>
          </tr>
        </thead>
        <tbody>
          {toCook.map((item, index) => (
            <tr key={index}>
              <td className=" px-4 py-2">{item.recipe_name}</td>
              <td className=" px-4 py-2">{item.preparing_time} minutes</td>
              <td className=" px-4 py-2">{item.calories} calories </td>
                  <td className=" px-4 py-2">
                      <button onClick={()=>handleAddToCooking(item)}
              
                      className="bg-amber-500 px-[18px] py-[9px] rounded-3xl ">Preparing</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


          </div>
      
      
      
      
      </>
  )
}

ToCook.propTypes = {
    toCook: PropTypes.array.isRequired,
    handleAddToCooking: PropTypes.func.isRequired
}

export default ToCook