# Rahul-Dadhich-Portfolio

## Deployment

Pushing to `main` runs the GitHub Actions deployment workflow. It builds the site
and publishes the generated `dist` directory to the `gh-pages` branch.

To enable publishing in the repository, open **Settings → Pages** and set the
source to **Deploy from a branch**, select `gh-pages` and the `/(root)` folder,
then save. Subsequent successful workflow runs update the live site.