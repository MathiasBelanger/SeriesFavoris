import Auth from "./_components/Auth";

export default async function AuthPage() {
  return (
    <main className="home-page">
      <section className="home-content" aria-labelledby="auth-title">
        <h1 id="auth-title" className="auth-title">
          Bienvenue sur le site de séries télé du cours Web 5 (mi-session)
        </h1>
        <Auth />
      </section>
    </main>
  );
}
