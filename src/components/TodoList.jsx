import { useTypedSelector } from "../hooks/usedTypedSelector";
import { useAction } from "../hooks/useAction";
import { useEffect } from "react";

const TodoList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  );

  const { fetchTodos } = useAction();

  useEffect(() => {
    fetchTodos(page, limit);
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.name}
        </div>
      ))}
    </div>
  );
};
