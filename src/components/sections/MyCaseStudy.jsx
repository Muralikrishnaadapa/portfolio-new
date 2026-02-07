import Data from "@data/sections/my-case-study.json";
import Date from "@library/date";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const MyCaseStudy = () => {
  return (
    <>
      <section id="case-study" style={{ paddingTop: '80px' }}>
        <div className="container ">
          <div className="row align-items-center mil-mb-30">
            <div className="col-lg-6 mil-mb-30">
              <h3 className="mil-up">My Case Study</h3>
            </div>
          </div>
          <div className="row">
            {Data.map((item, key) => (
              <div className="row mb-4" key={`blog-post-${key}`}>
                <div className="col-md-6">
                  {item.projectLink ? (
                    <Link href={item.projectLink}>
                      <div className="mil-blog-card" style={{ cursor: 'pointer' }}>
                        <div className="mil-cover-frame mil-up">
                          <img src={item.image} alt={item.title} />
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="mil-blog-card">
                      <div className="mil-cover-frame mil-up">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="col-md-6 container  mil-up  mil-blog-card mil-blog-content mil-post-descr"
                  style={{ alignItems: "center", flex: 1 }}
                >
                  <h4 className="mil-mb-10 mil-text-lg">{item.title}</h4>

                  <ul className="custom-list">
                    {item.points.map((point, key) => (
                      <li key={`point-${key}`}>{point}</li>
                    ))}
                  </ul>
                  <h1
                    className="mil-up mil-text-sm mil-mb-10  "
                    dangerouslySetInnerHTML={{ __html: "Project Overview" }}
                  />
                  <h6
                    className="mil-up   mil-mb-10 mil-case-study-description  "
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <h1
                    className="mil-up mil-mb-10 mil-text-sm mil-blog-content"
                    style={{ display: item.note ? "flex" : "none" }}
                    dangerouslySetInnerHTML={{ __html: "Note:" }}
                  />
                  <a
                    href={"mailto:muraliadapauxui@gmail.com"}
                    target="_blank"
                    className="mil-up mil-case-study-content mil-mb-10 "
                    style={{
                      color: "#0645AD",
                      cursor: "pointer",
                      display: item?.note ? "flex" : "none",
                      marginTop: 10,
                    }}
                    dangerouslySetInnerHTML={{ __html: item?.note }}
                  />
                  <h1
                    className="mil-up mil-mb-10 mil-text-sm mil-blog-content "
                    style={{ display: item.caseStudy ? "flex" : "none" }}
                    dangerouslySetInnerHTML={{ __html: "Case Study" }}
                  />
                  <a
                    href={item.caseStudyLink}
                    target="_blank"
                    className="mil-up mil-case-study-content mil-mb-10 "
                    style={{ color: "#0645AD", cursor: "pointer" }}
                    dangerouslySetInnerHTML={{ __html: item.caseStudy }}
                  />
                  <h5
                    className="mil-up mil-mb-0 mil-mt-10  mil-text-sm "
                    style={{
                      display: item.protoType ? "flex" : "none",
                      paddingTop: item?.caseStudy ? 0 : 10,
                    }}
                    dangerouslySetInnerHTML={{ __html: "Prototype link" }}
                  />
                  <a
                    href={item.protoTypeLink}
                    target="_blank"
                    className="mil-up  mil-case-study-content mil-mb-10 "
                    style={{ color: "#0645AD", cursor: "pointer" }}
                    dangerouslySetInnerHTML={{ __html: item.protoType }}
                  />
                </div>
                {key !== Data.length - 1 && (
                  <div className="col-12 mil-mt-10  ">
                    <hr
                      style={{
                        borderWidth: "0.1px",
                        width: "50%",
                        margin: "0 auto",
                        borderColor: "rgba(0, 0, 0, .1)",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyCaseStudy;
