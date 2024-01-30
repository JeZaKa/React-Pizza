import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={550}
    viewBox="0 0 280 550"
    backgroundColor="#f0f0f0"
    foregroundColor="#ecebeb"
  >
    <rect x="533" y="232" rx="3" ry="3" width="88" height="6" />
    <rect x="550" y="233" rx="3" ry="3" width="52" height="6" />
    <rect x="522" y="226" rx="3" ry="3" width="410" height="6" />
    <rect x="479" y="239" rx="3" ry="3" width="380" height="6" />
    <rect x="516" y="230" rx="3" ry="3" width="178" height="6" />
    <circle cx="572" cy="240" r="20" />
    <circle cx="138" cy="127" r="125" />
    <rect x="0" y="277" rx="20" ry="20" width="280" height="24" />
    <rect x="0" y="327" rx="10" ry="10" width="280" height="84" />
    <rect x="48" y="494" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="437" rx="10" ry="10" width="96" height="30" />
    <rect x="120" y="426" rx="25" ry="25" width="158" height="47" />
  </ContentLoader>
)

export default Skeleton