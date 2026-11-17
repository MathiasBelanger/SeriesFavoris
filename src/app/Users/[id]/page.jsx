import Profil from "@/app/_components/Profil";
import FavorisUser from "@/app/_components/FavorisUser";
import { redirect } from "next/navigation";
import { getUser } from "@/app/_data/data";
import { getServerSession } from "@/lib/auth";
import "./User.css";

const UserPage = async ({ params }) => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/`);
  }
  const { id } = await params;
  const UserInfo = await getUser(id);

  return (
    <main className="user-page">
      <Profil name={session.user.name} />
      <div className="user-content">
        <FavorisUser name={UserInfo.name} id={UserInfo.id} />
      </div>
    </main>
  );
};
export default UserPage;
