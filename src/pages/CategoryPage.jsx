import {Link, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {questions, imgs} from '../data';
import Question from '../components/Question';

const shuffleArray = array => {
  const newArray = array.sort(()=> Math.random()-0.5);
  return newArray.slice(0, 5);
};

const CategoryPages = () => {
  const { category } = useParams() ;
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [questionsFiltered, setQuestionsFiltered] = useState(
		questions.filter(question => question.category === category)
	);
  const [activeQuiz, setActiveQuiz ] = useState(false);
  const imgCategory = imgs.filter(img => img === `/src/assets/${category.toLowerCase()}.png`);

  useEffect(()=>{
    const newQuestions = shuffleArray(questionsFiltered);
    setQuestionsFiltered(newQuestions);
  }, []);

  console.log(category)
  return (
    <>
      <div 
      className='container flex flex-col items-center gap-10 justify-center' 
      style={{height: 'calc(100vh - 5rem)'}}>
            {activeQuiz ? (
              <Question 
              filteredQuestion={questionsFiltered[indexQuestion]} 
              setIndexQuestion={setIndexQuestion}
              indexQuestion={indexQuestion}  
              questionsFiltered={questionsFiltered}
              setActiveQuiz={setActiveQuiz}
              />
              
              ) : (
                <>
              <div className='flex flex-col gap-5'>
                <h1 className='text-3xl text-teal-900 text-center font-bold'>{category}</h1>
                <div className="flex justify-center items center">
                  <img src={imgCategory} alt={category} className='w-72'/>
                </div>
              </div>
              <button className='text-white bg-gray-900 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900 px-3 py-3' onClick={()=> setActiveQuiz(true)}>
                Iniciar Quiz
              </button>
              <Link to={'/'} className='rounded-lg bg-slate-900 text-white hover:text-slate-900 hover:bg-amber-500 px-3 py-3'>Elegir otra categoria</Link>
            </>
          )}
      </div>
    </>
  )
}

export default CategoryPages