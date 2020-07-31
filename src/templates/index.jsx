import React from 'react';
import moment from 'moment';
import config from '../../config';
import Layout from '../components/layout';
import '../assets/scss/container.scss';

const IndexPage = ({ pageContext }) => {
  return (
    <Layout>
      <div className="container">
        <div className="container__inner">
          <section className="container__section">
            <div className="container__section-inner">
              <h1 className="container__section-title">About Me</h1>
              <div className="container__summary">
                こんにちは。ソフトウェアエンジニアをしています。
                hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
              </div>
            </div>
          </section>
          <section className="container__section">
            <div className="container__section-inner">
              <h1 className="container__section-title">Experience</h1>
              <div className="container__experience-content">
                <div className="container__experience-company">株式会社プレイド</div>
                <div className="container__experience-info">
                  Software Engineer | Feb 2017 – Oct 2019 | Tokyo, Japan
                </div>
                <ul>
                  <li>hoge</li>
                  <li>hoge</li>
                  <li>hoge</li>
                </ul>
              </div>
              <div className="container__experience-content">
                <div className="container__experience-company">Yuzu Labs</div>
                <div className="container__experience-info">
                  Software Engineer Internship | Nov 2015 – Nov 2016 | San Francisco Bay Area
                </div>
                <ul>
                  <li>Survey application for clinical studies</li>
                  <li>Web API and Mobile application from scratch</li>
                  <li>Call tracking function</li>
                </ul>
              </div>
              <div className="container__experience-content">
                <div className="container__experience-company">日本アイ・ビー・エム株式会社</div>
                <div className="container__experience-info">
                  Software Consultant | Apr 2012 – Jun 2015 | Tokyo, Japan
                </div>
                <ul>
                  <li>hoge</li>
                  <li>hoge</li>
                  <li>hoge</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="container__section">
            <div className="container__section-inner">
              <h1 className="container__section-title">Blog Posts</h1>
              <div className="container__cards">
                {pageContext.blogs.map((blog) => {
                  const { title, description, url, image_url, published } = blog;
                  const date = moment(published).format('YYYY/M/D');
                  return (
                    <div className="container__blog-wrapper" key={url}>
                      <div className="container__blog-post">
                        <img
                          className="container__blog-thumbnail"
                          src={image_url}
                          alt="thumbnail"
                        />
                        <div className="container__blog-body">
                          <h5 className="container__blog-title">
                            <a
                              href={url}
                              className="container__blog-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {title}
                            </a>
                          </h5>
                          <div className="container__blog-description">{description}</div>
                          <div>
                            <a
                              href={url}
                              className="container__more-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Read more →
                            </a>
                          </div>
                        </div>
                        <div className="container__blog-footer">Published: {date}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="container__section-footer">
                <a
                  href={config.blog}
                  className="container__btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Blog
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
