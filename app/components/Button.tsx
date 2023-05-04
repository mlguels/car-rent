"use client";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
  return ( 
    <div 
      onClick={onClick}
      className="
        px-8
        py-2
        hover:bg-[#7594f2]
        bg-[#3563E9]
        transition
        font-semibold
        text-sm
        text-white
        rounded-lg
      "
    >
      {label}
    </div>
   );
}
 
export default Button;