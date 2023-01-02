import SkeletonContainer from "#/src/components/common/Skeleton/SkeletonContainer";
import Skeleton from "#/src/components/common/Skeleton";

const DetailSkelton: React.FC = () => {
  return (
    <SkeletonContainer>
      <div className="py-2.5">
        <Skeleton className="w-9/12 h-2" />
      </div>
    </SkeletonContainer>
  );
};

export default DetailSkelton;
