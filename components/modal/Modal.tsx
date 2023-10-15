interface ModalProps {
  show: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null
  }

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-xl">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          X
        </button>
      </div>
    </div>
  )
}

export default Modal
