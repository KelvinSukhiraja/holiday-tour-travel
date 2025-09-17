import { forwardRef, ReactNode } from "react";

// The props now accept 'children' of type ReactNode
interface CursorFollowerProps {
  children: ReactNode;
}

const CursorFollower = forwardRef<HTMLDivElement, CursorFollowerProps>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="fixed top-5 left-5 z-[9999] flex items-center justify-center text-white pointer-events-none text-center text-xs font-semibold opacity-0 backdrop-blur-[100px] px-10 py-4 border-2 border-A/20 translate-x-1/2 translate-y-1/2"
        style={{ scale: 0 }}
      >
        {/* Render children here instead of text */}
        {children}
      </div>
    );
  }
);

// Add a display name for better debugging
CursorFollower.displayName = "CursorFollower";

export default CursorFollower;
