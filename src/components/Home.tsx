import React from "react";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import { Content } from "@theme/BlogPostPage";
// @ts-ignore
import { BlogPostProvider } from "@docusaurus/theme-common/internal";
import { inject } from "@vercel/analytics";
import { getClient } from "../services";
import Head from "@docusaurus/Head";

interface HomeProps {
  readonly recentPosts: readonly { readonly content: Content }[];
}

export function Home({ recentPosts }: HomeProps): JSX.Element {
  React.useEffect(() => {
    inject();
    getClient();
  }, []);
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
          <aside className="col col--3">
            <nav
              className="sidebar_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module thin-scrollbar"
              aria-label="Blog recent posts navigation"
            >
              <div className="sidebarItemTitle_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module margin-bottom--md">
                Recent posts
              </div>
              <ul className="sidebarItemList_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module clean-list">
                {recentPosts.slice(0, 10).map((v) => (
                  <li className="sidebarItem_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module">
                    <a
                      aria-current="page"
                      className="sidebarItemLink_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module"
                      href={`/blog/${v.content.frontMatter.slug}`}
                    >
                      {v.content.frontMatter.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
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
