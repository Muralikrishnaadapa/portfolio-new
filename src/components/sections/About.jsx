import Data from "@data/sections/about.json";
import LinesIcon from "@layouts/svg-icons/Lines";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      {/* about */}
      <section id="about">
        <div className="container mil-p-120-30">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div className="mil-mb-90">
                <h3
                  className="mil-up mil-mb-60 "
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
                <div
                  className="mil-text mil-up mil-mb-30"
                  style={{ textAlign: "justify" }}
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />

                <Link href={Data.link}>
                  <div className="mil-about-quote">
                    <h6
                      className="mil-quote mil-up"
                      dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="mil-about-photo mil-mb-90">
                <div className="mil-lines-place">
                  <LinesIcon />
                </div>
                <div
                  className="mil-up mil-img-frame"
                  style={{ paddingBottom: "160%" }}
                >
                  <img
                    src={Data.image.url}
                    alt={"about-image"}
                    className="mil-scale"
                    data-value-1="1"
                    data-value-2="1.2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
    </>
  );
};

export default AboutSection;
