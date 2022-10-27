

export interface ImageLinks {
    smallThumbnail: string
    thumbnail: string
}


export interface VolumeInfo {
    title: string
    authors: Array<string>
    description: string
    imageLinks: ImageLinks
    publishedDate: string
    subtitle: string
}


export interface Book {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
}


export interface GetListResults {
    kind: string
    items: Array<Book>
    totalItems: number
}

export interface GetListParameters {
    search: string
    page?: number
}
