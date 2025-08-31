import { twMerge } from "tailwind-merge";

type ContainerProps = {
  constrained?: boolean;
  ref?: React.RefObject<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;

function Container({ className, constrained = false, ref, ...props }: ContainerProps) {
  return (
    <div
      className={twMerge(
        "mx-auto w-full max-w-7xl 2xl:max-w-(--breakpoint-2xl)",
        constrained ? "sm:px-6" : "px-4 sm:px-6",
        className,
      )}
      {...props}
      ref={ref}
    />
  );
}

export type { ContainerProps };
export { Container };
