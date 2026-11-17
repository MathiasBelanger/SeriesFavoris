import Profil from "@/app/_components/Profil";
import { getServerSession } from "@/lib/auth";
import Serie from "@/app/_components/Serie";
import { redirect } from "next/navigation";
import { getAllDetails } from "@/app/_data/data";
import "./Serie.css";

const SeriePage = async ({ params }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/`);
  }
  const { slug } = await params;
  const FilmInfo = await getAllDetails(slug);
  return (
    <main className="serie-page">
      <Profil name={session.user.name} />

      <div className="serie-content">
        <Serie
          title={FilmInfo.title}
          overview={FilmInfo.overview}
          status={FilmInfo.status}
          trailer={FilmInfo.trailer}
        />
      </div>
    </main>
  );
};
export default SeriePage;
