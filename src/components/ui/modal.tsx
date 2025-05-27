interface modelProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function Modal(props: modelProps) {
    const { isOpen, onClose, title, children } = props;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
            <div className="bg-glass p-6 rounded-2xl border border-white/10 shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white text-xl"
                        aria-label="Fermer le modal"
                    >
                        &times;
                    </button>
                </div>
                <div className="space-y-4 overflow-y-auto pr-2 scroll-smooth" style={{ maxHeight: '50vh' }}>
                    {children}
                </div>
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={onClose}
                        className="inline-block bg-gradient-to-r from-brand to-brand-dark px-8 py-3 rounded-full text-dark font-bold text-base hover:shadow-lg hover:shadow-brand/30 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
}
