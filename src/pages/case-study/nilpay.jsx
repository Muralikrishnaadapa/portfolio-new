import Layouts from "@layouts/Layouts";
import Pentagon from "@layouts/pentagon/Index";
import Head from "next/head";
import { useEffect, useState } from "react";

const SECTIONS = [
  "overview",
  "project-outcome",
  "achievements",
  "design-success",
  "overall-impact",
  "design-system",
  "ui-design",
  "my-contribution"
];

const NilPayCaseStudy = () => {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const viewportMid = window.innerHeight * 0.35;
      let current = SECTIONS[0];

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMid && rect.bottom > 0) {
            current = SECTIONS[i];
            break;
          }
        }
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layouts noHeader={false} noFooter={false}>
      <Head>
        <title>myNILpay - Case Study</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>


      <div className="nilpay-page">
        {/* Top Header Bar */}
        <div className="top-header">
          <div className="container">
            <span className="brand-name">MYnilpay</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="main-content">
          {/* Banner: header + hero image, with diamond visible across both */}
          <div className="nilpay-banner-wrap">
            <div className="mil-animation-frame nilpay-diamond-overlay" aria-hidden="true">
              <div className="mil-animation nilpay-diamond-single nilpay-diamond-top-right mil-position-4">
                <Pentagon />
              </div>
              <div className="mil-animation nilpay-diamond-single nilpay-diamond-bottom-left mil-position-4">
                <Pentagon />
              </div>
            </div>
            {/* Title section */}
            <div className="nilpay-hero">
              <div className="nilpay-hero-content">
                <div className="container">
                  <div className="breadcrumbs">
                    <span>Home page / My Case Study</span>
                  </div>
                  <div className="main-title">
                    <h1>Welcome To <span className="project-name">myNILpay</span></h1>
                  </div>
                  <div className="read-more" onClick={() => {
                    const projectDetails = document.querySelector('.project-details');
                    if (projectDetails) {
                      projectDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}>
                    <span>READ MORE</span>
                    <div className="arrow-down">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero Image Section */}
            <div className="hero-image-section nilpay-hero-image-wrap">
              <img src="/img/nilpay/main-image.png" alt="myNILpay Hero Section" className="hero-image nilpay-hero-image-on-top" />
            </div>
          </div>

          {/* Project Details Section */}
          <div className="project-details">
            <div className="container">
              <div className="details-content">
                <div className="detail-item">
                  <span className="detail-label">Project Name:</span>
                  <span className="detail-value">myNILpay</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Client:</span>
                  <span className="detail-value">USA (Texas)</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Industry:</span>
                  <span className="detail-value">Fintech + SportsTech</span>
                </div>
              </div>
            </div>
          </div>

          {/* App Availability Section */}
          <div className="app-availability">
            <div className="container">
              <h2 className="availability-title">myNILpay is available now</h2>
              <div className="download-buttons">
                <a href="#" className="download-btn website">
                  <i className="fas fa-globe"></i>
                  <span>Website</span>
                </a>
                <a href="#" className="download-btn app-store">
                  <i className="fab fa-apple"></i>
                  <span>Download on the App Store</span>
                </a>
                <a href="#" className="download-btn google-play">
                  <i className="fab fa-google-play"></i>
                  <span>GET IT ON Google Play</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="main-content-section">
            <div className="container">
              <div className="content-layout">
                {/* Sidebar Navigation */}
                <div className="sidebar">
                  <div className="sidebar-scroll-line" aria-hidden="true" />
                  <nav className="sidebar-nav">
                    <ul className="nav-list">
                      <li className="nav-item">
                        <a
                          href="#overview"
                          className={`nav-link ${activeSection === "overview" ? "active" : ""}`}
                          onClick={(e) => handleNavClick(e, "overview")}
                        >
                          <span className="nav-indicator"></span>
                          <span className="nav-text">Overview</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#project-outcome"
                          className={`nav-link ${activeSection === "project-outcome" ? "active" : ""}`}
                          onClick={(e) => handleNavClick(e, "project-outcome")}
                        >
                          <span className="nav-indicator"></span>
                          <span className="nav-text">Project Outcome</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#achievements"
                          className={`nav-link ${activeSection === "achievements" ? "active" : ""}`}
                          onClick={(e) => handleNavClick(e, "achievements")}
                        >
                          <span className="nav-indicator"></span>
                          <span className="nav-text">Achievements</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#design-success"
                          className={`nav-link ${activeSection === "design-success" ? "active" : ""}`}
                          onClick={(e) => handleNavClick(e, "design-success")}
                        >
                          <span className="nav-indicator"></span>
                          <span className="nav-text">Design Success</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#overall-impact"
                          className={`nav-link ${activeSection === "overall-impact" ? "active" : ""}`}
                          onClick={(e) => handleNavClick(e, "overall-impact")}
                        >
                          <span className="nav-indicator"></span>
                          <span className="nav-text">Overall Impact</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#design-system"
                          className={`nav-link ${activeSection === "design-system" ? "active" : ""}`}
                          onClick={(e) => handleNavClick(e, "design-system")}
                        >
                          <span className="nav-indicator"></span>
                          <span className="nav-text">Design System</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#ui-design"
                          className={`nav-link ${activeSection === "ui-design" ? "active" : ""}`}
                          onClick={(e) => handleNavClick(e, "ui-design")}
                        >
                          <span className="nav-indicator"></span>
                          <span className="nav-text">UI Design</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#my-contribution"
                          className={`nav-link ${activeSection === "my-contribution" ? "active" : ""}`}
                          onClick={(e) => handleNavClick(e, "my-contribution")}
                        >
                          <span className="nav-indicator"></span>
                          <span className="nav-text">My Contribution</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* Main Content Area */}
                <div className="content-area">
                  {/* Overview Section */}
                  <section id="overview" className="content-section">
                    <h2 className="section-title">Overview</h2>
                    <div className="section-content">
                      <p className="content-paragraph">
                        <strong>myNILpay</strong> is a mobile & web platform for sports fans to support college student-athletes.
                        The platform enables fans to send money directly to their favorite athletes while ensuring
                        NCAA compliance and providing a safe, secure way for athletes to receive payments.
                      </p>
                      <p className="content-paragraph">
                        As the lead designer, I was responsible for creating a simple, trustworthy, and inviting
                        user experience that would appeal to both fans and athletes. The design needed to convey
                        professionalism while maintaining an approachable, sports-focused aesthetic.
                      </p>
                      <p className="content-paragraph">
                        The platform features athlete verification through .edu email addresses and school
                        affiliation, ensuring all participants are legitimate college athletes. Fans receive
                        meaningful digital art receipts as tokens of appreciation, creating a unique value
                        proposition in the NIL (Name, Image, Likeness) space.
                      </p>
                    </div>
                  </section>

                  {/* Project Outcome Section */}
                  <section id="project-outcome" className="content-section">
                    <h2 className="section-title">Project Outcome</h2>
                    <div className="section-content">
                      <ul className="outcome-list">
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            Launched core features: fan-to-athlete payments, athlete verification, and digital art receipts.
                          </span>
                        </li>
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            Loaded ~500,000 student athletes into the system from all NCAA divisions.
                          </span>
                        </li>
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            Created a search & discovery flow where fans can easily find athletes by name, sport, or school.
                          </span>
                        </li>
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            Built the onboarding flow for athletes to verify identity (.edu, school affiliation) and get paid.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Achievements Section */}
                  <section id="achievements" className="content-section">
                    <h2 className="section-title">Achievements</h2>
                    <div className="section-content">
                      <ul className="outcome-list">
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            Over 450+ student athletes have received real payments shortly after launch.
                          </span>
                        </li>
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            Got early endorsements & visibility from known names (e.g. Ice Cube, Nancy Lieberman, Andy Dalton).
                          </span>
                        </li>
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            Recognized in NIL policy & regulatory discussions at a national/government level.
                          </span>
                        </li>
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            Users report higher trust and clarity in understanding how payments work.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Design Success Section */}
                  <section id="design-success" className="content-section">
                    <h2 className="section-title">Design Success</h2>
                    <div className="section-content">
                      <ul className="outcome-list">
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            Designed an intuitive fan journey: simple search → select athlete → make payment → receive digital receipt/art.
                          </span>
                        </li>
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            Clean, mobile-friendly layout so fans can quickly pay from phone without confusion.
                          </span>
                        </li>
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            Athlete flow simplified so verification is easy and onboarding isn't overwhelming.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Overall Impact Section */}
                  <section id="overall-impact" className="content-section">
                    <h2 className="section-title">Overall Impact</h2>
                    <div className="section-content">
                      <ul className="outcome-list">
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            <strong>Democratized NIL:</strong> not just star athletes, but every student athlete has a chance to earn from fans.
                          </span>
                        </li>
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            <strong>Improved fan engagement:</strong> fans feel more connected because they can directly support athletes they like.
                          </span>
                        </li>
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            <strong>Built trust:</strong> transparency in payments, legally sound receipts, clean design all help users feel safe using the product.
                          </span>
                        </li>
                        <li className="outcome-item">
                          <span className="outcome-bullet"></span>
                          <span className="outcome-text">
                            <strong>Set a strong foundation for scaling:</strong> design and system built so new features can be added without breaking experience.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Design System Section */}
                  <section id="design-system" className="content-section">
                    <h2 className="section-title">Design System</h2>
                    <div className="section-content">
                      <p className="content-paragraph">
                        Created a comprehensive design system with consistent typography, color palettes,
                        and component libraries that ensure brand consistency across all touchpoints.
                      </p>
                    </div>
                  </section>

                  {/* UI Design Section */}
                  <section id="ui-design" className="content-section">
                    <h2 className="section-title">UI Design</h2>
                    <div className="section-content">
                      <p className="content-paragraph">
                        Designed intuitive user interfaces for both mobile and web platforms, focusing on
                        ease of use and clear information hierarchy.
                      </p>
                    </div>
                  </section>

                  {/* My Contribution Section */}
                  <section id="my-contribution" className="content-section">
                    <h2 className="section-title">My Contribution</h2>
                    <div className="section-content">
                      <p className="content-paragraph">
                        Led the entire design process from initial concept to final implementation, working
                        closely with development and product teams to ensure design feasibility and user needs alignment.
                      </p>
                    </div>
                  </section>

                  {/* Second Image Section */}
                  <div className="second-image-section">
                    <img src="/img/nilpay/second-image.png" alt="myNILpay Additional Content" className="second-image" />
                  </div>

                  {/* Third Image Section */}
                  <div className="third-image-section">
                    <img src="/img/nilpay/third-image.png" alt="myNILpay Additional Content" className="third-image" />
                  </div>

                  {/* Design System Section */}
                  <div className="design-system-section">
                    <img src="/img/nilpay/fourth-one.png" alt="myNILpay Design System" className="design-system-image" />
                  </div>

                  {/* UI Design Section */}
                  <div className="ui-design-section">
                    <h2 className="section-title">UI Design</h2>
                    <div className="ui-design-content">
                      <p className="ui-design-paragraph">
                        With a clear mission to support student-athletes, I approached the design phase of myNILpay with focus and determination. The goal was to create an intuitive platform that would bridge the gap between fans and athletes while ensuring compliance with NCAA regulations. Every design decision was made with simplicity, security, and user trust in mind, resulting in a seamless fan-to-athlete payment experience.
                      </p>
                      <p className="ui-design-paragraph">
                        The UI design process involved creating a smooth onboarding experience for athletes with .edu verification, simplified search and payment flows for fans to find and support 500,000 preloaded athletes, and the creation of digital art receipts that serve as both proof of payment and unique fan keepsakes. This approach ensured transparency while building trust between fans and athletes.
                      </p>
                      <p className="ui-design-paragraph">
                        The platform's success is evident in over 450 athletes receiving direct payments, attracting high-profile supporters like Ice Cube, Andy Dalton, and Nancy Lieberman. The project has gained recognition in national NIL discussions on Capitol Hill and has played a crucial role in democratizing NIL by empowering fans to directly support athletes they admire.
                      </p>
                    </div>
                  </div>

                  {/* Fifth Image Section */}
                  <div className="fifth-image-section">
                    <img src="/img/nilpay/fifth-one.png" alt="myNILpay Fifth Image" className="fifth-image" />
                  </div>

                  {/* My Contribution Section */}
                  <div className="my-contribution-section">
                    <h2 className="section-title">My Contribution</h2>
                    <div className="my-contribution-content">
                      <ul className="contribution-list">
                        <li>Talked with athletes and fans to learn what they needed and what problems they faced.</li>
                        <li>Planned how users move through the app from landing → search → payment → receipt.</li>
                        <li>Created wireframes and prototypes for main flows like athlete signup, fan search, payments, and receipts.</li>
                        <li>Worked with the legal team to make sure the design was clear, trustworthy, and NCAA-compliant.</li>
                        <li>Improved the design after testing with users making wording simpler, flows smoother, and trust signals stronger.</li>
                        <li>Worked closely with developers so the final product matched the design and worked well on all devices.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Override global wrapper overflow for sticky to work */
        body,
        body.nilpay-page-active .mil-wrapper,
        .mil-wrapper.nilpay-page-wrapper,
        .nilpay-page .mil-wrapper,
        .mil-wrapper,
        body.nilpay-page-active .mil-content,
        .nilpay-page .mil-content,
        .mil-content {
          overflow: visible !important;
        }
        
        .nilpay-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* CRITICAL: overflow must be visible for position: sticky to work */
        body {
          overflow: visible !important;
        }

        .nilpay-page {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #fff;
          overflow: visible !important;
          position: relative;
        }

        .nilpay-page .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .nilpay-page .top-header {
          background-color: #2a2a2a;
          height: 40px;
          display: flex;
          align-items: center;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }

        .nilpay-page .brand-name {
          color: white;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 1px;
          padding: 0 20px;
        }

        .nilpay-page .main-content {
          margin-top: 40px;
        }

        .nilpay-page .nilpay-hero {
          position: relative;
          background-color: #fff;
        }

        .nilpay-page .nilpay-hero-content {
          position: relative;
          padding: 80px 0 60px;
        }

        .nilpay-page .nilpay-banner-wrap {
          position: relative;
          overflow: hidden;
        }

        .nilpay-page .nilpay-banner-wrap .nilpay-diamond-overlay {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          animation: none;
          z-index: 2;
        }

        .nilpay-page .nilpay-hero-image-wrap {
          position: relative;
        }

        .nilpay-page .nilpay-hero-image-wrap .hero-image.nilpay-hero-image-on-top {
          position: relative;
          z-index: 1;
        }

        .nilpay-page .nilpay-banner-wrap .nilpay-diamond-single {
          width: 300px;
          height: 300px;
          transform: scale(2.2);
          opacity: 0.2;
        }

        .nilpay-page .nilpay-banner-wrap .nilpay-diamond-top-right {
          left: auto;
          right: 5%;
          top: 5%;
          bottom: auto;
        }

        .nilpay-page .nilpay-banner-wrap .nilpay-diamond-bottom-left {
          left: 0;
          bottom: 5%;
          right: auto;
          top: auto;
          transform: scale(1.2);
        }

        .nilpay-page .nilpay-banner-wrap .nilpay-diamond-single .mil-pentagon div {
          border-top-width: 0.5px;
          border-top-style: solid;
          border-top-color: rgba(100, 70, 50, 0.92);
        }

        .nilpay-page .title-section {
          background: white;
          padding: 40px 0 20px;
        }

        .nilpay-page .breadcrumbs {
          margin-bottom: 20px;
        }

        .nilpay-page .breadcrumbs span {
          color: #999;
          font-size: 14px;
          font-weight: 400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .nilpay-page .main-title {
          margin-bottom: 20px;
        }

        .nilpay-page .main-title h1 {
          font-size: 48px;
          font-weight: 700;
          color: #000;
          line-height: 1.2;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .nilpay-page .project-name {
          color: #666;
          font-weight: 600;
        }

        .nilpay-page .read-more {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nilpay-page .read-more:hover {
          transform: translateY(-2px);
        }

        .nilpay-page .read-more span {
          font-weight: 600;
          color: #000;
          font-size: 14px;
        }

        .nilpay-page .arrow-down {
          width: 30px;
          height: 30px;
          background: #f0f0f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .nilpay-page .arrow-down i {
          font-size: 12px;
          color: #666;
        }

        .nilpay-page .read-more:hover .arrow-down {
          background: #e0e0e0;
          transform: translateY(2px);
        }

        .nilpay-page .hero-image-section {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f8f9fa;
          padding: 0;
        }

        .nilpay-page .hero-image {
          width: 100%;
          max-width: 1200px;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .nilpay-page .project-details {
          padding: 60px 0;
          margin-left: 0;
          margin-right: 0;
          margin-bottom: 60px;
        }

        .nilpay-page .details-content {
          display: flex;
          gap: 60px;
          margin: 0 auto;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          max-width: 1200px;
        }

        .nilpay-page .detail-item {
          display: flex;
          flex-direction: row;
          gap: 8px;
          align-items: center;
          white-space: nowrap;
        }

        .nilpay-page .detail-label {
          font-size: 16px;
          color: #666;
          font-weight: 400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .nilpay-page .detail-value {
          font-size: 16px;
          color: #000;
          font-weight: 700;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .nilpay-page .app-availability {
          background: #f5f5f5;
          padding: 30px 0;
          text-align: center;
          margin-bottom: 60px;
        }

        .nilpay-page .availability-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .nilpay-page .download-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin: 0;
        }

        .nilpay-page .download-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #000;
          color: white;
          padding: 10px 18px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          min-width: 160px;
          justify-content: center;
        }

        .nilpay-page .download-btn:hover {
          background: #333;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .nilpay-page .download-btn i {
          font-size: 16px;
        }

        .nilpay-page .download-btn span {
          font-size: 12px;
        }

        .nilpay-page .main-content-section {
          background: white;
          padding: 80px 0;
          position: relative;
          min-height: 100vh;
          overflow: visible !important;
        }
        
        .nilpay-page .main-content-section .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
          overflow: visible !important;
        }

        .nilpay-page .content-layout {
          display: flex !important;
          flex-direction: row !important;
          gap: 80px !important;
          align-items: flex-start;
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
          overflow: visible !important;
        }

        .nilpay-page .sidebar {
          position: -webkit-sticky !important;
          position: sticky !important;
          top: 100px !important;
          align-self: flex-start;
          width: 220px !important;
          min-width: 220px !important;
          max-width: 220px !important;
          height: fit-content;
          max-height: calc(100vh - 120px) !important;
          overflow-y: auto;
          padding-left: 24px;
          z-index: 999 !important;
          transition: all 0.3s ease;
          flex: 0 0 220px !important;
          flex-shrink: 0 !important;
          flex-grow: 0 !important;
          background: white;
          order: 1;
          will-change: transform;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        .nilpay-page .sidebar-scroll-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #E5E7EB;
          border-radius: 1px;
          z-index: 0;
          pointer-events: none;
        }

        .nilpay-page .sidebar-nav {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1200px) {
          .nilpay-page .content-layout {
            flex-direction: column;
            gap: 40px;
          }
          
          .nilpay-page .sidebar {
            width: 100%;
            border-bottom: 2px solid #E5E7EB;
            padding-left: 0;
            padding-bottom: 20px;
            max-height: none;
            overflow-y: visible;
          }
          
          .nilpay-page .sidebar {
            position: relative;
            top: auto;
            align-self: flex-start;
          }
          
          .nilpay-page .nav-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
          
          .nilpay-page .nav-item {
            margin-bottom: 0;
          }
          
          .nilpay-page .nav-link {
            padding: 8px 0;
          }
          
          .nilpay-page .nav-indicator {
            display: none;
          }
          
          .nilpay-page .content-area {
            max-width: 100%;
          }
          
          .nilpay-page .content-area.with-sidebar {
            margin-left: 0;
          }
        }
        
        .nilpay-page .content-area {
          flex: 1 1 auto !important;
          margin-left: 0 !important;
          padding-left: 0 !important;
          min-width: 0;
          flex-grow: 1 !important;
          flex-shrink: 1 !important;
          flex-basis: auto !important;
          order: 2;
          width: auto;
        }
        
        .nilpay-page .content-area.with-sidebar {
          margin-left: 0;
          padding-left: 0;
        }
        
        
        .nilpay-page .sidebar::-webkit-scrollbar {
          width: 4px;
        }
        
        .nilpay-page .sidebar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .nilpay-page .sidebar::-webkit-scrollbar-thumb {
          background: #E5E7EB;
          border-radius: 2px;
        }
        
        .nilpay-page .sidebar::-webkit-scrollbar-thumb:hover {
          background: #D1D5DB;
        }

        .nilpay-page .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nilpay-page .nav-item {
          margin-bottom: 0;
        }

        .nilpay-page .nav-link {
          display: flex;
          align-items: center;
          padding: 14px 0 14px 0px;
          text-decoration: none;
          color: #333;
          font-weight: 400;
          position: relative;
          pointer-events: auto;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          transition: color 0.25s ease;
        }

        .nilpay-page .nav-link:hover {
          color: #8B5CF6;
        }

        .nilpay-page .nav-link:active,
        .nilpay-page .nav-link:focus {
          color: #8B5CF6;
          outline: none;
        }

        .nilpay-page .nav-link.active {
          color: #8B5CF6;
          font-weight: 600;
        }

        .nilpay-page .nav-link.active .nav-indicator {
          background: #8B5CF6;
          transition: background 0.25s ease, top 0.2s ease, bottom 0.2s ease;
        }

        .nilpay-page .nav-link.active .nav-text {
          color: #8B5CF6;
        }

        .nilpay-page .nav-indicator {
          position: absolute;
          left: -24px;
          top: 6px;
          bottom: 6px;
          width: 2px;
          min-height: 20px;
          margin: 0;
          transition: background 0.25s ease, top 0.2s ease, bottom 0.2s ease;
          background: transparent;
          border-radius: 0;
          pointer-events: none;
        }

        .nilpay-page .nav-text {
          font-size: 15px;
          line-height: 1.5;
        }


        .nilpay-page .content-section {
          display: block;
          animation: fadeIn 0.5s ease-in-out;
          scroll-margin-top: 150px;
          margin-bottom: 100px;
          padding-top: 0;
        }

        .nilpay-page .section-title {
          font-size: 28px;
          font-weight: 700;
          color: #000;
          margin-bottom: 32px;
          line-height: 1.3;
          scroll-margin-top: 150px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .nilpay-page .section-content {
          line-height: 1.8;
        }

        .nilpay-page .content-paragraph {
          font-size: 16px;
          color: #333;
          margin-bottom: 24px;
          line-height: 1.8;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .nilpay-page .content-paragraph strong {
          font-weight: 600;
          color: #000;
        }

        .nilpay-page .outcome-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nilpay-page .outcome-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          gap: 16px;
        }

        .nilpay-page .outcome-bullet {
          width: 6px;
          height: 6px;
          background: #333;
          border-radius: 50%;
          margin-top: 10px;
          flex-shrink: 0;
        }

        .nilpay-page .outcome-text {
          font-size: 16px;
          color: #333;
          line-height: 1.8;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .nilpay-page .second-image-section,
        .nilpay-page .third-image-section,
        .nilpay-page .design-system-section,
        .nilpay-page .fifth-image-section {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f8f9fa;
          padding: 40px 0;
          margin: 40px 0;
          min-height: 200px;
        }

        .nilpay-page .second-image,
        .nilpay-page .third-image,
        .nilpay-page .design-system-image,
        .nilpay-page .fifth-image {
          width: 100%;
          max-width: 1200px;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .nilpay-page .figma-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .nilpay-page .figma-section {
          margin-bottom: 50px;
        }

        .nilpay-page .figma-title {
          font-size: 28px;
          font-weight: 700;
          color: #000;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .nilpay-page .figma-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nilpay-page .figma-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          gap: 16px;
        }

        .nilpay-page .figma-bullet {
          width: 6px;
          height: 6px;
          background: #333;
          border-radius: 50%;
          margin-top: 10px;
          flex-shrink: 0;
        }

        .nilpay-page .figma-text {
          font-size: 16px;
          color: #333;
          line-height: 1.8;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .nilpay-page .figma-text strong {
          font-weight: 600;
          color: #000;
        }

        .nilpay-page .my-contribution-section {
          margin: 60px 0;
          background: white;
          border-radius: 12px;
          padding: 40px;
        }

        .nilpay-page .my-contribution-content {
          max-width: 800px;
        }

        .nilpay-page .contribution-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nilpay-page .contribution-list li {
          font-size: 16px;
          line-height: 1.7;
          color: #333;
          margin-bottom: 16px;
          padding-left: 24px;
          position: relative;
        }

        .nilpay-page .contribution-list li:before {
          content: "•";
          color: #007bff;
          font-weight: bold;
          position: absolute;
          left: 0;
          top: 0;
        }

        .nilpay-page .ui-design-section {
          margin: 60px 0;
        }

        .nilpay-page .ui-design-content {
          max-width: 800px;
        }

        .nilpay-page .ui-design-paragraph {
          font-size: 16px;
          color: #333;
          margin-bottom: 20px;
          line-height: 1.7;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .nilpay-page .main-title h1 {
            font-size: 36px;
          }
          
          .nilpay-page .project-details {
            margin-left: 20px;
            margin-right: 20px;
          }
          
          .nilpay-page .app-availability {
            margin-left: 20px;
            margin-right: 20px;
          }
          
          .nilpay-page .content-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .nilpay-page .sidebar {
            position: static;
            order: 2;
          }
          
          .nilpay-page .content-area {
            order: 1;
          }
          
          .nilpay-page .nav-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          
          .nilpay-page .nav-item {
            margin-bottom: 0;
          }
          
          .nilpay-page .nav-link {
            padding: 8px 16px;
            background: #f8f9fa;
            border-radius: 20px;
            white-space: nowrap;
          }
          
          .nilpay-page .nav-indicator {
            display: none;
          }
          
          .nilpay-page .details-content {
            flex-direction: column;
            gap: 15px;
            align-items: center;
          }
        }
      `}</style>
    </Layouts>
  );
};

export default NilPayCaseStudy;

