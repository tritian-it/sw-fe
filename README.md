# spinwise-fe

User management table built with Next.js, React, and TanStack Table.

## Features

- **Data Table**: Filterable, sortable table with pagination for efficient user data management
- **Server-Side Operations**: All filtering, sorting, and pagination handled server-side
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI**: Clean interface using Shadcn UI components
- **Type Safety**: Fully typed with TypeScript

## Setup

```bash
# install dependencies
$ npm i

# development
$ npm run dev
```

Project is generated using `npx shadcn@latest init`

## Architecture

The application follows a clean separation of concerns:
- **Page Components**: Handle data fetching and state management
- **UI Components**: Focus on presentation and user interaction

## Tech Stack

- **Framework**: Next.js
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI
- **Table**: TanStack Table v8
- **Icons**: Lucide React

## API Integration

The application connects to a RESTful API endpoint for user data. The API supports:

- Pagination (page, limit)
- Sorting (sortBy, sortOrder)
- Text search (search - covering name, surname, and email)

## Project Structure

```
├── components/
│   └── users-data-table/
│       ├── columns.tsx        # Table column definitions
│       ├── data-table.tsx     # Table component (presentation)
│       ├── search-input.tsx   # Search input component
│       ├── sort-button.tsx    # Search input component
│       └── table-message.tsx  # Table status messages
├── interfaces/
│   └── user.ts                # User type definitions
└── app/
    └── page.tsx               # Main page (data fetching)
```

## Comments

- Kept it simple and as close as possible to the provided example [DataTable - shadcn/ui](https://ui.shadcn.com/docs/components/data-table)
- Runs with server-side provided pagination, sort and search (name, surname and email)
- Column visibility trigger is included
- Decoupled some components