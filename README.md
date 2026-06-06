# Messenger Backend

Production-grade messaging platform backend built with **Node.js**, **Express.js**, **TypeScript**, **PostgreSQL**, **TypeORM**, **Socket.IO**, **Redis**, and **BullMQ**.

---

# Project Vision

The goal of this project is to build a scalable, real-time, enterprise-grade messaging system similar to:

* WhatsApp Business
* Slack
* Microsoft Teams
* Intercom
* Zendesk Messaging

This backend is designed using industry-standard architecture and aims to support future growth without major redesigns.

---

# Core Objectives

* Real-time messaging
* Group conversations
* Broadcast messaging
* Role-based access control
* Message attachments
* Search functionality
* Chat preferences
* High scalability
* Clean architecture
* Production readiness

---

# Tech Stack

## Backend

* Node.js
* Express.js
* TypeScript
* PostgreSQL
* TypeORM

## Real-Time Communication

* Socket.IO
* Redis Pub/Sub

## Background Processing

* BullMQ
* Redis

## File Storage

* AWS S3
* MinIO (Local Development)

## Authentication

* JWT Access Token
* JWT Refresh Token
* bcrypt

## Validation

* class-validator
* class-transformer

## Logging

* Winston
* Morgan

---

# High-Level Architecture

Client Application

↓

REST APIs

↓

Express Application

↓

Business Logic Layer

↓

Repositories / TypeORM

↓

PostgreSQL

---

Real-Time Flow

Client A

↓

Socket.IO

↓

Redis Adapter

↓

Socket.IO

↓

Client B

---

Background Jobs

Application

↓

BullMQ Queue

↓

Redis

↓

Workers

---

# Main Modules

## Authentication

Responsibilities:

* User Login
* User Logout
* Token Refresh
* Password Management
* Role Assignment

---

## Users

Responsibilities:

* User Management
* Profile Management
* User Search
* Role Assignment

---

## Conversations

Responsibilities:

* Create Conversation
* Conversation Listing
* Conversation Search
* Conversation Details
* Participant Management

Supported Types:

* Individual
* Group
* Broadcast

---

## Messages

Responsibilities:

* Send Message
* Edit Message
* Delete Message
* Reply Message
* Forward Message
* Search Messages
* Message Status Tracking

---

## Groups

Responsibilities:

* Create Group
* Update Group
* Add Members
* Remove Members
* Group Administration

---

## Broadcasts

Responsibilities:

* Broadcast Creation
* Recipient Selection
* Queue Processing
* Delivery Tracking

---

## Attachments

Responsibilities:

* File Upload
* Media Upload
* Document Sharing
* Audio Sharing
* Link Sharing

Storage:

* AWS S3
* MinIO

---

## Templates

Responsibilities:

* Quick Message Templates
* Dynamic Variables
* Reusable Responses

Example:

Hello {{name}}

Your booking {{bookingNumber}} has been confirmed.

---

# Supported Features

## Messaging

* Individual Messaging
* Group Messaging
* Broadcast Messaging
* Reply Messages
* Forward Messages
* Message Attachments

---

## Conversation Management

* Star Conversation
* Unstar Conversation
* Pin Conversation
* Unpin Conversation
* Mute Conversation
* Unmute Conversation
* Close Conversation
* Block Conversation
* Clear Conversation
* Delete Conversation

---

## Search

* Search Conversations
* Search Messages
* Search Participants

---

## Sharing

* Documents
* Images
* Videos
* Audio
* Camera Uploads
* Links
* Other Files

---

# Database Design Philosophy

The system follows a Conversation-Centric Architecture.

Core Entities:

* User
* Role
* Conversation
* ConversationParticipant
* Message
* MessageAttachment
* UserConversationPreference
* Broadcast
* Template

This approach avoids storing user-specific settings directly in conversations.

Example:

Pinning a conversation is user-specific.

Correct:

UserConversationPreference

Incorrect:

Conversation.isPinned

---

# Core Database Tables

## users

Stores system users.

---

## roles

Stores user roles and permissions.

Examples:

* Super Admin
* Admin
* Moderator
* Member

---

## conversations

Stores all conversation types.

Types:

* INDIVIDUAL
* GROUP
* BROADCAST

---

## conversation_participants

Stores conversation membership.

Examples:

* Group Members
* Group Admins
* Owners

---

## messages

Stores all messages.

Message Types:

* TEXT
* IMAGE
* VIDEO
* DOCUMENT
* AUDIO
* LINK
* TEMPLATE
* SYSTEM

---

## message_attachments

Stores attachment metadata.

Actual files are stored in object storage.

---

## message_status

Tracks:

* SENT
* DELIVERED
* READ

---

## user_conversation_preferences

Stores:

* Pinned
* Starred
* Muted
* Archived
* Closed
* Last Read Information

---

## broadcasts

Stores broadcast campaigns.

---

## broadcast_recipients

Stores broadcast targets.

---

## templates

Stores quick message templates.

---

# Real-Time Events

## Messaging

message:send

message:received

message:updated

message:deleted

---

## Read Receipts

message:delivered

message:read

---

## Typing Indicators

typing:start

typing:stop

---

## Presence

user:online

user:offline

---

## Conversations

conversation:created

conversation:updated

conversation:deleted

---

# File Upload Flow

Client

↓

Upload API

↓

S3 / MinIO

↓

Database Metadata Record

↓

Message Creation

Files are never stored inside PostgreSQL.

---

# Security Standards

* JWT Authentication
* Refresh Tokens
* Password Hashing using bcrypt
* Rate Limiting
* Security Headers using Helmet
* Request Validation
* Input Sanitization
* Secure File Upload Handling

---

# Logging Strategy

Development:

* Morgan

Production:

* Winston

Logs:

* Request Logs
* Error Logs
* Security Logs
* Queue Logs
* Socket Logs

---

# Scalability Strategy

## Database

* UUID Primary Keys
* Indexed Foreign Keys
* Full-Text Search
* Optimized Pagination

## Application

* Modular Architecture
* Service Layer Pattern
* Repository Pattern

## Real-Time

* Socket.IO
* Redis Adapter

## Background Jobs

* BullMQ
* Dedicated Workers

# Development Roadmap

Phase 1

* Project Setup
* PostgreSQL Setup
* TypeORM Setup
* Authentication Module

Phase 2

* Users Module
* Roles Module

Phase 3

* Conversations Module
* Conversation Participants

Phase 4

* Messages Module
* Message Status Tracking

Phase 5

* Socket.IO Integration
* Read Receipts
* Typing Indicators

Phase 6

* File Uploads
* AWS S3 Integration

Phase 7

* Templates

Phase 8

* Broadcast Messaging

Phase 9

* Search Optimization

Phase 10

* Monitoring
* Logging
* Production Deployment

---

# Long-Term Goals

* Multi-Tenant Support
* Voice Messages
* Video Messaging
* Push Notifications
* Message Reactions
* Message Scheduling
* AI-Powered Quick Replies
* Elasticsearch Integration
* Kubernetes Deployment
* Microservice Architecture

---

# Project Status

Current Phase:

Architecture & Foundation Setup

Next Step:

Database Schema Design and TypeORM Entity Creation.
