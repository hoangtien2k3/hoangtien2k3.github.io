# /Github Page Profile

## About /me

✅ All your profile information will be accessed through the public
[GitHub API](https://docs.github.com/en/rest).

✅ So if you are the [profile](https://github.com/settings/profile) filled,
everything will work 🎒

✅ You don't need to have infrastructure costs the availability will be made by
[gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
free of charge. 🤑

✅ You will have a link to share on your social networks with SEO's meta tags.
will also be indexed by the google search engine. 🚀

✅ Profile information is done in the project build.

✅ The list of projects is dynamically updated using jquery on the client side.

## Features

- [x] Show basic profile (login, name and bio)
- [x] Show company, location, blog and twitter
- [ ] List organizations
- [x] Number of followers
- [x] Count of public repos
- [x] Account created at
- [x] List of repos with the tag
- [ ] Progressive Web App (PWA)
- [x] SEO's meta tags
- [x] Deploy using gh-pages
- [x] Responsive for mobile
- [x] Dark/light mode
- [ ] Friendly customization

## How to create your profile page?

Just fork this project to your [GitHub](https://github.com).

Follow the steps:

1. [Create a fork](https://github.com/hoangtien2k3/me/fork)
2. Enable GitHub Actions
3. Run pipeline deploy to GitHub Pages
4. Access your profile page: `https://<username>.github.io/me`

See [how to deploy](/docs/how-to-deploy.md) to step by step details.

## How show the repositories?

To show GitHub repository on profile page add `hoangtien2k3.github.io` tag to repo.

The project catalog component dynamically runs on client side using jquery.

## GitHub API

The endpoint used are:

- [api.github.com/users/:user](https://api.github.com/users/hoangtien2k3)
- [api.github.com/users/:user/repos](https://api.github.com/users/hoangtien2k3/repos)

## Running localhost

Clone repository

```console
git clone git@github.com:hoangtien2k3/hoangtien2k3.github.io.git
cd hoangtien2k3.github.io
```

Open the `index.html` file.

## Others profile pages builders

If you want something more powerful take a look at the projects:

- [Docusaurus](https://docusaurus.io)
- [Hugo](https://gohugo.io)
- [Jekyll](https://jekyllrb.com)
- [Gatsby](https://www.gatsbyjs.com)
- [DeveloperFolio](https://github.com/hoangtien2k3/profilePro)

> it will probably take you more than 1 minute to deploy.
