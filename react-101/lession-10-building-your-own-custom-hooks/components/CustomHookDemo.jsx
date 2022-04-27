import useFetch from "../hooks/useFetch";

export default function CustomHookDemo() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className="container-md">
      {data &&
        data.map((item) => {
          return (
            <p className="todo" key={item.id}>
              {item.title}
            </p>
          );
        })}
    </div>
  );
}
