interface ChildrenProps {
  children?: React.ReactNode;
}
interface TodoState {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
}

interface TodoFormState {
  title: string;
  description?: string;
}

interface InputProps extends ChildrenProps {
  label: string;
  error?: string;
  id: string;
  [key: string]: any;
}

interface TodoItemProps {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
}
