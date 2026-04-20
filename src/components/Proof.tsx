import Image from "next/image";

export function Proof() {
  return (
    <section className="proof">
      <div className="wrap">
        <div className="proof-inner">
          <div className="proof-label">
            Leadership tenure across multi-nationals that collectively created
            billions in shareholder value
          </div>
          <div className="logos">
            <div className="logo-img">
              <Image
                src="/lord.jpg"
                alt="LORD Corporation"
                width={1647}
                height={463}
                sizes="(max-width: 900px) 45vw, 280px"
              />
            </div>
            <div className="logo-img">
              <Image
                src="/hilti.jpg"
                alt="Hilti"
                width={800}
                height={161}
                sizes="(max-width: 900px) 45vw, 280px"
              />
            </div>
            <div className="logo-img">
              <Image
                src="/jameshardie.png"
                alt="James Hardie"
                width={860}
                height={240}
                sizes="(max-width: 900px) 45vw, 280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
