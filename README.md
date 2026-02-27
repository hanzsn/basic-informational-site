# Basic Informational Site

This is a simple Node.js project built with TypeScript that serves multiple HTML pages depending on the requested URL. It demonstrates a basic HTTP server setup without any frameworks.

---

## Project Structure

```
└── 📁basic-informational-site
    └── 📁.vscode
        ├── launch.json <- for debugging
    └── 📁src
        └── 📁pages
            ├── 404.html
            ├── about.html
            ├── contact-me.html
            ├── index.html
        ├── index.ts
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

---

## Expected Output

When the server is running and you visit the URLs in a browser:

| URL                                   | HTML Page Served  | Status Code |
| ------------------------------------- | ----------------- | ----------- |
| `http://localhost:8080/`              | `index.html`      | 200         |
| `http://localhost:8080/about`         | `about.html`      | 200         |
| `http://localhost:8080/contact-me`    | `contact-me.html` | 200         |
| `http://localhost:8080/anything-else` | `404.html`        | 404         |

---

## Terminal Output

```
Server running at http://127.0.0.1:3000
```

https://www.theodinproject.com/lessons/nodejs-basic-informational-site
