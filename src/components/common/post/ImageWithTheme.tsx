import Image from "next/image";
import {useTheme} from "next-themes";

const ImageWithTheme: React.FC = (props: any) => {
  const {theme} = useTheme();

  return <Image alt={props.alt} src={theme === "light" ? props.light : props.dark} {...props} />;
};

export default ImageWithTheme;
