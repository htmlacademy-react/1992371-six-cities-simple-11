import { Link } from 'react-router-dom';

export function NotFound(): JSX.Element {
  return (
    <section>
      <div className="not-found__container">
        <h1>Упс. Страница не найдена</h1>
        <span className="not-found__span">
          Error 404. Not a found
        </span>
        <Link to='/'>Вернуться на главную</Link>
      </div>
    </section>
  );
}
