'use client';

import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {useToast} from './use-toast';
import {Textarea} from './textarea';

interface ContactFormProps {
	onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({onClose}) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Basic validation
		if (!formData.name || !formData.email || !formData.message) {
			showToast({
				message: 'Please fill in all fields',
				type: 'error',
			});
			return;
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			showToast({
				message: 'Please enter a valid email address',
				type: 'error',
			});
			return;
		}

		try {
			// Here you would typically send the form data to your backend
			// For now, we'll just simulate a successful submission
			await new Promise((resolve) => setTimeout(resolve, 1000));

			showToast({
				message: 'Message sent successfully!',
				type: 'success',
			});

			// Clear form
			setFormData({
				name: '',
				email: '',
				message: '',
			});

			// Close the form if onClose is provided
			if (onClose) {
				onClose();
			}
		} catch (error) {
			showToast({
				message: 'Failed to send message. Please try again.',
				type: 'error',
			});
		}
	};

	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			exit={{opacity: 0, y: 20}}
			className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50'>
			<div className='bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative'>
				<button onClick={onClose} className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'>
					×
				</button>

				<h2 className='text-2xl font-bold mb-4 text-center'>Contact Us</h2>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label htmlFor='name' className='block text-sm font-medium text-gray-700'>
							Name
						</label>
						<input
							type='text'
							id='name'
							value={formData.name}
							onChange={(e) => setFormData((prev) => ({...prev, name: e.target.value}))}
							className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500'
						/>
					</div>

					<div>
						<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
							Email
						</label>
						<input
							type='email'
							id='email'
							value={formData.email}
							onChange={(e) => setFormData((prev) => ({...prev, email: e.target.value}))}
							className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500'
						/>
					</div>

					<div>
						<label htmlFor='message' className='block text-sm font-medium text-gray-700'>
							Message
						</label>
						<Textarea
							id='message'
							value={formData.message}
							onChange={(e) => setFormData((prev) => ({...prev, message: e.target.value}))}
							className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500'
							rows={4}
						/>
					</div>

					<motion.button
						whileHover={{scale: 1.02}}
						whileTap={{scale: 0.98}}
						type='submit'
						className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'>
						Send Message
					</motion.button>
				</form>
			</div>
		</motion.div>
	);
};

export default ContactForm;
