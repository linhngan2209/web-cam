const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-indigo-300 border-t-4 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;