import {useViewApi} from "#/src/hooks/query/useViewQuery";
import MetricCard from "#/src/components/common/post/metrics/MetricCard";

const Analytics: React.FC = () => {
  const {data} = useViewApi();

  const pageViews = new Number(data?.total);
  const link = "https://ashpor.com";

  return <MetricCard header="All-Time Views" link={link} metric={pageViews} isCurrency={false} />;
};

export default Analytics;
