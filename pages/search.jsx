import Header from "../components/Header";
import Link from "next/link";
import { useLanguage } from "@components/LanguageContext";
import { useRouter } from "next/router";
import { postsData } from "../data/postsData";
import Image from "next/image";
import PostCard2 from "@components/PostCard2";

export default function SearchPage() {
  const { isTranslated } = useLanguage();

  const { q } = useRouter().query;
  const term = (q || "").toLowerCase();

  // Only filter by title
  const results = postsData.filter(
    (post) =>
      typeof post.title === "string" && post.title.toLowerCase().includes(term)
  );

  return (
    <main className="pageContainer">
      <Header
        title={
          <>
            Search results for: <span className="text-gray-500">{q}</span>
          </>
        }
        spanishTitle={
          <>
            Resultados de búsqueda para:&nbsp;
            <span className="text-gray-500">{q}</span>
          </>
        }
        translateBtn
        searchBar
      />

      {results.length ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-y-8 gap-y-4">
          {results.map((post) => (
            <li className="" tabIndex="-1" key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <PostCard2
                  title={post.title}
                  subtitle={post.subtitle}
                  image={post.featuredImage}
                  imagePosition="right"
                  size="medium"
                />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </main>
  );
}

{
  /* Display Categories */
}
{
  /* <p className="text-gray-500"> 
                         {post.category.map((cat, i) => (
                          <span key={i}>
                            {cat}
                            {i < post.category.length - 1 ? ", " : ""}
                          </span>
                          ))} 
                      </p> */
}
{
  /* Display Tags */
}
{
  /* <div className="text-sm mt-2">
                        {post.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-sm text-gray-500 bg-gray-200 rounded-full px-2 py-1 hover:bg-gray-300 transition mr-2"
                          >
                            {tag}
                            {i < post.tags.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </div> */
}
