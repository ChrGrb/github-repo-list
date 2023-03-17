import React from "react";
import { Repository } from "@/types/graphql";
import Searchbar from "@/components/Searchbar";
import RepositoryCard from "@/components/RepositoryCard";
import Divider from "@/components/Divider";

type Props = {
    repositories: Repository[]
};

// List of repositories including search bar and functionality
const RepositoryList = ({ repositories }: Props) => {
    var searchTerm = "";
    var [filteredRepositories, setFilteredRepositories] = React.useState<Repository[]>(repositories);

    // Update filtered repositories when search term changes
    const onSearchTermChange = (newSearchTerm: string) => {
        setFilteredRepositories(repositories.filter((repository) => {
            return repository.name.toLowerCase().includes(newSearchTerm.toLowerCase());
        }));
    }


    return (
        <>
            {/* Search Bar */}
            <Searchbar searchTerm={searchTerm} onSearchTermChange={onSearchTermChange} />

            {/* Spacer */}
            <div className="h-10"></div>

            {/* Search Results */}
            <div className="flex flex-col">
                {/* Search Result */}
                {filteredRepositories.map((repository, index) => (
                    <div key={repository.id}>
                        <RepositoryCard repository={repository} />
                        {/* Divider, if not last repository */}
                        {index !== filteredRepositories.length - 1 && < Divider />}
                    </div>
                ))}
            </div>
        </>
    )
};

export default RepositoryList;