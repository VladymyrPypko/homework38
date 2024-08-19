import { useContext } from "react";
import { Link } from "react-router-dom";
import { AlbumsContext, AlbumsContextInterface } from "../../context/AlbumsProvider";
import styles from './Albums.module.css';

export default function Albums() {
  const { albums } = useContext(AlbumsContext) as AlbumsContextInterface;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Альбомы:</h2>
        <ul className={styles.list}>
          {albums.map((album) => (
            <li key={album.id}>
              <Link className={styles.link} to={`/albums/${album.id}`}>{album.title}</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}
