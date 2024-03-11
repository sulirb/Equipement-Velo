import "./listCard.scss";
import Link from "next/link";
import Image from "next/image";

function CardList({ picture, title, href, content }) {
  return (
    <Link href={href} passHref={true} className="anchor-listcard">
      <div className="listcard">
        <div className="listcard__image">
          <Image
            src={picture}
            width={100}
            height={100}
            unoptimized
            alt="logo"
          />
        </div>
        <div className="listcard__flex">
          <h3 className="listcard__flex-title">{title}</h3>
          <div
            className="listcard__flex-content"
            dangerouslySetInnerHTML={{
              __html: content.replace(/<[^>]*>/g, "").substring(0, 200) + "...",
            }}
          ></div>
        </div>
      </div>
    </Link>
  );
}

export default CardList;
