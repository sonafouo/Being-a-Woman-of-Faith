'use client';

import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from './textarea';
import { Button } from './button';
import { X } from 'lucide-react';
import { Input } from './input';

interface ContactFormProps {
	onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({onClose}) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Basic validation
			if (!formData.name || !formData.email || !formData.message) {
				toast({
					title: "Validation Error",
					description: "Please fill in all fields",
					variant: "destructive"
				});
				return;
			}

			// Email validation
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(formData.email)) {
				toast({
					title: "Invalid Email",
					description: "Please enter a valid email address",
					variant: "destructive"
				});
				return;
			}

			// Here you would typically send the form data to your backend
			await fetch('http://localhost:3001/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			toast({
				title: "Success!",
				description: "Your message has been sent. We'll get back to you soon!",
			});

			// Clear form
			setFormData({
				name: '',
				email: '',
				message: '',
			});

			// Close the form
			if (onClose) {
				onClose();
			}
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to send message. Please try again.",
				variant: "destructive"
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	// Handle escape key to close modal
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && onClose) {
				onClose();
			}
		};

		window.addEventListener('keydown', handleEscape);
		return () => window.removeEventListener('keydown', handleEscape);
	}, [onClose]);

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50'>
			<div className='bg-white rounded-lg shadow-xl p-8 w-full max-w-md relative animate-in fade-in slide-in-from-bottom-4 duration-300'>
				<div className="absolute right-4 top-4">
					<Button
						variant="ghost"
						size="icon"
						onClick={onClose}
						className="h-8 w-8 rounded-full"
						aria-label="Close contact form"
					>
						<X className="h-4 w-4" />
					</Button>
				</div>

				<h2 className='text-2xl font-bold mb-6 text-center font-serif'>Contact Us</h2>

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div className="space-y-2">
						<label htmlFor='name' className='text-sm font-medium text-gray-700'>
							Name
						</label>
						<Input
							type='text'
							id='name'
							value={formData.name}
							onChange={(e) => setFormData((prev) => ({...prev, name: e.target.value}))}
							className='w-full'
							placeholder="Your name"
							required
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor='email' className='text-sm font-medium text-gray-700'>
							Email
						</label>
						<Input
							type='email'
							id='email'
							value={formData.email}
							onChange={(e) => setFormData((prev) => ({...prev, email: e.target.value}))}
							className='w-full'
							placeholder="your.email@example.com"
							required
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor='message' className='text-sm font-medium text-gray-700'>
							Message
						</label>
						<Textarea
							id='message'
							value={formData.message}
							onChange={(e) => setFormData((prev) => ({...prev, message: e.target.value}))}
							className='w-full min-h-[120px]'
							placeholder="How can we help you?"
							required
							rows={4}
						/>
					</div>

					<Button
						type='submit'
						className='w-full'
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Sending...' : 'Send Message'}
					</Button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
