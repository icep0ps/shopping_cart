import React from 'react';
import inventory from '../Shop/inventory';
import { useParams } from 'react-router-dom';

const About = (props) => {
  const { id } = useParams();
  const match = inventory.filter((ablum) => ablum.id === id)[0];
  return (
    <div className="ablums-container">
      <section className="ablum">
        <div
          className="album-cover"
          style={{
            backgroundImage: `url('${match.image}')`,
          }}
        ></div>
        <div className="album-info">
          <h1>{match.name}</h1>
          <h2>{match.artist}</h2>
          <p>{match.description}</p>
          <div>
            {match.genres.map((genre) => {
              return <span className="types">{genre}</span>;
            })}
          </div>
        </div>
      </section>
      <section className="traklist">
        {match.trackList.map((track) => {
          return (
            <div className="track">
              <span>{track.no}</span>
              <div>
                <p className="title">{track.title}</p>
                <p>{track.artists}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default About;
