"use client"
import Image from 'next/image';
import { useState } from 'react';

type Props = {
    url: string
    alt: string
  };

function ImageModal({url, alt}: Props) {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div>
            <Image
                width={120}
                height={80}
                className='rounded-sm cursor-pointer'
                src={url}
                alt={alt}
                onClick={toggleModal}
            />
            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-darkBg/50 z-50 flex justify-center items-center" onClick={toggleModal}>
                    <img src={url} alt={alt} className='max-w-[88%] max-h-[88%] md:max-w-[55%] md:max-h-[55%] rounded-md'/>
                </div>
            )}
        </div>
    );
}

export default ImageModal;

