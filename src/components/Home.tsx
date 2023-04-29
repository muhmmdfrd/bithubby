import React from "react";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import { Content } from "@theme/BlogPostPage";
// @ts-ignore
import { BlogPostProvider } from "@docusaurus/theme-common/internal";
import { inject } from "@vercel/analytics";
import { getClient } from "../services";
import Head from "@docusaurus/Head";
import BlogSidebar from "@theme/BlogSidebar";

interface HomeProps {
  readonly recentPosts: readonly { readonly content: Content }[];
}

export function Home({ recentPosts }: HomeProps): JSX.Element {
  React.useEffect(() => {
    inject();
    getClient();
  }, []);

  const posts = recentPosts.slice(0, 10).map((p) => p.content.frontMatter);

  var items = posts.map(function ({ slug, title }) {
    return {
      permalink: `/blog/${slug}`,
      title,
    };
  });

  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="Hz32EOSPsM2PPGqD21hcTrx9oeYT0wYCeA_8nCcBCeg"
        />
      </Head>
      <div className="hero hero--dark hero--home shadow--lw">
        <div className="container">
          <div className="row">
            <div className="col col--9 col--offset-1">
              <h1 className="hero__title">Bithubby's Story</h1>
              <p className="hero__subtitle">
                A bit story from the future hubby
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container margin-top--xl margin-bottom--lg">
        <div className="row">
          <BlogSidebar
            sidebar={{
              items: items,
              title: "Recents posts",
            }}
          />

          <main className="col col--7">
            {recentPosts.map(({ content: BlogPostContent }) => (
              <BlogPostProvider
                key={BlogPostContent.metadata.permalink}
                content={BlogPostContent}
              >
                <BlogPostItem>
                  {BlogPostContent.frontMatter.image && (
                    <img
                      alt={BlogPostContent.frontMatter.description}
                      src={BlogPostContent.frontMatter.image}
                      style={{
                        width: 100 + "%",
                        maxWidth: 100 + "%",
                        height: "auto",
                      }}
                    />
                  )}
                  <BlogPostContent />
                </BlogPostItem>
              </BlogPostProvider>
            ))}
          </main>
        </div>
        {/* <div className="row">
          <div className="col col--5 col--offset-5">
            <PaginatorNavLink
              isNext
              permalink="/blog/page/2"
              title="Older Post"
            />
          </div>
        </div> */}
      </div>
    </Layout>
  );
}

export default Home;
