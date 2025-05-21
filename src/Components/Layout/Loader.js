// components/Loader.tsx
export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center z-[9999]">
      <img
        src="https://carnivalcore.com/assets/images/logo.png"
        className="w-100 h-30 animate-bounce-x mb-4"
        alt="Loading Logo"
      />
<div className="text-white text-xl animate-pulse">Carnival Core Trade LLC</div>
</div>
  );
}
