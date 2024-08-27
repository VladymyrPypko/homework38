import { useParams } from "react-router-dom";
import styles from './Album.module.css';
import { useGetAlbumPhotosQuery } from "../../store/albumsApi";

export default function Album() {
  const { id } = useParams<{id: string}>();
  const { data: photos, error, isLoading } = useGetAlbumPhotosQuery(Number(id));

  if (isLoading) return <p>Загрузка...</p>
  if (error) return <p>Произошла ошибка загрузки фото</p>

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Фотографии альбома</h2>
        <div className={styles.gallery}>
          {photos?.map((photo) => (
            <div key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </div>
          ))}
        </div>
    </div>
  )
}
