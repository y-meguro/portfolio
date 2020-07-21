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
            <h1 className="container__section-title">About Me</h1>
            <p>こんにちは。ソフトウェアエンジニアをしています。</p>
          </section>
          <section className="container__section">
            <h1 className="container__section-title">Experience</h1>
            <p>hogehoge</p>
          </section>
          <section className="container__section">
            <div className="container__section-inner">
              <h1 className="container__section-title">Blog Posts</h1>
              <div className="container__contents">
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
