import React from "react";
import { Repository } from "../types/graphql";
import Searchbar from "./searchbar";
import RepositoryCard from "./repositoryCard";
import Divider from "./divider";

type Props = {
    repositories: Repository[]
};

const RepositoryList = ({ repositories }: Props) => {
    var searchTerm = "";
    var [filteredRepositories, setFilteredRepositories] = React.useState<Repository[]>(repositories);

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
                    <>
                        <RepositoryCard repository={repository} />
                        {index !== filteredRepositories.length - 1 && < Divider />}
                    </>
                ))}
            </div>
        </>
    )
};

export default RepositoryList;