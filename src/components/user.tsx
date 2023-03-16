import React from 'react';

type Props = {};

const User: React.FC<Props> = () => {
    return (
        <>
            <div className="flex flex-col rounded-md bg-slate-500 p-0 overflow-hidden">
                <img className="aspect-square object-cover" alt="avatar" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" />
                <div className="flex flex-col p-5 text-slate-100">
                    <div className="pb-3 flex flex-col">
                        <span className="text-white text-2xl font-bold">Jane Doe</span>
                        <span className="text-md">@janedoe</span>
                    </div>
                    <span>
                        I am a developer
                    </span>
                </div>
            </div>
        </>
    );
}

export default User;