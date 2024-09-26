interface Character {
    id: number,
    name: string,
    description: string,
    category: string,
    species: string,
    gender: string,
    personality: string,
    image: string
}

interface Pagination {
    page: number;
    itemsPage: number;
    total: number;
    pages: number;
    skip: number;
    to: number;
    items?: number;
}

interface PaginationResult {
    pagination: {
        page: number,
        itemsPage: number,
        total: number,
        pages: number
    },
    characters: Character[]
}

interface Filters {
    category?: string | null;
    species?: string | null;
    gender?: string | null;
    personality?: string | null;
    description?: string | null;
    page?: string | null;
    items?: string | null;
  }

interface ResultsPattern {
    success?: boolean
    pagination?: number
    data?: PaginationResult
    error?: object
}