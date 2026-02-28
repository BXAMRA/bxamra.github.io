---
title: Backend & API - Punjab Educare
---

# Backend & API

Punjab Educare is powered by an **internal** backend API built for the platform’s own applications (Android and desktop tooling).  
It is not intended for public/third‑party integration, and this documentation intentionally avoids sharing implementation details that could enable external usage.

## What the backend supports

- Student experiences: practice flow, quiz participation, and progress-related data surfaces.
- Teacher experiences: onboarding/verification gates, classroom workflows, quiz setup, and question submissions.
- Admin operations (internal): content review/moderation, platform management, and operational tooling.

## Tech Stack

**API Backend (Laravel + Octane)**  
Laravel provides a maintainable foundation, with Laravel Octane used to support higher-throughput API workloads.

**Database (MariaDB) + Cache (Redis)**  
MariaDB stores core platform data, and Redis is used to reduce latency and improve performance through caching.

## Core Capabilities

**Content structure**  
Curriculum-aligned organization across classes, subjects, and topics to support discovery and structured learning flows.

**Question bank + review pipeline**  
Teacher-submitted questions go through a review process by a trusted internal admin team before being published to the main question bank.

**Quizzes & assessment**  
Supports practice attempts and class-based quizzes, including question delivery, attempt submission, and results visibility where appropriate.

**Communication surfaces**  
Supports app-facing updates such as notifications and time-sensitive messages.

**Feedback & support**  
Supports user feedback capture and structured issue handling to keep improving platform quality.
