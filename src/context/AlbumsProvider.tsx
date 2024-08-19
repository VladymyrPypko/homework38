import { createContext, ReactNode, useEffect, useState } from "react";
import { Album } from "../interfaces/Album.interface";

export interface AlbumsContextInterface {
  albums: Album[];
}

export const AlbumsContext = createContext<AlbumsContextInterface | null>(null);

export default function AlbumsProvider({ children }: { children: ReactNode}) {
  const [albums, setAlbums] = useState<Album[]>([]);
  const valueToExport = { albums };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error(`Failed to fetch photos: ${error}`));
  })

  return (
    <AlbumsContext.Provider value={valueToExport}>
      {children}
    </AlbumsContext.Provider>
  )
}