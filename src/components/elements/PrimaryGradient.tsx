type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  id: string;
}
const PrimaryGradient = ({ id }: Props) => (
  <linearGradient
    id={ id }
    x1="0%"
    y1="0%"
    x2="100%"
    y2="100%"
  >
    <stop offset="0%" stopColor="#5190FE"/>
    <stop offset="100%" stopColor="#C4ADFF"/>
  </linearGradient>
);

export default PrimaryGradient;
