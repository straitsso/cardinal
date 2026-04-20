export function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow-col">
            <span className="eyebrow">
              <span className="dot" />
              Founder
            </span>
          </div>
          <div>
            <h2>Joel Rood — 30+ years operating, now advising the operators.</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="headshot">
            <span className="img-label">Founder portrait — editorial, b/w</span>
          </div>
          <div className="about-body">
            <p>
              Over a 30+ year career in strategy, operations, and leadership,
              I&rsquo;ve led multi-national organizations that collectively
              created <em>billions in shareholder value</em>.
            </p>
            <p>
              Today I work with PE sponsors and portfolio-company executives
              on turnarounds and growth — applying the framework I&rsquo;ve
              refined across LORD, Hilti, and two current board seats. I love
              the hard problems: culture that won&rsquo;t budge, strategies
              that won&rsquo;t translate, operations that won&rsquo;t scale.
            </p>
            <p className="about-signoff">&mdash; Joel Rood, Founder</p>

            <div className="bio-facts">
              <div className="bio-fact">
                <div className="k">30+ yrs</div>
                <div className="label">Operating Experience</div>
              </div>
              <div className="bio-fact">
                <div className="k">2</div>
                <div className="label">Current Board Seats</div>
              </div>
              <div className="bio-fact">
                <div className="k">$3.675B</div>
                <div className="label">LORD Sale, 2019</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
