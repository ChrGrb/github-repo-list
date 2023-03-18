import { User } from "@/types/graphql";
import mockRepositories from "./repositories";

const mockUser: User = {
    avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
    bio: "I'm a software engineer",
    login: "octocat",
    name: "Octocat",
    repositories: {
        nodes: mockRepositories
    }
}

export default mockUser;