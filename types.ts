interface language {
  name: string;
}

export interface Country {
  name: string;
  code: string;
  native: string;
  currency: string;
  emoji: string;
  languages: language[];
}

export interface CountriesProps {
  countries: Country[];
}
