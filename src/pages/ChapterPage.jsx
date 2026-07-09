import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import ChapterHero from "../components/chapter/ChapterHero";
import ClassList from "../components/chapter/ClassList";
import ChapterCTA from "../components/chapter/ChapterCTA";
import { getChapterBySlug } from "../lib/curriculum";

export default function ChapterPage() {
  const { slug } = useParams();
  const chapter = getChapterBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (chapter) {
      document.title = `${chapter.title} — Chapter ${chapter.number} | NLT Mentorship`;
    }
  }, [chapter]);

  if (!chapter) return <Navigate to="/" replace />;

  return (
    <>
      <ChapterHero chapter={chapter} />
      <ClassList chapter={chapter} />
      <ChapterCTA chapter={chapter} />
    </>
  );
}
