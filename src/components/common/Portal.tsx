import ReactDOM from "react-dom";

type PortalTypes = {
  children: React.ReactNode;
  selector: string;
};

const Portal = ({children, selector}: PortalTypes) => {
  const element = typeof window !== "undefined" && document?.querySelector(selector)!;
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
