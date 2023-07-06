import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItemContainer from "./Container";
import BlogPostItemHeader from "./Header";
import BlogPostItemContent from "./Content";
import BlogPostItemFooter from "./Footer";
// @ts-ignore
import Image from "@theme/IdealImage";
// apply a bottom margin in list view
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? "margin-bottom--xl" : undefined;
}
export default function BlogPostItem({ children, className }) {
  const containerClassName = useContainerClassName();
  const { frontMatter, assets } = useBlogPost();
  const image = assets.image ?? frontMatter.image;
  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      {image && <Image img={image} />}
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}