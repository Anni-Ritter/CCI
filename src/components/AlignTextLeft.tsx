import "../style/align-text-left.css";

interface Props {
  className: any;
}

export const AlignTextLeft = ({ className }: Props): JSX.Element => {
  return <img className={`align-text-left ${className}`} alt="Align text left" />;
};