
import { useEffect, useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner'
import Cards from './components/cards/Cards'
import NavBar from './components/navBar/NavBar'
import ToCook from './components/toCook/ToCook';
import Cooking from './components/cooking/Cooking';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('../public/recipeData.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])


  const [toCook, setToCook] = useState([]);



  const handleAddToCook = (card) => {

    const existingCard = toCook.find(item => item.id === card.id);
  
    if (!existingCard) {
      const newToCook = [...toCook, card];
      setToCook(newToCook);
      toast.success('Recipe added to cook list!');
    }
    
    else {
      toast.error('This recipe is already in your cook list!');
    }
  };




  const [cooking, setCooking] = useState([]);

  const [totalTime, setTotalTime] = useState([]);

  const [totalCalories, setTotalCalories] = useState([])
    ;
  const handleAddToCooking = (card) => {

    const newToCook = [...cooking, card];

    setCooking(newToCook);

    //removing item from want to cook

    const remainingFormWntToCook = toCook.filter(item => item.id !== card.id);

    setToCook(remainingFormWntToCook);

    //calculate total time

    const newTime = Number(totalTime) + Number(card.preparing_time);
    setTotalTime(newTime);

    //calculate total calorie

    const newCalories = Number(totalCalories) + Number(card.calories);
    setTotalCalories(newCalories);

  };

  
  




  

    return (
      <>
        <NavBar />
        <Banner />
        <ToastContainer position="top-right" />


        <div className='text-center mx-[120px] mt-20'>
          <h1 className='font-bold text-4xl'>Our Recipes</h1>
          <p className='my-10'>Discover a variety of delicious and unique recipes, from classic comfort foods to modern cuisines. Browse our collection of mouth-watering dishes and find the perfect recipe for your next meal.</p>
        </div>
      


        <div className='flex gap-5 mx-[140px]'>
          <Cards handleAddToCook={handleAddToCook} cards={cards} />

          <div className='w-[40%] flex flex-col gap-10 '>
            <ToCook toCook={toCook} handleAddToCooking={handleAddToCooking} />
            

            <Cooking totalTime={totalTime} totalCalories={totalCalories}  cooking={cooking}   />
          </div>
        
        </div>
      


      </>
    )
  
  }

  export default App;
