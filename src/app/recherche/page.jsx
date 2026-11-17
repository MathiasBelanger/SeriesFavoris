import { getServerSession } from "@/lib/auth";
import Recherche from "@/app/_components/Recherche"
import { redirect } from "next/navigation";

const RecherchePage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/`);
  }
  return <Recherche name={session.user.name}/>;
};

export default RecherchePage;