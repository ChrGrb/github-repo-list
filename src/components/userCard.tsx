import React from 'react';
import { User } from '@/types/graphql';

type Props = {
    user: User
};

// Displays user profile
const UserCard = ({ user }: Props) => {
    return (
        <>
            <div className="flex flex-col rounded-md bg-slate-500 p-0 overflow-hidden">
                {/* Profile Image  */}
                <img className="aspect-square object-cover" alt="avatar" src={user.avatarUrl ?? ""} />
                {/* Profile Info */}
                <div className="flex flex-col p-5 text-slate-100">
                    <div className="pb-3 flex flex-col">
                        <span className="text-white text-2xl font-bold">{user.name ?? "Jane Doe"}</span>
                        <span className="text-md">@{user.login}</span>
                    </div>
                    <span>
                        {user.bio ?? ""}
                    </span>
                </div>
            </div>
        </>
    );
}

export default UserCard;