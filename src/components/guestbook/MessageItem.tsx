import dayjs from "dayjs";
import Button from "#/src/components/Controls/Button";
import {GuestbookTypes} from "#/src/types";

type MessageItemProps = {
  item: GuestbookTypes;
  user: any;
  onDelete: (id: string) => void;
};

const MessageItem: React.FC<MessageItemProps> = ({item, user, onDelete}) => {
  const isMine = user && item.created_by === user.name;
  const updatedAt = dayjs(new Date(item.updated_at)).format("d MMM YYYY h:mm A");

  const handleClickDelete = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    await onDelete(item.id);
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="prose dark:prose-dark w-full break-words">{item.body}</div>
      <div className="flex items-center space-x-3">
        <p className="text-sm text-gray-500">{item.created_by}</p>
        <span className=" text-gray-200 dark:text-gray-800">/</span>
        <p className="text-sm text-gray-400 dark:text-gray-600">{updatedAt}</p>
        {isMine && (
          <>
            <span className="text-gray-200 dark:text-gray-800">/</span>
            <Button
              className="text-sm text-red-600 dark:text-red-400 bg-gray-50 dark:!bg-gray-900 hover:bg-peri-100"
              onClick={handleClickDelete}
              label="Delete"
              variant="default"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
