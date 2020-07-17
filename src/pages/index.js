import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="main-wrapper">
        <div className="main-section">
          <section>
            <h1>About Me</h1>
            <p>
              こんにちは。ソフトウェアエンジニアをしています。
            </p>
          </section>
          <section>
            <h1>Experience</h1>
            <p>
              hogehoge
            </p>
          </section>
          <section>
            <h1>Latest Blog Posts</h1>
            <p>
              hogehoge
            </p>
          </section>
          <section>
            <h1>Links</h1>
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