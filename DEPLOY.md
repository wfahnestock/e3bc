# Deploying to Netlify

The site is a Next.js 16 app with one server-side feature (the contact form,
which sends email via Resend). Netlify's free tier supports all of this with
zero build configuration — the `netlify.toml` in this repo just pins the Node
version.

## 1. Push the code to GitHub

Create an empty repository on github.com (private is fine), then from the
`ecubed-business-consulting` folder:

```bash
git add -A
git commit -m "Ecubed site: pages, contact form, Netlify config"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin master
```

## 2. Create the Netlify project

1. Sign up / log in at https://app.netlify.com (free plan).
2. **Add new project → Import an existing project → GitHub** and pick the repo.
3. Netlify auto-detects Next.js. Don't change the build settings.
4. Before hitting deploy, open **Environment variables** and add:

   | Key              | Value                                              |
   | ---------------- | -------------------------------------------------- |
   | `RESEND_API_KEY` | from resend.com → API Keys                         |
   | `CONTACT_FROM`   | `website@e3bc.com` (after domain verified — below) |
   | `CONTACT_TO`     | `beth@e3bc.com`                                    |

5. Deploy. The site goes live at `https://SITE-NAME.netlify.app`.

> Environment variable changes only take effect on the **next deploy** —
> after editing one, trigger a redeploy (Deploys → Trigger deploy).

## 3. Verify the domain with Resend (email sending)

1. In resend.com: **Domains → Add Domain** → `e3bc.com`.
2. Resend shows DNS records (SPF + DKIM). Add them at the DNS host for
   e3bc.com. Verification usually completes in minutes.
3. Until this is done, you can test the form with
   `CONTACT_FROM=onboarding@resend.dev` — Resend then delivers only to the
   email address the Resend account was created with.

## 4. Point e3bc.com at Netlify

In Netlify: **Domain management → Add a domain** → `e3bc.com`. Netlify
automatically adds `www.e3bc.com` too. Then, at the DNS host for e3bc.com,
add these records:

| Type                            | Host  | Value                             |
| ------------------------------- | ----- | --------------------------------- |
| CNAME                           | `www` | `SITE-NAME.netlify.app`           |
| ALIAS / ANAME / flattened CNAME | `@`   | `apex-loadbalancer.netlify.com`   |

If the DNS host doesn't support ALIAS/ANAME/flattened-CNAME records for the
apex (`@`), use this fallback instead:

| Type | Host | Value       |
| ---- | ---- | ----------- |
| A    | `@`  | `75.2.60.5` |

**⚠ Do not delete or modify any existing MX, SPF, or other records** — those
keep beth@e3bc.com's email working. Only **add** the records above (plus
Resend's records from step 3).

DNS changes can take up to 24 hours to propagate. Netlify provisions the
HTTPS certificate automatically once it sees the records.

## 5. Post-launch checklist

- [ ] Site loads at https://e3bc.com and https://www.e3bc.com
- [ ] Padlock/HTTPS active (Netlify → Domain management → HTTPS)
- [ ] Submit the contact form on the live site
- [ ] Confirm the email arrived at beth@e3bc.com — **check Junk the first
      time** and mark as safe sender if needed
- [ ] Reply to the test email and confirm the reply goes to the visitor's
      address (Reply-To), not the website's

## Costs

Netlify free tier covers this site's expected traffic. No card required.
If the site ever exceeds free limits, Netlify emails you first.
