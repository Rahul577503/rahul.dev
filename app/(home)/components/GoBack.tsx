import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const GoBack = () => {
  return (
    <Link
      href="/blog"
      className="shrink-0 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors no-underline"
    >
      <FiArrowLeft className="h-4 w-4" />
      <span>Back</span>
    </Link>
  );
};

export default GoBack;
