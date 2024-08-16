import React from "react";
import Layout from "@theme/Layout";
import { Content } from "@theme/BlogPostPage";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import { inject } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Head from "@docusaurus/Head";
import BlogSidebar from "@theme/BlogSidebar";
import PaginatorNavLink from "@theme/PaginatorNavLink";
import BlogPostItem from "../theme/BlogPostItem";
import { notify } from "../helpers";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Qotd } from "./Qotd";

interface HomeProps {
  readonly recentPosts: readonly { readonly content: Content }[];
}

export function Home({ recentPosts }: HomeProps): JSX.Element {
  const [pageSize] = React.useState(15);
  const [page, setPage] = React.useState(1);
  const [posts, setPosts] = React.useState(recentPosts);
  const [usePaging, setUsePaging] = React.useState(true);

  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const paginate = function (array: any, pageSize: number, pageNumber: number) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
  };

  React.useEffect(() => {
    inject();
    const token = customFields.telegramToken.toString();
    const isActive = JSON.parse(
      customFields.isTelegramNotifierActive.toString()
    ) as boolean;
    if (isActive) {
      notify(token);
    }
  }, []);

  React.useEffect(() => {
    try {
      const uri = window.location.search;
      const id = Number(uri.replace(/\D+/g, ""));
      setPage(id == null || id == 0 ? 1 : id);
      setPosts(paginate(recentPosts, pageSize, page));
      setUsePaging(true);
    } catch (error) {
      setPage(1);
      setPosts(paginate(recentPosts, 1000, page));
      setUsePaging(false);
    }
  }, [page]);

  const items = recentPosts
    .slice(0, 10)
    .map((p) => p.content.frontMatter)
    .map(function ({ slug, title }) {
      return {
        permalink: `/blog/${slug}`,
        title,
      };
    });

  return (
    <Layout>
      <SpeedInsights />
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
              // @ts-ignore
              items: items,
              title: "Recents posts",
            }}
          />

          <main className="col col--7">
            <Qotd apiKey={customFields.apiKey.toString()} />
            {posts.map(({ content: BlogPostContent }) => (
              <BlogPostProvider
                key={BlogPostContent.metadata.permalink}
                content={BlogPostContent}
              >
                <BlogPostItem className={""}>
                  <BlogPostContent />
                </BlogPostItem>
              </BlogPostProvider>
            ))}
            <nav
              className="pagination-nav"
              aria-label="Blog list page navigation"
            >
              {page > 1 && usePaging && (
                <span onClick={() => setPage((p) => p - 1)}>
                  <PaginatorNavLink
                    isNext={false}
                    permalink={`?page=${page - 1}`}
                    title="Latest Post"
                  />
                </span>
              )}

              {Math.ceil(recentPosts.length / pageSize) != page &&
                usePaging && (
                  <span onClick={() => setPage((p) => p + 1)}>
                    <PaginatorNavLink
                      isNext={true}
                      permalink={`?page=${page + 1}`}
                      title="Older Post"
                    />
                  </span>
                )}
            </nav>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
