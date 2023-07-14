import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumContext } from '../Hooks/index';

const AlbumDetail = () => {
  const { albumId } = useParams();
  const albums = useContext(AlbumContext);
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchedAlbum = albums.find((album) => album.id === Number(albumId));
    setAlbum(fetchedAlbum);
  }, [albums, albumId]);

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <h1 className="details-heading">Details</h1>
    <div className="details-container">
      <img className="album-thumbnail" src={album.thumbnailUrl} alt={album.title} />
      <div className="details-info">
        <h1 className="album-title">{album.title.toUpperCase()}</h1>
        <p className="album-info">UserID: {album.albumIdId}</p>
        <p className="album-info">AlbumID: {album.id}</p>
        <p className="album-info">URL: {album.url}</p>
        <p className="album-info">thumbnailUrl: {album.thumbnailUrl}</p>
      </div>
    </div>
  </>
  
  );
};

export default AlbumDetail;