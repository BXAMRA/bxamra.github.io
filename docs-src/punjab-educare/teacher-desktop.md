---
title: Teacher Desktop - Punjab Educare
description: Cross-platform desktop app for teachers to contribute questions through a guided, review-based workflow.
---

<div style="display:flex; align-items:center; gap:12px;">
  <h1>Teacher Desktop</h1>
  <a href="https://github.com/BXAMRA/educare-teacher-release/releases/latest" target="_blank">
    <img src="https://img.shields.io/github/v/release/BXAMRA/educare-teacher-release?display_name=tag&style=flat&label=&color=lightgrey" alt="version" />
  </a>
</div>

Teacher Desktop is a dedicated cross-platform application for teachers to contribute questions and support assessment workflows on Punjab Educare.

## Updating from v1.0.0

`v1.0.0` is no longer being supported. Users must uninstall this version.\
You can remove it from `Control Panel > Programs > Uninstall a program`.\
Select 'Punjab Educare Teacher' from the list and select `UNINSTALL` from the top bar.

All subsequent versions include enhancements and built-in automatic update support.

[Update Guide](/punjab-educare/update-from-v1)

## What it enables

- A structured question contribution experience designed for consistency and quality.
- A review-first pipeline where teacher contributions are curated before entering the main question bank.
- A desktop-focused UI for faster entry and management of larger submissions.
- Shared workflows across platforms: [Teacher Registration](/punjab-educare/teacher-registration) and [Question Submissions](/punjab-educare/question-submissions).

## Downloads

<div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap">
  <a href="https://github.com/BXAMRA/educare-teacher-release/releases/latest/download/educare-teacher_windows-x86_64-setup.exe" target="_blank">
    <img src="/images/icons/windows.png" alt="Download for Windows" width="200">
  </a>

  <a href="https://github.com/BXAMRA/educare-teacher-release/releases/latest/download/educare-teacher_darwin-aarch64.dmg" target="_blank">
    <img src="/images/icons/macOS-m1.png" alt="Download for macOS (Apple Silicon)" width="200">
  </a>
</div>

> Always download the latest version from the [official release repository](https://github.com/BXAMRA/educare-teacher-release).

## Installation

### Windows (64‑bit)

1. Download the `setup.exe` installer from the latest release.
2. Run the installer and follow the on-screen instructions.
3. If Windows SmartScreen appears, click **More info → Run anyway** to proceed.

### macOS (Apple Silicon)

1. Download the `.dmg` file from the latest release.
2. Open it and drag the app into your **Applications** folder.
3. On first launch, right-click the app icon and choose **Open** to allow it to run.

## System Requirements

#### Windows

- Windows 10 or later (64-bit)
- 4 GB RAM or more
- Stable internet connection (required)
- 100 MB free disk space

#### MacOS

- Apple Silicon (M1 or newer)
- MacOS 13 (Ventura) or later
- Stable internet connection (required)
- 100 MB free disk space

## Updates

- Teacher Desktop `v1.4.0` or later checks for updates automatically on startup (when Auto Update is enabled).
- If a new version is available, it is downloaded in the background and an Update and Restart button appears in title bar.
- Click it to apply the update.

> As long as **Auto Update** is enabled (default), you only need to install the app once.

## Tech stack

`Tauri` `Vue.js` `Tailwind` `Shadcn-Vue`
