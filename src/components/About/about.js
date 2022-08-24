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
      <section>
        <div className="track">
          <p>Wars</p>
          <p>Lords Child, Montell Fish</p>
        </div>
      </section>
    </div>
  );
}

export default About;
