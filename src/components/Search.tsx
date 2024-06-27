import "../style/search.css";

interface Props {
  className: any;
}

export const Search = ({ className }: Props): JSX.Element => {
  return <img className={`search ${className}`} alt="Search" />;
};