// components/Loader.tsx
export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center z-[9999]">
      <img
        src="/assets/csf-main-logo-removebg-preview.png"
        className="w-30 h-30 animate-bounce-x mb-4"
        alt="Loading Logo"
      />
<div className="text-white text-xl animate-pulse">Support a Child. Shape a Future.</div>
</div>
  );
}
