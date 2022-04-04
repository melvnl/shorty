export default function SuccessMessage({ children }: any) {
  return (
    <div
      data-clipboard-text={children}
      className="flex cursor-pointer text-sm font-semibold p-4 bg-transparent rounded-md border border-gray-400"
    >
      {children}
    </div>
  );
}
