import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { gql, request } from "graphql-request";
import { Country } from "@/types";

const GET_COUNTRY = gql`
  query ($code: ID!) {
    country(code: $code) {
      name
      code
      currency
      emoji
      languages {
        name
      }
    }
  }
`;

const Country: React.FC = () => {
  const router = useRouter();
  const { code } = router.query;
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await request(
        "https://countries.trevorblades.com",
        GET_COUNTRY,
        { code: `${code}` }
      );
      setCountry(data.country);
    };
    fetchData();
  }, [code]);

  if (!country) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Name: {country.name}</h1>
      <p>Code: {country.code}</p>
      <p>Flag: {country.emoji}</p>
      <p>Languages:</p>
      <ul>
        {country.languages.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Country;
