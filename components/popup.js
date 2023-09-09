const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="fixed top-0 left-0 w-full h-full bg-black-50"></div>
      <div className="relative p-4 bg-white rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          Close
        </button>
        {/* Popup content goes here */}
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Popup Title</h2>
          <p>Popup content</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
