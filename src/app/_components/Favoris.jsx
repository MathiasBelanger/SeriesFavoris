"use client";
import Link from "next/link";
import SuprimerBouton from "@/app/_components/SuprimerBouton";

const Favoris = ({ title, slug }) => {
  return (
    <li className="serie-favorite-item">
      <Link
        href={`/series/${slug}`}
        className="serie-favorite-link"
        title={title}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <path
            d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{title}</span>
      </Link>
      <SuprimerBouton slug={slug} />
    </li>
  );
};

export default Favoris;
