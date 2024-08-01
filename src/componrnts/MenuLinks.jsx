import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function MenuLinks() {
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    "https://online-json-server-api.up.railway.app/project/66ab1f611d2cd3eb1145cb15/quizzes"
  );
console.log(quizzes);
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.data.map((item) => (
            <Link
              to={`/quiz/${item.title}`}
              className="header-logo menu-item"
              key={item.title}
            >
              <figure style={{ backgroundColor: item.color }}>
                <img src={item.icon} alt={item.title} />
              </figure>
              <span> {item.title}</span>
            </Link>
          ))}
      </div>
    </div>
  );
}
