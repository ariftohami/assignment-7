import PropTypes from "prop-types"

const Cooking = ({cooking,totalCalories,totalTime}) => {
  return (
    
      <>
      
          
      <div>
              
              <div className="text-center text-xl font-bold">Currently cooking : {cooking.length} </div>

              
              <div className="overflow-x-auto">
      <table className="min-w-full ">
        <thead>
          <tr>
            <th className=" px-4 py-2 bg-gray-100">Name</th>
            <th className=" px-4 py-2 bg-gray-100">Time</th>
            <th className=" px-4 py-2 bg-gray-100">Calories</th>
            
          </tr>
              </thead>
                      
        <tbody>
          {cooking.map((item, index) => (
            <tr key={index}>
              <td className=" px-4 py-2">{item.recipe_name}</td>
              <td className=" px-4 py-2">{item.preparing_time} minutes</td>
              <td className=" px-4 py-2">{item.calories} calories </td>
            </tr>
          ))}
                </tbody>

                      

            <tbody>
            <tr className="font-bold">
              <td className="border border-gray-300 px-4 py-2">Total</td>
              <td className="border border-gray-300 px-4 py-2"> {totalTime} minutes</td>
              <td className="border border-gray-300 px-4 py-2">{totalCalories} calories </td>
            </tr>
            </tbody>        

                      
      </table>
              </div>
              
     
      
      
      
      </div>

      
      </>
      
      
      
      
  )
}

Cooking.propTypes = {
    cooking: PropTypes.array.isRequired,
    totalCalories: PropTypes.array.isRequired,
    totalTime: PropTypes.array.isRequired
}

export default Cooking