import React from 'react';
import { User } from '@/types/graphql';

type Props = {
    user: User
};

// Displays user profile
const UserCard = ({ user }: Props) => {
    return (
        <div data-testid="user-card">
            <div className="flex flex-col rounded-md bg-slate-500 p-0 overflow-hidden">
                {/* Profile Image  */}
                <img className="aspect-square object-cover" alt={user.avatarUrl ? "avatar" : "placeholder"} src={user.avatarUrl ?? ""} />
                {/* Profile Info */}
                <div className="flex flex-col p-5 text-slate-100">
                    <div className="pb-3 flex flex-col">
                        <span data-testid="user-name" className="text-white text-2xl font-bold">{user.name ?? "Jane Doe"}</span>
                        <span data-testid="user-login" className="text-md">@{user.login}</span>
                    </div>
                    <span data-testid="user-bio">
                        {user.bio ?? ""}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default UserCard;