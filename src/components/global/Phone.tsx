import React, { ForwardedRef, HTMLAttributes } from "react";

const Phone = ({
  children,
  className,
  ref,
  ...props
}: HTMLAttributes<HTMLDivElement> & { ref?: ForwardedRef<HTMLDivElement> }) => {
  //TODO: create the border offset
  return (
    <div
      ref={ref}
      {...props}
      id="phone"
      className={
        className +
        " phone min-w-[209px] lg:w-[239.09px] h-[429.22px] lg:h-[514.22px] ring-8 rounded-3xl ring-black relative"
      }
    >
      <div
        className="w-[80px] lg:w-[100px] h-[20px] bg-black rounded-b-xl absolute top-0 left-0 lg:translate-x-[70%] translate-x-[80%] z-30"
        id="notch"
      />
      <div
        className="w-[10px] h-[70px] bg-black rounded-xl absolute right-0 top-1/3 translate-x-[100%]"
        id="powerButton"
      />
      <div
        className="w-[10px] h-[20px] bg-black rounded-xl absolute left-0 top-[15%] -translate-x-[100%]"
        id="actionButton"
      />
      <div
        className="w-[10px] h-[50px] bg-black rounded-xl absolute left-0 top-[25%] -translate-x-[100%]"
        id="increaseVolumeButton"
      />
      <div
        className="w-[10px] h-[50px] bg-black rounded-xl absolute left-0 top-[35%] -translate-x-[100%]"
        id="reduceVolumeButton"
      />
      {/* content */}
      <main className="h-full w-full rounded-3xl overflow-hidden relative">
        {children}
      </main>
    </div>
  );
};

export default Phone;
