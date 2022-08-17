import { supabase } from "../utils/supabase";
import Link from "next/link";
import { useUser } from "../context/user";

export default function Home({ lessons }) {
  const { user } = useUser();
  console.log({ user });
  return lessons.map((lesson) => (
    <div key={lesson.id}>
      <Link href={`/${lesson.id}`}>
        <h3>{lesson.title}</h3>
      </Link>

      <p>{lesson.description}</p>
    </div>
  ));
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from("lesson").select("*");
  return {
    props: {
      lessons,
    },
  };
};
