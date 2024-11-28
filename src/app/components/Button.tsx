import "./styles/button.css";

interface ButtonProps {
  text: string; // Primary text
  alternateText: string; // Alternate text on hover
  onClick?: () => void; // Optional click handler
}

const Button57: React.FC<ButtonProps> = ({ text, alternateText, onClick }) => {
  return (
    <>
      <button className="button-57" role="button" onClick={onClick}>
        <span className="text">{text}</span>
        <span>{alternateText}</span>
      </button>
    </>
  );
};

export default Button57;
