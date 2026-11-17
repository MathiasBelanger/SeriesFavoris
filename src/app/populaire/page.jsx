import { getServerSession } from "@/lib/auth";
import Serie from "@/app/_components/Populaire"
import { redirect } from "next/navigation";

const SeriePage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect(`/`);
  }
  return <Serie name={session.user.name}/>;
};

export default SeriePage;