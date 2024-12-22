import { IoIosArrowForward } from "react-icons/io";

// Define the type of props
interface SecHeaderProps {
  title: string;
  para: string;  // Define the type for 'para' as string (or change to your actual type)
}

const SecHeader: React.FC<SecHeaderProps> = ({ title, para }) => {
  return (
    <div className="second-header">
      <h2>{title}</h2>
      <p>
         Home
        <IoIosArrowForward />
        <span>{para}</span>
      </p>
    </div>
  );
}

export default SecHeader;
