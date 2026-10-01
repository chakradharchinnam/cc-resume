# Chakradhar Chinnam — Resume

React resume website. Application source and npm commands live in `resume/`.

## Local development

```sh
cd resume
npm ci
npm start
```

## Publishing

Pushing to `main` runs `.github/workflows/pages.yml`, builds the static site, and deploys it to GitHub Pages. You can also run the workflow manually from the Actions tab.

Repository Settings → Pages must use **GitHub Actions** as the publishing source. The workflow obtains the site URL from Pages, so asset paths work with either the default project URL or a configured custom domain.

Default URL: https://chakradharchinnam.github.io/cc-resume/

Custom domain: configure `chakradharchinnam.com` in Pages settings and point its DNS to GitHub Pages before using it. No personal access token or external hosting credentials are required for deployment.
