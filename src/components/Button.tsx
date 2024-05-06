import Link from "next/link";

interface Props {
  name: string;
  className?: string;
  url: string;
}

const Button = ({ name, className, url }: Props) => {
  return (
    <Link
      href={url}
      className={`${className} border py-3 px-8 w-fit border-black rounded-3xl font-semibold capitalize`}
    >
      {name}
    </Link>
  );
};

export default Button;
