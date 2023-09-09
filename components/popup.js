const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div className="fixed top-0 left-0 w-full h-full bg-black-50"></div>
      <div className="relative bg-white rounded-lg shadow-lg p-10">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          Close
        </button>
        {/* Popup content goes here */}
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Popup Title</h2>
          <p>
            Popup content goes here. We can show important information about
            this EventPlanner Pro
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
