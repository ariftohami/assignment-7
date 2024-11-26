import Card from "../card/Card"
import PropTypes from "prop-types"

const Cards = ({cards,handleAddToCook}) => {

    

    return (
    
        <>
        
            <div className="w-[60%] grid grid-cols-2 gap-2 ">
            {cards.map(card => <Card handleAddToCook={handleAddToCook} key={card.id} card={card} />)}
           </div>

        
        </>
        

  )
}

Cards.propTypes = {
    cards: PropTypes.array.isRequired,
    handleAddToCook: PropTypes.func.isRequired
}

export default Cards