import {useEffect, useState} from 'react';
import Results from './Results';


const Question = ({
    filteredQuestion,
    setIndexQuestion,
    indexQuestion,
    questionsFiltered,
    setActiveQuiz
}) => {
    
    const [answersRandom, setAnswersRandom] = useState([]);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [activeResults, setActiveResults] = useState(false);
    const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);

    useEffect(()=>{
        const answers = [
            ...filteredQuestion.incorrect_answers,
            filteredQuestion.correct_answer
        ];
        setAnswersRandom(answers.sort(()=> Math.random() - 0.5))
    }, [filteredQuestion]);

    console.log(answersRandom)

    const onnextQuestion =()=>{
        setIndexQuestion(indexQuestion + 1);
        setSelectAnswerIndex(null);
        setAnswered(false);
    };

    const onReset = () => {
        setScore(0);
        setActiveQuiz(false);
        setIndexQuestion(0);
    }

    const checkAnswer = (answerText, index) => {
        if(answerText === filteredQuestion.correct_answer){
            setScore(score + 1)
        }
        setSelectAnswerIndex(index);
        setAnswered(true);
    }
    return (
        <>
        {activeResults ? (
            <Results 
                questionsFiltered={questionsFiltered}
                score={score}
                onReset={onReset}
            />
        ): (
            <div className="flex flex-col justify-between shadow-md p-10 rounded-lg shadow-slate-300 w-[600px] h-[600px]">
                <div className="flex justify-between">
                    <span>
                        {/* numero de pregunta y numero de preguntas totales */}
                        {indexQuestion + 1} / {questionsFiltered.length}
                    </span>

                    <div className="flex gap-2">
                        <span className="font-semibold">
                            Difficult: 
                        </span>
                        <span className="font-bold">
                            {/* dificultad de la pregunta */}
                            {filteredQuestion.difficulty}
                        </span>
                    </div>
                </div>

                <button 
                    className="text-gray-500 borer px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900" 
                    onClick={onReset}>
                    Reiniciar
                </button>

                <div>
                    <h1 className="font-bold">{filteredQuestion.question}</h1>
                </div>

                {/* seccion de respuestas */}
                <div className="grid grid-cols-2 gap-5">
                    {/* mapeo del arreglo con respuesta corresta e incorrectas */}
                    {
                        answersRandom.map((answer, index) => (
                        <button 
                            className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105 ${selectAnswerIndex !== null && index === selectAnswerIndex ? answer ===filteredQuestion.correct_answer ? 'bg-green-500' : 'bg-red-500' : ''}`} 
                            key={answer}
                            onClick={()=> checkAnswer(answer, index)}
                            disabled={answered && selectAnswerIndex !== index}
                            >
                            <p className="font-medium text-center text-sm">{answer}</p>
                        </button>

                        ))
                    }
                </div>

                {/* condicional para  mostrar el boton de siguiente pregunta o finalizar */}
                {indexQuestion + 1 === questionsFiltered.length ? (
                        <button     
                            className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium" 
                            onClick={()=> {
                            setAnswered(false);
                            setActiveResults(true)
                        }}>
                        Finalizar
                    </button>
                ) : (
                    <button 
                        className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium" onClick={onnextQuestion}>
                        Siguiente Pregunta
                    </button>
                )}     


            </div>
        )}
            
        </>
    )
}

export default Question