import fetch from 'node-fetch';

const getGitHubUser = async(str) => {
    try {
        if (!str) {
            return null;
        }

        const check = await fetch("https://api.github.com/users/" + str);
        let found = await check.json();

        if (found.id) {
            return found;
        }

        return "Not Found";
    } catch (error) {
        throw (error);
    }
}
const printGitHubUser = async() => {
    const mojombo = await getGitHubUser("mojombo");
    const orange = await getGitHubUser("");
    const rudiTabuti = await getGitHubUser("rudi.tabuti");

    console.log(mojombo);
    console.log(orange);
    console.log(rudiTabuti);
}

printGitHubUser();