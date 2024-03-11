import "./homeCard.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function CardHome({ picture, title, href }) {
  return (
    <Link href={href} passHref={true} className="card">
      <div className="card__container">
        <Image
          src={picture}
          alt={`Image ${title}`}
          width={100}
          height={100}
          unoptimized
        />
        <div className="card__container__title">
          <h3 className="card__container__title__span">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CardHome;
