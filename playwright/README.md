## QA &amp; Testing:

Why [Playwright](https://playwright.dev/)?

- **Cross-browser.** Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.

- **Cross-platform.** Test on Windows, Linux, and macOS, locally or on CI, headless or headed.

- **Cross-language.** Use the Playwright API in TypeScript, JavaScript, Python, .NET, Java.

- **Test Mobile Web.** Native mobile emulation of Google Chrome for Android and Mobile Safari. The same rendering engine works on your Desktop and in the Cloud.

- **Tooling.** Generate tests by recording actions. Debugging tools (Inspect page, generate selectors, step through the test execution, see click points, execution logs, traceability)

- **Docs and Community** Well documented Api and guides. Community has grown significantly since it was released in 2020.

---

### Tutorials and Infos

**Install Playwright extension for VS Code**

- https://playwright.dev/docs/getting-started-vscode
- https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

**Use Codegen to generate test**

- https://playwright.dev/docs/codegen

**CI with Github Actions and Playwright**

- https://playwright.dev/docs/ci
- https://docs.github.com/en/actions/learn-github-actions/contexts#github-context

**Debugging**

- https://playwright.dev/docs/trace-viewer
- https://playwright.dev/docs/getting-started-vscode#live-debugging

**Playwright Configs**

- https://playwright.dev/docs/test-configuration

**Playwright Test**

- https://playwright.dev/docs/api/class-test

**Playwright APIs**

- https://playwright.dev/docs/api/class-playwright

---

##Set-up

```
.
└── app/
    └── playwright/
        ├── configs/
        │   ├── **.config.ts
        │   └── ...
        ├── tests/
        │   ├── auth/
        │   │   ├── **.spec.ts
        │   │   └── ...
        │   ├── pages/
        │   │   ├── **.spec.ts
        │   │   └── ...
        │   └── .../
        ├── test-examples/
        │   └── ...spec.ts
        ├── utils/
        │   ├── index.ts
        │   └── ...
        ├── globalAuthSetup.ts
        └── README.md
```

**Running test locally**

- **via CLI**

  - Recommended before creating a PR, (saves time and github resources)

    > npm run build
    > npm run start

  - Able to use with hot-reload but requires to run test manually
    > npm run dev

- **via VS Code**
  - https://playwright.dev/docs/getting-started-vscode

---

**Gotchas and Tips**

- _"Playwright scripts are all async/await"_

- _"Inconsistent test results between browsers?"_ - Check element selectors. Elements can behave differently based on how they are implemented. Trying different selectors first can save you some time. https://playwright.dev/docs/selectors
