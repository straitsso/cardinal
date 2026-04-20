export function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-meta">
          <span className="eyebrow">
            <span className="dot" />
            Est. 2024 · Raleigh, NC
          </span>
          <span className="divider" />
          <span className="eyebrow right">
            Advisory for PE-backed industrials
          </span>
        </div>

        <h1 className="headline">
          Operators who <em>have done it</em>, advising the leaders who must.
        </h1>

        <div className="hero-sub">
          <p className="lead">
            Cardinal Principals is a boutique advisory firm partnering with
            private-equity sponsors and portfolio-company CEOs on turnarounds,
            growth strategy, and organizational redesign at mid-market to
            large-scale industrial companies.
          </p>
          <div className="cta-row">
            <a href="#contact" className="btn btn-primary">
              Book an intro call <span>→</span>
            </a>
            <a href="#work" className="btn btn-ghost">
              See selected work
            </a>
          </div>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <div className="img-ph">
            <span className="img-idx">01 / 03</span>
            <span className="img-label">Plant floor — machining cell</span>
          </div>
          <div className="img-ph">
            <span className="img-idx">02 / 03</span>
            <span className="img-label">Boardroom portrait</span>
          </div>
          <div className="img-ph">
            <span className="img-idx">03 / 03</span>
            <span className="img-label">Industrial detail</span>
          </div>
        </div>
      </div>
    </header>
  );
}
