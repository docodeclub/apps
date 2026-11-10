# Our App Page Draft

## Current Publication Status (10 November 2026)

Luke subsequently requested publication. This supersedes earlier local-only
instructions below. The marketing page and support page are prepared for public
release, with the app explicitly coming to iPhone. The privacy route publishes
limited, clearly labelled pre-release privacy information, not a completed or
approved full app privacy notice. Internal review markers have been removed
from visitor pages. The full notice's effective date remains unset.

The latest Plan Our App handoff confirms both Pro subscriptions and Resend's
signed DPA in its account Documents tab. Account-specific transfer details are
still incomplete. Staging checks were blocked before execution (no separate
staging project and a failed local database initialisation); they did not pass.
No recovery, backup erasure or proposed retention guarantees are published.
The prior evidence and decision history below remains for follow-up; it does
not imply app release readiness. No app/infrastructure changes are part of this
website publication.

Open `index.html` directly to preview. This draft reuses the site's FrameScore
product-page conventions and the supplied Our App icon and wordmark.
It is local-only, unlinked from the portfolio, and marked noindex pending content.

## Content Needed

- Minimum supported iOS version (first release is planned for iPhone).
- Release status, App Store URL when available, and pricing/subscription details.
- Confirmation of inbox monitoring and who handles privacy requests.
- App data practices: data collected, local/cloud storage, accounts, third parties,
  analytics, purchases, retention and deletion, to prepare the app privacy policy.

## Completing the Page

Product copy, Free/Pro distinctions, roadmap and FAQs are populated from the
supplied app brief. Today and Care screenshots are copied into local assets,
shown without cropping, and link to their original resolution.
The interest link opens an email; it does not automatically subscribe visitors.
Confirm a mailing-list process before replacing it with a signup form.
Support and privacy drafts from the supplied Store Prep pack are available at
`support/index.html` and `privacy/index.html`, adapted to shared site styling.
Review markers from the supplied drafts remain visible; both pages are noindex.
Confirm the monitored contact, effective date, lawful bases and health-data
condition, children's data process, provider locations/transfer safeguards and
retention/backup handling before publishing. Website Privacy is separate.
Then add canonical/social metadata, the homepage app card and sitemap entry,
remove noindex, and publish through the existing GitHub Pages workflow.

## Plan Our App Handoff (10 November 2026)

The planning conversation confirmed the published contact support@docode.co.uk,
seven-day invitation-code expiry, a London Supabase project region, Resend account
emails, implemented export/account deletion/family closure controls, and no
advertising, analytics or session-replay SDKs in the reviewed iOS source.
Support and privacy pages now incorporate these details.

Care implements per-child opt-in and separate adult access grants. Withdrawal
revokes access and deletes live Care records; other devices update on next sync.
The Care migration still needs staging verification. Export and account deletion
also require end-to-end verification before release claims are approved.

No lawful bases have been approved. Article 6(1)(a) consent and Article 9(2)(a)
explicit consent for optional Care are proposals in the handoff, not approved
policy. They are not presented as settled legal bases on the privacy page.
Parental authority, competent children, disputes and outside-app rights requests
still need an approved process. Provider locations and transfer safeguards beyond
the configured London region, retention periods and backup handling are open.
The effective date is to be set on approval, not inferred from this handoff date.
Published contact information does not independently establish inbox monitoring.

## Follow-up Evidence (10 November 2026)

Plan Our App reports dashboard verification of the London primary database,
four daily physical backups dated 7-10 November (latest 00:19 UTC on 10 November),
point-in-time recovery off, and no configured Log Drains destination. Resend's
mail.docode.app sending domain is verified and sends from Ireland (eu-west-1).
Resend's public GDPR documentation independently confirms US customer-data
storage and primary processing, regardless of sending region:
https://resend.com/security/gdpr/

Supabase Pro is recorded in the 7 November handover; published seven-day backup
and API/database-log terms are plan documentation, not verification that every
copy expires on that schedule. Do not present them as an app retention promise.
Accepted provider agreements, applicable transfers/subprocessors/remote access,
current subscription, separate copies and actual backup expiry remain open.

Recovery is a release gap: the recovery marker is inside the database and can
roll back during restore. A surviving deletion/revocation record, recovery
runbook and staging restore drill are still needed. Daily backups do not meet
the documented one-hour Care recovery-point target. No recovery guarantee is
published. This website task has not run tests or changed app infrastructure.

The handoff reports an earlier hosted SQL pass on 7 November and 13 local core
tests passing on 10 November. These do not establish a staging pass for the
newer Care consent/withdrawal suite or end-to-end export/account deletion.
Required release evidence: dated tests for consent/withdrawal plus a second
device reconnecting, permission-filtered exports, and account deletion for sole
admins and ordinary members. Proposed lawful bases and retention choices remain
unapproved. The privacy page keeps those review markers and remains local-only.

## Publication Handoff Follow-up (10 November 2026)

Plan Our App confirmed the Resend workspace showed Pro. Resend publishes 30-day
email/log retention for active Pro accounts, independently checked at
https://resend.com/security. The privacy draft now attributes this period to
Resend, without extending it to family data, support correspondence or copies.
No newer consent, withdrawal, export, account deletion or restore pass was found.

Decisions requested from Luke, not approved:
- Name a privacy/support inbox owner, a backup and a recovery owner.
- Assess and document lawful bases by purpose (contract necessity for requested
  adult services, legitimate interests with balancing for relevant other uses,
  identified legal duties, and consent/explicit consent for optional Care).
- Decide parental-authority checks, competent-child/dispute handling, access
  pauses and an identity-checked outside-app rights/withdrawal process.
- Consider unused-invitation retention of 30 days after expiry/revocation and
  routine support retention of 90 days after closure, with justified exceptions.
  Decide shared-data and consent-evidence retention too. Verify purge mechanisms
  before promising any proposed period.
- Select and document applicable transfer mechanisms after obtaining accepted
  agreement versions and relevant provider processing evidence.

Effective date remains for publication sign-off. Policy approval cannot replace
the outstanding staging tests, restore work or account-specific evidence.

## Luke's Decisions (10 November 2026)

This record supersedes the earlier requests for decisions above.

- Luke Currie is the primary privacy-request and recovery owner at Docode Limited.
  Requests use support@docode.co.uk. Backup owner remains unassigned until Luke
  names someone and confirms their access. Do not imply a backup is in place.
- Proposed schedule: unused invitation records, 30 days after expiry/revocation;
  routine support cases, 90 days after closure. Verify actual deletion before
  adding either period to the public notice. Exceptions need a documented reason
  and review date. These periods are not yet implemented/verified promises.
- Route parental-authority checks, disputes, competent-child requests and
  outside-app withdrawal to Luke via the support address. Proposed process:
  verify identity and authority before disclosure/action; pause disputed access
  during review. Ask for no children's health details in the initial email.
- Proceed with proposed lawful bases for assessment only. Final approval awaits
  documented purpose-by-purpose assessment, legitimate interests balancing and
  a separate Care consent review. Do not infer approval from these instructions.
- Keep the privacy notice unpublished until provider agreement and transfer
  evidence is confirmed and Care, export, account deletion and restore checks
  are recorded. Set the effective date at sign-off, not at this decision date.

Website edits only: the local pages reflect responsibility and request routing.
No deletion jobs, access pauses, recovery controls or app tests were implemented
or run by this task. All Our App routes remain local, noindex and unpublished.
