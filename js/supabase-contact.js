/* Minimal Supabase contact form example
 * 1) Create a Supabase table named contact_messages with columns:
 *    id: uuid (primary key, default gen_random_uuid())
 *    created_at: timestamp with time zone (default now())
 *    name: text
 *    email: text
 *    message: text
 * 2) Enable Row Level Security and add an insert policy for anonymous users that only allows inserting name/email/message.
 * 3) Fill SUPABASE_URL and SUPABASE_ANON_KEY below.
 * SECURITY NOTE: anon key is public, but restrict policies to safe operations only.
 */

const SUPABASE_URL = "https://YOUR_PROJECT_ID.supabase.co"; // <-- replace
const SUPABASE_ANON_KEY = "YOUR_PUBLIC_ANON_KEY"; // <-- replace

async function postMessage(payload) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/contact_messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      "Prefer": "return=representation"
    },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(`Supabase error: ${res.status}`);
  return res.json();
}

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.textContent = "Sending…";
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      await postMessage(data);
      statusEl.textContent = "Thanks! Your message was sent.";
      form.reset();
    } catch (err) {
      console.error(err);
      statusEl.textContent = "Something went wrong. Please try again later.";
    }
  });
}
