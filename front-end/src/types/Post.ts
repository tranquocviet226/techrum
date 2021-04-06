

interface Post {
    id: number,
    title: string,
    content: string,
    description: string,
    sort_description: string,
    background_url: string,
    redirect_to_url: string,
    categories: Category[],
    author: Auth,
    date: string,
    views: number
}

interface Category {
    id: number,
    title: string,
    color: string
}


interface Auth {
    id: number,
    name: string,
    url: string
}

export type { Post, Category, Auth }