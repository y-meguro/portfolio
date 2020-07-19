import React from "react";
import Layout from "../components/layout";
import "../assets/scss/container.scss";


const IndexPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="container__inner">
          <section className="container__section">
            <h1 className="container__section-title">About Me</h1>
            <p>
              こんにちは。ソフトウェアエンジニアをしています。
            </p>
          </section>
          <section className="container__section">
            <h1 className="container__section-title">Experience</h1>
            <p>
              hogehoge
            </p>
          </section>
          <section className="container__section">
            <h1 className="container__section-title">Latest Blog Posts</h1>
            <p>
              hogehoge
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;