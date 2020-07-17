import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="main-wrapper">
        <div className="main-section">
          <section>
            <h1 className="section-title">About Me</h1>
            <p>
              こんにちは。ソフトウェアエンジニアをしています。
            </p>
          </section>
          <section>
            <h1 className="section-title">Experience</h1>
            <p>
              hogehoge
            </p>
          </section>
          <section>
            <h1 className="section-title">Latest Blog Posts</h1>
            <p>
              hogehoge
            </p>
          </section>
          <section>
            <h1 className="section-title">Links</h1>
            <p>
              hogehoge
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
};

export default IndexPage;