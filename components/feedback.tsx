"use client";

import React, { useState } from 'react';
import Button from './ui/button';
import { LightbulbFilamentIcon } from "@phosphor-icons/react";
import { submitFeedback } from '@/app/api/api';
import { toast } from 'sonner';
import { convertToSlug } from '@/utils/helpers';



type FeedbackProps = {
    item: string;
};

export const Feedback = ({ item }: FeedbackProps) => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const groupInputStyle = "flex flex-1 gap-2 lg:gap-0 flex-col";
    const inputStyle = "p-2 mt-2 w-full border border-primary/10 bg-background/70 rounded-md focus:outline-none focus:ring-1 focus:ring-primary/50";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const success = await submitFeedback(category, name, url);
        setIsLoading(false);

        if (success) {
            toast.success("Thank you for your feedback!", {
                style: {
                    border: '2px solid color-mix(in srgb, var(--primary) 80%, transparent)',
                },
            });

            console.log("Feedback submitted:", { name, url, category });
            setName('');
            setUrl('');
            setIsOpen(false);
        } else {
            toast.error("Failed to submit feedback. Please try again later.", {
                style: {
                    border: '2px solid color-mix(in srgb, var(--color-logo) 80%, transparent)',
                },
            });
        }
    };

    return (
        <>
            <Button
                variant='secondary'
                className="w-fit p-2 rounded-sm bg-card-background"
                aria-expanded={isOpen}
                onClick={() => { setIsOpen(!isOpen); setCategory(window.location.href + '#' + convertToSlug(item)) }}
            >
                <LightbulbFilamentIcon size={18} weight="regular" className="text-primary" />
            </Button>

            <div
                className='relative reveal-panel'
                data-state={isOpen ? 'open' : 'closed'}
                aria-hidden={!isOpen}
            >
                <form onSubmit={handleSubmit}
                    className="flex flex-col w-full gap-4 my-3 bg-card-background p-6 rounded-xl">
                    <div className="flex items-center gap-2">
                        <span className="w-fit p-2 rounded-sm bg-background/70" >
                            <LightbulbFilamentIcon size={32} weight="regular" className="text-primary" />
                        </span>
                        <h2 className='text-2xl font-bold'>Send a suggestion</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className={groupInputStyle}>
                            <label>Name</label>
                            <input
                                type="text"
                                className={inputStyle}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder='My super cool resource'
                            />
                        </div>
                        <div className={groupInputStyle}>
                            <label>URL</label>
                            <input
                                type="url"
                                className={inputStyle}
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                required
                                placeholder='https://mysupercoolresource.com'
                            />
                        </div>
                    </div>
                    <Button
                        variant="button"
                        className="w-fit text-sm"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            <div className='flex gap-2 items-center'>
                                <p>Send</p>
                                <p className='text-2xl align-middle'>💌</p>
                            </div>
                        )}
                    </Button>
                </form>
            </div>
        </>
    );
};