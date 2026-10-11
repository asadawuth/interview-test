interface TextErrorProps {
  message?: string;
}

export default function TextError({ message }: TextErrorProps) {
  if (!message) {
    return null;
  }

  return <p className="mt-1.5 text-xs text-red-500">{message}</p>;
}
