import "./main.styles.css";

export interface LoaderComponentProps {
  open: boolean;
}

export const Loader = (props: LoaderComponentProps) => {
  return (
    <div className={"ct-loader" + (props.open ? " ct-open" : "")}>
      <div className="spinner"></div>
      <h1>BusinessBuilders</h1>
      <small>Build your NFT empire</small>
      <small>Slow transaction? Read the documentation while you wait</small>
      <a
        href="http://docs.businessbuilders.city"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentation
      </a>
    </div>
  );
};
