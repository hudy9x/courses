import { Link, useSearchParams } from "react-router-dom";
import usePaginate from "./hooks/usePaginate";
import './Home.css'

function Home() {
  const [searchParams] = useSearchParams();
  const { data, page, limit, nextPage, prevPage } = usePaginate(
    "https://dummyapi.io/data/v1/post",
    searchParams
  );

  return <div className="container">
    <table className="table">
      <thead>
        <tr>
          <td>#</td>
          <td>Author</td>
          <td>Likes</td>
        </tr>
      </thead>
      <tbody>
        {data.map((dt, index) => {
          const owner = dt.owner;
          const no = page * limit + index + 1
          return <tr key={dt.id}>
            <td>{no}</td>
            <td>{`${owner.firstName} ${owner.lastName}`}</td>
            <td>👍<span className="like">{dt.likes}</span></td>
          </tr>
        })}
      </tbody>
    </table>
    <div className="pagination">
      <Link to={`?page=${prevPage}&limit=${limit}`}>Prev page</Link>
      <Link to={`?page=${nextPage}&limit=${limit}`}>Next page</Link>
    </div>
  </div>
}

export default Home;
