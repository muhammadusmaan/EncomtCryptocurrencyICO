import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function HotToast() {
    return (
        <>
            <div><Toaster position="top-center"
                reverseOrder={false} /></div>
        </>
    )
}
