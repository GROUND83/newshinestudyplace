import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

export default function AlertDiglogDeleteWrap({
  btnTitle,
  title,
  description,
  onClick,
}: {
  btnTitle: string;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild type="button">
        <Button type="button" variant={"destructive"}>
          {btnTitle}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel type="button">취소</AlertDialogCancel>
          <Button
            type="button"
            variant={"destructive"}
            onClick={onClick}
            asChild
          >
            <AlertDialogAction type="button">삭제</AlertDialogAction>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
