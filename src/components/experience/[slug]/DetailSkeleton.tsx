import SkeletonContainer from "#/src/components/common/Skeleton/SkeletonContainer";
import Skeleton from "#/src/components/common/Skeleton";

const DetailSkeleton: React.FC = () => {
  return (
    <div className="flex w-full mx-auto">
      <SkeletonContainer>
        <Skeleton className="w-full h-4 mt-2.5 mb-2" />
        <Skeleton className="w-full h-4 mt-2.5 mb-2.5" />
        <Skeleton className="w-64 h-4 mb-4" />
        <Skeleton className="w-48 h-4 mb-10" />
        <Skeleton className="w-full h-44 mb-2.5" />
      </SkeletonContainer>
    </div>
  );
};

export default DetailSkeleton;
