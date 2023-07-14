import React, { useState, useContext } from 'react';
import { AlbumContext } from '../Hooks/index';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const albums = useContext(AlbumContext);
  const navigate = useNavigate();

  function handleViewDetails(albumId) {
    navigate(`/albumDetail/${albumId}`);
  }

  const filteredAlbums = albums.filter(album => album.id.toString().includes(searchQuery) || album.title.includes(searchQuery));

  return (
    <>
      <h1 className="album-heading">ALBUMS</h1>
      <form>
        <label>
          Search
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div className="album-grid">
        {filteredAlbums.map((album) => (
          <div className="album-box" key={album.id}>
            <h2 className="album-title">{album.title}</h2>
            <p className="album-info">UserID: {album.albumId}</p>
            <p className="album-info">AlbumID: {album.id}</p>
  
            <button
              className="view-details-button"
              onClick={() => handleViewDetails(album.id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
