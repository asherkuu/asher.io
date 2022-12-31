import SkeletonContainer from "#/src/components/common/Skeleton/SkeletonContainer";
import Skeleton from "#/src/components/common/Skeleton";

const MessageSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2.5">
      <SkeletonContainer>
        <div className="py-2.5">
          <Skeleton className="w-9/12 h-2" />
        </div>
      </SkeletonContainer>
      <SkeletonContainer>
        <div className="flex gap-4 w-full py-2">
          <Skeleton className="w-20 h-2" />
          <Skeleton className="w-36 h-2" />
          <Skeleton className="w-20 h-2" />
        </div>
      </SkeletonContainer>
    </div>
  );
};

export default MessageSkeleton;
