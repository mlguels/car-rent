"use client"

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return ( 
    <main 
      className="
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4
      "
    >
      {children}
    </main>
   );
}
 
export default Container;