$(document).ready(function () {
    repos();
});

const repoUrl = `https://api.github.com/users/${username}/repos`;
const userUrl = `https://api.github.com/users/${username}`;
const topic_tag = "me";

async function repos() {
    let page = 1;
    let count = 0;
    while (true) {
        const response = await fetch(repoUrl + "?sort=updated&direction=desc&per_page=100&page=" + page);
        const repos = await response.json();
        $("#loading").hide();

        if (!repos.length) {
            break;
        }

        for (var i = 0; i < repos.length; i++) {
            repo = repos[i]
            if (repos[i].topics.includes(topic_tag)) {
                if (repo.language == null) repo.language = "";
                if (repo.name.length > 30) repo.name = `${repo.name.substring(0, 30)}...`;
                if (repo.description.length > 100) repo.description = `${repo.description.substring(0, 100)}...`;
                $("#repos").append(repoCard(repo))
                count++;
            }
        }

        page++;
    }

    if (count !== 0) {
        $("#repos-add").hide();
        $("#repos-title").show();
        $("#repos-all").show();
    }
}

function repoCard() {
    return `
  <div class="rounded overflow-hidden shadow-lg bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700">
    <div class="p-6">
      <div class="font-bold text-xl text-gray-500 ">${repo.language}</div>
      <br>
      <a class="font-bold text-2xl text-gray-600 dark:text-gray-300" href="${repo.html_url}" target="_blank">
        <i class="fa-brands fa-buffer"></i>
        ${repo.name}
      </a>
      <p class="pt-4 text-base text-gray-500 dark:text-gray-400">
        ${repo.description}
      </p>
    </div>
    <div class="pl-3 pt-4">
      <span class="inline-block px-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
        <i class="fa-solid fa-star fa-2xs"></i>
        ${repo.stargazers_count}
      </span>
      <span class="inline-block px-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
        <i class="fa-solid fa-code-fork fa-2xs"></i>
        ${repo.forks_count}
      </span>
      <span class="inline-block px-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
        <i class="fa-solid fa-eye fa-2xs"></i>
        ${repo.watchers_count}
      </span>
      <span class="inline-block px-3 text-xs font-semibold text-gray-600 dark:text-gray-400">
        ${repo.size} MB
      </span>
    </div>
    <div class="pt-8 pl-4 pb-4">
      ${topicsSpan(repo)}
    </div>
  </div>`;
}

function topicsSpan(repo) {
    topics = "";
    for (var i = 0; i < repo.topics.length; i++) {
        topic = repo.topics[i];
        if (topic === topic_tag) {
            continue;
        }
        topics += `<span class="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-400 mr-1 mb-1">#${topic}</span>`
    }

    return topics
}

async function fetchGitHubData() {
    try {
        // Fetch user data
        const userResponse = await fetch(userUrl);
        if (!userResponse.ok) throw new Error("Failed to fetch user data");
        const userData = await userResponse.json();

        // Fetch repository data to calculate total stars
        const reposResponse = await fetch(repoUrl);
        if (!reposResponse.ok) throw new Error("Failed to fetch repositories");
        const reposData = await reposResponse.json();

        // Calculate total stars
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        //tong so repo public
        document.getElementById("repo-count").innerHTML = `
            <i class="fa-solid fa-diagram-project"></i> ${userData.public_repos} repositories
        `;
        document.getElementById("repo-count").href = `https://github.com/${username}?tab=repositories`;

        //tong so luot follow
        document.getElementById("follower-count").innerHTML = `
          <i class="fa-solid fa-users"></i> ${userData.followers} followers
        `;
        document.getElementById("follower-count").href = `https://github.com/${username}?tab=followers`;

        //tong so start project
        document.getElementById("star-count").innerHTML = `
          <i class="fa-solid fa-star"></i> ${totalStars} stars
        `;
        document.getElementById("star-count").href = `https://github.com/${username}?tab=repositories`;

        //location
        if (userData.location) {
            document.getElementById("location").innerHTML = `
                <i class="fa-solid fa-location-dot"></i> ${userData.location}
            `;
        } else {
            document.getElementById("location").style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
    }
}

fetchGitHubData();
