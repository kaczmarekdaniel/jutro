import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

const GET_POLAND = gql`
  query GetPoland {
    country(code: "PL") {
      name
      code
      emoji
    }
  }
`;

export default function Countries() {
  const { data, loading, error } = useQuery(GET_POLAND);

  if (loading) {
    return (
      <h2>
        <a href="#loading" aria-hidden="true" id="loading"></a>
        Loading...
      </h2>
    );
  }

  console.log(data);
  if (error) {
    console.error(error);
    return null;
  }

  return (
    <Link href="countries/PL">
      {data.country.emoji} {data.country.name} ({data.country.code})
    </Link>
  );
}
