import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "../../components/table";

function ShoeTable() {
  const { slug } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("../src/json/shoes.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const marqueData = jsonData.find((item) => item.slug === slug);
        setData(marqueData);
      })
      .catch((error) => {
        console.error("Erreur :", error);
      });
  }, [slug]);

  return <div>{data ? Table(data) : <p>Chargement en cours...</p>}</div>;
}

export default ShoeTable;
