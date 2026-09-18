# Authentication Architecture

## Summary

This repository is a static portfolio website built with HTML, CSS, and browser-side JavaScript. It does **not** implement user authentication.

There is no login system, backend authentication API, OAuth/OIDC flow, JWT/session mechanism, password storage, or application-level authorization in the current codebase.

## Components

| Component | Role in authentication |
|---|---|
| `index.html` | Static page structure; no login form or authentication client |
| `styles.css` | Presentation only |
| `script.js` | Browser-side UI behavior; no credential/token handling |
| Static hosting / GitHub Pages | Serves the files; hosting access controls are separate from application authentication |

## Request flow

```text
Browser
  |
  | GET /
  v
Static host
  |
  +--> index.html
  +--> styles.css
  +--> script.js
  +--> images/assets
  |
  v
Browser executes script.js
```

There is no authentication request in this flow. The browser does not send a username/password to an application endpoint and does not receive an application session or access token.

## Credentials

No application credentials are collected or stored by this repository.

The JavaScript contains a base64-encoded JPEG data URL for the profile image. This is image content, not a password, API key, access token, or other authentication credential.

## Tokens and sessions

The current application has:

- No JWT creation or validation
- No OAuth authorization-code flow
- No access/refresh tokens
- No session cookies created by application code
- No CSRF authentication mechanism
- No password hashing or password database
- No authorization middleware

Any authentication required to **manage the GitHub repository itself** is handled by GitHub and Git/GitHub CLI, not by this portfolio application.

## Code evidence

`script.js` performs client-side UI operations such as changing the header appearance on scroll, smooth-scrolling to page sections, and setting portfolio content. It does not make authenticated API requests or process credentials.

Example:

```js
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 20) header.style.background = 'rgba(255,255,255,.92)';
  else header.style.background = 'transparent';
});
```

## Security implications

Because the site has no application authentication, there are no application secrets or user passwords to protect in the current implementation.

If authentication is added later, credentials and tokens should not be hard-coded into frontend JavaScript. Authentication should normally be delegated to a trusted identity provider or implemented by a backend, with secrets kept server-side and short-lived tokens/cookies handled according to the chosen architecture.

## Current conclusion

**Authentication status: not implemented.**

The repository is currently a static public portfolio rather than an authenticated application.
