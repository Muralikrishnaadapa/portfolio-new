import Link from "next/link";

const TailorCaseStudy = () => {
  return (
    <>
      <section id="tailor-case-study" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mil-blog-card">
                <div className="mil-cover-frame mil-up">
                  <img src="/img/tailor/tailorcasestudy.png" alt="The Tailor Management Platform" />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 container mil-up mil-blog-card mil-blog-content mil-post-descr"
              style={{ alignItems: "center", flex: 1 }}
            >
              <h4 className="mil-mb-10 mil-text-lg">The Tailor Management Platform</h4>

              <ul className="custom-list">
                <li>Research</li>
                <li>UX Design</li>
                <li>UI Design</li>
              </ul>
              <h1
                className="mil-up mil-text-sm mil-mb-10"
                dangerouslySetInnerHTML={{ __html: "Project Overview" }}
              />
              <h6
                className="mil-up mil-mb-10 mil-case-study-description"
                dangerouslySetInnerHTML={{ __html: "The tailor management platform I've designed revolutionizes day-to-day operations for tailors and store owners, addressing their key pain points and streamlining their workflows..." }}
              />
              <h1
                className="mil-up mil-mb-10 mil-text-sm mil-blog-content"
                style={{ display: "flex" }}
                dangerouslySetInnerHTML={{ __html: "Note:" }}
              />
              <a
                href={"mailto:muraliadapauxui@gmail.com"}
                target="_blank"
                className="mil-up mil-case-study-content mil-mb-10"
                style={{
                  color: "#0645AD",
                  cursor: "pointer",
                  display: "flex",
                  marginTop: 10,
                }}
                dangerouslySetInnerHTML={{ __html: "This is an own product if you need to know more about this product please contact me." }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TailorCaseStudy;

