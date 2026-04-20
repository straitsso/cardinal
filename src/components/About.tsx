import Image from "next/image";

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
            <Image
              src="/joel.jpeg"
              alt="Joel Rood, founder of Cardinal Principals"
              fill
              sizes="(max-width: 900px) 100vw, 340px"
              style={{ objectFit: "cover" }}
              priority
            />
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

            <div className="education">
              <span className="eyebrow">
                <span className="dot" />
                Education
              </span>
              <div className="education-list">
                <div className="education-item">
                  <div className="education-logo">
                    <Image
                      src="/princeton.jpeg"
                      alt="Princeton University"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <div className="education-school">
                      Princeton University — BS Civil Engineering
                    </div>
                    <div className="education-honors">
                      Summa Cum Laude · Sigma Xi · Best Senior Thesis ·
                      Intercollegiate Football &amp; Baseball
                    </div>
                  </div>
                </div>
                <div className="education-item">
                  <div className="education-logo">
                    <Image
                      src="/texas.jpeg"
                      alt="University of Texas at Austin"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <div className="education-school">
                      University of Texas at Austin — MS Petroleum Engineering
                    </div>
                    <div className="education-honors">
                      Schlumberger Fellow · Tau Beta Pi
                    </div>
                  </div>
                </div>
                <div className="education-item">
                  <div className="education-logo">
                    <Image
                      src="/stanford.jpeg"
                      alt="Stanford Graduate School of Business"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <div className="education-school">
                      Stanford Graduate School of Business — Sloan Fellow
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
