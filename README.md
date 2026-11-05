# leandrous.com

Redesigned website for **Leandrous LLC**, hosted free on **GitHub Pages**. No build step and no extra services.

- Live preview: https://adminsentinelparadiseai.github.io/leandrous-preview/
- Files: `index.html`, `styles.css`, `main.js`, `privacy.html`, `assets/`

## Secure Portal

The "Secure Portal" buttons open a **private Google Drive folder** called *Leandrous Secure Portal*, owned by admin@sentinelparadise.ai.

- **Share a document:** put it in that folder.
- **Give someone access:** in Drive, right-click the folder → **Share** → add their email address as **Viewer**. They sign in with their own Google account.
- **Remove access:** open Share again and remove the person.
- **Never** set the folder to "Anyone with the link".

## Updating the site

Edit or upload files on GitHub. Pages republishes them within about a minute.
Open copies of the page reload on their own when `version.json` changes, so bump its number with each update.

## Point leandrous.com here (when Ted approves)

Current DNS (checked Nov 4, 2026): the nameservers are `ns1–ns4.mysecurecloudhost.com`, the site is at `185.181.252.197`, and **email (MX) points to `leandrous.com` itself, on the same server**.

1. **Protect email first.** At the current DNS host, add an **A** record for `mail` → `185.181.252.197`.
   Change **MX** to `0 mail.leandrous.com`, then confirm email still works.
   Also update the SPF record: replace `+a` with `+ip4:185.181.252.197`.
2. In this repo, go to **Settings → Pages → Custom domain**, enter `leandrous.com` and save. This adds a `CNAME` file.
3. At the DNS host, replace the website records:
   - `leandrous.com` **A** records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` **CNAME**: `adminsentinelparadiseai.github.io`
4. When the certificate is ready (up to a day), tick **Enforce HTTPS** in Settings → Pages.
5. Keep the old hosting plan active, since it still runs the email.
