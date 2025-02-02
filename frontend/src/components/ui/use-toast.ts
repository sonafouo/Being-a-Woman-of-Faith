import * as React from 'react';

type ToastProps = {
	message: string;
	type?: 'success' | 'error' | 'info';
	duration?: number;
};

type ToastContextType = {
	showToast: (props: ToastProps) => void;
};

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
	const context = React.useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return context;
};

export const ToastProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
	const [toasts, setToasts] = React.useState<ToastProps[]>([]);

	const showToast = React.useCallback(({message, type = 'info', duration = 3000}: ToastProps) => {
		setToasts((prev) => [...prev, {message, type, duration}]);
	}, []);

	return (
		<ToastContext.Provider value={{showToast}}>
			{children}
			{toasts.map((toast, index) => (
				<div
					key={index}
					className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg ${
						toast.type === 'error' ? 'bg-red-500' : toast.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
					} text-white`}>
					{toast.message}
				</div>
			))}
		</ToastContext.Provider>
	);
};
