import { useEffect, useState } from "react";
import { Album } from "../../interfaces/Album.interface";
import { Link } from "react-router-dom";
import styles from './Albums.module.css';

export default function Albums() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        const data = await response.json();
        setAlbums(data);
      } catch(error) {
        console.error(`Failed to fetch albums: ${error}`);
      } finally {
        setLoading(false);
      }
    }
    fetchAlbums();
  }, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Альбомы:</h2>
      {loading ? (
        <span>Загрузка...</span>
      ) : (
        <ul className={styles.list}>
          {albums.map((album) => (
            <li key={album.id}>
              <Link className={styles.link} to={`/albums/${album.id}`}>{album.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
