import { request } from "graphql-request";
import Link from "next/link";
import { Country, CountriesProps } from "@/types";
const GET_COUNTRIES = `
  query {
    countries {
      name
      code
      native
      currency
      emoji
    }
  }
`;

const Countries: React.FC<CountriesProps> = ({ countries }: CountriesProps) => {
  return (
    <ul>
      {countries.map((country: Country) => (
        <li key={country.code}>
          <Link href={`countries/${country.code}`}>
            {country.emoji} {country.name} ({country.code})
          </Link>
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const endpoint = "https://countries.trevorblades.com/";
  const { countries } = await request(endpoint, GET_COUNTRIES);

  return {
    props: {
      countries,
    },
  };
}

export default Countries;
