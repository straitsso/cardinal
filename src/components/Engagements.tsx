export function Engagements() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow-col">
            <span className="eyebrow">
              <span className="dot" />
              Selected Engagements
            </span>
          </div>
          <div>
            <h2>
              Three decades of P&amp;L ownership. The results that matter most.
            </h2>
          </div>
        </div>

        {/* LORD */}
        <article className="engagement">
          <div className="eng-meta">
            <div className="eng-role">President · 2014 — 2019</div>
            <div className="eng-logo">
              LORD Corporation<span className="tm">®</span>
            </div>
            <div className="eng-tags">
              <span className="tag">Triple Bottom Line</span>
              <span className="tag">Strategy</span>
              <span className="tag">Exit Prep</span>
            </div>
          </div>
          <div>
            <p className="eng-narrative">
              Devised and executed a Triple Bottom Line strategy that delivered{" "}
              <em>
                $100M+ in sales growth and $60M in EBITDA improvement
              </em>{" "}
              — contributing directly to the 2019 sale of LORD Corporation.
            </p>
            <div className="eng-metrics">
              <div className="metric">
                <div className="k">+$100M</div>
                <div className="label">Sales Growth</div>
              </div>
              <div className="metric">
                <div className="k">+$60M</div>
                <div className="label">EBITDA Improvement</div>
              </div>
              <div className="metric">
                <div className="k">$3.675B</div>
                <div className="label">Sale Price · 3.5× Revenue</div>
              </div>
            </div>
            <div className="eng-outcome">
              Acquired by Parker Hannifin in 2019. The strategy and operating
              discipline built under a TBL lens materially shaped the multiple.
            </div>
          </div>
        </article>

        {/* Hilti GB */}
        <article className="engagement">
          <div className="eng-meta">
            <div className="eng-role">Managing Director · Hilti GB</div>
            <div className="eng-logo" style={{ color: "var(--accent)" }}>
              Hilti
            </div>
            <div className="eng-tags">
              <span className="tag">Growth</span>
              <span className="tag">Culture</span>
              <span className="tag">Commercial</span>
            </div>
          </div>
          <div>
            <p className="eng-narrative">
              Grew revenue from <em>$175M to $240M</em> and profit from{" "}
              <em>$10M to $40M in two years</em> — closing the tenure with a
              London Times &ldquo;Best Places to Work&rdquo; recognition.
            </p>
            <div className="eng-metrics">
              <div className="metric">
                <div className="k">
                  $175M<span className="arrow">→</span>$240M
                </div>
                <div className="label">Revenue · 2 Years</div>
              </div>
              <div className="metric">
                <div className="k">
                  $10M<span className="arrow">→</span>$40M
                </div>
                <div className="label">Profit · 4× Growth</div>
              </div>
              <div className="metric">
                <div className="k">Top 100</div>
                <div className="label">
                  London Times · Best Places to Work
                </div>
              </div>
            </div>
            <div className="eng-outcome">
              Proof that commercial performance and cultural strength compound
              — they are not trade-offs.
            </div>
          </div>
        </article>

        {/* Hilti AU */}
        <article className="engagement">
          <div className="eng-meta">
            <div className="eng-role">General Manager · Hilti Australia</div>
            <div className="eng-logo" style={{ color: "var(--accent)" }}>
              Hilti
            </div>
            <div className="eng-tags">
              <span className="tag">Turnaround</span>
              <span className="tag">Operations</span>
            </div>
          </div>
          <div>
            <p className="eng-narrative">
              Turned the business from a <em>$2M loss to $6M profit</em>, with
              revenue climbing from $35M to $55M over three years.
            </p>
            <div className="eng-metrics">
              <div className="metric">
                <div className="k">
                  −$2M<span className="arrow">→</span>+$6M
                </div>
                <div className="label">Profit Swing</div>
              </div>
              <div className="metric">
                <div className="k">
                  $35M<span className="arrow">→</span>$55M
                </div>
                <div className="label">Revenue · 3 Years</div>
              </div>
              <div className="metric">
                <div className="k">57%</div>
                <div className="label">Top-line Growth</div>
              </div>
            </div>
            <div className="eng-outcome">
              A textbook turnaround — honest diagnosis, tight operating
              rhythm, and a team that believed the plan.
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
