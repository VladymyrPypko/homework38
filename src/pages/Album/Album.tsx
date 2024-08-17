import { useEffect, useState } from "react";
import { Photo } from "../../interfaces/Photo.interface";
import { useParams } from "react-router-dom";
import styles from './Album.module.css';

export default function Album() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{id: string}>();

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
        const data = await response.json();
        setPhotos(data);
      } catch(error) {
        console.error(`Failed to fetch photos: ${error}`);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [id])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Фотографии альбома</h2>
      {loading ? (
        <span>Загрузка...</span>
      ) : (
        <div className={styles.gallery}>
          {photos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
