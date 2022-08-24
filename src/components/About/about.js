import React from 'react';

function About() {
  return (
    <div className="ablums-container">
      <section className="ablum">
        <div
          className="album-cover"
          style={{
            backgroundImage: `url('https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fa32c4772671773907170a67788e8e5c2.600x600x1.jpg')`,
          }}
        ></div>
        <div className="album-info">
          <h1>Camp Lukewarm</h1>
          <h2>Montell Fish</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <div>
            <span className="types">Christain</span>
            <span className="types">Alternitive</span>
          </div>
        </div>
      </section>
      <section className="traklist">
        <div className="track">
          <span>1</span>
          <div>
            <p className="title">Camp</p>
            <p>Lords Child, Montell Fish</p>
          </div>
        </div>

        <div className="track">
          <span>2</span>
          <div>
            <p className="title">Peter</p>
            <p>Lords Child, Montell Fish</p>
          </div>
        </div>

        <div className="track">
          <span>3</span>
          <div>
            <p className="title">Crumble</p>
            <p>Lords Child, Montell Fish</p>
          </div>
        </div>

        <div className="track">
          <span>4</span>
          <div>
            <p className="title">Glory</p>
            <p>Lords Child, Montell Fish</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
