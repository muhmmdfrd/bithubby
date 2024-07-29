import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItemContainer from "./Container";
import BlogPostItemHeader from "./Header";
import BlogPostItemContent from "./Content";
import BlogPostItemFooter from "./Footer";
import Image from "@theme/IdealImage";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? "margin-bottom--xl" : undefined;
}
export default function BlogPostItem({ children, className }) {
  const containerClassName = useContainerClassName();
  const { frontMatter, assets } = useBlogPost();
  const image = assets.image ?? frontMatter.image;
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const imageUrl = customFields.cdnImageUrl.toString() + image;

  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      {image && <Image img={imageUrl} />}
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
