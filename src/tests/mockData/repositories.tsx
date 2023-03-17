import { Repository } from "@/types/graphql";

const mockRepositories: Repository[] = [{
    id: "1",
    name: "Fancy Calculator",
    description: "A calculator application that performs complex mathematical operations with ease.",
    primaryLanguage: {
        name: "JavaScript",
        color: "#f1e05a"
    },
    url: "https://github.com/user/fancy-calculator"
}, {
    id: "2",
    name: "Time Tracker",
    description: "An app that helps you keep track of your time spent on various tasks and projects.",
    primaryLanguage: {
        name: "Python",
        color: "#3572A5"
    },
    url: "https://github.com/user/time-tracker"
}, {
    id: "3",
    name: "Recipe Book",
    description: "A digital recipe book that allows users to search, save, and organize their favorite recipes.",
    primaryLanguage: {
        name: "Ruby",
        color: "#701516"
    },
    url: "https://github.com/user/recipe-book"
}];

export default mockRepositories;