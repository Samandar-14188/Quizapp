import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {useFetch} from '../hooks/useFetch';
import Test from "../componrnts/Test";

export default function Quiz() {
  const {title} = useParams();
  const {data:quizzes,isPending, error }= useFetch('https://online-json-server-api.up.railway.app/project/66ab1f611d2cd3eb1145cb15/quizzes')
  useEffect(()=>{
    document.title = 'Quiz'+ " " + title
  } , [title])
  console.log(quizzes);
  return (
    <section className="container quiz-container">
    {isPending && <h3>Loading...</h3>}
    {error && <h3>{error}</h3>}
    { quizzes && <Test questions={quizzes.data[4]} />}
    </section>
  )
}
