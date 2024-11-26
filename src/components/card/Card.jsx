import { IoMdTime } from "react-icons/io";
import { HiFire } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import PropTypes from "prop-types";

const Card = ({ card,handleAddToCook }) => {
    
    const {recipe_image, recipe_name, short_description, ingredients,preparing_time,calories } = card;


  return (
      <>
      
          <div className="p-[24px] h-[700px]  border-[1px] flex flex-col gap-[20px] rounded-2xl  " >
              <div>
                  <img className="h-[200px] w-[330px] rounded-xl" src={`/images/${recipe_image}`} alt="" />
              </div>

              <div>
                  <h3 className="font-bold">{recipe_name}</h3>
                  <p>{ short_description}</p>
              </div>

              <hr />

              <div>
                  <h3 className="font-bold">Ingredients: {ingredients.length}</h3>
                  <ul>
                      {ingredients.map((ingredient,indx)=> <li className="flex  items-center" key={indx} > <GoDotFill className="text-[10px]" /> {ingredient}</li>)}
                  </ul>
              </div>


              <hr />
              

              <div className="flex gap-5">
                  <p className="flex justify-evenly items-center gap-1" >  <IoMdTime /> {preparing_time} minutes </p>
                  <p className="flex justify-evenly items-center gap-1" >  <HiFire /> {calories} calories</p>
              </div>


              <button className="bg-amber-500 rounded-full py-[13px] px-[24px] font-bold"
              onClick={()=>handleAddToCook(card)}
              
              >Want to cook</button>



          </div>
      
      </>
  )
}

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddToCook: PropTypes.func.isRequired,
}

export default Card