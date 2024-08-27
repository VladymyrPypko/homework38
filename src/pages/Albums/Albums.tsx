import { Link } from "react-router-dom";
import styles from './Albums.module.css';
import { useGetAlbumsQuery } from "../../store/albumsApi";

export default function Albums() {
  const { data: albums, error, isLoading } = useGetAlbumsQuery();

  if (isLoading) return <p>Загрузка...</p>
  if (error) return <p>Произошла ошибка загрузки альбомов</p>

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Альбомы:</h2>
        <ul className={styles.list}>
          {albums?.map((album) => (
            <li key={album.id}>
              <Link className={styles.link} to={`/albums/${album.id}`}>{album.title}</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}
